# EU membership timeline layer

Layer GeoJSON per rappresentare la nascita e gli allargamenti dell'Europa comunitaria / Unione europea.

## File

```text
data/processed/eu_membership_timeline.geojson
data/processed/eu_membership_timeline.csv
data/processed/eu_membership_waves.csv
```

## Campi principali

- `country_en`, `country_it`
- `iso2`, `iso3`
- `entry_date`: data di ingresso nella Comunità / UE
- `exit_date`: data di uscita, se presente
- `temporal_start`: uguale a `entry_date`, pensato per QGIS temporal controller
- `temporal_end`: uguale a `exit_date`, oppure `2041-12-31` per i membri attuali
- `membership_status`: `current_member` oppure `former_member`
- `is_current_member`
- `founding_member`
- `accession_wave`
- `accession_label`
- `members_after_accession_wave`
- `joined_as`: EEC, EC oppure EU
- `label_lon`, `label_lat`: punto etichetta/centroide
- `notes`

## Note metodologiche

- Le date pre-1993 indicano l'ingresso nelle Comunità europee / CEE, non nell'UE in senso stretto.
- La geometria è Natural Earth low resolution; è adatta a visualizzazioni narrative e web, non a cartografia legale.
- La Germania è rappresentata con confini moderni, anche se nel 1958 il membro era la Repubblica Federale Tedesca.
- Malta è aggiunta con un piccolo poligono approssimato perché non presente nel fixture Natural Earth lowres usato qui.
- Per i membri attuali `temporal_end` è impostato a `2041-12-31` per funzionare bene come intervallo temporale in QGIS.
