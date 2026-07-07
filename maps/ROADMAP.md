# Roadmap

Questo progetto esplora rappresentazioni GIS storiche delle infrastrutture europee, partendo dalle centrali elettriche e dai sistemi energetici, ed estendendo progressivamente lo stesso workflow a tecnologie strategiche e infrastrutture di ricerca.

L’obiettivo attuale è costruire un workflow riproducibile basato su QGIS per visualizzare come le infrastrutture cambiano nel tempo e come i sistemi tecnici sono distribuiti in Europa, usando campi temporali, simbologia categorizzata, dimensioni dei simboli guidate dai dati, fonti documentate e layer processati riutilizzabili.

---

## Fase 1 — Prototipo sulle infrastrutture energetiche

- [x] Creare un primo modello GIS temporale per le centrali nucleari
- [x] Importare i reattori nucleari da GeoNuclearData
- [x] Aggiungere campi temporali di inizio/fine per i reattori nucleari
- [x] Importare centrali elettriche convenzionali da OPSD
- [x] Usare anni di messa in servizio e dismissione dove disponibili
- [x] Categorizzare le centrali convenzionali per fonte energetica
- [x] Scalare parametricamente la dimensione dei simboli in base alla potenza installata
- [x] Creare un primo workflow di animazione con PyQGIS
- [x] Testare filtri temporali per anno e periodo storico
- [ ] Salvare e documentare gli stili QGIS dei layer
- [ ] Pulire e standardizzare i nomi dei campi tra i dataset
- [ ] Documentare le limitazioni attuali dei dati

---

## Fase 2 — Fonti dati e copertura

- [ ] Verificare la copertura nazionale di OPSD per le centrali convenzionali
- [ ] Identificare paesi mancanti o scarsamente coperti
- [ ] Trovare una fonte affidabile per le centrali elettriche italiane non nucleari
- [ ] Confrontare fonti alternative per le infrastrutture energetiche europee
- [ ] Aggiungere campi di metadati sulle fonti ai layer processati
- [ ] Tracciare licenze e requisiti di attribuzione per ogni dataset

Campi di metadati suggeriti:

```text
source_name
source_url
source_license
source_date
processing_notes
temporal_start_source
temporal_end_source
```

---

## Fase 3 — Modello dati temporale comune

- [ ] Definire uno schema comune per tutti i layer energetici
- [ ] Decidere come rappresentare le date di dismissione mancanti
- [ ] Separare dati storici da assunzioni o placeholder
- [ ] Aggiungere indicatori di confidenza o copertura dove necessario
- [ ] Creare layer snapshot in formato lungo per anni/decenni selezionati
- [ ] Testare mappe per decennio: 1970, 1980, 1990, 2000, 2010, 2020

Regola base di visibilità:

```sql
temporal_start <= YEAR-12-31
AND
temporal_end >= YEAR-01-01
```

---

## Fase 4 — Workflow QGIS

- [ ] Salvare il file progetto QGIS con percorsi relativi stabili
- [ ] Salvare stili `.qml` riutilizzabili
- [ ] Creare uno stile per le centrali nucleari
- [ ] Creare uno stile per le centrali convenzionali
- [ ] Creare una grammatica visiva unificata per le fonti energetiche
- [ ] Migliorare lo script di animazione PyQGIS
- [ ] Aggiungere parametri per anno iniziale, anno finale, velocità e fonte energetica selezionata
- [ ] Esportare la prima animazione o serie di screenshot

Codifica visiva:

```text
Colore      = fonte energetica
Dimensione  = potenza installata
Visibilità  = intervallo temporale attivo
```

---

## Fase 5 — Atlante storico delle infrastrutture

- [ ] Estendere il metodo ad altri tipi di infrastrutture
- [ ] Testare infrastrutture di trasporto
- [ ] Testare reti energetiche
- [ ] Testare siti industriali
- [ ] Testare layer demografici o economici
- [ ] Costruire mappe comparative tra periodi storici

---

## Fase 5A — Pilota sulle tecnologie quantistiche

Questa fase estende il metodo dell’atlante infrastrutturale dai sistemi energetici alle tecnologie quantistiche europee, con un primo focus su infrastrutture quantum-HPC, centri host, fornitori e relazioni strategiche.

- [x] Definire uno schema GIS iniziale per le infrastrutture di tecnologie quantistiche
- [x] Creare il layer `qt_infrastructures` per i sistemi quantistici EuroHPC / HPCQS
- [x] Aggiungere quantum computer e simulatori EuroHPC: JADE, Ruby, Lucy, Piast-Q, VLQ, Euro-Q-Exa, SOL, EuroQCS-Spain
- [x] Aggiungere campi sulle piattaforme: atomi neutri, superconduttori, fotonica, ioni intrappolati, annealing superconduttivo
- [x] Aggiungere campi host, fornitore, qubit, tecnologia, stato, fonte, note e precisione delle coordinate
- [x] Creare il layer `qt_actors` per aziende, centri HPC, consorzi e programmi europei
- [x] Aggiungere il primo insieme di attori: Pasqal, IQM, Quandela, AQT, Qilimanjaro, attocube, CINECA, BSC, LRZ, JSC, CEA/TGCC, PCSS, IT4Innovations, EuroHPC JU, Quantum Flagship, NQSTI
- [x] Creare il layer `qt_relations` collegando fornitori e centri host alle infrastrutture
- [x] Esportare i layer quantistici processati in CSV e GeoJSON
- [x] Aggiungere uno script di validazione per layer di attori, infrastrutture e relazioni
- [x] Testare il primo import QGIS dei layer quantistici di infrastrutture, attori e relazioni
- [x] Scrivere una prima traccia analitica su sovranità quantistica europea, lacune di filiera e necessità di nuovi player privati europei
- [ ] Salvare e documentare stili QGIS riutilizzabili per i layer quantistici
- [ ] Migliorare la leggibilità cartografica di relazioni, etichette e punti sovrapposti
- [ ] Aggiungere metadati di fonte e licenza in modo coerente per tutti i layer quantistici
- [ ] Verificare coordinate più precise del livello città dove esistono fonti affidabili
- [ ] Estendere la copertura oltre i sistemi EuroHPC a centri di ricerca quantistica, aziende, comunicazione, sensing e software
- [ ] Creare un layer `qt_projects` per Quantum Flagship, CORDIS, NQSTI, EuroHPC e progetti collegati
- [ ] Creare un layer `qt_milestones` per eventi storici e pagine dell’atlante basate su timeline

File quantistici processati attuali:

```text
data/sources/eurohpc_quantum_computers_manual.csv
data/sources/qt_actors_manual.csv
data/sources/qt_relations_manual.csv
data/processed/qt_infrastructures.csv
data/processed/qt_infrastructures.geojson
data/processed/qt_actors.csv
data/processed/qt_actors.geojson
data/processed/qt_relations.csv
data/processed/qt_relations.geojson
data/processed/qt_combined_points.geojson
scripts/validate_quantum_layers.py
docs/quantum/QGIS_IMPORT_NOTES.md
```

Codifica visiva suggerita:

```text
Colore infrastruttura = piattaforma quantistica
Dimensione infrastruttura = numero di qubit
Colore attore = tipo di attore
Stile relazione = fornitore / host / componente
Etichetta = nome infrastruttura o nome breve dell’attore
```

Asse interpretativo suggerito:

```text
forza della ricerca -> strategia pubblica -> integrazione HPC -> sperimentazione multi-piattaforma -> prime infrastrutture -> filiera incompleta -> gap di player privati -> rischio di dipendenza -> sovranità tecnologica
```

---

## Fase 5B — Pilota sulle infrastrutture AI

Questa fase estende il metodo dell’atlante infrastrutturale all’intelligenza artificiale europea, con un primo focus su AI Factories EuroHPC, sistemi AI-HPC, capacità di supercalcolo e relazioni tra hub AI e infrastrutture di calcolo.

- [x] Definire uno schema GIS iniziale per le infrastrutture AI europee
- [x] Creare il layer `ai_factories` per la rete delle AI Factories EuroHPC
- [x] Aggiungere 19 AI Factories EuroHPC come primo layer seed
- [x] Aggiungere campi per paese, città, ente host, supercomputer/sistema collegato, settori chiave, antenne, stato, fonte e precisione delle coordinate
- [x] Classificare le AI Factories per batch di selezione: `first_seven_2024`, `second_six_2025`, `third_six_2025`
- [x] Creare il layer `ai_actors` per enti host, consorzi, EuroHPC JU ed European AI Office
- [x] Creare il layer `ai_relations` collegando enti host/lead ed EuroHPC JU alle AI Factories
- [x] Creare la tabella lunga `ai_factory_sectors` per analizzare il focus settoriale delle AI Factories
- [x] Creare la tabella `ai_factory_antennas_relations` per le AI Factory Antennas
- [x] Esportare i layer AI Factory in CSV e GeoJSON
- [x] Aggiungere uno script di validazione per il layer AI Factories
- [x] Testare il primo import QGIS di `ai_factories` e `ai_relations`
- [x] Creare il layer `ai_supercomputers` per sistemi AI/HPC collegati alle AI Factories
- [x] Aggiungere il primo insieme di sistemi di calcolo: LUMI, Leonardo, LISA, MareNostrum 5, MeluXina, MeluXina-AI, JUPITER, HammerHAI, Arrhenius, DAEDALUS, Discoverer, Vega, Karolina, KarolAIna, piattaforma PIAST-AI, infrastruttura LitAI, sistema NLAIF, piattaforma 1HealthAI, Gaia, sistema RO AI, infrastruttura AI:AT e Alice Recoque
- [x] Creare il layer `ai_compute_relations` collegando le AI Factories ai rispettivi sistemi di calcolo
- [x] Esportare i layer dei sistemi di calcolo AI in CSV e GeoJSON
- [x] Aggiungere uno script di validazione per il layer AI supercomputers / sistemi di calcolo
- [ ] Salvare e documentare stili QGIS riutilizzabili per i layer AI
- [ ] Migliorare la leggibilità cartografica di AI Factories, sistemi di calcolo, etichette e punti sovrapposti
- [ ] Verificare le coordinate di AI Factories e sistemi di calcolo oltre il livello città dove esistono fonti affidabili
- [ ] Separare sistemi operativi, sistemi pianificati, upgrade AI-optimised e piattaforme AI/HPC generiche in categorie visive più chiare
- [ ] Aggiungere metadati di fonte e licenza in modo coerente per tutti i layer AI
- [ ] Creare un layer dedicato `ai_gigafactories` quando saranno selezionati i siti ufficiali
- [ ] Creare un layer più ampio `ai_private_players` per aziende europee di foundation model, attori dei chip AI, cloud provider, aziende di AI industriale e startup AI applicate
- [ ] Creare un layer `ai_policy_nodes` per EU AI Office, autorità nazionali competenti, regulatory sandbox AI e istituzioni di policy
- [ ] Confrontare i nodi infrastrutturali AI con i layer quantum e HPC per identificare siti strategici multi-ruolo come Bologna/CINECA, Jülich, Barcellona, Poznań e Ostrava

File AI processati attuali:

```text
data/sources/eurohpc_ai_factories_manual.csv
data/sources/ai_supercomputers_manual.csv
data/processed/ai_factories.csv
data/processed/ai_factories.geojson
data/processed/ai_actors.csv
data/processed/ai_actors.geojson
data/processed/ai_relations.csv
data/processed/ai_relations.geojson
data/processed/ai_factory_sectors.csv
data/processed/ai_factory_antennas_relations.csv
data/processed/ai_supercomputers.csv
data/processed/ai_supercomputers.geojson
data/processed/ai_compute_relations.csv
data/processed/ai_compute_relations.geojson
scripts/validate_ai_factories.py
scripts/validate_ai_supercomputers.py
docs/ai/QGIS_IMPORT_NOTES.md
docs/ai/QGIS_IMPORT_NOTES_SUPERCOMPUTERS.md
```

Codifica visiva suggerita:

```text
Colore AI Factory      = batch di selezione / fase di implementazione
Etichetta AI Factory   = nome breve
Colore sistema calcolo = ruolo del sistema
Dimensione sistema     = performance sostenuta dove numericamente affidabile
Stile relazione        = host / coordinamento / dipendenza computazionale
Campi popup            = ente host, sistema collegato, acceleratori, settori, stato, fonte
```

Asse interpretativo suggerito:

```text
regolazione AI -> infrastruttura pubblica di calcolo -> AI Factories -> supercomputer AI-optimised -> adozione settoriale -> gap di scale-up privato -> dipendenza chip/cloud/modelli -> sovranità tecnologica
```

---

## Fase 6 — Atlante narrativo / integrazione CNOT

- [ ] Mantenere separati dati reali e layer narrativi/fictional
- [ ] Aggiungere punti narrativi come layer dedicato
- [ ] Collegare eventi narrativi a layer reali storici/geografici
- [ ] Definire una distinzione visiva tra dati fattuali e dati narrativi
- [ ] Preparare un prototipo di web map pubblica
- [ ] Esplorare esportazione qgis2web
- [ ] Collegare elementi della mappa a testi, dossier o frammenti narrativi

---

## Limitazioni note attuali

- La copertura OPSD non è uniforme tra i paesi europei.
- Alcuni dataset contengono anni di messa in servizio ma dati incompleti sulla dismissione.
- Le date di dismissione mancanti richiedono attualmente placeholder come `2100-01-01`.
- Questo placeholder non è una previsione.
- Fonti diverse usano convenzioni di denominazione e livelli di dettaglio diversi.
- Le coordinate possono essere approssimative a seconda della fonte.
- Il workflow attuale è un prototipo e richiede validazione fonte per fonte.
- Il layer quantum attuale copre principalmente infrastrutture quantum-HPC EuroHPC / HPCQS, non l’intero ecosistema quantistico europeo.
- Le coordinate delle infrastrutture quantum sono perlopiù a livello città o sito approssimato, salvo verifica esplicita.
- Il layer attori quantum attuale è un dataset seed e sovrarappresenta gli attori collegati alle infrastrutture EuroHPC.
- I layer di relazioni rappresentano attualmente link semplificati fornitore/host/componente e non modellano ancora finanziamento, proprietà, IP, procurement o profondità di filiera.
- Comunicazione quantistica, sensing, software, laboratori universitari, finanziamento privato e panorama brevettuale non sono ancora coperti sistematicamente.
- Il layer AI attuale copre principalmente AI Factories EuroHPC e sistemi di calcolo AI/HPC collegati, non l’intero ecosistema AI europeo.
- Le coordinate delle AI Factories sono spesso a livello città, sito approssimato o punto di ancoraggio nazionale quando la fonte ufficiale non espone una singola sede fisica.
- Alcuni record dei sistemi di calcolo AI rappresentano sistemi pianificati, upgrade o piattaforme, non supercomputer già operativi.
- I campi di performance dei sistemi AI sono eterogenei: alcuni sistemi riportano PFLOPS sostenuti, altri PFLOPS di picco, altri AI PFLOPS e altri solo descrizioni qualitative degli acceleratori.
- I layer attori e relazioni AI attuali sono dataset seed e sovrarappresentano attori pubblici o collegati a EuroHPC.
- Aziende AI private, sviluppatori di foundation model, cloud provider, supply chain dei chip AI, statistiche di adozione e regulatory sandbox non sono ancora coperti sistematicamente.

---

## Prossimi passi immediati

1. Salvare gli stili QGIS attuali per layer energetici, quantum e AI.
2. Documentare le fonti nucleari, OPSD, EuroHPC quantum ed EuroHPC AI.
3. Scrivere il primo devlog entry per il prototipo energetico.
4. Scrivere un breve devlog entry per il pilota sulle tecnologie quantistiche.
5. Scrivere un breve devlog entry per il pilota sulle infrastrutture AI.
6. Revisionare i nomi dei campi nei file GeoJSON processati.
7. Decidere come gestire le date di dismissione mancanti nei dataset energetici.
8. Trovare una fonte migliore per le centrali convenzionali italiane.
9. Pulire la vista QGIS quantum: opacità delle relazioni, posizionamento delle etichette, scala dei punti e filtri dei layer.
10. Pulire la vista QGIS AI: simboli delle AI Factories, simboli dei sistemi di calcolo, opacità delle relazioni, etichette sovrapposte e ordine dei layer.
11. Avviare il layer `qt_projects` a partire da Quantum Flagship, CORDIS, NQSTI ed EuroHPC.
12. Raffinare il layer `ai_supercomputers` verificando stato pianificato/operativo e specifiche hardware.
13. Creare un layer placeholder `ai_gigafactories` solo quando saranno disponibili selezioni ufficiali dei siti.
14. Confrontare nodi AI, quantum e HPC per identificare siti strategici multi-ruolo.
15. Tenere separata per ora l’integrazione narrativa/story-map; tornarci dopo che i layer GIS fattuali saranno stabili.
