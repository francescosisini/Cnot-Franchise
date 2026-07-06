# Quantum Technologies GIS layers - v2

Questo pacchetto estende il primo seed EuroHPC con due layer nuovi:

- `qt_actors`: chi sviluppa, ospita, finanzia o coordina
- `qt_relations`: linee tra attori e infrastrutture

## File QGIS principali

Trascina direttamente in QGIS:

- `data/processed/qt_infrastructures.geojson`
- `data/processed/qt_actors.geojson`
- `data/processed/qt_relations.geojson`

Layer comodo per controllo rapido:

- `data/processed/qt_combined_points.geojson`

## CSV equivalenti

- `data/processed/qt_infrastructures.csv`
- `data/processed/qt_actors.csv`
- `data/processed/qt_relations.csv`

## Fonti principali

- EuroHPC JU - Our Quantum Computers: https://www.eurohpc-ju.europa.eu/eurohpc-quantum-computers/our-quantum-computers_en
- Quantum Technologies Flagship: https://digital-strategy.ec.europa.eu/en/policies/quantum-technologies-flagship
- NQSTI: https://nqsti.it/
- Pasqal: https://www.pasqal.com/about-us/
- IQM Radiance: https://www.meetiqm.com/products/iqm-radiance
- Quandela: https://www.quandela.com/about-us/
- AQT: https://www.aqt.eu/about/

## Nota sulle coordinate

Le coordinate sono pensate per una mappa strategica/narrativa, non come catasto degli edifici.
Il campo `coordinate_precision` indica se il punto è a livello città, sito o indirizzo approssimato.

## Simbologia consigliata

### qt_infrastructures

- Etichetta: `name`
- Colore: `platform`
- Dimensione: `qubits`

### qt_actors

- Colore: `actor_type`
- Simbolo:
  - company = triangolo
  - hpc_research_center = quadrato
  - european/national programme = stella o rombo
- Etichetta: `short_name`

### qt_relations

- Colore/line style: `relation_type`
  - supplier_of = linea piena
  - hosts / hosts_or_operates = linea tratteggiata
  - component_supplier_for = linea puntinata

## Validazione

```bash
python3 scripts/validate_quantum_layers.py
```

Output atteso:

```text
Validation OK
Actors: 16
Infrastructures: 8
Relations: 17
```

## Perché tre layer?

- `qt_infrastructures`: dove sono le macchine fisiche
- `qt_actors`: chi sviluppa, ospita, finanzia o coordina
- `qt_relations`: chi è collegato a cosa

Questa struttura evita il minestrone quantistico e permette interrogazioni utili in QGIS.
