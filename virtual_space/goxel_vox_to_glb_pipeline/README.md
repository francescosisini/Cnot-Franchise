# Goxel `.vox` testuale → GLB

Questa pipeline converte direttamente un file voxel testuale esportato da Goxel in `.glb`, senza Blender e senza Unity.

## Formato supportato

File tipo:

```text
# Goxel 0.15.1
v -9 0 10 1.000000 1.000000 1.000000
v -8 0 10 1.000000 1.000000 1.000000
```

Ogni riga significa:

```text
v x y z r g b
```

dove `r g b` sono valori tra 0 e 1.

## Uso base

```bash
python3 goxel_vox_to_glb.py tuo_file.vox convitto.glb
```

Poi copia:

```text
convitto.glb
```

in:

```text
convitto-webxr-viewer-v2/models/convitto.glb
```

## Uso consigliato per WebXR

```bash
python3 goxel_vox_to_glb.py tuo_file.vox convitto.glb --voxel-size 0.5 --center --floor-y0
```

Significato:

- `--voxel-size 0.5`: ogni voxel vale 50 cm;
- `--center`: centra il modello in XZ;
- `--floor-y0`: porta il pavimento alla quota Y=0.

## Se il modello appare coricato

Prova:

```bash
python3 goxel_vox_to_glb.py tuo_file.vox convitto.glb --voxel-size 0.5 --center --floor-y0 --swap-yz
```

## Cosa fa lo script

Lo script:
- legge tutti i voxel;
- raggruppa i colori;
- rimuove le facce interne tra voxel adiacenti;
- genera una mesh più leggera;
- salva un GLB 2.0 minimale.

## Test rapido

```bash
python3 goxel_vox_to_glb.py example_goxel.vox convitto.glb --voxel-size 0.5 --center --floor-y0
```
