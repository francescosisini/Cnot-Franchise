# AI Supercomputers GIS seed dataset

Secondo layer AI: infrastrutture di calcolo e sistemi AI/HPC collegati alle AI Factories europee.

## File QGIS

- `data/processed/ai_supercomputers.geojson`
- `data/processed/ai_compute_relations.geojson`

## Import in QGIS

Ordine consigliato:

1. `ai_compute_relations.geojson`
2. `ai_supercomputers.geojson`
3. `ai_factories.geojson`
4. `ai_actors.geojson`

## Simbologia

Per `ai_supercomputers`:

- etichetta: `short_name`
- colore: `system_role`
- popup: `name`, `host_entity`, `linked_ai_factories`, `accelerator_or_gpu`, `storage`, `source`

Per `ai_compute_relations`:

- linea sottile
- opacità 35–50%
- relazione: AI Factory → sistema di calcolo

## Fonti principali

- EuroHPC, Our Supercomputers: https://www.eurohpc-ju.europa.eu/supercomputers/our-supercomputers_en
- EuroHPC, AI Factories Systems: https://www.eurohpc-ju.europa.eu/ai-factories/ai-factories-systems_en

## Nota

Alcuni record sono sistemi operativi; altri sono upgrade o sistemi AI-optimised selezionati/pianificati.
Il campo `status` distingue i casi.
Le coordinate sono strategiche, non catastali.

## Validazione

```bash
python3 scripts/validate_ai_supercomputers.py
```
