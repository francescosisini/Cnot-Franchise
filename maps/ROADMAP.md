# Roadmap

This project explores historical GIS representations of European infrastructures, starting from power plants and energy systems.

The current goal is to build a reproducible QGIS-based workflow for visualizing how infrastructure changes over time, using temporal fields, categorized symbology, and data-driven symbol sizes.

---

## Phase 1 — Energy infrastructure prototype

- [x] Create a first temporal GIS model for nuclear power plants
- [x] Import nuclear reactors from GeoNuclearData
- [x] Add temporal start/end fields for nuclear reactors
- [x] Import conventional power plants from OPSD
- [x] Use commissioning and shutdown years where available
- [x] Categorize conventional plants by energy source
- [x] Scale symbol size parametrically by installed capacity
- [x] Create a first PyQGIS animation workflow
- [x] Test temporal filtering by year and historical period
- [ ] Save and document QGIS layer styles
- [ ] Clean up and standardize field names across datasets
- [ ] Document current data limitations

---

## Phase 2 — Data sources and coverage

- [ ] Review country coverage for OPSD conventional power plants
- [ ] Identify missing or weakly covered countries
- [ ] Find a reliable source for Italian non-nuclear power plants
- [ ] Compare alternative sources for European energy infrastructure
- [ ] Add source metadata fields to processed layers
- [ ] Track license and attribution requirements for each dataset

Suggested metadata fields:

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

## Phase 3 — Common temporal data model

- [ ] Define a common schema for all energy layers
- [ ] Decide how to represent missing shutdown dates
- [ ] Separate historical data from assumptions/placeholders
- [ ] Add confidence or coverage indicators where needed
- [ ] Create long-format snapshot layers for selected years/decades
- [ ] Test decade-based maps: 1970, 1980, 1990, 2000, 2010, 2020

Core visibility rule:

```sql
temporal_start <= YEAR-12-31
AND
temporal_end >= YEAR-01-01
```

---

## Phase 4 — QGIS workflow

- [ ] Save QGIS project file with stable relative paths
- [ ] Save reusable `.qml` styles
- [ ] Create style for nuclear power plants
- [ ] Create style for conventional power plants
- [ ] Create a unified visual grammar for energy sources
- [ ] Improve PyQGIS animation script
- [ ] Add parameters for start year, end year, speed, and selected energy source
- [ ] Export first animation or screenshots

Visual encoding:

```text
Color      = energy source
Size       = installed capacity
Visibility = active temporal interval
```

---

## Phase 5 — Historical infrastructure atlas

- [ ] Extend the method to other infrastructure types
- [ ] Test transport infrastructure
- [ ] Test energy networks
- [ ] Test industrial sites
- [ ] Test demographic or economic layers
- [ ] Build comparison maps across time periods

---

## Phase 6 — Narrative atlas / CNOT integration

- [ ] Keep real-world data and fictional layers separate
- [ ] Add narrative points as a dedicated layer
- [ ] Connect fictional events to real historical/geographical layers
- [ ] Define a visual distinction between factual and narrative data
- [ ] Prepare a public-facing web map prototype
- [ ] Explore qgis2web export
- [ ] Connect map elements to texts, dossiers, or story fragments

---

## Current known limitations

- OPSD coverage is not uniform across European countries.
- Some datasets contain commissioning years but incomplete shutdown data.
- Missing shutdown dates currently require placeholders such as `2100-01-01`.
- This placeholder is not a forecast.
- Different sources use different naming conventions and levels of detail.
- Coordinates may be approximate depending on the source.
- The current workflow is a prototype and needs source-by-source validation.

---

## Immediate next steps

1. Save the current QGIS styles.
2. Document the nuclear and OPSD data sources.
3. Write the first devlog entry.
4. Review field names in the processed GeoJSON files.
5. Decide how to handle missing shutdown dates.
6. Find a better source for Italian conventional power plants.
