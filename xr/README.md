# XR — Ricostruzione immersiva del GIS narrativo di Cnot-Franchise

Questa cartella contiene la parte **XR/WebXR** del progetto **Cnot-Franchise**.

L’idea centrale è semplice:

> Il mondo narrativo costruito nel GIS viene ricreato in 3D e reso esplorabile tramite WebXR.

Il GIS non è solo una mappa. È il luogo dove il franchise organizza:

- spazi;
- edifici;
- eventi;
- personaggi;
- relazioni;
- infrastrutture;
- linee temporali;
- tag narrativi;
- oggetti simbolici;
- conflitti sistemici.

La cartella `xr/` serve a trasformare questo mondo narrativo in un’esperienza esplorabile nel browser.

```text
GIS narrativo
     ↓
file di testo: JSON / GeoJSON / HTML / JS
     ↓
scena 3D WebXR
     ↓
esperienza immersiva da browser, smartphone o visore
```

---

## 1. Scopo della cartella `xr`

La cartella `xr/` non contiene semplicemente “modelli 3D”.

Contiene i viewer immersivi del franchise: piccoli ambienti WebXR in cui il visitatore può entrare nei luoghi della storia e scoprire eventi, tag, documenti, oggetti e relazioni già definiti nel GIS.

Per esempio:

```text
GIS:
Convitto abbandonato
Evento: Caterina viene classificata come “attività”
Tag: accesso_negato, infrastruttura_obsoleta, europa2050

XR:
Il visitatore entra nel convitto 3D,
guarda un terminale,
attiva l’evento,
legge o ascolta il frammento narrativo.
```

Quindi il viewer XR è una **proiezione immersiva del GIS narrativo**.

---

## 2. Che cos’è WebXR nel nostro progetto

**WebXR** è una tecnologia web che permette di creare esperienze 3D, VR e AR direttamente dentro il browser.

Nel nostro caso WebXR serve a:

- visualizzare in 3D i luoghi del franchise;
- esplorare ambienti narrativi come il convitto;
- collegare hotspot 3D a eventi presenti nel GIS;
- rendere accessibili le scene da browser;
- permettere, quando supportato, l’uso con smartphone, visori passivi o headset VR.

La cosa importante per il progetto è che WebXR può essere configurato usando soprattutto **file di testo**:

```text
HTML → struttura della scena
JavaScript → logica di caricamento e interazione
JSON → eventi, hotspot, tag, testi narrativi
GeoJSON → dati provenienti dal GIS
CSS → eventuale interfaccia 2D
```

Questo rende il sistema collaborativo: chi lavora al progetto può contribuire modificando file leggibili, versionabili e controllabili con Git.

---

## 3. Perché usare file piatti

Per ora scegliamo una gestione a **file piatto**.

Questo significa che non usiamo un database online o un backend complesso. I dati della scena stanno in file normali:

```text
.json
.geojson
.html
.js
.glb
.png
.mp3
```

La scelta è intenzionale.

Vantaggi:

- ogni modifica può essere tracciata da Git;
- i membri del progetto possono proporre modifiche con pull request;
- i testi narrativi restano leggibili;
- gli eventi possono essere modificati senza ricostruire il modello 3D;
- il GIS può esportare dati in GeoJSON;
- il viewer WebXR può caricare questi dati direttamente;
- il progetto resta semplice da distribuire e testare.

In questa fase il punto non è avere una piattaforma complessa, ma un sistema chiaro:

```text
modifico un evento nel file dati
     ↓
ricarico la pagina
     ↓
l’evento compare nella scena 3D
```

---

## 4. Relazione tra GIS e XR

Il GIS contiene il mondo narrativo in forma spaziale e semantica.

La scena WebXR ricrea una parte di quel mondo in forma immersiva.

La relazione è questa:

```text
GIS
- coordinate reali
- luoghi
- layer
- eventi
- relazioni spaziali
- tag

XR
- modello 3D
- coordinate locali x/y/z
- hotspot
- pannelli narrativi
- audio
- teletrasporti
- interazioni
```

Il GIS può dire:

```text
qui c’è il convitto
qui c’è l’ingresso
qui accade un evento
questo evento riguarda Caterina
questo punto è legato al tema della sorveglianza
```

WebXR trasforma queste informazioni in esperienza:

```text
vedo l’ingresso
mi avvicino
guardo il punto attivo
parte il frammento narrativo
capisco che quello spazio ha un significato nel franchise
```

---

## 5. Coordinate GIS e coordinate 3D

Il GIS lavora con coordinate geografiche o metriche.

Esempio:

```text
latitudine / longitudine
EPSG:4326
EPSG:3857
altri sistemi di riferimento
```

La scena 3D invece lavora con coordinate locali:

```text
x, y, z
```

Per questo nei dati possiamo conservare entrambe le informazioni.

Esempio GeoJSON:

```json
{
  "type": "Feature",
  "properties": {
    "id": "hs_ingresso_convitto",
    "name": "Ingresso del convitto",
    "type": "warning",
    "event_id": "ev_accesso_negato",
    "position_3d": [0, 1.5, -3],
    "tags": [
      "accesso_negato",
      "sorveglianza",
      "infrastruttura_obsoleta",
      "europa2050"
    ]
  },
  "geometry": {
    "type": "Point",
    "coordinates": [11.6201, 44.8372]
  }
}
```

Qui:

```text
geometry.coordinates
```

indica la posizione nel GIS.

```text
properties.position_3d
```

indica la posizione nella scena WebXR.

---

## 6. Il convitto come primo viewer

Il primo ambiente XR è il **convitto**.

Il convitto non va pensato solo come edificio 3D, ma come nodo narrativo del franchise.

Dentro il viewer del convitto possiamo inserire:

- ingresso;
- corridoi;
- stanze;
- archivio;
- terminali;
- porte;
- documenti;
- oggetti;
- tracce sonore;
- eventi narrativi;
- frammenti di memoria;
- collegamenti alla storia principale.

Esempio narrativo:

```text
Il visitatore entra nel convitto.
Vede un terminale obsoleto.
Lo guarda per alcuni secondi.
Si apre l’evento:
“Caterina viene riconosciuta come attività non classificabile”.
```

Questo evento non nasce dentro WebXR. Nasce nel GIS/narrazione e viene solo visualizzato in 3D.

---

## 7. Struttura consigliata

```text
xr/
│
├── README.md
│
├── viewers/
│   └── convitto/
│       ├── index.html
│       ├── js/
│       │   ├── main.js
│       │   ├── load-gis-data.js
│       │   └── interactions.js
│       ├── data/
│       │   ├── convitto_places.geojson
│       │   ├── convitto_points.json
│       │   └── convitto_events.json
│       └── assets/
│           ├── models/
│           │   └── convitto.glb
│           ├── textures/
│           ├── audio/
│           └── icons/
│
└── scripts/
    ├── create_glb_from_blender.py
    └── export_gis_to_xr.py
```

---

## 8. File principali

### `index.html`

Contiene la scena WebXR/A-Frame.

Esempio:

```html
<a-scene>
  <a-assets>
    <a-asset-item id="convitto" src="assets/models/convitto.glb"></a-asset-item>
  </a-assets>

  <a-entity gltf-model="#convitto"></a-entity>

  <a-entity id="hotspots"></a-entity>

  <a-camera position="0 1.6 4">
    <a-cursor
      fuse="true"
      fuse-timeout="1500"
      raycaster="objects: .hotspot">
    </a-cursor>
  </a-camera>
</a-scene>
```

### `data/convitto_points.json`

Contiene i punti attivi della scena.

```json
[
  {
    "id": "hs_ingresso",
    "name": "Ingresso del convitto",
    "type": "warning",
    "position_3d": [0, 1.5, -3],
    "event_id": "ev_accesso_negato",
    "tags": ["accesso_negato", "sorveglianza", "europa2050"]
  }
]
```

### `data/convitto_events.json`

Contiene gli eventi narrativi.

```json
{
  "ev_accesso_negato": {
    "title": "Accesso negato",
    "year": 2050,
    "text": "Il sistema non identifica Caterina come persona, ma come attività non classificabile."
  }
}
```

### `data/convitto_places.geojson`

Contiene i luoghi esportati o derivati dal GIS.

---

## 9. Hotspot e interazione

Gli hotspot sono punti attivi dentro la scena.

Possono rappresentare:

- una porta;
- un terminale;
- un documento;
- una stanza;
- un punto di memoria;
- un allarme;
- una soglia;
- un evento.

Nel viewer vengono creati automaticamente leggendo i file dati.

Esempio logico:

```text
leggo convitto_points.json
     ↓
per ogni punto creo un oggetto 3D
     ↓
se l’utente lo guarda o lo clicca
     ↓
cerco l’evento collegato
     ↓
mostro testo/audio/immagine
```

Per visori passivi e smartphone si può usare la selezione tramite sguardo:

```html
<a-cursor
  fuse="true"
  fuse-timeout="1500"
  raycaster="objects: .hotspot">
</a-cursor>
```

In questo modo l’utente non ha bisogno di controller: guarda un punto per 1.5 secondi e lo attiva.

---

## 10. Pipeline di sviluppo

La pipeline proposta è:

```text
1. Il mondo narrativo viene costruito nel GIS
   ↓
2. Luoghi, eventi e tag vengono esportati in JSON/GeoJSON
   ↓
3. Il luogo viene modellato o ricostruito in 3D
   ↓
4. Il modello viene esportato in formato .glb
   ↓
5. Il viewer WebXR carica il modello .glb
   ↓
6. Il viewer carica i dati JSON/GeoJSON
   ↓
7. Gli hotspot vengono generati automaticamente
   ↓
8. L’utente esplora il luogo
   ↓
9. Gli eventi narrativi emergono nello spazio 3D
```

Questa è la logica principale del progetto XR.

---

## 11. Creazione del file `.glb`

Il formato consigliato per il web è:

```text
.glb
```

Il file `.glb` è un glTF binario. Può contenere:

- mesh;
- materiali;
- texture;
- gerarchie;
- animazioni.

Il modello del convitto va salvato in:

```text
xr/viewers/convitto/assets/models/convitto.glb
```

---

## 12. Script per esportare `.glb` da Blender

File:

```text
xr/scripts/create_glb_from_blender.py
```

Contenuto:

```python
import bpy
import sys
from pathlib import Path

def export_glb(output_path: str):
    output = Path(output_path)
    output.parent.mkdir(parents=True, exist_ok=True)

    bpy.ops.object.select_all(action="SELECT")

    bpy.ops.export_scene.gltf(
        filepath=str(output),
        export_format="GLB",
        use_selection=True,
        export_yup=True,
        export_apply=True
    )

    print(f"GLB esportato in: {output}")

if __name__ == "__main__":
    argv = sys.argv

    if "--" not in argv:
        raise SystemExit(
            "Uso: blender file.blend --background --python create_glb_from_blender.py -- output.glb"
        )

    args = argv[argv.index("--") + 1:]

    if len(args) < 1:
        raise SystemExit(
            "Errore: specificare il percorso di output del file .glb"
        )

    export_glb(args[0])
```

Esecuzione:

```bash
blender convitto.blend --background \
  --python xr/scripts/create_glb_from_blender.py \
  -- xr/viewers/convitto/assets/models/convitto.glb
```

---

## 13. Avvio locale

Dalla cartella del viewer:

```bash
cd xr/viewers/convitto
python3 -m http.server 8081
```

Poi aprire:

```text
http://localhost:8081
```

Per aprire dal cellulare sulla stessa rete:

```text
http://IP_DEL_PC:8081
```

Per esempio:

```text
http://192.168.1.45:8081
```

---

## 14. Test WebXR con HTTPS

Per alcune funzioni WebXR serve HTTPS.

Per esporre il server locale tramite HTTPS:

```bash
ngrok http 8081
```

Ngrok genera un indirizzo simile a:

```text
https://qualcosa.ngrok-free.dev
```

Aprire quell’indirizzo dal cellulare.

---

## 15. Regole per collaborare

Chi partecipa al progetto può contribuire in modi diversi.

### Chi lavora sul GIS

Aggiorna:

```text
data/*.geojson
```

con luoghi, punti, layer, coordinate e tag.

### Chi lavora sulla narrazione

Aggiorna:

```text
data/*_events.json
```

con titoli, testi, date narrative, personaggi coinvolti e frammenti.

### Chi lavora sul 3D

Aggiorna:

```text
assets/models/*.glb
assets/textures/
```

### Chi lavora sul viewer

Aggiorna:

```text
index.html
js/*.js
```

### Regola importante

Non bisogna modificare il modello 3D per cambiare un evento narrativo.

Il modello 3D dà forma allo spazio.

I file JSON/GeoJSON danno significato allo spazio.

---

## 16. Sintesi

La cartella `xr/` serve a portare il GIS narrativo di Cnot-Franchise dentro un ambiente 3D esplorabile.

```text
Il GIS costruisce il mondo.
WebXR permette di entrarci.
I file di testo collegano spazio, eventi e racconto.
```

Il convitto è il primo esperimento: un luogo del franchise trasformato in archivio narrativo immersivo.
