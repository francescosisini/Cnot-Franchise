/* ------------------------------------------------------------------
       ATLAS BRIDGE V2 — registry reale + resolver OpenLayers/qgis2web

       Questo blocco aggiorna il bridge già presente.
       Usa i nomi layer che hai indicato nel progetto QGIS:

       quantum:
       - qt_actors
       - qt_infrastructures
       - qt_relations

       AI:
       - ai_actors
       - ai_factories
       - ai_relations

       Supercomputer:
       - ai_supercomputers
       - ai_compute_relations

       Energia:
       - energy_opsd_all_except_nuclear
       - nuclear_reactors_europe_all
    ------------------------------------------------------------------ */

    (function installAtlasBridgeV2() {
      "use strict";

      const EXTRA_REGISTRY = {
        qt_actors: ["qt_actors", "lyr_qt_actors_0", "lyr_qt_actors"],
        qt_infrastructures: ["qt_infrastructures", "lyr_qt_infrastructures_0", "lyr_qt_infrastructures"],
        qt_relations: ["qt_relations", "lyr_qt_relations_0", "lyr_qt_relations"],

        ai_actors: ["ai_actors", "lyr_ai_actors_0", "lyr_ai_actors"],
        ai_factories: ["ai_factories", "lyr_ai_factories_0", "lyr_ai_factories"],
        ai_relations: ["ai_relations", "lyr_ai_relations_0", "lyr_ai_relations"],

        ai_supercomputers: ["ai_supercomputers", "lyr_ai_supercomputers_0", "lyr_ai_supercomputers"],
        ai_compute_relations: ["ai_compute_relations", "lyr_ai_compute_relations_0", "lyr_ai_compute_relations"],

        energy_opsd_all_except_nuclear: [
          "energy_opsd_all_except_nuclear",
          "lyr_energy_opsd_all_except_nuclear_0",
          "lyr_energy_opsd_all_except_nuclear"
        ],

        nuclear_reactors_europe_all: [
          "nuclear_reactors_europe_all",
          "lyr_nuclear_reactors_europe_all_0",
          "lyr_nuclear_reactors_europe_all"
        ],

        // Alias compatibili con le storie/test precedenti.
        nuclear_power_plants: [
          "nuclear_reactors_europe_all",
          "lyr_nuclear_reactors_europe_all_0",
          "lyr_nuclear_reactors_europe_all"
        ],
        energy_nuclear: [
          "nuclear_reactors_europe_all",
          "lyr_nuclear_reactors_europe_all_0",
          "lyr_nuclear_reactors_europe_all"
        ],
        reactors: [
          "nuclear_reactors_europe_all",
          "lyr_nuclear_reactors_europe_all_0",
          "lyr_nuclear_reactors_europe_all"
        ]
      };

      window.ATLAS_LAYER_REGISTRY = Object.assign(
        {},
        window.ATLAS_LAYER_REGISTRY || {},
        EXTRA_REGISTRY
      );

      function normalizeLayerName(value) {
        return String(value || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "_")
          .replace(/^_+|_+$/g, "");
      }

      function getGISWindowV2() {
        try {
          return gisFrame?.contentWindow || getMapDocument()?.defaultView || null;
        } catch (err) {
          showReaderError(
            "AtlasBridgeV2: impossibile accedere alla finestra GIS.",
            "Probabile causa: reader.html e map/index.html non sono serviti dalla stessa origine."
          );
          return null;
        }
      }

      function getMapObjectV2(win) {
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

      function flattenLayerCollection(collection, output = []) {
        if (!collection) return output;

        const layers = typeof collection.getArray === "function"
          ? collection.getArray()
          : Array.isArray(collection)
            ? collection
            : [];

        for (const layer of layers) {
          output.push(layer);

          try {
            if (layer && typeof layer.getLayers === "function") {
              flattenLayerCollection(layer.getLayers(), output);
            }
          } catch (err) {}
        }

        return output;
      }

      function getAllMapLayersV2() {
        const win = getGISWindowV2();
        const map = getMapObjectV2(win);

        if (!map || typeof map.getLayers !== "function") return [];
        return flattenLayerCollection(map.getLayers(), []);
      }

      function getLayerDeclaredNames(layer) {
        const names = [];

        try {
          if (typeof layer.get === "function") {
            names.push(layer.get("title"));
            names.push(layer.get("name"));
            names.push(layer.get("layerName"));
          }

          if (typeof layer.getProperties === "function") {
            const props = layer.getProperties();
            names.push(props.title, props.name, props.layerName);
          }
        } catch (err) {}

        return names.filter(Boolean);
      }

      function resolveGISLayerV2(logicalNameOrRealName) {
        const win = getGISWindowV2();
        if (!win || !logicalNameOrRealName) return null;

        if (typeof logicalNameOrRealName === "object") return logicalNameOrRealName;

        const registryValue = window.ATLAS_LAYER_REGISTRY?.[logicalNameOrRealName];

        const candidates = [
          logicalNameOrRealName,
          ...(Array.isArray(registryValue)
            ? registryValue
            : registryValue
              ? [registryValue]
              : [])
        ];

        // 1) Variabili globali qgis2web: win.lyr_...
        for (const candidate of candidates) {
          if (win[candidate]) return win[candidate];
        }

        // 2) Proprietà OpenLayers: title/name/layerName.
        const wanted = candidates.map(normalizeLayerName);

        for (const layer of getAllMapLayersV2()) {
          const layerNames = getLayerDeclaredNames(layer).map(normalizeLayerName);
          if (layerNames.some(name => wanted.includes(name))) return layer;
        }

        console.warn("[AtlasBridgeV2] Layer non risolto:", logicalNameOrRealName, {
          candidates,
          availableGlobals: Object.keys(win).filter(k => k.startsWith("lyr_")).sort(),
          availableTitles: getAllMapLayersV2().map(getLayerDeclaredNames)
        });

        return null;
      }

      function setLayerVisibleV2(layer, visible) {
        if (!layer) return false;

        if (typeof layer.setVisible === "function") {
          layer.setVisible(Boolean(visible));
          return true;
        }

        const win = getGISWindowV2();
        const map = getMapObjectV2(win);

        // Leaflet fallback.
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

        return false;
      }

      window.showLayers = function(layerNames, options = {}) {
        const names = Array.isArray(layerNames) ? layerNames : [layerNames];
        let shown = 0;

        if (options.hideOthers === true) {
          for (const logicalName of Object.keys(window.ATLAS_LAYER_REGISTRY || {})) {
            if (!names.includes(logicalName)) {
              const layer = resolveGISLayerV2(logicalName);
              if (layer) setLayerVisibleV2(layer, false);
            }
          }
        }

        for (const name of names) {
          const layer = resolveGISLayerV2(name);
          if (layer && setLayerVisibleV2(layer, true)) shown++;
        }

        archiveQueryStatus.textContent = `layer accesi: ${shown}`;
        console.log("[AtlasBridgeV2] showLayers", names, "shown:", shown);
        return shown;
      };

      window.hideLayers = function(layerNames) {
        const names = Array.isArray(layerNames) ? layerNames : [layerNames];
        let hidden = 0;

        for (const name of names) {
          const layer = resolveGISLayerV2(name);
          if (layer && setLayerVisibleV2(layer, false)) hidden++;
        }

        archiveQueryStatus.textContent = `layer spenti: ${hidden}`;
        console.log("[AtlasBridgeV2] hideLayers", names, "hidden:", hidden);
        return hidden;
      };

      window.applyAtlasCommand = function(command = {}) {
        console.log("[AtlasBridgeV2] applyAtlasCommand", command);

        const result = {
          received: true,
          goto: false,
          shown: 0,
          hidden: 0,
          temporal_filter: false
        };

        if (command.goto || command.latitude || command.lat) {
          const target = command.goto || command;
          const lat = target.latitude ?? target.lat;
          const lon = target.longitude ?? target.lon ?? target.lng;
          const zoom = target.zoom ?? command.zoom;

          if (lat !== undefined && lon !== undefined && typeof window.gotoGIS === "function") {
            window.gotoGIS(Number(lat), Number(lon), zoom !== undefined ? Number(zoom) : undefined);
            result.goto = true;
          }
        }

        if (command.layers_off) {
          result.hidden = window.hideLayers(command.layers_off);
        }

        if (command.layers_on) {
          result.shown = window.showLayers(command.layers_on, {
            hideOthers: command.hide_others === true
          });
        }

        if (command.temporal_filter) {
          console.warn("[AtlasBridgeV2] Filtro temporale ricevuto ma non ancora implementato:", command.temporal_filter);
          archiveQueryStatus.textContent = `filtro temporale ricevuto: ${command.temporal_filter.year ?? "?"}`;
        }

        console.log("[AtlasBridgeV2] result", result);
        return result;
      };

      window.debugAtlasBridge = function() {
        const win = getGISWindowV2();

        const info = {
          gotoGIS: typeof window.gotoGIS,
          showLayers: typeof window.showLayers,
          hideLayers: typeof window.hideLayers,
          applyAtlasCommand: typeof window.applyAtlasCommand,
          gisLayerGlobals: win ? Object.keys(win).filter(k => k.startsWith("lyr_")).sort() : [],
          mapLayerTitles: getAllMapLayersV2().map(getLayerDeclaredNames),
          registry: window.ATLAS_LAYER_REGISTRY
        };

        console.log("[AtlasBridgeV2 debug]", info);
        return info;
      };

      console.log("[AtlasBridgeV2] caricato: registry reale + resolver OpenLayers/qgis2web");
    })();
