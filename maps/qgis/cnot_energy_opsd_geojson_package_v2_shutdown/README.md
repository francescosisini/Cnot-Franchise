# CNOT GIS — OPSD energy GeoJSON package v2

Questo pacchetto genera GeoJSON QGIS-ready per le fonti energetiche europee, partendo dal CSV OPSD `conventional_power_plants_EU.csv`.

Questa versione usa anche il campo `shutdown`, quando presente.

## Cosa devi fare

### Metodo A — scarichi tu il CSV

1. Scarica da OPSD il file:

   `conventional_power_plants_EU.csv`

   dal pacchetto **Conventional power plants**, versione `2020-10-01`.

2. Mettilo nella cartella:

   `input/`

3. Da terminale, dentro questa cartella, esegui:

   ```bash
   python3 build_energy_geojsons.py --input input/conventional_power_plants_EU.csv
   ```

   Su Windows, se `python3` non funziona:

   ```bat
   python build_energy_geojsons.py --input input\conventional_power_plants_EU.csv
   ```

4. I GeoJSON verranno creati nella cartella:

   `geojson/`

5. In QGIS carica direttamente i file `.geojson`.

### Metodo B — download automatico

```bash
python3 build_energy_geojsons.py --download
```

Lo script scarica il CSV OPSD e genera i GeoJSON.

## GeoJSON prodotti

- `energy_opsd_all_except_nuclear.geojson`
- `energy_opsd_all_including_nuclear.geojson`
- `energy_opsd_natural_gas.geojson`
- `energy_opsd_coal.geojson`
- `energy_opsd_lignite.geojson`
- `energy_opsd_oil.geojson`
- `energy_opsd_hydro.geojson`
- `energy_opsd_bioenergy.geojson`
- `energy_opsd_waste.geojson`
- `energy_opsd_other.geojson`

Il nucleare, nel progetto CNOT, conviene tenerlo nel layer separato costruito da GeoNuclearData.

## Campi temporali

Ogni GeoJSON contiene:

- `commissioned`: anno di entrata in servizio dal CSV OPSD
- `shutdown`: anno di decommissioning dal CSV OPSD, quando presente
- `temporal_start`: derivato da `commissioned`, nella forma `YYYY-01-01`
- `temporal_end`: derivato da `shutdown`, nella forma `YYYY-12-31`; se `shutdown` è vuoto, viene impostato a `2100-01-01`
- `temporal_end_source`: indica se la fine arriva da `shutdown` oppure dal valore aperto di default
- `temporal_basis`: nota metodologica

Nota: `shutdown` è un anno, non una data precisa. Per questo lo script usa `YYYY-12-31`, così l'impianto resta visibile per tutto l'anno di dismissione.

## Attivare Temporal in QGIS

Per ogni GeoJSON:

1. Tasto destro sul layer → Proprietà
2. Temporal
3. Attiva `Dynamic Temporal Control`
4. Configuration: `Separate Fields for Start and End Date/Time`
5. Start field: `temporal_start`
6. End field: `temporal_end`

## Filtri periodo, senza funzioni QGIS

Centrali visibili almeno una volta tra 1970 e 1980:

```sql
"temporal_start" <= '1980-12-31'
AND
"temporal_end" >= '1970-01-01'
```

Centrali visibili nel 2041:

```sql
"temporal_start" <= '2041-01-01'
AND
"temporal_end" >= '2041-01-01'
```

Centrali già dismesse prima del 2041:

```sql
"shutdown" IS NOT NULL
AND
"temporal_end" < '2041-01-01'
```

Centrali ancora aperte secondo il dataset:

```sql
"shutdown" IS NULL
```
