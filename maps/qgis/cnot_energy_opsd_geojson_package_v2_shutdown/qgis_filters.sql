-- Useful QGIS filters

-- Plants visible at least once between 1970 and 1980
"temporal_start" <= '1980-12-31'
AND
"temporal_end" >= '1970-01-01'

-- Plants visible in 1980
"temporal_start" <= '1980-01-01'
AND
"temporal_end" >= '1980-01-01'

-- Plants visible in 2041
"temporal_start" <= '2041-01-01'
AND
"temporal_end" >= '2041-01-01'

-- Plants decommissioned before 2041
"shutdown" IS NOT NULL
AND
"temporal_end" < '2041-01-01'

-- Plants without shutdown year in OPSD
"shutdown" IS NULL

-- Natural gas, if using all layer
"energy_group" = 'Natural gas'

-- Coal + lignite together
"energy_group" IN ('Coal', 'Lignite')

-- Hydro
"energy_group" = 'Hydro'
