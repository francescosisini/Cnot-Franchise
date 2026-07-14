/* CNOT Atlas Bridge
 * Bridge leggero tra storie HTML e GIS qgis2web/Leaflet/OpenLayers.
 *
 * Principio:
 * - non ricostruisce la mappa;
 * - non carica GeoJSON esterni;
 * - usa solo layer/feature già caricati dal GIS;
 * - per eu_membership_timeline cambia solo visibilità/stile delle feature.
 */
(function () {
  "use strict";

  const NS = "CNOTAtlasBridge";
  const MEMBERSHIP_PREFIX = "eu_membership_";
  const ORIGINAL_STYLE = new WeakMap();

  const state = {
    debug: false,
    map: null,
    mapWindow: null,
    mapType: null,
    entries: [],
    refreshedAt: 0,
    lastDiagnostics: null
  };

  function safe(fn, fallback) {
    try { return fn(); } catch (_) { return fallback; }
  }

  function log() {
    if (!state.debug) return;
    try { console.log.apply(console, ["[" + NS + "]"].concat(Array.from(arguments))); } catch (_) {}
  }

  function normalizeString(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function keyLooksEuMembership(key) {
    return /eu.*membership.*timeline|membership.*timeline|eu_membership/i.test(String(key || ""));
  }

  function isLeafletMap(obj) {
    return !!(obj && obj._layers && typeof obj.addLayer === "function" && typeof obj.removeLayer === "function");
  }

  function isOpenLayersMap(obj) {
    return !!(obj && typeof obj.getView === "function" && typeof obj.getLayers === "function");
  }

  function addWindow(w, out, seen) {
    if (!w || seen.has(w)) return;
    seen.add(w);
    out.push(w);

    safe(function () {
      const doc = w.document;
      if (!doc) return;
      const gis = doc.getElementById && doc.getElementById("gisFrame");
      if (gis && gis.contentWindow) addWindow(gis.contentWindow, out, seen);
      const story = doc.getElementById && doc.getElementById("storyFrame");
      if (story && story.contentWindow) addWindow(story.contentWindow, out, seen);
      const iframes = doc.querySelectorAll ? doc.querySelectorAll("iframe") : [];
      Array.prototype.forEach.call(iframes, function (iframe) {
        if (iframe.contentWindow) addWindow(iframe.contentWindow, out, seen);
      });
    });

    safe(function () {
      for (let i = 0; i < w.frames.length; i += 1) addWindow(w.frames[i], out, seen);
    });
    safe(function () { if (w.parent && w.parent !== w) addWindow(w.parent, out, seen); });
    safe(function () { if (w.top && w.top !== w) addWindow(w.top, out, seen); });
  }

  function collectWindows() {
    const out = [];
    const seen = new Set();
    addWindow(window, out, seen);
    return out;
  }

  function findMap() {
    const wins = collectWindows();

    // Prima scelta: la mappa dichiarata come window.map dentro map/index.html.
    for (const w of wins) {
      const direct = safe(function () { return w.map; }, null);
      if (isLeafletMap(direct)) return { map: direct, win: w, type: "leaflet" };
      if (isOpenLayersMap(direct)) return { map: direct, win: w, type: "openlayers" };
    }

    // Fallback: scansione leggera dei globali.
    for (const w of wins) {
      const keys = safe(function () { return Object.keys(w); }, []);
      for (const key of keys) {
        const obj = safe(function () { return w[key]; }, null);
        if (isLeafletMap(obj)) return { map: obj, win: w, type: "leaflet" };
        if (isOpenLayersMap(obj)) return { map: obj, win: w, type: "openlayers" };
      }
    }

    return { map: null, win: null, type: null };
  }

  function featurePropsFromOlFeature(feature) {
    if (!feature || typeof feature.getProperties !== "function") return null;
    const props = Object.assign({}, feature.getProperties());
    delete props.geometry;
    return props;
  }

  function isMembershipProps(props) {
    if (!props) return false;
    const id = String(props.id || "");
    if (id.indexOf(MEMBERSHIP_PREFIX) === 0) return true;

    return !!(
      props.country_it &&
      props.entry_date &&
      props.iso3 &&
      props.accession_wave !== undefined
    );
  }

  function layerKey(props) {
    if (props.id) return "id:" + props.id;
    if (props.iso3) return "iso3:" + props.iso3;
    if (props.country_it) return "country:" + normalizeString(props.country_it);
    return JSON.stringify(props || {});
  }

  function rememberOriginalStyle(entry) {
    const target = entry && entry.target;
    if (!target || ORIGINAL_STYLE.has(target)) return;

    if (entry.type === "leaflet") {
      const opts = target.options || {};
      const keys = [
        "stroke", "color", "weight", "opacity", "lineCap", "lineJoin",
        "dashArray", "dashOffset", "fill", "fillColor", "fillOpacity",
        "fillRule", "className", "interactive"
      ];
      const copy = {};
      keys.forEach(function (k) {
        if (Object.prototype.hasOwnProperty.call(opts, k)) copy[k] = opts[k];
      });
      ORIGINAL_STYLE.set(target, copy);
      return;
    }

    if (entry.type === "openlayers") {
      ORIGINAL_STYLE.set(target, safe(function () { return target.getStyle(); }, undefined));
    }
  }

  function restoreStyle(entry) {
    if (!entry) return;
    const target = entry.target;

    if (entry.type === "leaflet") {
      if (!target || typeof target.setStyle !== "function") return;
      const original = ORIGINAL_STYLE.get(target) || {};
      const restored = Object.assign({}, original);
      if (restored.opacity === undefined) restored.opacity = 1;
      if (restored.fillOpacity === undefined) restored.fillOpacity = 0.55;
      if (restored.interactive === undefined) restored.interactive = true;
      target.setStyle(restored);
      safe(function () { if (target.bringToFront) target.bringToFront(); });
      markTargetChanged(entry);
      return;
    }

    if (entry.type === "openlayers") {
      if (!target || typeof target.setStyle !== "function") return;
      const original = ORIGINAL_STYLE.get(target);
      target.setStyle(original === undefined ? undefined : original);
      markTargetChanged(entry);
    }
  }

  function markTargetChanged(entry) {
    if (!entry) return;
    const target = entry.target;
    const layer = entry.layer || entry.parent;

    safe(function () {
      if (target && typeof target.changed === "function") target.changed();
    });

    safe(function () {
      if (layer && typeof layer.changed === "function") layer.changed();
    });

    safe(function () {
      const source = layer && typeof layer.getSource === "function" ? layer.getSource() : null;
      if (source && typeof source.changed === "function") source.changed();
    });

    safe(function () {
      if (entry.type === "leaflet" && target && typeof target.redraw === "function") target.redraw();
    });
  }

  function forceMapRedraw(reason) {
    const map = state.map;
    if (!map) return;

    const run = function () {
      safe(function () {
        if (state.mapType === "openlayers") {
          const touchedLayers = new Set();

          (state.entries || []).forEach(function (entry) {
            if (!entry || !entry.layer || touchedLayers.has(entry.layer)) return;
            touchedLayers.add(entry.layer);

            const source = entry.layer.getSource && entry.layer.getSource();
            if (source && typeof source.changed === "function") source.changed();
            if (typeof entry.layer.changed === "function") entry.layer.changed();
          });

          if (typeof map.updateSize === "function") map.updateSize();
          if (typeof map.renderSync === "function") map.renderSync();
          else if (typeof map.render === "function") map.render();
          return;
        }

        if (state.mapType === "leaflet") {
          (state.entries || []).forEach(function (entry) {
            const target = entry && entry.target;
            if (target && typeof target.redraw === "function") target.redraw();
          });
          if (typeof map.invalidateSize === "function") map.invalidateSize(false);
        }
      });
    };

    run();
    setTimeout(run, 40);
    setTimeout(run, 140);
    log("Forced map redraw:", reason || "command");
  }

  function makeOlInvisibleStyle(win) {
    const ol = win && win.ol;
    if (!ol || !ol.style || !ol.style.Style) return null;
    const fill = ol.style.Fill ? new ol.style.Fill({ color: "rgba(0,0,0,0)" }) : undefined;
    const stroke = ol.style.Stroke ? new ol.style.Stroke({ color: "rgba(0,0,0,0)", width: 0 }) : undefined;
    return new ol.style.Style({ fill: fill, stroke: stroke });
  }

  function hideStyle(entry) {
    if (!entry) return;
    const target = entry.target;

    if (entry.type === "leaflet") {
      if (!target || typeof target.setStyle !== "function") return;
      target.setStyle({ opacity: 0, fillOpacity: 0, interactive: false });
      markTargetChanged(entry);
      return;
    }

    if (entry.type === "openlayers") {
      if (!target || typeof target.setStyle !== "function") return;
      const invisible = makeOlInvisibleStyle(entry.win || state.mapWindow);
      if (invisible) target.setStyle(invisible);
      else target.setStyle(function () { return null; });
      markTargetChanged(entry);
    }
  }

  function flattenOlLayers(collection, output) {
    if (!collection) return output;
    const layers = typeof collection.getArray === "function" ? collection.getArray() : [];
    layers.forEach(function (layer) {
      output.push(layer);
      safe(function () {
        if (layer && typeof layer.getLayers === "function") flattenOlLayers(layer.getLayers(), output);
      });
    });
    return output;
  }

  function getOlLayerName(layer, fallbackKey) {
    const names = [fallbackKey];
    safe(function () {
      if (layer && typeof layer.get === "function") {
        names.push(layer.get("title"));
        names.push(layer.get("name"));
        names.push(layer.get("layerName"));
        names.push(layer.get("id"));
      }
    });
    safe(function () {
      if (layer && typeof layer.getProperties === "function") {
        const p = layer.getProperties();
        names.push(p.title, p.name, p.layerName, p.id);
      }
    });
    return names.filter(Boolean).map(String).join(" / ");
  }

  function collectRawMembershipGeojsons(mapWindow) {
    const out = [];
    const keys = safe(function () { return Object.keys(mapWindow || window); }, []);
    keys.forEach(function (key) {
      if (!/^json_/i.test(key) && !keyLooksEuMembership(key)) return;
      const obj = safe(function () { return mapWindow[key]; }, null);
      const features = obj && Array.isArray(obj.features) ? obj.features : [];
      const membershipFeatures = features.filter(function (f) { return isMembershipProps(f && f.properties); });
      if (membershipFeatures.length || keyLooksEuMembership(key)) {
        out.push({ key: key, json: obj, features: features });
      }
    });
    return out;
  }

  function collectOpenLayersEntries(map, mapWindow) {
    const byKey = new Map();
    const layerRecords = [];
    const seenLayers = new Set();

    if (map && typeof map.getLayers === "function") {
      flattenOlLayers(map.getLayers(), []).forEach(function (layer) {
        if (!layer || seenLayers.has(layer)) return;
        seenLayers.add(layer);
        layerRecords.push({ key: getOlLayerName(layer, ""), layer: layer });
      });
    }

    safe(function () {
      Object.keys(mapWindow || window).forEach(function (key) {
        if (!/^lyr_/i.test(key)) return;
        const layer = mapWindow[key];
        if (!layer || typeof layer.getSource !== "function") return;
        if (seenLayers.has(layer)) {
          const existing = layerRecords.find(function (r) { return r.layer === layer; });
          if (existing && !existing.key) existing.key = key;
          return;
        }
        seenLayers.add(layer);
        layerRecords.push({ key: key, layer: layer });
      });
    });

    const rawJsons = collectRawMembershipGeojsons(mapWindow);
    const preferredRaw = rawJsons.find(function (r) { return keyLooksEuMembership(r.key); }) || rawJsons[0] || null;
    const preferredRawFeatures = preferredRaw ? preferredRaw.features : [];

    let inspectedLayers = 0;
    let inspectedFeatures = 0;

    layerRecords.forEach(function (record) {
      const layer = record.layer;
      const source = safe(function () { return layer && layer.getSource && layer.getSource(); }, null);
      const features = safe(function () {
        if (source && typeof source.getFeatures === "function") return source.getFeatures();
        return [];
      }, []);

      if (!features || !features.length) return;
      inspectedLayers += 1;
      inspectedFeatures += features.length;

      const layerLooksRight = keyLooksEuMembership(record.key);
      const featurePropsList = features.map(featurePropsFromOlFeature);
      const hasMembershipProps = featurePropsList.some(isMembershipProps);
      const canPairWithRaw = layerLooksRight && preferredRawFeatures.length === features.length;

      if (!layerLooksRight && !hasMembershipProps && !canPairWithRaw) return;

      features.forEach(function (feature, index) {
        const directProps = featurePropsList[index];
        const rawProps = preferredRawFeatures[index] && preferredRawFeatures[index].properties;
        const props = isMembershipProps(directProps) ? directProps : rawProps;
        if (!isMembershipProps(props)) return;

        const key = layerKey(props);
        if (byKey.has(key)) return;

        const entry = {
          type: "openlayers",
          target: feature,
          feature: feature,
          layer: layer,
          parent: layer,
          props: props,
          key: key,
          win: mapWindow,
          layerKey: record.key
        };
        rememberOriginalStyle(entry);
        byKey.set(key, entry);
      });
    });

    state.lastDiagnostics = {
      mapType: "openlayers",
      rawJsons: rawJsons.map(function (r) { return { key: r.key, features: r.features.length }; }),
      layers: layerRecords.map(function (r) {
        return {
          key: r.key,
          featureCount: safe(function () {
            const src = r.layer && r.layer.getSource && r.layer.getSource();
            return src && src.getFeatures ? src.getFeatures().length : 0;
          }, 0)
        };
      }),
      inspectedLayers: inspectedLayers,
      inspectedFeatures: inspectedFeatures,
      entries: byKey.size
    };

    return Array.from(byKey.values());
  }

  function walkLeafletLayerTree(layer, parent, visitor, seen) {
    if (!layer || seen.has(layer)) return;
    seen.add(layer);
    visitor(layer, parent);
    const children = layer._layers;
    if (!children) return;
    Object.keys(children).forEach(function (key) {
      walkLeafletLayerTree(children[key], layer, visitor, seen);
    });
  }

  function collectLeafletEntries(map, mapWindow) {
    const byKey = new Map();
    const sources = [map];

    safe(function () {
      Object.keys(mapWindow || window).forEach(function (key) {
        if (!/^lyr_/i.test(key)) return;
        const obj = mapWindow[key];
        if (obj && obj._layers && sources.indexOf(obj) < 0) sources.push(obj);
      });
    });

    sources.forEach(function (source) {
      walkLeafletLayerTree(source, null, function (layer, parent) {
        const props = layer && layer.feature && layer.feature.properties;
        if (!isMembershipProps(props)) return;
        const key = layerKey(props);
        if (byKey.has(key)) return;
        const entry = {
          type: "leaflet",
          target: layer,
          layer: layer,
          parent: parent,
          props: props,
          key: key,
          win: mapWindow
        };
        rememberOriginalStyle(entry);
        byKey.set(key, entry);
      }, new Set());
    });

    state.lastDiagnostics = { mapType: "leaflet", entries: byKey.size };
    return Array.from(byKey.values());
  }

  function refresh() {
    const found = findMap();
    state.map = found.map;
    state.mapWindow = found.win;
    state.mapType = found.type;

    if (!state.map) {
      state.entries = [];
      state.lastDiagnostics = { error: "map_not_found" };
      log("Map not found.");
      return state.entries;
    }

    if (state.mapType === "openlayers") {
      state.entries = collectOpenLayersEntries(state.map, state.mapWindow);
    } else if (state.mapType === "leaflet") {
      state.entries = collectLeafletEntries(state.map, state.mapWindow);
    } else {
      state.entries = [];
      state.lastDiagnostics = { error: "unsupported_map", mapType: state.mapType };
    }

    state.refreshedAt = Date.now();
    log("Indexed membership features:", state.entries.length, "mapType:", state.mapType, state.lastDiagnostics);
    return state.entries;
  }

  function entries() {
    if (!state.entries.length || Date.now() - state.refreshedAt > 1500) refresh();
    return state.entries;
  }

  function ensureVisibleContainer(entry) {
    if (!state.map) refresh();
    if (!state.map || !entry) return;

    if (entry.type === "leaflet") {
      const parent = entry.parent;
      if (parent && parent !== state.map && typeof parent.addTo === "function") {
        safe(function () { if (!state.map.hasLayer(parent)) parent.addTo(state.map); });
        return;
      }
      const layer = entry.layer;
      if (layer && typeof layer.addTo === "function") {
        safe(function () { if (!state.map.hasLayer(layer)) layer.addTo(state.map); });
      }
      return;
    }

    if (entry.type === "openlayers") {
      safe(function () {
        if (entry.layer && typeof entry.layer.setVisible === "function") entry.layer.setVisible(true);
      });
    }
  }

  function fitEntries(matches) {
    if (!state.map || !matches || !matches.length) return;

    if (state.mapType === "leaflet") {
      let bounds = null;
      matches.forEach(function (entry) {
        const layer = entry.layer;
        const b = safe(function () {
          if (layer.getBounds) return layer.getBounds();
          if (layer.getLatLng && state.mapWindow && state.mapWindow.L) {
            const ll = layer.getLatLng();
            return state.mapWindow.L.latLngBounds([ll, ll]);
          }
          return null;
        }, null);
        if (!b || !b.isValid || !b.isValid()) return;
        if (!bounds) bounds = b;
        else bounds.extend(b);
      });
      if (bounds && bounds.isValid && bounds.isValid()) {
        safe(function () { state.map.fitBounds(bounds.pad(0.12), { animate: true, maxZoom: 6 }); });
      }
      return;
    }

    if (state.mapType === "openlayers") {
      const ol = state.mapWindow && state.mapWindow.ol;
      let extent = null;
      matches.forEach(function (entry) {
        const e = safe(function () {
          const geometry = entry.feature && entry.feature.getGeometry && entry.feature.getGeometry();
          return geometry && geometry.getExtent ? geometry.getExtent() : null;
        }, null);
        if (!e) return;
        if (!extent) extent = e.slice();
        else if (ol && ol.extent && typeof ol.extent.extend === "function") ol.extent.extend(extent, e);
        else {
          extent[0] = Math.min(extent[0], e[0]);
          extent[1] = Math.min(extent[1], e[1]);
          extent[2] = Math.max(extent[2], e[2]);
          extent[3] = Math.max(extent[3], e[3]);
        }
      });
      if (extent && state.map.getView) {
        safe(function () {
          state.map.getView().fit(extent, {
            padding: [40, 40, 40, 40],
            duration: 650,
            maxZoom: 6
          });
        });
      }
    }
  }

  function hideAllMembership() {
    const list = entries();
    list.forEach(function (entry) {
      ensureVisibleContainer(entry);
      hideStyle(entry);
    });
    forceMapRedraw("hideAllMembership");
    return { ok: true, count: list.length, mapType: state.mapType };
  }

  function showMatches(predicate, options) {
    options = Object.assign({ fit: false, hideOthers: true }, options || {});
    const list = entries();

    if (options.hideOthers) {
      list.forEach(function (entry) {
        ensureVisibleContainer(entry);
        hideStyle(entry);
      });
    }

    const matches = list.filter(function (entry) {
      return safe(function () { return !!predicate(entry.props, entry); }, false);
    });

    matches.forEach(function (entry) {
      ensureVisibleContainer(entry);
      restoreStyle(entry);
    });

    if (options.fit) fitEntries(matches);
    forceMapRedraw("showMatches");

    return {
      ok: true,
      matched: matches.length,
      total: list.length,
      ids: matches.map(function (entry) { return entry.props.id; }).filter(Boolean),
      mapType: state.mapType
    };
  }

  function currentPredicate(p) {
    return p.is_current_member === true ||
      String(p.is_current_member).toLowerCase() === "true" ||
      p.membership_status === "current_member";
  }

  function showMembershipIds(args) {
    const ids = new Set((args.ids || []).map(String));
    return showMatches(function (p) { return ids.has(String(p.id)); }, args);
  }

  function showMembershipIso3(args) {
    const iso3 = new Set((args.iso3 || []).map(function (x) { return String(x).toUpperCase(); }));
    return showMatches(function (p) { return iso3.has(String(p.iso3 || "").toUpperCase()); }, args);
  }

  function showMembershipWave(args) {
    const wave = Number(args.wave);
    return showMatches(function (p) { return Number(p.accession_wave) === wave; }, args);
  }

  function showMembershipUpToWave(args) {
    const wave = Number(args.wave);
    const includeFormer = args.includeFormer !== false;
    return showMatches(function (p) {
      const joined = Number(p.accession_wave) <= wave;
      if (!joined) return false;
      if (includeFormer) return true;
      return currentPredicate(p);
    }, args);
  }

  function showCurrentMembership(args) {
    return showMatches(currentPredicate, args);
  }

  function showFormerMembers(args) {
    return showMatches(function (p) { return !currentPredicate(p); }, args);
  }

  function showAllMembership(args) {
    return showMatches(function () { return true; }, args);
  }

  function clearMembership() {
    const list = entries();
    list.forEach(function (entry) {
      ensureVisibleContainer(entry);
      restoreStyle(entry);
    });
    forceMapRedraw("clearMembership");
    return { ok: true, count: list.length, mapType: state.mapType };
  }

  let pendingRetryTimer = null;
  let pendingRetrySerial = 0;

  function scheduleRetryIfLayerNotReady(action, args) {
    if (action === "refresh") return;
    if (state.entries && state.entries.length > 0) return;

    pendingRetrySerial += 1;
    const serial = pendingRetrySerial;
    const safeArgs = Object.assign({}, args || {});

    if (pendingRetryTimer) clearTimeout(pendingRetryTimer);

    pendingRetryTimer = setTimeout(function retryCommand() {
      if (serial !== pendingRetrySerial) return;
      refresh();
      if (state.entries && state.entries.length > 0) {
        pendingRetryTimer = null;
        execute(action, safeArgs);
      }
    }, 350);
  }

  function execute(action, args) {
    args = args || {};
    refresh();

    if (state.entries.length === 0 && action !== "refresh") {
      scheduleRetryIfLayerNotReady(action, args);
    }

    switch (action) {
      case "refresh":
        return { ok: true, count: state.entries.length, mapType: state.mapType, diagnostics: state.lastDiagnostics };
      case "hideAllMembership":
        return hideAllMembership(args);
      case "clearMembership":
      case "restoreMembership":
        return clearMembership(args);
      case "showMembershipIds":
        return showMembershipIds(args);
      case "showMembershipIso3":
        return showMembershipIso3(args);
      case "showMembershipWave":
        return showMembershipWave(args);
      case "showMembershipUpToWave":
        return showMembershipUpToWave(args);
      case "showCurrentMembership":
        return showCurrentMembership(args);
      case "showFormerMembers":
        return showFormerMembers(args);
      case "showAllMembership":
        return showAllMembership(args);
      default:
        console.warn("[" + NS + "] Unknown action:", action, args);
        return { ok: false, error: "Unknown action: " + action };
    }
  }

  function handleDomCommand(event) {
    const target = event.target && event.target.closest
      ? event.target.closest("[data-cnot-action]")
      : null;
    if (!target) return;

    const action = target.getAttribute("data-cnot-action");
    let args = {};
    const raw = target.getAttribute("data-cnot-args");
    if (raw) {
      try { args = JSON.parse(raw); }
      catch (_) { console.warn("[" + NS + "] Invalid JSON in data-cnot-args:", raw); }
    }

    const result = execute(action, args);
    if (target.classList) {
      document.querySelectorAll("[data-cnot-action].is-active").forEach(function (el) { el.classList.remove("is-active"); });
      target.classList.add("is-active");
    }
    log("DOM command", action, args, result);
  }

  function handleMessage(event) {
    const msg = event.data;
    if (!msg || msg.type !== "CNOT_GIS_COMMAND") return;
    const result = execute(msg.action, msg.args || {});
    log("Message command", msg.action, msg.args, result);
  }

  const api = {
    version: "1.2.2",
    refresh: refresh,
    execute: execute,
    hideAllMembership: hideAllMembership,
    clearMembership: clearMembership,
    showMembershipIds: function (ids, opts) { return showMembershipIds(Object.assign({}, opts || {}, { ids: ids })); },
    showMembershipIso3: function (iso3, opts) { return showMembershipIso3(Object.assign({}, opts || {}, { iso3: iso3 })); },
    showMembershipWave: function (wave, opts) { return showMembershipWave(Object.assign({}, opts || {}, { wave: wave })); },
    showMembershipUpToWave: function (wave, opts) { return showMembershipUpToWave(Object.assign({}, opts || {}, { wave: wave })); },
    showCurrentMembership: function (opts) { return showCurrentMembership(opts || {}); },
    showAllMembership: function (opts) { return showAllMembership(opts || {}); },
    debug: function (value) { state.debug = value !== false; return state.debug; },
    diagnostics: function () { refresh(); return state.lastDiagnostics; },
    state: state
  };

  window[NS] = api;

  if (document && document.addEventListener) document.addEventListener("click", handleDomCommand, true);
  if (window && window.addEventListener) window.addEventListener("message", handleMessage, false);

  safe(function () { setTimeout(refresh, 250); });
})();
