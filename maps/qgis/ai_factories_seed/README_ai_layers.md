# AI Factories GIS seed dataset

Primo seed dataset per mappare l'infrastruttura AI europea in stile GIS.

## Cosa contiene

- `data/processed/ai_factories.csv`
- `data/processed/ai_factories.geojson`
- `data/processed/ai_actors.csv`
- `data/processed/ai_actors.geojson`
- `data/processed/ai_relations.csv`
- `data/processed/ai_relations.geojson`
- `data/processed/ai_factory_sectors.csv`
- `data/processed/ai_factory_antennas_relations.csv`

Il layer principale per QGIS è:

```text
data/processed/ai_factories.geojson
```

## Fonte principale

EuroHPC JU, AI Factories:
https://www.eurohpc-ju.europa.eu/ai-factories_en

## Nota sulle coordinate

Le coordinate sono volutamente conservative:

- `city`: città del sito o del centro host
- `city_or_site_approx`: città/sito approssimativo
- `country_anchor_city`: punto di ancoraggio nazionale quando il testo EuroHPC non espone una sede fisica unica
- `city_anchor`: punto cittadino usato per rappresentare un hub nazionale o multi-sito

Non usare questi punti come coordinate catastali degli edifici.

## Simbologia QGIS consigliata

### ai_factories

- Etichetta: `short_name`
- Colore: `selection_batch`
- Forma: `factory_type`
- Tooltip/popup: `name`, `host_entity`, `supercomputer_or_system`, `key_sectors`, `antennas`, `source`

### ai_actors

- Etichetta: `short_name`
- Colore: `actor_type`

### ai_relations

- Stile: `relation_type`
  - `hosts_or_leads`: linea tratteggiata
  - `coordinates_or_funds`: linea sottile a bassa opacità

## Query utili

Solo prima selezione 2024:

```sql
"selection_batch" = 'first_seven_2024'
```

Solo nuove AI Factories 2025:

```sql
"selection_batch" = 'third_six_2025'
```

Solo Italia:

```sql
"country" = 'Italy'
```

AI Factories con antenne:

```sql
"antennas" IS NOT NULL AND "antennas" <> ''
```

## Validazione

```bash
python3 scripts/validate_ai_factories.py
```

Output atteso:

```text
Validation OK
AI Factories: 19
```

## Prossimo passo

1. controllare visivamente i 19 punti in QGIS;
2. raffinare le coordinate dove necessario;
3. separare in layer:
   - `ai_factories`
   - `ai_supercomputers`
   - `ai_antennas`
   - `ai_policy_nodes`
   - `ai_companies_models`
4. aggiungere AI Gigafactories quando i siti saranno ufficialmente selezionati.
