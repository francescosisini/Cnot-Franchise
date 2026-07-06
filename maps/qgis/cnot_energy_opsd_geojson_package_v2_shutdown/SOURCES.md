# Sources

## Main dataset

Open Power System Data. 2020. Data Package **Conventional power plants**. Version `2020-10-01`.

Recommended attribution:

> Open Power System Data. 2020. Data Package Conventional power plants. Version 2020-10-01. https://doi.org/10.25832/conventional_power_plants/2020-10-01. Primary data from various sources; for a complete list see the OPSD URL.

Dataset page:

https://data.open-power-system-data.org/conventional_power_plants/

CSV used:

https://data.open-power-system-data.org/conventional_power_plants/2020-10-01/conventional_power_plants_EU.csv

Backup raw CSV URL, useful if the OPSD host is slow:

https://raw.githubusercontent.com/pypsa-meets-earth/ppm-data-backup/main/conventional_power_plants_EU.csv

## Temporal fields used by this package

The package uses:

- `commissioned`: year of commissioning
- `shutdown`: year of decommissioning based on BNetzA data

Derived GIS fields:

- `temporal_start = commissioned-01-01`
- `temporal_end = shutdown-12-31` when shutdown is present
- `temporal_end = 2100-01-01` when shutdown is missing

## Notes

This package is a derived GIS conversion helper for CNOT-style temporal mapping. It does not alter the original OPSD data except for filtering, field normalization, temporal field creation, and GeoJSON/CSV export.
