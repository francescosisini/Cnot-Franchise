/*
  atlas_bridge.js
  Bridge esterno per Narrative GIS Reader.

  Espone nel parent/reader:
    window.showLayers(layerNames, options)
    window.hideLayers(layerNames)
    window.applyAtlasCommand(command)
    window.debugAtlasBridge()

  Le storie dentro #storyFrame possono chiamare:
    window.parent.applyAtlasCommand({...})
    window.parent.showLayers([...])
    window.parent.gotoGIS(lat, lon, zoom)
*/

(function installAtlasBridge() {
  "use strict";

  const STRATEGIC_LAYER_REGISTRY = {
    qt_actors: ["qt_actors"],
    qt_infrastructures: ["qt_infrastructures"],
    qt_relations: ["qt_relations"],

    ai_actors: ["ai_actors"],
    ai_factories: ["ai_factories"],
    ai_relations: ["ai_relations"],

    ai_supercomputers: ["ai_supercomputers"],
    ai_compute_relations: ["ai_compute_relations"],

    energy_opsd_all_except_nuclear: ["energy_opsd_all_except_nuclear"],
    nuclear_reactors_europe_all: ["nuclear_reactors_europe_all"],

    nuclear_power_plants: ["nuclear_reactors_europe_all"],
    energy_nuclear: ["nuclear_reactors_europe_all"],
    reactors: ["nuclear_reactors_europe_all"]
  };

  window.ATLAS_LAYER_REGISTRY = Object.assign(
    {},
    window.ATLAS_LAYER_REGISTRY || {},
    STRATEGIC_LAYER_REGISTRY
  );

  function status(text) {
    const el = document.getElementById("archiveQueryStatus");
    if (el) el.textContent = text;
  }

  function showError(message, details) {
    if (typeof window.showReaderError === "function") {
      window.showReaderError(message, details);
    } else {
      console.error("[AtlasBridge]", message, details || "");
    }
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function compact(value) {
    return normalize(value).replaceAll("_", "");
  }

  function getGISFrame() {
    return document.getElementById("gisFrame");
  }

  function getMapDocumentFallback() {
    const frame = getGISFrame();

    try {
      if (typeof window.getMapDocument === "function") return window.getMapDocument();
      return frame?.contentDocument || frame?.contentWindow?.document || null;
    } catch (err) {
      return null;
    }
  }

  function getGISWindow() {
    const frame = getGISFrame();

    try {
      return frame?.contentWindow || getMapDocumentFallback()?.defaultView || null;
    } catch (err) {
      showError(
        "AtlasBridge: impossibile accedere alla finestra GIS.",
        "Reader e map/index.html devono essere serviti dalla stessa origine/server locale."
      );
      return null;
    }
  }

  function getGISMap(win) {
    if (!win) return null;

    if (win.map && (typeof win.map.getView === "function" || typeof win.map.setView === "function")) {
      return win.map;
    }

    for (const key of Object.keys(win)) {
      try {
        const candidate = win[key];
        if (candidate && (typeof candidate.getView === "function" || typeof candidate.setView === "function")) {
          return candidate;
        }
      } catch (err) {}
    }

    return null;
  }

  function flattenLayers(collection, output = []) {
    if (!collection) return output;

    const arr = typeof collection.getArray === "function"
      ? collection.getArray()
      : Array.isArray(collection)
        ? collection
        : [];

    for (const layer of arr) {
      output.push(layer);

      try {
        if (layer && typeof layer.getLayers === "function") {
          flattenLayers(layer.getLayers(), output);
        }
      } catch (err) {}
    }

    return output;
  }

  function allMapLayers() {
    const win = getGISWindow();
    const map = getGISMap(win);

    if (!map || typeof map.getLayers !== "function") return [];
    return flattenLayers(map.getLayers(), []);
  }

  function declaredLayerNames(layer) {
    const names = [];

    try {
      if (typeof layer.get === "function") {
        names.push(layer.get("title"));
        names.push(layer.get("name"));
        names.push(layer.get("layerName"));
        names.push(layer.get("id"));
      }

      if (typeof layer.getProperties === "function") {
        const props = layer.getProperties();
        names.push(props.title, props.name, props.layerName, props.id);
      }
    } catch (err) {}

    return names.filter(Boolean).map(String);
  }

  function candidatesFor(logicalName) {
    const registryValue = window.ATLAS_LAYER_REGISTRY?.[logicalName];

    const raw = [
      logicalName,
      ...(Array.isArray(registryValue)
        ? registryValue
        : registryValue
          ? [registryValue]
          : [])
    ].filter(Boolean);

    const expanded = [];

    for (const item of raw) {
      expanded.push(item);
      expanded.push("lyr_" + item);
      expanded.push("lyr_" + item + "_0");
    }

    return [...new Set(expanded)];
  }

  function scoreCandidateName(actualName, wantedName) {
    const actual = normalize(actualName);
    const wanted = normalize(wantedName);

    const actualCompact = compact(actualName);
    const wantedCompact = compact(wantedName);

    if (!actual || !wanted) return 0;

    if (actual === wanted) return 100;
    if (actualCompact === wantedCompact) return 98;

    if (actual.startsWith(wanted + "_")) return 95;
    if (actual.startsWith("lyr_" + wanted + "_")) return 94;
    if (actualCompact.startsWith("lyr" + wantedCompact)) return 93;

    if (actual.includes(wanted)) return 80;
    if (actualCompact.includes(wantedCompact)) return 78;

    return 0;
  }

  function bestGlobalLayerMatch(logicalName) {
    const win = getGISWindow();
    if (!win) return null;

    const wanted = candidatesFor(logicalName);
    const globalKeys = Object.keys(win).filter(k => k.startsWith("lyr_"));

    let best = { key: null, score: 0 };

    for (const key of globalKeys) {
      for (const candidate of wanted) {
        const score = scoreCandidateName(key, candidate);
        if (score > best.score) best = { key, score };
      }
    }

    if (best.key && best.score >= 78) {
      return {
        layer: win[best.key],
        source: "global",
        key: best.key,
        score: best.score
      };
    }

    return null;
  }

  function bestMapLayerMatch(logicalName) {
    const wanted = candidatesFor(logicalName);
    let best = { layer: null, name: null, score: 0 };

    for (const layer of allMapLayers()) {
      const names = declaredLayerNames(layer);

      for (const actualName of names) {
        for (const candidate of wanted) {
          const score = scoreCandidateName(actualName, candidate);
          if (score > best.score) best = { layer, name: actualName, score };
        }
      }
    }

    if (best.layer && best.score >= 78) {
      return {
        layer: best.layer,
        source: "mapLayerTitle",
        key: best.name,
        score: best.score
      };
    }

    return null;
  }

  function resolveLayer(logicalNameOrRealName) {
    const win = getGISWindow();
    if (!win || !logicalNameOrRealName) return null;

    if (typeof logicalNameOrRealName === "object") {
      return { layer: logicalNameOrRealName, source: "object", key: "[object]", score: 100 };
    }

    if (win[logicalNameOrRealName]) {
      return { layer: win[logicalNameOrRealName], source: "globalExact", key: logicalNameOrRealName, score: 100 };
    }

    const globalMatch = bestGlobalLayerMatch(logicalNameOrRealName);
    if (globalMatch) return globalMatch;

    const mapMatch = bestMapLayerMatch(logicalNameOrRealName);
    if (mapMatch) return mapMatch;

    console.warn("[AtlasBridge] Layer non risolto:", logicalNameOrRealName, {
      candidates: candidatesFor(logicalNameOrRealName),
      availableGlobals: win ? Object.keys(win).filter(k => k.startsWith("lyr_")).sort() : [],
      availableTitles: allMapLayers().map(declaredLayerNames)
    });

    return null;
  }

  function setLayerVisible(layer, visible) {
    if (!layer) return false;

    if (typeof layer.setVisible === "function") {
      layer.setVisible(Boolean(visible));
      return true;
    }

    const win = getGISWindow();
    const map = getGISMap(win);

    if (map && typeof layer.addTo === "function") {
      if (visible) {
        if (typeof map.hasLayer === "function") {
          if (!map.hasLayer(layer)) layer.addTo(map);
        } else if (typeof map.addLayer === "function") {
          map.addLayer(layer);
        }
      } else if (typeof map.removeLayer === "function") {
        map.removeLayer(layer);
      }
      return true;
    }

    if ("visible" in layer) {
      layer.visible = Boolean(visible);
      return true;
    }

    return false;
  }

  function strategicLogicalNames() {
    return Object.keys(STRATEGIC_LAYER_REGISTRY);
  }

  window.showLayers = function showLayers(layerNames, options = {}) {
    const names = Array.isArray(layerNames) ? layerNames : [layerNames];
    const resolved = [];
    let shown = 0;
    let hidden = 0;

    const requestedMatches = names.map(name => ({ name, match: resolveLayer(name) }));
    const atLeastOneRequestedLayerExists = requestedMatches.some(item => Boolean(item.match?.layer));

    // Sicurezza: se nessun layer richiesto esiste, non spegniamo nulla.
    if (options.hideOthers === true && atLeastOneRequestedLayerExists) {
      for (const logicalName of strategicLogicalNames()) {
        if (!names.includes(logicalName)) {
          const match = resolveLayer(logicalName);
          if (match?.layer && setLayerVisible(match.layer, false)) hidden++;
        }
      }
    }

    for (const item of requestedMatches) {
      const match = item.match;

      if (match?.layer && setLayerVisible(match.layer, true)) {
        shown++;
        resolved.push({ requested: item.name, resolved: match.key, source: match.source, score: match.score });
      } else {
        resolved.push({ requested: item.name, resolved: null, source: null, score: 0 });
      }
    }

    status(`layer accesi: ${shown}`);
    console.log("[AtlasBridge] showLayers", { names, shown, hidden, resolved });
    return { shown, hidden, resolved };
  };

  window.hideLayers = function hideLayers(layerNames) {
    const names = Array.isArray(layerNames) ? layerNames : [layerNames];
    const resolved = [];
    let hidden = 0;

    for (const name of names) {
      const match = resolveLayer(name);
      if (match?.layer && setLayerVisible(match.layer, false)) {
        hidden++;
        resolved.push({ requested: name, resolved: match.key, source: match.source, score: match.score });
      } else {
        resolved.push({ requested: name, resolved: null, source: null, score: 0 });
      }
    }

    status(`layer spenti: ${hidden}`);
    console.log("[AtlasBridge] hideLayers", { names, hidden, resolved });
    return { hidden, resolved };
  };

  function gotoFromCommand(command) {
    const target = command.goto || command;
    const lat = target.latitude ?? target.lat;
    const lon = target.longitude ?? target.lon ?? target.lng;
    const zoom = target.zoom ?? command.zoom;

    if (lat === undefined || lon === undefined) return false;

    if (typeof window.gotoGIS === "function") {
      window.gotoGIS(Number(lat), Number(lon), zoom !== undefined ? Number(zoom) : undefined);
      return true;
    }

    return false;
  }

  window.applyAtlasCommand = function applyAtlasCommand(command = {}) {
    console.log("[AtlasBridge] applyAtlasCommand", command);

    const result = {
      received: true,
      goto: false,
      shown: 0,
      hidden: 0,
      temporal_filter: false,
      resolved: []
    };

    if (command.goto || command.latitude || command.lat) {
      result.goto = gotoFromCommand(command);
    }

    if (command.layers_off) {
      const hideResult = window.hideLayers(command.layers_off);
      result.hidden += hideResult.hidden || 0;
      result.resolved.push(...(hideResult.resolved || []));
    }

    if (command.layers_on) {
      const showResult = window.showLayers(command.layers_on, { hideOthers: command.hide_others === true });
      result.shown += showResult.shown || 0;
      result.hidden += showResult.hidden || 0;
      result.resolved.push(...(showResult.resolved || []));
    }

    if (command.temporal_filter) {
      console.warn("[AtlasBridge] Filtro temporale ricevuto ma non ancora implementato:", command.temporal_filter);
      status(`filtro temporale ricevuto: ${command.temporal_filter.year ?? "?"}`);
    }

    console.log("[AtlasBridge] result", result);
    return result;
  };

  window.debugAtlasBridge = function debugAtlasBridge() {
    const win = getGISWindow();

    const strategicResolutions = {};
    for (const name of strategicLogicalNames()) {
      const match = resolveLayer(name);
      strategicResolutions[name] = match
        ? { resolved: match.key, source: match.source, score: match.score }
        : null;
    }

    const info = {
      gotoGIS: typeof window.gotoGIS,
      showLayers: typeof window.showLayers,
      hideLayers: typeof window.hideLayers,
      applyAtlasCommand: typeof window.applyAtlasCommand,
      gisLayerGlobals: win ? Object.keys(win).filter(k => k.startsWith("lyr_")).sort() : [],
      mapLayerTitles: allMapLayers().map(declaredLayerNames),
      strategicResolutions,
      registry: window.ATLAS_LAYER_REGISTRY
    };

    console.log("[AtlasBridge debug]", info);
    return info;
  };

  window.addEventListener("message", event => {
    const data = event.data || {};

    if (data.type === "atlasCommand") {
      window.applyAtlasCommand(data.command || data);
    }

    if (data.type === "showLayers") {
      window.showLayers(data.layers || data.layers_on || []);
    }

    if (data.type === "gotoGIS") {
      gotoFromCommand(data);
    }
  });

  console.log("[AtlasBridge] caricato da atlas_bridge.js");
})();
