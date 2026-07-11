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
    lastDiagnostics: null,
    savedStates: {}
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


  // ---------------------------------------------------------------------------
  // Public GIS API (generic layer/feature commands)
  // ---------------------------------------------------------------------------

  function simpleLayerName(value) {
    let s = normalizeString(value);
    s = s.replace(/^lyr_/, "").replace(/^json_/, "");
    s = s.replace(/_\d+$/, "");
    s = s.replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    return s;
  }

  function layerCandidateNames(record) {
    const names = [];
    if (!record) return names;
    names.push(record.key, record.title, record.name, record.id, record.label);
    safe(function () {
      const layer = record.layer;
      if (layer && typeof layer.get === "function") {
        names.push(layer.get("title"), layer.get("name"), layer.get("layerName"), layer.get("id"));
      }
    });
    safe(function () {
      const layer = record.layer;
      if (layer && typeof layer.getProperties === "function") {
        const p = layer.getProperties();
        names.push(p.title, p.name, p.layerName, p.id);
      }
    });
    return names.filter(Boolean).map(String);
  }

  function layerMatchesName(record, requestedName) {
    const wanted = simpleLayerName(requestedName);
    if (!wanted) return false;
    return layerCandidateNames(record).some(function (candidate) {
      const c = simpleLayerName(candidate);
      return c === wanted || c.indexOf(wanted) >= 0 || wanted.indexOf(c) >= 0;
    });
  }

  function layerVisible(record) {
    if (!record || !state.map) return false;
    if (record.type === "openlayers") {
      return safe(function () {
        return record.layer && typeof record.layer.getVisible === "function" ? record.layer.getVisible() : true;
      }, true);
    }
    if (record.type === "leaflet") {
      return safe(function () { return state.map.hasLayer(record.layer); }, false);
    }
    return false;
  }

  function setLayerVisible(record, visible) {
    if (!record || !state.map) return;
    if (record.type === "openlayers") {
      safe(function () {
        if (record.layer && typeof record.layer.setVisible === "function") record.layer.setVisible(!!visible);
      });
      safe(function () {
        if (record.layer && typeof record.layer.changed === "function") record.layer.changed();
      });
      return;
    }
    if (record.type === "leaflet") {
      safe(function () {
        if (visible) {
          if (record.layer && typeof record.layer.addTo === "function" && !state.map.hasLayer(record.layer)) record.layer.addTo(state.map);
        } else if (record.layer && state.map.hasLayer(record.layer)) {
          state.map.removeLayer(record.layer);
        }
      });
    }
  }

  function listLayerContainers() {
    if (!state.map) refresh();
    const out = [];
    const seen = new Set();

    if (state.mapType === "openlayers") {
      flattenOlLayers(state.map && state.map.getLayers && state.map.getLayers(), []).forEach(function (layer) {
        if (!layer || seen.has(layer)) return;
        seen.add(layer);
        const key = getOlLayerName(layer, "");
        out.push({ type: "openlayers", key: key, title: key, layer: layer, visible: layerVisible({ type: "openlayers", layer: layer }) });
      });

      safe(function () {
        Object.keys(state.mapWindow || window).forEach(function (key) {
          if (!/^lyr_/i.test(key)) return;
          const layer = state.mapWindow[key];
          if (!layer || seen.has(layer)) return;
          seen.add(layer);
          out.push({ type: "openlayers", key: key, title: getOlLayerName(layer, key), layer: layer, visible: layerVisible({ type: "openlayers", layer: layer }) });
        });
      });
    }

    if (state.mapType === "leaflet") {
      safe(function () {
        Object.keys(state.mapWindow || window).forEach(function (key) {
          if (!/^lyr_/i.test(key)) return;
          const layer = state.mapWindow[key];
          if (!layer || seen.has(layer)) return;
          if (!(layer._layers || typeof layer.addTo === "function")) return;
          seen.add(layer);
          out.push({ type: "leaflet", key: key, title: key, layer: layer, visible: layerVisible({ type: "leaflet", layer: layer }) });
        });
      });
    }

    return out;
  }

  function findLayerRecords(layerName) {
    if (!state.map) refresh();
    const matches = listLayerContainers().filter(function (record) {
      return layerMatchesName(record, layerName);
    });
    return matches;
  }

  function firstLayerRecord(layerName) {
    const records = findLayerRecords(layerName);
    return records[0] || null;
  }

  function genericPropsFromFeature(feature) {
    if (!feature) return {};
    if (typeof feature.getProperties === "function") return featurePropsFromOlFeature(feature) || {};
    if (feature.feature && feature.feature.properties) return feature.feature.properties || {};
    if (feature.properties) return feature.properties || {};
    return {};
  }


  function findRawGeojsonForLayer(layerName, record, expectedFeatureCount) {
    const candidates = [];
    safe(function () {
      Object.keys(state.mapWindow || window).forEach(function (key) {
        if (!/^json_/i.test(key)) return;
        const obj = state.mapWindow[key];
        const features = obj && Array.isArray(obj.features) ? obj.features : [];
        if (!features.length) return;
        const fakeRecord = { key: key, title: key, name: key, layer: null };
        const matchesRequested = layerMatchesName(fakeRecord, layerName);
        const matchesRecord = layerCandidateNames(record).some(function (candidate) {
          return simpleLayerName(key).indexOf(simpleLayerName(candidate)) >= 0 || simpleLayerName(candidate).indexOf(simpleLayerName(key)) >= 0;
        });
        if (!matchesRequested && !matchesRecord) return;
        candidates.push({ key: key, json: obj, features: features });
      });
    });
    if (!candidates.length) return null;
    return candidates.find(function (candidate) { return candidate.features.length === expectedFeatureCount; }) || candidates[0];
  }

  function collectGenericLayerEntries(layerName) {
    if (!state.map) refresh();
    const records = findLayerRecords(layerName);
    const out = [];

    records.forEach(function (record) {
      const layer = record.layer;
      if (!layer) return;

      if (record.type === "openlayers") {
        const source = safe(function () { return layer.getSource && layer.getSource(); }, null);
        const features = safe(function () {
          return source && typeof source.getFeatures === "function" ? source.getFeatures() : [];
        }, []);
        const raw = findRawGeojsonForLayer(layerName, record, features.length);
        features.forEach(function (feature, index) {
          const directProps = genericPropsFromFeature(feature);
          const rawProps = raw && raw.features[index] && raw.features[index].properties ? raw.features[index].properties : {};
          const props = Object.assign({}, rawProps, directProps);
          delete props.geometry;
          const entry = {
            type: "openlayers",
            target: feature,
            feature: feature,
            layer: layer,
            parent: layer,
            props: props,
            key: String(index),
            win: state.mapWindow,
            layerKey: record.key
          };
          rememberOriginalStyle(entry);
          out.push(entry);
        });
        return;
      }

      if (record.type === "leaflet") {
        walkLeafletLayerTree(layer, null, function (leafletLayer, parent) {
          const props = genericPropsFromFeature(leafletLayer);
          const entry = {
            type: "leaflet",
            target: leafletLayer,
            layer: leafletLayer,
            parent: parent || layer,
            props: props,
            key: String(out.length),
            win: state.mapWindow,
            layerKey: record.key
          };
          rememberOriginalStyle(entry);
          out.push(entry);
        }, new Set());
      }
    });

    return out;
  }

  function getFieldValue(props, field) {
    if (!props || !field) return undefined;
    if (Object.prototype.hasOwnProperty.call(props, field)) return props[field];
    const wanted = normalizeString(field);
    const key = Object.keys(props).find(function (k) { return normalizeString(k) === wanted; });
    return key ? props[key] : undefined;
  }

  function parseSqlLiteral(raw) {
    let s = String(raw == null ? "" : raw).trim();
    if ((s[0] === "'" && s[s.length - 1] === "'") || (s[0] === '"' && s[s.length - 1] === '"')) {
      s = s.slice(1, -1).replace(/\\'/g, "'").replace(/\\"/g, '"');
    }
    if (/^(true|false)$/i.test(s)) return /^true$/i.test(s);
    if (/^null$/i.test(s)) return null;
    if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
    return s;
  }

  function compareValues(left, op, right) {
    const ln = Number(left);
    const rn = Number(right);
    const numeric = left !== "" && left != null && right !== "" && right != null && !Number.isNaN(ln) && !Number.isNaN(rn);
    const a = numeric ? ln : normalizeString(left);
    const b = numeric ? rn : normalizeString(right);

    switch (op) {
      case "=": case "==": return a === b;
      case "!=": case "<>": return a !== b;
      case "<": return a < b;
      case "<=": return a <= b;
      case ">": return a > b;
      case ">=": return a >= b;
      default: return false;
    }
  }

  function splitSqlAnd(filter) {
    return String(filter || "")
      .split(/\s+AND\s+/i)
      .map(function (part) { return part.trim(); })
      .filter(Boolean);
  }

  function conditionPredicate(condition) {
    let m;

    m = condition.match(/^([A-Za-z_][A-Za-z0-9_]*)\s+IS\s+(TRUE|FALSE)$/i);
    if (m) {
      return function (props) {
        const v = getFieldValue(props, m[1]);
        const bool = v === true || String(v).toLowerCase() === "true" || Number(v) === 1;
        return bool === (/^true$/i.test(m[2]));
      };
    }

    m = condition.match(/^([A-Za-z_][A-Za-z0-9_]*)\s+CONTAINS\s+(.+)$/i);
    if (m) {
      const needle = normalizeString(parseSqlLiteral(m[2]));
      return function (props) { return normalizeString(getFieldValue(props, m[1])).indexOf(needle) >= 0; };
    }

    m = condition.match(/^([A-Za-z_][A-Za-z0-9_]*)\s+IN\s*\((.+)\)$/i);
    if (m) {
      const values = m[2].split(",").map(parseSqlLiteral).map(normalizeString);
      return function (props) { return values.indexOf(normalizeString(getFieldValue(props, m[1]))) >= 0; };
    }

    m = condition.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(=|==|!=|<>|<=|>=|<|>)\s*(.+)$/i);
    if (m) {
      const field = m[1];
      const op = m[2];
      const expected = parseSqlLiteral(m[3]);
      return function (props) { return compareValues(getFieldValue(props, field), op, expected); };
    }

    return function () {
      console.warn("[GIS] Unsupported filter condition:", condition);
      return false;
    };
  }

  function sqlPredicate(filter) {
    if (!filter || !String(filter).trim()) return function () { return true; };
    const predicates = splitSqlAnd(filter).map(conditionPredicate);
    return function (props) {
      return predicates.every(function (predicate) { return predicate(props || {}); });
    };
  }

  function normalizeOptions(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  }

  function showLayerPublic(layerName, filter, options) {
    if (filter && typeof filter === "object" && !Array.isArray(filter)) {
      options = filter;
      filter = options.filter || options.where || "";
    }
    options = Object.assign({ fit: false }, normalizeOptions(options));

    refresh();
    const records = findLayerRecords(layerName);
    records.forEach(function (record) { setLayerVisible(record, true); });

    const layerEntries = collectGenericLayerEntries(layerName);
    const predicate = sqlPredicate(filter || "");
    const matches = [];

    if (layerEntries.length) {
      layerEntries.forEach(function (entry) {
        const ok = safe(function () { return predicate(entry.props || {}); }, false);
        if (ok) {
          restoreStyle(entry);
          matches.push(entry);
        } else {
          hideStyle(entry);
        }
      });
    }

    if (options.fit && matches.length) fitEntries(matches);
    forceMapRedraw("GIS.showLayer");

    return {
      ok: records.length > 0,
      layer: layerName,
      filter: filter || "",
      layers: records.length,
      matched: filter ? matches.length : layerEntries.length,
      total: layerEntries.length,
      mapType: state.mapType
    };
  }

  function hideLayerPublic(layerName) {
    refresh();
    const records = findLayerRecords(layerName);
    records.forEach(function (record) { setLayerVisible(record, false); });
    forceMapRedraw("GIS.hideLayer");
    return { ok: records.length > 0, layer: layerName, layers: records.length };
  }

  function hideFeaturesPublic(layerName) {
    refresh();
    const records = findLayerRecords(layerName);
    records.forEach(function (record) { setLayerVisible(record, true); });
    const layerEntries = collectGenericLayerEntries(layerName);
    layerEntries.forEach(hideStyle);
    forceMapRedraw("GIS.hideFeatures");
    return { ok: records.length > 0, layer: layerName, count: layerEntries.length };
  }

  function restoreLayerPublic(layerName) {
    refresh();
    const records = findLayerRecords(layerName);
    records.forEach(function (record) { setLayerVisible(record, true); });
    const layerEntries = collectGenericLayerEntries(layerName);
    layerEntries.forEach(restoreStyle);
    forceMapRedraw("GIS.restoreLayer");
    return { ok: records.length > 0, layer: layerName, count: layerEntries.length };
  }

  function hideAllLayersPublic() {
    refresh();
    const records = listLayerContainers();
    records.forEach(function (record) { setLayerVisible(record, false); });
    forceMapRedraw("GIS.hideAllLayers");
    return { ok: true, layers: records.length };
  }

  function showOnlyLayerPublic(layerName, options) {
    options = Object.assign({ keep: [], filter: "", fit: false }, normalizeOptions(options));
    refresh();
    const records = listLayerContainers();
    const keep = (options.keep || options.mantieni || []).map(simpleLayerName);
    records.forEach(function (record) {
      const isTarget = layerMatchesName(record, layerName);
      const isKept = layerCandidateNames(record).some(function (candidate) {
        return keep.indexOf(simpleLayerName(candidate)) >= 0;
      });
      setLayerVisible(record, isTarget || isKept);
    });
    const result = showLayerPublic(layerName, options.filter || options.where || "", { fit: options.fit });
    result.mode = "showOnlyLayer";
    return result;
  }

  function saveStatePublic(name) {
    refresh();
    const key = String(name || "default");
    state.savedStates[key] = listLayerContainers().map(function (record) {
      return { type: record.type, layer: record.layer, visible: layerVisible(record), key: record.key, title: record.title };
    });
    return { ok: true, name: key, layers: state.savedStates[key].length };
  }

  function restoreStatePublic(name) {
    refresh();
    const key = String(name || "default");
    const saved = state.savedStates[key] || [];
    saved.forEach(function (item) { setLayerVisible(item, item.visible); });
    forceMapRedraw("GIS.restoreState");
    return { ok: saved.length > 0, name: key, layers: saved.length };
  }

  function listLayersPublic() {
    refresh();
    return listLayerContainers().map(function (record) {
      return {
        key: record.key,
        title: record.title,
        visible: layerVisible(record),
        type: record.type,
        names: layerCandidateNames(record)
      };
    });
  }

  function describeLayerPublic(layerName) {
    refresh();
    const records = findLayerRecords(layerName);
    const layerEntries = collectGenericLayerEntries(layerName);
    const fields = {};
    layerEntries.slice(0, 50).forEach(function (entry) {
      Object.keys(entry.props || {}).forEach(function (key) { fields[key] = true; });
    });
    return {
      ok: records.length > 0,
      layer: layerName,
      layers: records.map(function (record) { return { key: record.key, title: record.title, visible: layerVisible(record) }; }),
      featureCount: layerEntries.length,
      fields: Object.keys(fields).sort(),
      sample: layerEntries.slice(0, 5).map(function (entry) { return entry.props; })
    };
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
      case "showLayer":
        return showLayerPublic(args.layer || args.name, args.filter || args.where || "", args);
      case "hideLayer":
        return hideLayerPublic(args.layer || args.name);
      case "hideFeatures":
      case "hideLayerFeatures":
        return hideFeaturesPublic(args.layer || args.name);
      case "restoreLayer":
      case "restoreFeatures":
        return restoreLayerPublic(args.layer || args.name);
      case "hideAllLayers":
        return hideAllLayersPublic();
      case "showOnlyLayer":
        return showOnlyLayerPublic(args.layer || args.name, args);
      case "saveState":
        return saveStatePublic(args.name || args.scope);
      case "restoreState":
        return restoreStatePublic(args.name || args.scope);
      case "listLayers":
        return { ok: true, layers: listLayersPublic() };
      case "describeLayer":
        return describeLayerPublic(args.layer || args.name);
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
    if (!msg) return;

    if (msg.type === "CNOT_GIS_API") {
      const method = msg.method;
      const callArgs = Array.isArray(msg.args) ? msg.args : [];
      const result = GIS && typeof GIS[method] === "function"
        ? GIS[method].apply(GIS, callArgs)
        : { ok: false, error: "Unknown GIS method: " + method };
      log("GIS message", method, callArgs, result);
      return;
    }

    if (msg.type !== "CNOT_GIS_COMMAND") return;
    const result = execute(msg.action, msg.args || {});
    log("Message command", msg.action, msg.args, result);
  }


  const GIS = {
    version: "0.2.0",

    showLayer: function (layerName, sqlFilter, options) {
      return showLayerPublic(layerName, sqlFilter, options);
    },
    hideLayer: function (layerName) {
      return hideLayerPublic(layerName);
    },
    hideFeatures: function (layerName) {
      return hideFeaturesPublic(layerName);
    },
    restoreLayer: function (layerName) {
      return restoreLayerPublic(layerName);
    },
    hideAllLayers: function () {
      return hideAllLayersPublic();
    },
    showOnlyLayer: function (layerName, options) {
      return showOnlyLayerPublic(layerName, options || {});
    },
    saveState: function (name) {
      return saveStatePublic(name);
    },
    restoreState: function (name) {
      return restoreStatePublic(name);
    },
    listLayers: function () {
      return listLayersPublic();
    },
    describeLayer: function (layerName) {
      return describeLayerPublic(layerName);
    },

    // Alias italiani, utili per autori non tecnici ma senza duplicare il motore.
    mostraLayer: function (layerName, sqlFilter, options) { return showLayerPublic(layerName, sqlFilter, options); },
    nascondiLayer: function (layerName) { return hideLayerPublic(layerName); },
    nascondiFeature: function (layerName) { return hideFeaturesPublic(layerName); },
    ripristinaLayer: function (layerName) { return restoreLayerPublic(layerName); },
    nascondiTuttiLayer: function () { return hideAllLayersPublic(); },
    mostraSoloLayer: function (layerName, options) { return showOnlyLayerPublic(layerName, options || {}); },
    salvaStato: function (name) { return saveStatePublic(name); },
    ripristinaStato: function (name) { return restoreStatePublic(name); },
    listaLayer: function () { return listLayersPublic(); },
    descriviLayer: function (layerName) { return describeLayerPublic(layerName); }
  };

  const api = {
    version: "1.2.4-gis-generic-api",
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

    showLayer: function (layerName, sqlFilter, opts) { return showLayerPublic(layerName, sqlFilter, opts); },
    hideLayer: function (layerName) { return hideLayerPublic(layerName); },
    hideFeatures: function (layerName) { return hideFeaturesPublic(layerName); },
    restoreLayer: function (layerName) { return restoreLayerPublic(layerName); },
    hideAllLayers: function () { return hideAllLayersPublic(); },
    showOnlyLayer: function (layerName, opts) { return showOnlyLayerPublic(layerName, opts || {}); },
    saveState: function (name) { return saveStatePublic(name); },
    restoreState: function (name) { return restoreStatePublic(name); },
    listLayers: function () { return listLayersPublic(); },
    describeLayer: function (layerName) { return describeLayerPublic(layerName); },
    GIS: GIS,

    debug: function (value) { state.debug = value !== false; return state.debug; },
    diagnostics: function () { refresh(); return state.lastDiagnostics; },
    state: state
  };

  window[NS] = api;
  window.GIS = GIS;

  if (document && document.addEventListener) document.addEventListener("click", handleDomCommand, true);
  if (window && window.addEventListener) window.addEventListener("message", handleMessage, false);

  safe(function () { setTimeout(refresh, 250); });
})();
