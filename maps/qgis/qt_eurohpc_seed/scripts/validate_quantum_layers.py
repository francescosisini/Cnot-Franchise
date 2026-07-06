#!/usr/bin/env python3
from pathlib import Path
import csv, sys

base = Path(__file__).resolve().parents[1]
actors_path = base / "data" / "processed" / "qt_actors.csv"
infra_path = base / "data" / "processed" / "qt_infrastructures.csv"
relations_path = base / "data" / "processed" / "qt_relations.csv"

errors = []

def read_csv(path):
    if not path.exists():
        errors.append(f"Missing file: {path}")
        return []
    with path.open(encoding="utf-8") as f:
        return list(csv.DictReader(f))

actors = read_csv(actors_path)
infras = read_csv(infra_path)
relations = read_csv(relations_path)

actor_ids = {r.get("id") for r in actors}
infra_ids = {r.get("id") for r in infras}

def check_points(rows, label):
    seen = set()
    for i, r in enumerate(rows, start=2):
        rid = r.get("id", "").strip()
        if not rid:
            errors.append(f"{label} row {i}: missing id")
        if rid in seen:
            errors.append(f"{label} row {i}: duplicate id {rid}")
        seen.add(rid)
        try:
            lat = float(r["lat"]); lon = float(r["lon"])
            if not (-90 <= lat <= 90):
                errors.append(f"{label} row {i}: invalid latitude {lat}")
            if not (-180 <= lon <= 180):
                errors.append(f"{label} row {i}: invalid longitude {lon}")
        except Exception:
            errors.append(f"{label} row {i}: invalid lat/lon")

check_points(actors, "actors")
check_points(infras, "infrastructures")

seen_rel = set()
for i, r in enumerate(relations, start=2):
    rid = r.get("id", "").strip()
    if not rid:
        errors.append(f"relations row {i}: missing id")
    if rid in seen_rel:
        errors.append(f"relations row {i}: duplicate id {rid}")
    seen_rel.add(rid)
    if r.get("from_id") not in actor_ids:
        errors.append(f"relations row {i}: missing actor reference {r.get('from_id')}")
    if r.get("to_id") not in infra_ids:
        errors.append(f"relations row {i}: missing infrastructure reference {r.get('to_id')}")

if errors:
    print("Validation failed:")
    for e in errors:
        print(" -", e)
    sys.exit(1)

print("Validation OK")
print(f"Actors: {len(actors)}")
print(f"Infrastructures: {len(infras)}")
print(f"Relations: {len(relations)}")
