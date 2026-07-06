# EUROPOL realistic GIS test package

This package is designed for a CNOT-E / QGIS workflow.

## Important modelling choice

Europol has a publicly documented headquarters at Eisenhowerlaan 73, The Hague. Several Europol centres and services are publicly documented, but the exact internal office locations and data-centre locations are not publicly available. For that reason:

- `europol_sites_and_units.geojson` contains the HQ plus public functional units, slightly offset around the HQ for map readability.
- `europol_digital_infrastructure.geojson` contains logical service nodes, not asserted physical data-centre coordinates.
- `europol_relations.geojson` contains conceptual relations, not real network routes.

## Suggested QGIS grouping

EUROPOL
  - europol_sites_and_units
  - europol_digital_infrastructure
  - external_reference_nodes
  - europol_relations

## Suggested styling

- headquarters: large shield/building icon
- specialised_centre: medium node icon
- innovation_lab: flask/lab icon
- database_service / secure_exchange_service: server/cloud icon, dashed outline
- undisclosed_resilience_node: warning/unknown style
- relations: thin lines, dashed for conceptual links

## Files

- `europol_group.json`: group metadata
- `europol_sites_and_units.geojson`: HQ and public functional units
- `europol_digital_infrastructure.geojson`: logical information-system nodes
- `external_reference_nodes.geojson`: Frontex, eu-LISA, Eurojust, ENISA reference nodes
- `europol_relations.geojson`: conceptual links

## Data quality

This is realistic for public mapping and narrative worldbuilding, but it is not an operational map of Europol infrastructure.
