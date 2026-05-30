# Convitto WebXR Viewer v2

Questa versione non si blocca se manca il modello 3D.

Quando apri il viewer, vedrai una scena di test con:
- cielo azzurro;
- pavimento;
- cubo provvisorio;
- scritta informativa.

Quando avrai esportato il modello da Unity, mettilo qui:

```text
models/convitto.glb
```

Poi ricarica la pagina.

## Avvio locale

```bash
cd convitto-webxr-viewer-v2
python3 -m http.server 8000
```

Poi apri:

```text
http://localhost:8000
```

## Regolazione posizione modello

Nel file `index.html` cerca:

```html
<a-entity
  id="convitto"
  position="0 0 0"
  rotation="0 0 0"
  scale="1 1 1">
</a-entity>
```

Puoi modificare `position`, `rotation` e `scale`.
