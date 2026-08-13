# CNOT GIS — workflow incrementale qgis2web e caricamento diretto GeoJSON / OpenLayers

Questo documento descrive i workflow usati nel progetto CNOT GIS per aggiungere
nuovi layer o nuove filiere alla webmap senza riesportare e sostituire ogni volta
l'intero progetto qgis2web.

Sono state verificate due modalità complementari:

1. **workflow incrementale QGIS → qgis2web → OpenLayers**, utile quando si vuole
   continuare a usare QGIS per simbologia, popup e organizzazione cartografica;
2. **caricamento diretto GeoJSON → OpenLayers**, utile quando il dato geografico
   esiste già come GeoJSON e non è necessario farlo transitare da qgis2web.

La seconda modalità apre la possibilità di rendere QGIS e qgis2web opzionali per
una parte crescente dei nuovi layer, mantenendo compatibilità con la webmap
qgis2web già esistente.

Le procedure sono state verificate su un export qgis2web in modalità **OpenLayers**.

---

# 1. Obiettivo e due percorsi possibili

Il workflow qgis2web standard è:

```text
QGIS
  ↓
qgis2web
  ↓
export completo della webmap
```

Quando il numero di layer cresce, riesportare l'intera mappa per ogni nuovo
racconto o filiera diventa poco pratico.

Il primo workflow incrementale adottato è:

```text
QGIS
  ↓
qgis2web
  ↓
export SOLO dei nuovi layer / del nuovo gruppo
  ↓
estrazione del delta
  ↓
integrazione nella webmap già esistente
```

La webmap principale rimane quindi stabile.

È stato inoltre verificato un secondo percorso:

```text
GeoJSON canonico
      ↓
OpenLayers
      ↓
ol.source.Vector
      ↓
ol.layer.Vector
      ↓
gruppo OpenLayers
      ↓
layersList
      ↓
webmap qgis2web esistente
```

In questo secondo caso il nuovo layer **non viene esportato da qgis2web**:
OpenLayers legge direttamente il file `.geojson`.

Questo è particolarmente interessante per CNOT perché molti layer nascono già
come GeoJSON. In questi casi il GeoJSON può diventare la sorgente canonica del
dato e non è necessario duplicarlo in un file `layers/X.js` generato da qgis2web.

---

# 2. Struttura di un export qgis2web OpenLayers

Un export tipico contiene:

```text
index.html

layers/
    layer_A.js
    layer_B.js
    ...
    layers.js

styles/
    layer_A_style.js
    layer_B_style.js
    ...
    legend/
        layer_A.png
        layer_B.png

resources/
    ol.js
    qgis2web.js
    qgis2web.css
    qgis2web_expressions.js
    functions.js
    ...

webfonts/
images/
```

## 2.1 `layers/X.js`

Contiene i dati geografici del singolo layer:

- geometria;
- coordinate;
- attributi.

Esempio concettuale:

```javascript
var json_my_layer_0 = {
    "type": "FeatureCollection",
    "features": [...]
};
```

I dati vettoriali sono normalmente in EPSG:4326.

---

## 2.2 `styles/X_style.js`

Contiene la funzione OpenLayers che traduce la simbologia QGIS:

```javascript
var style_my_layer_0 = function(feature, resolution) {
    ...
};
```

Qui vengono definiti, a seconda del layer:

- colore;
- spessore;
- simbolo;
- dimensione;
- opacità;
- label;
- eventuali regole categorizzate o basate su attributi.

---

## 2.3 `styles/legend/`

Contiene le immagini usate nel layer switcher / legenda.

Un layer può avere una sola immagine:

```text
styles/legend/my_layer_0.png
```

oppure più immagini se usa una simbologia categorizzata:

```text
my_layer_0_0.png
my_layer_0_1.png
my_layer_0_2.png
```

---

## 2.4 `layers/layers.js`

È il file che trasforma i dati esportati in veri oggetti OpenLayers.

Per ogni layer contiene, in forma semplificata:

```javascript
var format_my_layer_0 = new ol.format.GeoJSON();

var features_my_layer_0 =
    format_my_layer_0.readFeatures(
        json_my_layer_0,
        {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }
    );

var jsonSource_my_layer_0 =
    new ol.source.Vector();

jsonSource_my_layer_0.addFeatures(
    features_my_layer_0
);

var lyr_my_layer_0 =
    new ol.layer.Vector({
        source: jsonSource_my_layer_0,
        style: style_my_layer_0,
        interactive: true
    });
```

`layers.js` contiene inoltre:

- visibilità iniziale;
- titolo;
- legenda;
- metadata dei campi;
- configurazione popup;
- gruppi di layer;
- `layersList`.

---

## 2.5 `index.html`

Carica i file nell'ordine corretto:

```text
1. dati geografici
2. stili
3. layers/layers.js
4. runtime qgis2web
```

In forma semplificata:

```html
<script src="layers/my_layer_0.js"></script>

<script src="styles/my_layer_0_style.js"></script>

<script src="./layers/layers.js"></script>

<script src="./resources/qgis2web.js"></script>
```

L'ordine è importante perché `layers.js` utilizza variabili e funzioni definite
nei file caricati prima.

---

# 3. File generalmente stabili

Quando viene aggiunto un normale layer vettoriale, normalmente NON è necessario
sostituire:

```text
resources/ol.js
resources/qgis2web.js
resources/qgis2web.css
resources/qgis2web_expressions.js
resources/functions.js
webfonts/
```

Questi file costituiscono principalmente il runtime della webmap.

`qgis2web.js` lavora genericamente su `layersList` e sulle proprietà dei layer:
non contiene normalmente riferimenti espliciti ai singoli `lyr_*`.

Può essere necessario riesportare o aggiornare il runtime se vengono cambiate
impostazioni globali della webmap, per esempio:

- extent iniziale;
- controlli;
- geocoder;
- strumenti di misura;
- configurazioni globali;
- funzionalità qgis2web aggiuntive.

---

# 4. Preparazione dei nuovi layer in QGIS

## Caso A — nuovo layer in un gruppo già esistente

Esempio:

```text
H2
├── 01_hydrogen_industrial_use
├── ...
└── 09_hydrogen_storage
```

Creare/importare normalmente il nuovo layer in QGIS e applicare:

- simbologia;
- label;
- attributi;
- popup;
- visibilità;
- posizione corretta nel gruppo.

---

## Caso B — nuova filiera / nuovo gruppo

Esempio:

```text
Robotics
├── 01_robotics_research
├── 02_robotics_components
└── 03_robot_manufacturing
```

Creare il gruppo in QGIS e inserirvi i nuovi layer.

La gerarchia definita nel progetto QGIS verrà poi riprodotta da qgis2web in
`layers/layers.js`.

---

# 5. Export con qgis2web

Aprire qgis2web e selezionare **OpenLayers**.

Nella lista dei layer:

1. disattivare l'export di tutti i layer già presenti nella webmap;
2. lasciare selezionati soltanto i nuovi layer;
3. nel caso di una nuova filiera, esportare soltanto il nuovo gruppo;
4. mantenere le normali impostazioni di stile e popup;
5. eseguire l'export in una cartella temporanea.

Esempio:

```text
qgis2web_robotics_temp/
```

Non utilizzare questa directory per sostituire direttamente la webmap
principale.

È un **export intermedio** da cui estrarre i nuovi elementi.

---

# 6. Cosa prendere dal nuovo export

Per ciascun nuovo layer copiare:

```text
layers/X.js

styles/X_style.js

styles/legend/X.png
```

più eventuali risorse specifiche dello stile, per esempio SVG.

Esempio:

```text
layers/
    01_robotics_research_0.js
    02_robotics_components_1.js
    03_robot_manufacturing_2.js

styles/
    01_robotics_research_0_style.js
    02_robotics_components_1_style.js
    03_robot_manufacturing_2_style.js

styles/legend/
    01_robotics_research_0.png
    02_robotics_components_1.png
    03_robot_manufacturing_2.png
```

I suffissi `_0`, `_1`, `_2` possono essere mantenuti così come generati da
qgis2web, purché il nome completo del layer rimanga univoco nella webmap.

Non è necessario rinumerarli in base al numero totale di layer della mappa.

---

# 7. Aggiornamento di `index.html`

Per ogni nuovo layer aggiungere il caricamento del file geografico:

```html
<script src="layers/01_robotics_research_0.js"></script>
```

e del relativo stile:

```html
<script src="styles/01_robotics_research_0_style.js"></script>
```

Questi include devono comparire **prima** di:

```html
<script src="./layers/layers.js"></script>
```

Schema:

```text
layers/X.js
      ↓
styles/X_style.js
      ↓
layers/layers.js
      ↓
resources/qgis2web.js
```

---

# 8. Aggiornamento di `layers/layers.js`

Dal `layers.js` generato dal piccolo export qgis2web devono essere trasferite
le definizioni relative ai nuovi layer.

Per ogni layer:

```text
format_X
features_X
jsonSource_X
lyr_X
```

Devono essere trasferite anche le proprietà generate da qgis2web, come:

```text
fieldAliases
fieldImages
fieldLabels
visibility
popup metadata
```

Questo è importante perché garantisce che il nuovo layer continui a comportarsi
come un normale layer qgis2web.

---

# 9. Inserimento in un gruppo esistente

Se il gruppo esiste già, è sufficiente aggiungere il nuovo `lyr_X` alla sua lista.

Esempio:

```javascript
var group_H2 = new ol.layer.Group({
    layers: [
        ...
        lyr_09_hydrogen_storage_0
    ],
    title: 'H2'
});
```

In questo caso `layersList` normalmente non deve essere modificato, **a condizione
che il gruppo sia realmente già presente in `layersList`**. La sola esistenza di
una variabile JavaScript come `group_H2` o `group_Robotics` non garantisce che il
gruppo appartenga all'albero effettivo della mappa. Questa distinzione diventa
particolarmente importante nel caricamento diretto GeoJSON descritto nella
sezione 11.

---

# 10. Creazione di un nuovo gruppo

Se viene introdotta una nuova filiera, trasferire anche la definizione del gruppo
generata da qgis2web.

Esempio:

```javascript
var group_Robotics = new ol.layer.Group({
    layers: [
        lyr_01_robotics_research_0,
        lyr_02_robotics_components_1,
        lyr_03_robot_manufacturing_2
    ],
    fold: 'open',
    title: 'Robotics'
});
```

Poi aggiungere il gruppo a `layersList`:

```javascript
var layersList = [
    ...
    group_H2,
    group_02_ENERGIA,
    group_Robotics,
    group_Supercomputer,
    ...
];
```

L'ordine determina la posizione del gruppo nel layer switcher.

---

# 11. Percorso alternativo: GeoJSON diretto → OpenLayers

Questa modalità è stata verificata aggiungendo un nuovo layer reale alla webmap
senza esportarlo con qgis2web.

L'idea è:

```text
geojson/04_robotics_deployment.geojson
                ↓
cnot_direct_geojson_layers.js
                ↓
OpenLayers
                ↓
webmap esistente
```

Il file GeoJSON rimane quindi il dato geografico originale e viene letto
direttamente dal browser.

## 11.1 Struttura dei file

Esempio:

```text
map/
├── index.html
├── geojson/
│   └── 04_robotics_deployment.geojson
├── layers/
│   ├── layers.js
│   └── cnot_direct_geojson_layers.js
└── resources/
    └── qgis2web.js
```

Il loader diretto viene caricato nell'`index.html` **dopo** `layers/layers.js`
e **prima** di `qgis2web.js`:

```html
<script src="./layers/layers.js" type="text/javascript"></script>
<script src="./layers/cnot_direct_geojson_layers.js"></script>
<script src="./resources/Autolinker.min.js"></script>
<script src="./resources/qgis2web.js"></script>
```

Questo ordine è importante:

```text
layers.js
   ↓
crea i gruppi e layersList

cnot_direct_geojson_layers.js
   ↓
aggiunge i layer diretti ai gruppi / layersList

qgis2web.js
   ↓
costruisce la mappa usando l'albero già aggiornato
```

## 11.2 Il base URL del GeoJSON

L'URL passato a OpenLayers è risolto rispetto alla pagina HTML, non rispetto
al file JavaScript che contiene il loader.

Se la pagina è:

```text
http://localhost:8001/gis/map/index.html
```

allora:

```javascript
url: 'geojson/04_robotics_deployment.geojson'
```

viene risolto come:

```text
http://localhost:8001/gis/map/geojson/04_robotics_deployment.geojson
```

Per controllare il risultato:

```javascript
new URL(
    'geojson/04_robotics_deployment.geojson',
    document.baseURI
).href
```

## 11.3 Creazione della source OpenLayers

Esempio:

```javascript
var source_04_robotics_deployment = new ol.source.Vector({
    url: 'geojson/04_robotics_deployment.geojson',
    format: new ol.format.GeoJSON()
});
```

A differenza dei normali layer qgis2web, qui il contenuto del GeoJSON non viene
prima trasformato in `layers/X.js`: il browser legge direttamente il file
`.geojson`.

## 11.4 Creazione del layer

```javascript
var lyr_04_robotics_deployment = new ol.layer.Vector({
    source: source_04_robotics_deployment,
    title: '04_robotics_deployment',
    popuplayertitle: '04_robotics_deployment',
    interactive: true
});
```

È possibile aggiungere anche metadata compatibili con il resto della webmap:

```javascript
lyr_04_robotics_deployment.set('cnotId', 'robotics_deployment');
lyr_04_robotics_deployment.set('fieldAliases', { ... });
lyr_04_robotics_deployment.set('fieldImages', { ... });
lyr_04_robotics_deployment.set('fieldLabels', { ... });
```

La simbologia può essere definita direttamente con le API OpenLayers oppure,
durante la fase di transizione, può continuare a essere ricavata da QGIS /
qgis2web quando conviene.

## 11.5 Inserimento in un gruppo esistente

Se il gruppo esiste già come oggetto JavaScript:

```javascript
if (!group_Robotics
        .getLayers()
        .getArray()
        .includes(lyr_04_robotics_deployment)) {

    group_Robotics
        .getLayers()
        .push(lyr_04_robotics_deployment);
}
```

Il controllo `includes()` rende l'operazione idempotente e impedisce di inserire
due volte lo stesso layer.

## 11.6 Punto critico: il gruppo deve appartenere a `layersList`

Durante il test è emerso un dettaglio importante. È possibile avere il nuovo
layer realmente dentro `group_Robotics` ma avere contemporaneamente:

```javascript
layersList.includes(group_Robotics)
```

uguale a `false`. In questo caso il gruppo esiste come oggetto JavaScript, ma
non appartiene all'albero che qgis2web passa alla mappa.

La conseguenza è:

```text
group_Robotics
    └── nuovo layer      ✓

layersList
    └── Robotics assente ✗

map
    └── nuovo layer assente
```

Quando necessario:

```javascript
if (!layersList.includes(group_Robotics)) {
    layersList.push(group_Robotics);
}
```

Non è necessario usare `map.addLayer(group_Robotics)` se il loader viene
eseguito prima di `qgis2web.js`.

La catena corretta diventa:

```text
GeoJSON
   ↓
VectorSource
   ↓
VectorLayer
   ↓
group_Robotics
   ↓
layersList
   ↓
qgis2web.js
   ↓
map
```

## 11.7 Perché una source può rimanere a zero feature

Durante il test `source_04_robotics_deployment.getFeatures().length` restituiva
inizialmente `0`. Il file era però raggiungibile con `fetch()` (status `200`) e
OpenLayers riusciva a interpretarlo con `readFeatures()` restituendo `1`. Anche
il caricamento manuale della source funzionava.

Nel test specifico la causa non era quindi il GeoJSON: il layer non apparteneva
ancora all'albero effettivo della mappa. Dopo l'inserimento del gruppo in
`layersList`, OpenLayers ha caricato automaticamente la source durante il normale
ciclo di rendering.

Nota: in generale `getFeatures().length === 0` osservato immediatamente dopo il
caricamento della pagina non è da solo una diagnosi sufficiente, perché una source
con `url` viene caricata in modo asincrono. Va interpretato insieme ai test su URL,
`fetch`, parsing GeoJSON e appartenenza del layer all'albero della mappa.

## 11.8 Test consigliati per i layer diretti

URL effettivo:

```javascript
new URL('geojson/04_robotics_deployment.geojson', document.baseURI).href
```

File raggiungibile:

```javascript
r = await fetch('geojson/04_robotics_deployment.geojson')
r.status
```

Risultato atteso: `200`.

GeoJSON valido:

```javascript
j = await r.json()
j.features.length
new ol.format.GeoJSON().readFeatures(j).length
```

Layer nel gruppo:

```javascript
group_Robotics.getLayers().getArray()
    .includes(lyr_04_robotics_deployment)
```

Gruppo registrato:

```javascript
layersList.includes(group_Robotics)
```

Verifica ricorsiva nell'albero della mappa:

```javascript
function mapContainsLayer(collection, target) {
    for (const layer of collection.getArray()) {
        if (layer === target) return true;
        if (layer instanceof ol.layer.Group) {
            if (mapContainsLayer(layer.getLayers(), target)) return true;
        }
    }
    return false;
}

mapContainsLayer(map.getLayers(), lyr_04_robotics_deployment);
```

Risultato atteso: `true`. Infine:

```javascript
source_04_robotics_deployment.getFeatures().length
```

deve essere maggiore di zero.

## 11.9 Uso via HTTP

Il caricamento tramite `ol.source.Vector({ url: ... })` utilizza una richiesta
HTTP/fetch. Aprendo direttamente la pagina con `file:///...`, il browser può
bloccare la lettura del GeoJSON per le regole same-origin/CORS.

Per lo sviluppo locale è quindi consigliato servire il progetto via HTTP, per
esempio:

```bash
python3 -m http.server 8001
```

La pubblicazione su GitHub Pages o altro normale server HTTP/HTTPS non presenta
questo problema.

---

# 12. Interazione con il reader e con le storie

Una volta creato:

```javascript
var lyr_my_layer_0 = new ol.layer.Vector(...)
```

il nuovo layer è un normale layer OpenLayers e può essere controllato dal reader
e dalle API narrative esattamente come gli altri.

Le storie possono quindi:

```text
mostrare il layer
nascondere il layer
fare fit sul layer
spegnere altri layer
riaccendere il layer
```

La condizione importante è che l'API del reader possa risolvere il nome/ID del
nuovo oggetto `lyr_*`.

Quando si aggiunge un nuovo layer verificare quindi anche che i meccanismi:

```text
showLayer(...)
hideLayer(...)
fitToLayer(...)
hideAll(...)
```

continuino a individuarlo correttamente.

---

# 13. Procedura di test prima della pubblicazione

Non modificare direttamente la copia pubblicata.

Creare prima:

```text
webmap_test/
```

e applicare lì l'integrazione incrementale.

Controllare:

1. caricamento della mappa;
2. presenza del nuovo gruppo nel layer switcher;
3. presenza di tutti i nuovi layer;
4. accensione/spegnimento dei layer;
5. simbologia;
6. label;
7. legenda;
8. popup;
9. eventuali link nei popup;
10. ordine dei layer;
11. funzionamento dei gruppi precedenti;
12. funzionamento del reader;
13. funzionamento delle storie già pubblicate;
14. `showLayer`, `hideLayer`, `fitToLayer`, `hideAll`.

Solo dopo questi test sostituire i file della webmap pubblicata.

---

# 14. Regola sui dati

I layer destinati alla mappa pubblica devono contenere soltanto dati che possono
rimanere stabilmente nel GIS.

Non utilizzare layer fittizi o relazioni ipotetiche nella versione destinata alla
pubblicazione.

Per i dati documentari è consigliato mantenere almeno:

```text
id
name
category
description
source_label
source_url
coordinate_precision
```

Le relazioni fra entità devono essere rappresentate soltanto quando esiste una
base documentabile per affermarle.

---

# 15. Workflow operativo riassunto

Esistono ora due percorsi operativi.

### Percorso A — QGIS / qgis2web incrementale

```text
NUOVO RACCONTO / NUOVA FILIERA
             │
             ▼
        creo i layer
           in QGIS
             │
             ▼
      imposto gli stili
             │
             ▼
qgis2web / OpenLayers
export SOLO dei nuovi layer
             │
             ▼
      export temporaneo
             │
      ┌──────┴───────┐
      ▼              ▼
 layers/X.js    styles/X_style.js
      │              │
      └──────┬───────┘
             ▼
 aggiorno layers/layers.js
             │
             ▼
 aggiorno gli include
      in index.html
             │
             ▼
       webmap_test → TEST → pubblicazione
```

### Percorso B — GeoJSON diretto

```text
NUOVO DATO GEOJSON
        │
        ▼
geojson/X.geojson
        │
        ▼
cnot_direct_geojson_layers.js
        │
        ├── ol.source.Vector
        ├── ol.layer.Vector
        ├── metadata
        └── eventuale stile
        │
        ▼
gruppo OpenLayers
        │
        ▼
layersList
        │
        ▼
qgis2web.js → mappa OpenLayers → reader / Story API
```

Il percorso B evita la duplicazione `GeoJSON → layers/X.js` e permette di
mantenere direttamente il GeoJSON come sorgente canonica del dato.

---

# 16. Evoluzione prevista

La procedura descritta sopra è stata verificata manualmente.

Il passo successivo è automatizzare il merge con uno script che riceva:

```text
1. export webmap corrente
2. piccolo export qgis2web contenente i nuovi layer
```

e produca automaticamente:

```text
+ nuovi layers/*.js
+ nuovi styles/*.js
+ nuove legende/assets
~ nuovo layers/layers.js
~ nuovo index.html
```

Il test del caricamento diretto GeoJSON modifica in parte questa prospettiva.

Il modello può ora essere visto così:

```text
                 QGIS
            editor / stile
                 │ opzionale
                 ▼
              qgis2web
       traduzione / compilazione
                 │
                 ▼
GeoJSON canonici ─────────────→ OpenLayers
                               │
                               ▼
                            CNOT GIS
```

QGIS rimane molto utile per editing cartografico visuale, controllo delle
geometrie, simbologia complessa, label, progettazione dei popup e verifica
geografica.

qgis2web rimane utile come traduttore della simbologia QGIS in funzioni
OpenLayers, generatore di metadata/configurazioni popup e compilatore
incrementale per layer complessi.

Ma per un layer che nasce già come GeoJSON e richiede una configurazione semplice,
il percorso può essere direttamente:

```text
GeoJSON → OpenLayers → CNOT GIS
```

Quindi **QGIS e qgis2web non sono più passaggi obbligatori per ogni nuovo dato**.

L'evoluzione naturale del progetto è separare sempre meglio:

```text
DATI
    GeoJSON canonici

PRESENTAZIONE
    stili OpenLayers / stili eventualmente derivati da QGIS

STRUTTURA WEBMAP
    gruppi + registry + layersList

API NARRATIVA
    showLayer / hideLayer / fitToLayer / hideAll
```

Il passaggio successivo può essere la creazione di un loader CNOT più generale
che, dato un piccolo manifest dei layer, costruisca automaticamente source, layer,
metadata, stile, appartenenza al gruppo, registrazione in `layersList` e ID stabile
per la Story API.

In questo scenario qgis2web diventa progressivamente un **tool opzionale**,
anziché il generatore obbligatorio dell'intera applicazione.
