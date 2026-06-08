# Archive Reader

Guida minima per aggiungere racconti geolocalizzati all'archivio narrativo.

---

# 1. Architettura generale

Il sistema è composto da tre parti:

## Archive Reader

Legge `stories/index.json`, mostra i racconti, permette:

- ricerca
- ordinamento
- apertura del racconto
- navigazione verso il nodo GIS

## GIS qgis2web

Mostra la mappa e viene controllato dal reader tramite coordinate GPS.

## Racconto HTML

Contiene il testo narrativo e può muovere la mappa tramite link interni.

---

## Flusso principale

```text
stories/index.json
        ↓
Archive Reader
   ├── Vai al nodo  → centra la mappa GIS
   └── Leggi        → apre il racconto

racconto.html
        ↓
window.parent.gotoGIS(lat, lon)
        ↓
mappa GIS + reader minimizzato
```

---

# 2. Aggiornare stories/index.json

Ogni nuovo racconto deve avere una voce dentro:

```text
stories/index.json
```

Il reader usa questi dati per:

- mostrare il racconto nella lista
- effettuare la ricerca
- effettuare l'ordinamento
- aprire il racconto
- centrare la mappa

## Esempio completo

```json
{
  "archive_name": "CNOT",
  "archive_title": "Europa Quantistica 2041",
  "stories": [
    {
      "id": "cnot_1_7_convitto",
      "title": "CNOT 1.7 dentro all'Ex Convitto",
      "author": "Francesco Sisini",
      "date": "2041-09-03",
      "location_name": "Ex Convitto Cardinal Mora",
      "latitude": 44.82748,
      "longitude": 11.61067,
      "story_file": "stories/cnot_1_7_convitto.html",
      "tags": [
        "cnot",
        "urbex",
        "convitto",
        "ferrara"
      ]
    }
  ]
}
```

## Campi consigliati

| Campo | Descrizione |
|---------|---------|
| id | identificatore univoco |
| title | titolo mostrato nel reader |
| author | autore |
| date | data narrativa o archivistica |
| location_name | nome leggibile del luogo |
| latitude | latitudine |
| longitude | longitudine |
| story_file | file HTML del racconto |
| tags | parole chiave |

### Attenzione

Nel reader utilizziamo:

```json
"latitude": 44.82748,
"longitude": 11.61067
```

mentre nei GeoJSON spesso si usa:

```json
"coordinates": [11.61067, 44.82748]
```

ovvero:

```text
[longitude, latitude]
```

---

# 3. Creare il racconto

Il file indicato in:

```json
"story_file": "stories/cnot_1_7_convitto.html"
```

deve esistere realmente nella cartella `stories`.

## Esempio minimo

```html
<!DOCTYPE html>
<html lang="it">

<head>
  <meta charset="UTF-8">
  <title>CNOT 1.7 dentro all'Ex Convitto</title>
</head>

<body>

<h1>CNOT 1.7 dentro all'Ex Convitto</h1>

<p>
Laura si ferma davanti all'ingresso.
La mappa indica un punto,
ma il racconto ne nasconde un altro.
</p>

</body>
</html>
```

---

# 4. Inserire link GIS nel racconto

Dentro un racconto è possibile navigare la mappa.

La funzione disponibile è:

```javascript
window.parent.gotoGIS(latitudine, longitudine);
```

## Esempio

```html
<a href="#"
   onclick="window.parent.gotoGIS(44.81995594,11.62753480); return false;">
   Vai alla casa di Laura e Vale
</a>
```

Quando il lettore clicca:

```text
1. la mappa si centra sulle coordinate
2. il reader si minimizza
3. il pannello archivio si collassa
4. il lettore vede immediatamente il punto
```

## Versione bottone

```html
<button onclick="window.parent.gotoGIS(44.81995594,11.62753480)">
  Vai alla casa di Laura e Vale
</button>
```

---

# 5. Procedura completa per aggiungere un racconto

## Passo 1

Creare:

```text
stories/mio_racconto.html
```

## Passo 2

Aggiungere una voce in:

```text
stories/index.json
```

## Passo 3

Compilare:

```json
{
  "title": "...",
  "author": "...",
  "date": "...",
  "location_name": "...",
  "latitude": ...,
  "longitude": ...,
  "story_file": "stories/..."
}
```

## Passo 4

Aprire il reader e verificare che il racconto compaia.

## Passo 5

Provare:

```text
Vai al nodo
```

per controllare le coordinate.

## Passo 6

Provare:

```text
Leggi
```

per aprire il racconto.

## Passo 7

Inserire eventuali link:

```javascript
window.parent.gotoGIS(...)
```

per guidare il lettore attraverso la mappa.

---

# 6. Filosofia del sistema

Il GIS non è un semplice sfondo.

Il GIS è il motore spaziale dell'archivio.

L'archivio serve a trovare i racconti.

I racconti servono a navigare il GIS.

Il GIS serve a contestualizzare i racconti.

```text
Archivio JSON
      ↓
Racconto
      ↓
GIS
      ↓
Nuova traccia
      ↓
Nuovo racconto
```

Questa struttura permette di costruire un archivio narrativo aperto, geolocalizzato e collaborativo.