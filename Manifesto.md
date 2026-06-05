# Narrative GIS

 Un mondo narrativo **GIS-first**.

Il GIS   è **struttura**, **canon**, **source of truth**.  Storie, musica, disegni, AI art, XR sono:
- derivate dalla mappa, oppure
- usate per far crescere la mappa.



---

## Due modalità di ingresso

### A) GIS → Media
1. Popoli il GIS (layer, feature, attributi, link).
2. Chi vuole produce output **a partire dal GIS**:
   - racconti
   - musica
   - disegni
   - AI arts
   - scene XR / 3D
   - report, dialoghi, script, ecc.

**Il GIS è canon.** Il media è un rendering.

---

### B) Media → GIS
1. Crei media **con l’intenzione esplicita** di generare elementi mappabili:
   - luoghi, zone, percorsi
   - artefatti
   - vincoli/regole
   - eventi
2. Estraggi questi elementi e li **committi nel GIS**.

**Il media genera. Il GIS compila.**

> **Cnot 1.7 è un esempio della modalità B**: output narrativi prodotti per ricavarne spazi, percorsi, artefatti, regole, accessi, mappe interne, ecc.

---

## Cosa teniamo in repo

**Primario**
- dati GIS (feature + metadati + relazioni/link)

**Secondario (opzionale)**
- storie / audio / immagini / AI art / asset XR
- sempre collegati a entità GIS (id/link)

---

## Regola minima di contributo

Ogni contributo deve fare almeno una di queste cose:

- **modificare/aggiungere GIS** (modalità A), oppure
- **aggiungere media che produce nuove feature GIS** (modalità B) **+** includere l’estrazione nel GIS
  - nella stessa PR, oppure in una PR immediatamente successiva (linkata)

---

## Regola canon

Se media e GIS si contraddicono: **vince il GIS**.

---

## Come iniziare in 15 minuti

Scegli **una** modalità e pubblica qualcosa di piccolo ma coerente.

### Modalità A (GIS → Media) — parti dalla mappa
1) **Aggiungi 5 feature** al GIS:
- 2× `place` (es. “sottopasso”, “tetto praticabile”)
- 1× `zone` (es. “interdetta / contaminata / off-grid”)
- 1× `route` (una deviazione causata dalla zone)
- 1× `artifact` (QR, volantino, drone rotto, cassetta, murale)

2) **Metadati minimi** per feature:
- `time` (present / 2046 / unknown)
- `status` (active / restricted / forbidden / abandoned / contested)
- `rules` (una riga: cosa cambia per chi attraversa)
- `links` (collega almeno 2 feature)

3) **Genera 1 output dal GIS**:
- una scena da 200–400 parole che attraversa la route, oppure
- uno sketch/AI image di un place, oppure
- un loop audio 20–30s ispirato alle `rules`, oppure
- un mini “field report” sul vincolo della zone

---

### Modalità B (Media → GIS) — parti dal materiale creativo
1) Crea **un pezzo piccolo** pensato per produrre elementi mappabili:
- microstoria, sketch, “mission log”, verso di canzone, finto volantino, ecc.

2) Forzati a includere:
- **3 luoghi**
- **1 vincolo di zona** (es. contaminazione, allagamento, droni, no-signal)
- **1 cambio percorso** (checkpoint, tunnel, detour, rooftop path)
- **1 artefatto** (oggetto geolocalizzabile)

3) Estrai quegli elementi e **committali nel GIS** come feature.
- Il media genera.
- Il GIS compila.

---

## Done criteria (15 min)

Hai finito quando:
- il GIS contiene un **micro-mondo attraversabile** (place + zone + route + artifact)
- e c’è almeno **1 output** (testo/audio/immagine) collegato a entità GIS
