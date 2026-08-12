# Incremental qgis2web / OpenLayers workflow

Questo documento descrive il workflow usato nel progetto CNOT GIS per aggiungere
nuovi layer o nuove filiere alla webmap senza riesportare e sostituire ogni volta
l'intero progetto qgis2web.

La procedura è stata verificata su un export qgis2web in modalità **OpenLayers**.

---

## 1. Obiettivo

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

Il workflow incrementale adottato è invece:

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

In questo caso `layersList` normalmente non deve essere modificato.

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

# 11. Interazione con il reader e con le storie

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

# 12. Procedura di test prima della pubblicazione

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

# 13. Regola sui dati

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

# 14. Workflow operativo riassunto

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
       webmap_test
             │
             ▼
           TEST
             │
             ▼
        pubblicazione
```

---

# 15. Evoluzione prevista

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

In questo modello qgis2web continua a svolgere un ruolo fondamentale:

```text
QGIS = editor cartografico
qgis2web = traduttore QGIS → OpenLayers
CNOT GIS = applicazione web stabile
```

qgis2web non viene più usato per rigenerare l'intera applicazione a ogni modifica,
ma come compilatore dei nuovi elementi cartografici.
