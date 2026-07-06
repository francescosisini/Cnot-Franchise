# Nuclear reactors for QGIS temporal testing — Europe + Italy

## Source and attribution

Primary source used for this package:

- **GeoNuclearData** by Cristian Stoica / `cristianst85`
- Repository: `https://github.com/cristianst85/GeoNuclearData`
- Dataset file used: denormalized CSV `nuclear_power_plants.csv`
- Database version reported by the source repository: `0.17.0`
- Dataset last updated in source repository: `0.17.17`, dated `2024-03-03`
- Data formats provided by the source: MySQL, JSON and CSV
- License: **Open Database License (ODbL)**

Attribution to keep when publishing derivative maps/data:

> Data derived from GeoNuclearData by Cristian Stoica (`cristianst85`), licensed under ODbL.

## Transformation performed for this QGIS package

This package is not the original dataset. It is a derived QGIS-ready subset.

Transformations applied:

1. Loaded the GeoNuclearData denormalized CSV `nuclear_power_plants.csv`.
2. Filtered records to a Europe-focused map window:
   - longitude between `-25` and `45`
   - latitude between `34` and `72`
3. Exported the filtered points as GeoJSON in `EPSG:4326`.
4. Created QGIS temporal fields:
   - `temporal_start`
   - `temporal_end`
5. Created decade-snapshot long-format layers for static historical maps.
6. Created Italy-only extracts for quick testing.

## Files

- `nuclear_reactors_europe_all.geojson` / `.csv`  
  Europe-window layer. One feature per reactor/unit. Features: 320.

- `nuclear_reactors_europe_active_decade_snapshots.geojson` / `.csv`  
  Long-format decade snapshots. One feature per reactor per active decade. Features: 1415.

- `nuclear_reactors_italy_all.geojson` / `.csv`  
  Italian reactors only. Features: 4.

- `nuclear_reactors_italy_active_decade_snapshots.geojson` / `.csv`  
  Italian decade snapshots. Features: 8.

## Recommended QGIS use

1. Load `nuclear_reactors_europe_all.geojson`.
2. Open layer properties > Temporal.
3. Enable dynamic temporal control.
4. Use start/end fields:
   - Start: `temporal_start`
   - End: `temporal_end`

For static historical maps, load `nuclear_reactors_europe_active_decade_snapshots.geojson` and filter for example:

```qgis
"map_year" = 1980
```

## Temporal logic

- `temporal_start` is `operational_from` when present, otherwise `construction_start_at`.
- `temporal_end` is `operational_to` when present; otherwise it is set to `2100-01-01` to keep active/unfinished reactors visible in QGIS temporal mode.
- Decade snapshots use this rule: a reactor is included for a decade if it was already operational on January 1 of that decade and had not yet shut down.

## Caveats

- Coordinates are approximate and should not be treated as survey-grade geometry.
- The dataset is suitable for historical/narrative/geographical visualization, not for engineering-grade siting or safety analysis.
- Because this package is a filtered and transformed derivative, cite GeoNuclearData as the source and mention that the QGIS layers are derived from it.
