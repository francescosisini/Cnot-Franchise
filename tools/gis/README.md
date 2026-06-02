# GIS tools

Questa cartella contiene script per convertire dati locali o narrativi in formati geografici utilizzabili nel GIS del progetto Cnot.

Lo scopo principale è trasformare mappe disegnate, coordinate locali o file JSON narrativi in dati geografici compatibili con QGIS e con le mappe web.

---

## Da JSON locale a GeoJSON

Lo script principale è:

```text
local_to_geojson.py
```

Serve a convertire un file JSON con coordinate locali in un file GeoJSON georeferenziato.

Il caso tipico è una mappa disegnata o costruita in coordinate interne, per esempio:

```text
x, y
```

oppure:

```text
x, y, livello, nome, descrizione
```

Queste coordinate locali vengono trasformate in coordinate geografiche reali, ad esempio latitudine e longitudine.

---

## Flusso di lavoro

Il flusso generale è:

```text
mappa locale / disegno / schema
  ↓
punti segnati manualmente
  ↓
file JSON locale
  ↓
script local_to_geojson.py
  ↓
file GeoJSON
  ↓
QGIS / mappa web / popup narrativi
```

---

## Esempio di input JSON

Un file JSON locale può avere una struttura simile:

```json
{
  "features": [
    {
      "id": "convitto_ingresso",
      "name": "Ingresso del convitto",
      "type": "point",
      "x": 120,
      "y": 340,
      "properties": {
        "description": "Punto di accesso principale al convitto",
        "category": "entrance"
      }
    },
    {
      "id": "corridoio_principale",
      "name": "Corridoio principale",
      "type": "point",
      "x": 260,
      "y": 310,
      "properties": {
        "description": "Corridoio centrale del primo piano",
        "category": "interior"
      }
    }
  ]
}
```

Il formato esatto può essere adattato allo script, ma l’idea è che ogni punto locale contenga almeno:

```text
id
name
x
y
properties
```

---

## Conversione in GeoJSON

Esempio di comando:

```bash
python3 local_to_geojson.py input_local.json output.geojson
```

Se lo script supporta unità di misura o parametri da linea di comando:

```bash
python3 local_to_geojson.py input_local.json output.geojson --unit meters
```

oppure:

```bash
python3 local_to_geojson.py input_local.json output.geojson --unit pixels
```

Per vedere le opzioni disponibili:

```bash
python3 local_to_geojson.py --help
```

---

## Output GeoJSON

L’output sarà un file `.geojson` leggibile da QGIS e da molte librerie web mapping.

Esempio concettuale:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "convitto_ingresso",
        "name": "Ingresso del convitto",
        "description": "Punto di accesso principale al convitto",
        "category": "entrance"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [11.619, 44.835]
      }
    }
  ]
}
```

---

## Importazione in QGIS

Per importare il file in QGIS:

```text
Layer
→ Add Layer
→ Add Vector Layer
→ scegliere il file .geojson
```

Una volta importato, il layer può essere:

* stilizzato;
* salvato dentro un GeoPackage;
* collegato a popup;
* esportato con qgis2web;
* usato come layer narrativo;
* collegato a WebXR tramite un campo `xr_url`.

---

## Campi narrativi consigliati

Per il GIS narrativo di Cnot, ogni feature può contenere campi come:

```text
id
name
type
description
narrative_role
event_id
characters
status
source
xr_url
image_url
book_ref
```

Esempio:

```json
{
  "name": "Convitto Cardinal Mora",
  "type": "building",
  "narrative_role": "urbex location",
  "status": "abandoned",
  "characters": "Laura, Caterina",
  "xr_url": "../../xr/viewers/convitto/"
}
```

---

## Ruolo nel franchise

Questo script permette di passare da una mappa disegnata o locale a una mappa geografica vera.

È uno degli strumenti che collegano:

```text
disegno
  ↓
coordinate locali
  ↓
GeoJSON
  ↓
QGIS
  ↓
mappa web
  ↓
GIS narrativo
```

Nel progetto Cnot questo passaggio è importante perché permette di trasformare intuizioni visive, schizzi, mappe interne o luoghi narrativi in dati spaziali strutturati.

Il risultato non è solo una mappa tecnica, ma una base per generare eventi, traiettorie, luoghi esplorabili e nuove storie.
