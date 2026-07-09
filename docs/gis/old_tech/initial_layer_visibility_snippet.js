/* ------------------------------------------------------------------
       INITIAL MAP VISIBILITY
       All'avvio del reader spegne tutti i layer qgis2web tranne:
       - cnot--europe / cnoteurope
       - ne_10m_admin_0country / ne_10m_admin_0_countries

       Così l'atlante parte pulito: solo contorni europei/mondiali.
    ------------------------------------------------------------------ */

    const INITIAL_VISIBLE_LAYER_PATTERNS = [
      "cnot--europe",
      "cnot_europe",
      "cnoteurope",
      "lyr_cnoteurope",

      "ne_10m_admin_0country",
      "ne_10m_admin_0_country",
      "ne_10m_admin_0_countries",
      "lyr_ne_10m_admin_0_countries"
    ];

    function normalizeLayerKey(value) {
      return String(value || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
    }

    function compactLayerKey(value) {
      return normalizeLayerKey(value).replaceAll("_", "");
    }

    function isInitialVisibleLayerName(name) {
      const n = normalizeLayerKey(name);
      const c = compactLayerKey(name);

      return INITIAL_VISIBLE_LAYER_PATTERNS.some(pattern => {
        const pn = normalizeLayerKey(pattern);
        const pc = compactLayerKey(pattern);

        if (!pn || !pc) return false;

        return (
          n === pn ||
          n.startsWith(pn + "_") ||
          n.startsWith("lyr_" + pn + "_") ||
          n.includes(pn) ||
          c === pc ||
          c.startsWith("lyr" + pc) ||
          c.includes(pc)
        );
      });
    }

    function getLayerDeclaredNamesForInitialVisibility(layer) {
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

    function setLayerVisibleForInitialVisibility(layer, visible) {
      if (!layer) return false;

      if (typeof layer.setVisible === "function") {
        layer.setVisible(Boolean(visible));
        return true;
      }

      if ("visible" in layer) {
        layer.visible = Boolean(visible);
        return true;
      }

      return false;
    }

    function flattenLayerCollectionForInitialVisibility(collection, output = []) {
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
            flattenLayerCollectionForInitialVisibility(layer.getLayers(), output);
          }
        } catch (err) {}
      }

      return output;
    }

    function applyInitialLayerVisibility(options = {}) {
      const retries = options.retries ?? 12;
      const silent = options.silent === true;

      const doc = getMapDocument();
      const win = doc?.defaultView || gisFrame.contentWindow;
      const map = getMapObject(win);

      if (!win || !map) {
        if (retries > 0) {
          window.setTimeout(() => applyInitialLayerVisibility({ retries: retries - 1, silent }), 350);
        } else if (!silent) {
          showReaderError(
            "Reader: non riesco a inizializzare la visibilità dei layer.",
            "La mappa non è ancora accessibile oppure non espone un oggetto map."
          );
        }
        return false;
      }

      const seenLayers = new Set();
      let visibleCount = 0;
      let hiddenCount = 0;
      const kept = [];
      const hidden = [];

      // Caso qgis2web classico: layer globali window.lyr_...
      const globalLayerKeys = Object.keys(win).filter(key => key.startsWith("lyr_"));

      if (!globalLayerKeys.length && retries > 0) {
        window.setTimeout(() => applyInitialLayerVisibility({ retries: retries - 1, silent }), 350);
        return false;
      }

      for (const key of globalLayerKeys) {
        const layer = win[key];
        if (!layer || seenLayers.has(layer)) continue;

        seenLayers.add(layer);

        const keep = isInitialVisibleLayerName(key);
        if (setLayerVisibleForInitialVisibility(layer, keep)) {
          if (keep) {
            visibleCount++;
            kept.push(key);
          } else {
            hiddenCount++;
            hidden.push(key);
          }
        }
      }

      // Fallback/integrazione OpenLayers: layer con title/name ma non globali.
      if (map && typeof map.getLayers === "function") {
        const allLayers = flattenLayerCollectionForInitialVisibility(map.getLayers(), []);

        for (const layer of allLayers) {
          if (!layer || seenLayers.has(layer)) continue;
          seenLayers.add(layer);

          const names = getLayerDeclaredNamesForInitialVisibility(layer);
          if (!names.length) continue;

          const keep = names.some(isInitialVisibleLayerName);

          if (setLayerVisibleForInitialVisibility(layer, keep)) {
            if (keep) {
              visibleCount++;
              kept.push(names.join(" / "));
            } else {
              hiddenCount++;
              hidden.push(names.join(" / "));
            }
          }
        }
      }

      archiveQueryStatus.textContent = "mappa iniziale: contorni";
      console.log("[InitialLayerVisibility] kept:", kept);
      console.log("[InitialLayerVisibility] hidden:", hidden);

      if (!silent) {
        console.log(
          `[InitialLayerVisibility] visibili: ${visibleCount}, spenti: ${hiddenCount}`
        );
      }

      return {
        visibleCount,
        hiddenCount,
        kept,
        hidden
      };
    }

    window.applyInitialLayerVisibility = applyInitialLayerVisibility;
