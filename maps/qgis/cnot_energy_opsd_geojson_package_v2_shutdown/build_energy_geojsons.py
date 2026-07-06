#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CNOT GIS — Build OPSD energy GeoJSONs, with shutdown support

Standard-library only. Works outside QGIS.

Usage:
    python3 build_energy_geojsons.py --input input/conventional_power_plants_EU.csv
    python3 build_energy_geojsons.py --download

Output:
    geojson/*.geojson
    csv/*.csv

Temporal model:
    temporal_start = commissioned year, as YYYY-01-01
    temporal_end   = shutdown year, as YYYY-12-31, when shutdown exists
                   = 2100-01-01 otherwise
"""

import argparse
import csv
import io
import json
import os
import urllib.request

OPSD_PRIMARY_URL = "https://data.open-power-system-data.org/conventional_power_plants/2020-10-01/conventional_power_plants_EU.csv"
OPSD_BACKUP_URL = "https://raw.githubusercontent.com/pypsa-meets-earth/ppm-data-backup/main/conventional_power_plants_EU.csv"
DEFAULT_TEMPORAL_END = "2100-01-01"

OUT_GROUPS = {
    "Natural gas": "energy_opsd_natural_gas.geojson",
    "Coal": "energy_opsd_coal.geojson",
    "Lignite": "energy_opsd_lignite.geojson",
    "Oil": "energy_opsd_oil.geojson",
    "Hydro": "energy_opsd_hydro.geojson",
    "Bioenergy": "energy_opsd_bioenergy.geojson",
    "Waste": "energy_opsd_waste.geojson",
    "Other": "energy_opsd_other.geojson",
}


def clean_text(value):
    if value is None:
        return ""
    return str(value).strip()


def first_non_empty(row, names):
    for name in names:
        value = row.get(name)
        if value is not None and clean_text(value) != "":
            return value
    return None


def safe_float(value):
    if value is None:
        return None
    value = clean_text(value)
    if not value or value.lower() in {"nan", "none", "null", "#name?"}:
        return None
    try:
        return float(value)
    except Exception:
        return None


def safe_int_year(value):
    if value is None:
        return None
    value = clean_text(value)
    if not value or value.lower() in {"nan", "none", "null", "#name?", "n/a", "na"}:
        return None
    try:
        y = int(float(value))
        if 1800 <= y <= 2200:
            return y
        return None
    except Exception:
        return None


def classify_energy_group(row):
    parts = [
        row.get("energy_source"),
        row.get("fuel"),
        row.get("energy_source_level_1"),
        row.get("energy_source_level_2"),
        row.get("energy_source_level_3"),
        row.get("technology"),
    ]
    s = " ".join(clean_text(p).lower() for p in parts)

    if "nuclear" in s:
        return "Nuclear"
    if "lignite" in s or "brown coal" in s:
        return "Lignite"
    if "hard coal" in s or "coal" in s:
        return "Coal"
    if "natural gas" in s or "gas" in s or "ccgt" in s or "ocgt" in s:
        return "Natural gas"
    if "oil" in s or "diesel" in s or "petroleum" in s:
        return "Oil"
    if "hydro" in s or "pumped storage" in s or "run-of-river" in s or "reservoir" in s:
        return "Hydro"
    if "biomass" in s or "biogas" in s or "bioenergy" in s:
        return "Bioenergy"
    if "waste" in s:
        return "Waste"
    return "Other"


def download_csv():
    last_error = None
    for url in [OPSD_PRIMARY_URL, OPSD_BACKUP_URL]:
        try:
            print(f"Downloading: {url}")
            req = urllib.request.Request(url, headers={"User-Agent": "CNOT-GIS-OPSD-GeoJSON-builder"})
            with urllib.request.urlopen(req, timeout=60) as response:
                raw = response.read()
            text = raw.decode("utf-8-sig")
            os.makedirs("input", exist_ok=True)
            out = os.path.join("input", "conventional_power_plants_EU.csv")
            with open(out, "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Saved CSV to: {out}")
            return text
        except Exception as e:
            last_error = e
            print(f"Download failed from {url}: {e}")
    raise RuntimeError(f"Could not download CSV. Last error: {last_error}")


def read_csv_text(path):
    with open(path, "r", encoding="utf-8-sig", newline="") as f:
        return f.read()


def process_rows(csv_text, require_commissioned=True):
    reader = csv.DictReader(io.StringIO(csv_text))
    processed = []
    skipped_no_geometry = 0
    skipped_no_year = 0

    for raw_row in reader:
        lat = safe_float(first_non_empty(raw_row, ["lat", "latitude"]))
        lon = safe_float(first_non_empty(raw_row, ["lon", "longitude", "lng"]))
        if lat is None or lon is None:
            skipped_no_geometry += 1
            continue

        commissioned = safe_int_year(raw_row.get("commissioned"))
        shutdown = safe_int_year(raw_row.get("shutdown"))

        if require_commissioned and commissioned is None:
            skipped_no_year += 1
            continue

        temporal_start = f"{commissioned:04d}-01-01" if commissioned is not None else None
        if shutdown is not None:
            temporal_end = f"{shutdown:04d}-12-31"
            temporal_end_source = "OPSD shutdown year"
            is_shutdown = True
        else:
            temporal_end = DEFAULT_TEMPORAL_END
            temporal_end_source = "default open-ended value"
            is_shutdown = False

        group = classify_energy_group(raw_row)
        capacity = safe_float(first_non_empty(raw_row, ["capacity", "capacity_net_bnetza", "capacity_gross_uba"]))
        country = clean_text(first_non_empty(raw_row, ["country", "country_code"]))
        name = clean_text(first_non_empty(raw_row, ["name", "name_bnetza", "name_uba"]))

        processed.append({
            "plant_id": clean_text(raw_row.get("id")) or f"OPSD_EU_{len(processed)+1:05d}",
            "name": name,
            "country": country,
            "capacity_mw": capacity,
            "energy_source": clean_text(first_non_empty(raw_row, ["energy_source", "fuel"])),
            "energy_group": group,
            "technology": clean_text(raw_row.get("technology")),
            "status": clean_text(raw_row.get("status")),
            "commissioned": commissioned,
            "shutdown": shutdown,
            "is_shutdown": is_shutdown,
            "temporal_start": temporal_start,
            "temporal_end": temporal_end,
            "temporal_end_source": temporal_end_source,
            "temporal_basis": "temporal_start from OPSD commissioned year; temporal_end from OPSD shutdown year when present, approximated as YYYY-12-31; otherwise set to 2100-01-01",
            "company": clean_text(raw_row.get("company")),
            "city": clean_text(raw_row.get("city")),
            "state": clean_text(raw_row.get("state")),
            "eic_code": clean_text(raw_row.get("eic_code")),
            "energy_source_level_1": clean_text(raw_row.get("energy_source_level_1")),
            "energy_source_level_2": clean_text(raw_row.get("energy_source_level_2")),
            "energy_source_level_3": clean_text(raw_row.get("energy_source_level_3")),
            "original_source": clean_text(raw_row.get("source")),
            "source_dataset": "Open Power System Data - Conventional power plants - EU CSV - 2020-10-01",
            "source_url": OPSD_PRIMARY_URL,
            "lon": lon,
            "lat": lat,
        })

    return processed, skipped_no_geometry, skipped_no_year


def write_geojson(path, rows, layer_name):
    features = []
    for r in rows:
        props = {k: v for k, v in r.items() if k not in {"lon", "lat"}}
        features.append({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [r["lon"], r["lat"]]},
            "properties": props,
        })

    fc = {
        "type": "FeatureCollection",
        "name": layer_name,
        "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
        "features": features,
    }

    with open(path, "w", encoding="utf-8") as f:
        json.dump(fc, f, ensure_ascii=False, indent=2)


def write_csv(path, rows):
    if not rows:
        return
    with open(path, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", help="Path to conventional_power_plants_EU.csv")
    parser.add_argument("--download", action="store_true", help="Download OPSD CSV automatically")
    parser.add_argument("--keep-rows-without-year", action="store_true", help="Keep rows without commissioned year; temporal_start will be null")
    args = parser.parse_args()

    if not args.input and not args.download:
        parser.error("Use --input input/conventional_power_plants_EU.csv or --download")

    csv_text = download_csv() if args.download else read_csv_text(args.input)

    os.makedirs("geojson", exist_ok=True)
    os.makedirs("csv", exist_ok=True)

    rows, skipped_geom, skipped_year = process_rows(csv_text, require_commissioned=not args.keep_rows_without_year)

    all_including = rows
    all_except_nuclear = [r for r in rows if r["energy_group"] != "Nuclear"]

    write_geojson(os.path.join("geojson", "energy_opsd_all_including_nuclear.geojson"), all_including, "energy_opsd_all_including_nuclear")
    write_geojson(os.path.join("geojson", "energy_opsd_all_except_nuclear.geojson"), all_except_nuclear, "energy_opsd_all_except_nuclear")
    write_csv(os.path.join("csv", "energy_opsd_all_including_nuclear_processed.csv"), all_including)
    write_csv(os.path.join("csv", "energy_opsd_all_except_nuclear_processed.csv"), all_except_nuclear)

    for group, filename in OUT_GROUPS.items():
        group_rows = [r for r in all_except_nuclear if r["energy_group"] == group]
        name = filename.replace(".geojson", "")
        write_geojson(os.path.join("geojson", filename), group_rows, name)
        write_csv(os.path.join("csv", filename.replace(".geojson", ".csv")), group_rows)

    counts = {}
    shutdown_count = 0
    open_ended_count = 0
    for r in rows:
        counts[r["energy_group"]] = counts.get(r["energy_group"], 0) + 1
        if r["shutdown"] is not None:
            shutdown_count += 1
        else:
            open_ended_count += 1

    summary = {
        "total_rows_with_geometry_and_year": len(rows),
        "all_except_nuclear": len(all_except_nuclear),
        "skipped_no_geometry": skipped_geom,
        "skipped_no_commissioned_year": skipped_year,
        "rows_with_shutdown_year": shutdown_count,
        "rows_without_shutdown_year_open_ended_to_2100": open_ended_count,
        "counts_by_energy_group": counts,
        "temporal_note": "temporal_start from commissioned year; temporal_end from shutdown year when present; otherwise 2100-01-01.",
    }
    with open(os.path.join("geojson", "BUILD_SUMMARY.json"), "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)

    print("Done. GeoJSON files written to ./geojson")
    print(json.dumps(summary, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
