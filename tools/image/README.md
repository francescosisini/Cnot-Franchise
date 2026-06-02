# Image tools

Questa cartella contiene script per generare immagini narrative, overlay grafici, mappe annotate e materiali visivi derivati da immagini PNG/JPG.

Questi strumenti sono nati nelle prime fasi del progetto, quando l’obiettivo era aggiungere testi, cornici, etichette e sovrapposizioni grafiche a immagini già esistenti. In seguito sono diventati parte della pipeline visiva del franchise.

---

## Aggiungere overlay a immagini PNG

Gli script principali sono:

```text
overlay.py
overlay_text.py
legend_card.py
```

Questi script servono a produrre immagini derivate da una base grafica, aggiungendo elementi come:

* testi;
* etichette;
* titoli;
* cornici;
* effetti da rapporto tecnico;
* legende;
* annotazioni narrative;
* layer grafici sovrapposti.

---

## Uso tipico

Il flusso generale è:

```text
immagine base PNG/JPG
  ↓
script Python
  ↓
overlay grafico / testo / legenda
  ↓
nuova immagine esportata
```

Esempio:

```bash
python3 overlay.py input.png output.png
```

oppure:

```bash
python3 overlay_text.py input.png output.png
```

Il nome preciso degli argomenti può variare in base allo script. Per controllare rapidamente le opzioni disponibili:

```bash
python3 overlay.py --help
python3 overlay_text.py --help
python3 legend_card.py --help
```

---

## Quando usare questi script

Questi strumenti sono utili quando si vuole trasformare una semplice immagine in un artefatto narrativo.

Esempi:

```text
mappa grezza
  → mappa con overlay narrativo

immagine di città
  → immagine stile rapporto / dossier / sorveglianza

mappa energetica
  → mappa annotata con legenda e spiegazione

screenshot GIS
  → immagine pronta per README, social, libro o presentazione
```

---

## Output consigliato

Gli output generati non dovrebbero restare dentro `tools/`.

Una possibile organizzazione è:

```text
media/artwork/maps/        immagini rifinite e riutilizzabili
archive/old_exports/maps/  vecchi esperimenti o output non attivi
docs/images/               immagini usate nella documentazione
```

La cartella `tools/image/` deve contenere soprattutto gli script, non tutti gli output generati.

---

## Ruolo nel franchise

Gli overlay non sono solo decorazioni.

Nel progetto Cnot possono diventare strumenti per costruire:

* mappe narrative;
* documenti fittizi;
* rapporti visivi;
* legende tecniche;
* schermate di sorveglianza;
* tracce di eventi;
* materiali da archivio;
* immagini di supporto al GIS narrativo.

In questo senso, una PNG annotata può diventare un documento di mondo: non solo un’immagine, ma una traccia leggibile dentro l’atlante del futuro.
