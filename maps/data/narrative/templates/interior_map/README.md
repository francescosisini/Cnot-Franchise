# Template per mappe vettoriali di interni

Questo template serve a costruire mappe di interni in formato vettoriale, usando coordinate locali in metri.

Il workflow è:

```text
JSON locale in metri → local_to_geojson.py → GeoJSON EPSG:4326 → QGIS/qgis2web
```

## Struttura

```text
maps/
├── tools/
│   └── local_to_geojson.py
└── data/
    └── narrative/
        └── templates/
            └── interior_map/
                ├── README.md
                ├── interior_map_template_local.json
                └── example/
                    ├── basic_room_local.json
                    └── basic_room.geojson
```

## Coordinate locali

Nel JSON locale:

```text
x = metri verso destra / est
y = metri verso il basso / sud
origine = punto di ancoraggio della mappa
```

L'origine viene georeferenziata tramite:

```json
"origin": {
  "name": "angolo_nord_ovest",
  "lon": 11.6316151,
  "lat": 44.8200753
}
```

La rotazione si regola con:

```json
"rotation_deg": 0
```

## Geometrie supportate

### Rettangolo

```json
"rect": {"x": 0, "y": 0, "w": 40, "h": 24}
```

### Linea

```json
"line": [[16, 0], [16, 24]]
```

### Punto

```json
"point": [20, 10]
```

### Poligono libero

```json
"polygon": [[0, 0], [12, 0], [10, 8], [0, 6], [0, 0]]
```

## Generazione del GeoJSON

Dalla root del repository:

```bash
python3 maps/tools/local_to_geojson.py \
  maps/data/narrative/templates/interior_map/example/basic_room_local.json \
  -o maps/data/narrative/templates/interior_map/example/basic_room.geojson
```

## Uso pratico

Per creare una nuova mappa interna:

```bash
cp maps/data/narrative/templates/interior_map/interior_map_template_local.json \
   maps/data/narrative/<luogo>/plans/<nome_mappa>_local.json
```

Poi modifichi il JSON locale e generi il GeoJSON:

```bash
python3 maps/tools/local_to_geojson.py \
  maps/data/narrative/<luogo>/plans/<nome_mappa>_local.json \
  -o maps/data/narrative/<luogo>/geojson/<nome_mappa>.geojson
```

## Regola

Modifica sempre il file `*_local.json`.

Il GeoJSON è un output generato, da importare in QGIS o esportare sul web.
