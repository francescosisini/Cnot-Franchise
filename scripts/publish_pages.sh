#!/usr/bin/env bash
set -e

echo "Publishing GitHub Pages site..."

# Pulisce solo gli output pubblicati, non tutta docs
rm -rf docs/xr/convitto

# Ricrea le cartelle
mkdir -p docs/xr
mkdir -p docs/gis

# Copia il prodotto finale XR
cp -r xr/viewers/convitto docs/xr/convitto

# Assicura che GitHub Pages non usi Jekyll
touch docs/.nojekyll

echo "Done."
echo "Published XR viewer to docs/xr/convitto"
