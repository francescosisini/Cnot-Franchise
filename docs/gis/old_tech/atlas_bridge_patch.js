/*
atlas_bridge_patch.js

Da includere nella pagina PARENT dell'Archive Reader, non dentro il racconto.
Serve a esporre al racconto queste funzioni:

  window.applyAtlasCommand(command)
  window.showLayers(layerNames, options)
  window.hideLayers(layerNames)
  window.addEventListener("message", ...)

Il racconto/iframe può quindi chiamare:
  window.parent.applyAtlasCommand(...)
oppure inviare:
  window.parent.postMessage({ type: "atlasCommand", command: {...} }, "*")

IMPORTANTE:
Devi completare ATLAS_LAYER_REGISTRY con i nomi reali dei layer esportati da qgis2web.
*/

(function () {
  "use strict";

  const DEBUG = true;

  function log(...args) {
    if (DEBUG) console.log("[AtlasBridge]", ...args);
  }

  function warn(...args) {
    console.warn("[AtlasBridge]", ...args);
  }

  /*
  Mappa tra nomi logici usati nelle storie e variabili reali qgis2web.

  Esempio:
    nuclear_power_plants: "lyr_Nuclearpowerplants_0"

  Oppure più tentativi:
    nuclear_power_plants: [
      "lyr_Nuclearpowerplants_0",
      "lyr_nuclear_power_plants_0",
      "lyr_ReattoriNucleari_2"
    ]

  Se non sai il nome, apri la console del browser e prova:
    Object.keys(window).filter(k => k.startsWith("lyr_"))
  */
  window.ATLAS_LAYER_REGISTRY = window.ATLAS_LAYER_REGISTRY || {
    nuclear_power_plants: [
      "lyr_Nuclearpowerplants_0",
      "lyr_nuclear_power_plants_0",
      "lyr_Nuclear_0",
      "lyr_reactors_0",
      "lyr_Reattori_0"
    ],
    energy_nuclear: [
      "lyr_EnergyNuclear_0",
      "lyr_energy_nuclear_0",
      "lyr_Nuclear_0"
    ],
    reactors: [
      "lyr_reactors_0",
      "lyr_Reattori_0",
      "lyr_NuclearReactors_0"
    ],

    ai_factories: [
      "lyr_ai_factories_0",
      "lyr_AIFactories_0"
    ],
    ai_supercomputers: [
      "lyr_ai_supercomputers_0",
      "lyr_AISupercomputers_0"
    ],
    qt_infrastructures: [
      "lyr_qt_infrastructures_0",
      "lyr_QuantumInfrastructures_0"
    ],
    qt_actors: [
      "lyr_qt_actors_0",
      "lyr_QuantumActors_0"
    ],
    qt_relations: [
      "lyr_qt_relations_0",
      "lyr_QuantumRelations_0"
    ]
  };

  function getMapObject() {
    if (window.map) return window.map;
    if (window.olMap) return window.olMap;
    if (window.qgis2webMap) return window.qgis2webMap;
    return null;
  }

  function resolveLayerRef(ref) {
    if (!ref) return null;

    if (typeof ref === "object") return ref;

    if (typeof ref === "string") {
      if (window[ref]) return window[ref];

      const registryValue = window.ATLAS_LAYER_REGISTRY[ref];

      if (typeof registryValue === "string" && window[registryValue]) {
        return window[registryValue];
      }

      if (Array.isArray(registryValue)) {
        for (const candidate of registryValue) {
          if (window[candidate]) return window[candidate];
        }
      }
    }

    return null;
  }

  function resolveLayerName(logicalName) {
    const layer = resolveLayerRef(logicalName);
    if (layer) return layer;

    warn("Layer non trovato:", logicalName, "Registry:", window.ATLAS_LAYER_REGISTRY[logicalName]);
    return null;
  }

  function setLayerVisible(layer, visible) {
    const map = getMapObject();

    if (!layer) return false;

    // OpenLayers / qgis2web OpenLayers
    if (typeof layer.setVisible === "function") {
      layer.setVisible(visible);
      return true;
    }

    // Leaflet
    if (map && typeof layer.addTo === "function") {
      if (visible) {
        if (typeof map.hasLayer === "function" && !map.hasLayer(layer)) {
          layer.addTo(map);
        } else if (typeof map.addLayer === "function") {
          map.addLayer(layer);
        }
      } else {
        if (typeof map.removeLayer === "function") {
          map.removeLayer(layer);
        }
      }
      return true;
    }

    // Fallback generico
    if ("visible" in layer) {
      layer.visible = visible;
      return true;
    }

    warn("Non so impostare visibilità per layer:", layer);
    return false;
  }

  function setLogicalLayerVisible(logicalName, visible) {
    const layer = resolveLayerName(logicalName);
    if (!layer) return false;
    return setLayerVisible(layer, visible);
  }

  function showLayers(layerNames, options) {
    options = options || {};
    layerNames = Array.isArray(layerNames) ? layerNames : [layerNames];

    log("showLayers", layerNames, options);

    if (options.hideOthers) {
      for (const logicalName of Object.keys(window.ATLAS_LAYER_REGISTRY)) {
        if (!layerNames.includes(logicalName)) {
          setLogicalLayerVisible(logicalName, false);
        }
      }
    }

    let ok = 0;
    for (const name of layerNames) {
      if (setLogicalLayerVisible(name, true)) ok++;
    }

    log("showLayers completato:", ok, "layer accesi");
    return ok;
  }

  function hideLayers(layerNames) {
    layerNames = Array.isArray(layerNames) ? layerNames : [layerNames];

    log("hideLayers", layerNames);

    let ok = 0;
    for (const name of layerNames) {
      if (setLogicalLayerVisible(name, false)) ok++;
    }

    log("hideLayers completato:", ok, "layer spenti");
    return ok;
  }

  function gotoFromCommand(command) {
    const g = command.goto || command;

    const lat = g.latitude ?? g.lat;
    const lon = g.longitude ?? g.lon ?? g.lng;
    const zoom = g.zoom ?? command.zoom ?? null;

    if (lat === undefined || lon === undefined) return false;

    if (typeof window.gotoGIS === "function") {
      window.gotoGIS(Number(lat), Number(lon), zoom !== null ? Number(zoom) : undefined);
      return true;
    }

    const map = getMapObject();

    // Leaflet fallback
    if (map && typeof map.setView === "function") {
      map.setView([Number(lat), Number(lon)], zoom !== null ? Number(zoom) : map.getZoom());
      return true;
    }

    // OpenLayers fallback
    if (map && typeof map.getView === "function" && typeof ol !== "undefined" && ol.proj) {
      const view = map.getView();
      view.setCenter(ol.proj.fromLonLat([Number(lon), Number(lat)]));
      if (zoom !== null) view.setZoom(Number(zoom));
      return true;
    }

    warn("goto non eseguito: nessuna funzione/mappa disponibile", command);
    return false;
  }

  function applyTemporalFilter(filter) {
    /*
    Placeholder consapevole.
    Il filtro temporale dipende da come qgis2web ha esportato i dati.
    Qui segnaliamo il comando e lasciamo un punto di aggancio stabile.
    */
    if (!filter) return false;

    if (typeof window.applyTemporalFilter === "function" && window.applyTemporalFilter !== applyTemporalFilter) {
      return window.applyTemporalFilter(filter);
    }

    warn("Filtro temporale ricevuto ma non ancora implementato:", filter);
    return false;
  }

  function applyAtlasCommand(command) {
    command = command || {};
    log("applyAtlasCommand", command);

    const result = {
      received: true,
      goto: false,
      shown: 0,
      hidden: 0,
      temporal_filter: false
    };

    if (command.goto || command.latitude || command.lat) {
      result.goto = gotoFromCommand(command);
    }

    if (command.layers_off) {
      result.hidden = hideLayers(command.layers_off);
    }

    if (command.layers_on) {
      result.shown = showLayers(command.layers_on, {
        hideOthers: command.hide_others === true
      });
    }

    if (command.temporal_filter) {
      result.temporal_filter = applyTemporalFilter(command.temporal_filter);
    }

    log("applyAtlasCommand result", result);
    return result;
  }

  window.showLayers = window.showLayers || showLayers;
  window.hideLayers = window.hideLayers || hideLayers;
  window.applyAtlasCommand = window.applyAtlasCommand || applyAtlasCommand;

  window.addEventListener("message", function (event) {
    const data = event.data || {};

    if (data.type === "atlasCommand") {
      log("postMessage atlasCommand ricevuto", data);
      applyAtlasCommand(data.command || data);
    }

    if (data.type === "showLayers") {
      log("postMessage showLayers ricevuto", data);
      showLayers(data.layers || data.layers_on || []);
    }

    if (data.type === "gotoGIS") {
      log("postMessage gotoGIS ricevuto", data);
      gotoFromCommand(data);
    }
  });

  log("AtlasBridge caricato.");
  log("Funzioni disponibili:", {
    gotoGIS: typeof window.gotoGIS,
    showLayers: typeof window.showLayers,
    hideLayers: typeof window.hideLayers,
    applyAtlasCommand: typeof window.applyAtlasCommand
  });

})();
