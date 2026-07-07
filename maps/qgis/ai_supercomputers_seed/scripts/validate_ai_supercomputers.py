#!/usr/bin/env python3
from pathlib import Path
import csv, sys
base = Path(__file__).resolve().parents[1]
systems = list(csv.DictReader((base/'data/processed/ai_supercomputers.csv').open(encoding='utf-8')))
rels = list(csv.DictReader((base/'data/processed/ai_compute_relations.csv').open(encoding='utf-8')))
errors = []
ids = set()
for i, r in enumerate(systems, 2):
    if not r.get('id'): errors.append(f'row {i}: missing id')
    if r.get('id') in ids: errors.append(f'row {i}: duplicate id {r.get("id")}')
    ids.add(r.get('id'))
    try:
        lat = float(r['lat']); lon = float(r['lon'])
        if not -90 <= lat <= 90: errors.append(f'row {i}: invalid lat')
        if not -180 <= lon <= 180: errors.append(f'row {i}: invalid lon')
    except Exception:
        errors.append(f'row {i}: invalid coords')
if len(systems) < 20: errors.append(f'expected at least 20 systems, found {len(systems)}')
if not rels: errors.append('no relations found')
if errors:
    print('Validation failed:')
    for e in errors: print(' -', e)
    sys.exit(1)
print('Validation OK')
print(f'AI compute systems: {len(systems)}')
print(f'AI compute relations: {len(rels)}')
