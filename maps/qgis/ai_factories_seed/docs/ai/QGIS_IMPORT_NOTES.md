# QGIS import notes - AI Factories

Ordine consigliato:

1. `ai_relations.geojson`
2. `ai_factories.geojson`
3. `ai_actors.geojson`

Per ora il layer più importante è `ai_factories`.

## Simbologia

### ai_factories

Usa `selection_batch`:

- `first_seven_2024`
- `second_six_2025`
- `third_six_2025`

Così si vede la crescita temporale/logica della rete.

### ai_factory_sectors.csv

Non è un layer geografico diretto: è una tabella lunga per contare i settori e decidere temi futuri.

Esempio:
- salute
- manifattura
- spazio
- cybersecurity
- agrifood
- pubblica amministrazione
- foundation models / LLM

## Nota interpretativa

Questo layer non rappresenta tutta l'AI europea.
Rappresenta la rete pubblica EuroHPC delle AI Factories: potenza computazionale, servizi e accesso per startup, PMI, ricerca, industria e pubbliche amministrazioni.
