#!/usr/bin/env python3
from pathlib import Path
import csv, sys

base = Path(__file__).resolve().parents[1]
path = base / "data" / "processed" / "ai_factories.csv"
required = ["id","name","country","city","lat","lon","factory_type","selection_batch","host_entity","source"]
errors = []

with path.open(encoding="utf-8") as f:
    reader = csv.DictReader(f)
    missing = [c for c in required if c not in reader.fieldnames]
    if missing:
        errors.append(f"Missing columns: {missing}")
    seen = set()
    rows = list(reader)
    for i, row in enumerate(rows, start=2):
        rid = row.get("id", "").strip()
        if not rid:
            errors.append(f"Row {i}: missing id")
        if rid in seen:
            errors.append(f"Row {i}: duplicate id {rid}")
        seen.add(rid)
        try:
            lat = float(row["lat"])
            lon = float(row["lon"])
            if not -90 <= lat <= 90:
                errors.append(f"Row {i}: invalid latitude {lat}")
            if not -180 <= lon <= 180:
                errors.append(f"Row {i}: invalid longitude {lon}")
        except Exception:
            errors.append(f"Row {i}: invalid coordinates")

if len(rows) != 19:
    errors.append(f"Expected 19 AI Factories, found {len(rows)}")

if errors:
    print("Validation failed:")
    for e in errors:
        print(" -", e)
    sys.exit(1)

print("Validation OK")
print(f"AI Factories: {len(rows)}")
