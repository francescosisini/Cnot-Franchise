# Suggerimento QGIS

Carica `eu_membership_timeline.geojson`.

Per temporal controller:
- Configuration: Single Field with Start and End Date/Time
- Start field: `temporal_start`
- End field: `temporal_end`

Stile suggerito:
- categorizza `accession_wave`, oppure
- filtra `temporal_start <= @map_start_time AND temporal_end >= @map_start_time`.

Per una geonarrazione:
- usa `membership_status = 'former_member'` per evidenziare il Regno Unito.
