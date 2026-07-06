# QGIS import notes - Quantum layers

Ordine di import consigliato:

1. `qt_relations.geojson`
2. `qt_infrastructures.geojson`
3. `qt_actors.geojson`

Così le linee restano sotto ai punti.

## Primo controllo visivo

Dopo l'import:

- abilita label su `qt_infrastructures` usando `name`
- abilita label su `qt_actors` usando `short_name`
- riduci opacità di `qt_relations` a 40-60%

## Query utili

### Solo aziende

```sql
"actor_type" = 'company'
```

### Solo centri HPC

```sql
"actor_type" = 'hpc_research_center'
```

### Solo attori italiani

```sql
"country" = 'Italy'
```

### Solo piattaforme superconducting

```sql
"platform" LIKE '%superconducting%'
```

### Solo relazioni di fornitura

```sql
"relation_type" IN ('supplier_of', 'component_supplier_for')
```

## Nota narrativa

Questo layer racconta una cosa diversa dal primo: non solo `dove sono i quantum computer`, ma la rete materiale che li rende possibili:
fornitori, centri HPC, programmi europei, consorzi nazionali.
