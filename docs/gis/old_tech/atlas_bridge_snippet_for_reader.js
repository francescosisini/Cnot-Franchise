/* ------------------------------------------------------------------
       ATLAS BRIDGE
       Permette ai racconti dentro #storyFrame di comandare il GIS dentro
       #gisFrame: layer on/off, comandi generici, postMessage.

       Nota: le variabili dei layer qgis2web stanno dentro gisFrame.contentWindow,
       non direttamente dentro window del reader.
    ------------------------------------------------------------------ */

    window.ATLAS_LAYER_REGISTRY = window.ATLAS_LAYER_REGISTRY || {
      /*
        Aggiorna questi nomi dopo aver visto i layer reali in console:

        const win = document.getElementById("gisFrame").contentWindow;
        Object.keys(win).filter(k => k.startsWith("lyr_"));

        Esempio:
        nuclear_power_plants: ["lyr_Nuclearpowerplants_0"]
      */
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

    function getGISWindow() {
      try {
        return gisFrame.contentWindow || getMapDocument()?.defaultView || null;
      } catch (err) {
        showReaderError(
          "AtlasBridge: impossibile accedere alla finestra GIS.",
          "Probabile causa: reader.html e map/index.html non sono serviti dalla stessa origine."
        );
        return null;
      }
    }

    function getGISLayerNames() {
      const win = getGISWindow();
      if (!win) return [];
      return Object.keys(win).filter(k => k.startsWith("lyr_")).sort();
    }

    function resolveGISLayer(logicalNameOrRealName) {
      const win = getGISWindow();
      if (!win || !logicalNameOrRealName) return null;

      if (typeof logicalNameOrRealName === "object") return logicalNameOrRealName;

      // 1) Se è già il nome reale del layer qgis2web.
      if (typeof logicalNameOrRealName === "string" && win[logicalNameOrRealName]) {
        return win[logicalNameOrRealName];
      }

      // 2) Se è un nome logico, cerchiamolo nel registro.
      const candidates = window.ATLAS_LAYER_REGISTRY[logicalNameOrRealName];

      if (typeof candidates === "string" && win[candidates]) {
        return win[candidates];
      }

      if (Array.isArray(candidates)) {
        for (const candidate of candidates) {
          if (win[candidate]) return win[candidate];
        }
      }

      console.warn(
        "[AtlasBridge] Layer non trovato:",
        logicalNameOrRealName,
        "Candidati:",
        candidates,
        "Layer reali disponibili:",
        getGISLayerNames()
      );

      return null;
    }

    function setGISLayerVisible(layer, visible) {
      if (!layer) return false;

      const win = getGISWindow();
      const map = getMapObject(win);

      // OpenLayers / qgis2web OpenLayers
      if (typeof layer.setVisible === "function") {
        layer.setVisible(Boolean(visible));
        return true;
      }

      // Leaflet fallback
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

      // Fallback generico
      if ("visible" in layer) {
        layer.visible = Boolean(visible);
        return true;
      }

      console.warn("[AtlasBridge] Non so cambiare visibilità a questo layer:", layer);
      return false;
    }

    window.showLayers = function(layerNames, options = {}) {
      const names = Array.isArray(layerNames) ? layerNames : [layerNames];
      let shown = 0;

      if (options.hideOthers === true) {
        for (const logicalName of Object.keys(window.ATLAS_LAYER_REGISTRY)) {
          if (!names.includes(logicalName)) {
            const layer = resolveGISLayer(logicalName);
            if (layer) setGISLayerVisible(layer, false);
          }
        }
      }

      for (const name of names) {
        const layer = resolveGISLayer(name);
        if (layer && setGISLayerVisible(layer, true)) shown++;
      }

      archiveQueryStatus.textContent = `layer accesi: ${shown}`;
      console.log("[AtlasBridge] showLayers", names, "shown:", shown);
      return shown;
    };

    window.hideLayers = function(layerNames) {
      const names = Array.isArray(layerNames) ? layerNames : [layerNames];
      let hidden = 0;

      for (const name of names) {
        const layer = resolveGISLayer(name);
        if (layer && setGISLayerVisible(layer, false)) hidden++;
      }

      archiveQueryStatus.textContent = `layer spenti: ${hidden}`;
      console.log("[AtlasBridge] hideLayers", names, "hidden:", hidden);
      return hidden;
    };

    function gotoFromAtlasCommand(command) {
      const target = command.goto || command;
      const lat = target.latitude ?? target.lat;
      const lon = target.longitude ?? target.lon ?? target.lng;
      const zoom = target.zoom ?? command.zoom;

      if (lat === undefined || lon === undefined) return false;

      focusMapOnArchiveItem({
        latitude: Number(lat),
        longitude: Number(lon)
      });

      if (zoom !== undefined) {
        const win = getGISWindow();
        const map = getMapObject(win);

        if (map && typeof map.getView === "function") {
          const view = map.getView();
          if (typeof view.setZoom === "function") view.setZoom(Number(zoom));
        } else if (map && typeof map.setView === "function") {
          map.setView([Number(lat), Number(lon)], Number(zoom));
        }
      }

      return true;
    }

    function applyTemporalFilterFromAtlasCommand(filter) {
      /*
        Per ora è un aggancio diagnostico: riceviamo il comando ma non filtriamo ancora.
        Il filtro vero dipende dai nomi dei layer e dai campi esportati da qgis2web.
      */
      if (!filter) return false;

      console.warn("[AtlasBridge] temporal_filter ricevuto ma non ancora implementato:", filter);
      archiveQueryStatus.textContent = `filtro temporale ricevuto: ${filter.year ?? "?"}`;
      return false;
    }

    window.applyAtlasCommand = function(command = {}) {
      const result = {
        received: true,
        goto: false,
        shown: 0,
        hidden: 0,
        temporal_filter: false
      };

      console.log("[AtlasBridge] applyAtlasCommand", command);

      if (command.goto || command.latitude || command.lat) {
        result.goto = gotoFromAtlasCommand(command);
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
        result.temporal_filter = applyTemporalFilterFromAtlasCommand(command.temporal_filter);
      }

      console.log("[AtlasBridge] result", result);
      return result;
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
        gotoFromAtlasCommand(data);
      }
    });

    window.debugAtlasBridge = function() {
      const info = {
        gotoGIS: typeof window.gotoGIS,
        showLayers: typeof window.showLayers,
        hideLayers: typeof window.hideLayers,
        applyAtlasCommand: typeof window.applyAtlasCommand,
        gisLayerNames: getGISLayerNames(),
        registry: window.ATLAS_LAYER_REGISTRY
      };
      console.log("[AtlasBridge debug]", info);
      return info;
    };

    console.log("[AtlasBridge] caricato nel reader.html");
