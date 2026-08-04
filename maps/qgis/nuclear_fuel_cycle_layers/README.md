# Nuclear fuel-cycle GIS layers

Dataset organizzato per **funzione fisica nella filiera nucleare**.

## Layer
- `01_uranium_extraction.geojson`
- `02_uranium_conversion.geojson`
- `03_uranium_enrichment.geojson`
- `04_fuel_fabrication.geojson`
- `05_reprocessing_recycling.geojson`
- `06_interim_storage.geojson`
- `07_geological_repositories.geojson`
- `08_nuclear_research.geojson`
- `09_nuclear_power_switzerland.geojson`

## Schema comune
Ogni feature contiene `id`, `name`, `country`, `category`, `subtype`, `status`,
`operator`, `function`, `description`, `source_label`, `source_url`,
`coordinate_precision`.

Le geometrie sono Point WGS84 (`EPSG:4326`), con ordine GeoJSON
`[longitude, latitude]`.

## Nota
Questa versione è **curata ma non esaustiva**. È pensata per rendere leggibile
la filiera e correggere in particolare l'ambiguità dei siti svizzeri.
Le coordinate meno precise sono marcate esplicitamente come `*_approximate`.
