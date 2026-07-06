#!/usr/bin/env python3
from pathlib import Path
import csv
import sys

path = Path(__file__).resolve().parents[1] / "data" / "processed" / "qt_infrastructures.csv"

required = [
    "id", "name", "host", "city", "country", "lat", "lon",
    "technology", "platform", "qubits", "supplier",
    "hosting_supercomputer", "status", "source"
]

errors = []

with path.open(encoding="utf-8") as f:
    reader = csv.DictReader(f)
    missing_cols = [c for c in required if c not in reader.fieldnames]
    if missing_cols:
        errors.append(f"Missing columns: {missing_cols}")

    seen = set()
    for i, row in enumerate(reader, start=2):
        rid = row.get("id", "").strip()
        if not rid:
            errors.append(f"Row {i}: missing id")
        elif rid in seen:
            errors.append(f"Row {i}: duplicate id {rid}")
        seen.add(rid)

        try:
            lat = float(row["lat"])
            lon = float(row["lon"])
            if not (-90 <= lat <= 90):
                errors.append(f"Row {i}: invalid latitude {lat}")
            if not (-180 <= lon <= 180):
                errors.append(f"Row {i}: invalid longitude {lon}")
        except Exception:
            errors.append(f"Row {i}: invalid lat/lon")

        try:
            q = int(row["qubits"])
            if q <= 0:
                errors.append(f"Row {i}: qubits must be positive")
        except Exception:
            errors.append(f"Row {i}: invalid qubits")

if errors:
    print("Validation failed:")
    for e in errors:
        print(" -", e)
    sys.exit(1)

print(f"Validation OK: {path}")
