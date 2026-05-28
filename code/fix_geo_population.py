#!/usr/bin/env python3
import csv
import argparse
from pathlib import Path


def extract_geo_code(value: str) -> str:
    """
    Eurostat sometimes exports geo as:
        AT13:Wien
        ITH5:Emilia-Romagna
        AL01:Veri

    QGIS NUTS_ID needs only:
        AT13
        ITH5
        AL01
    """
    if value is None:
        return ""

    value = value.strip()

    if ":" in value:
        return value.split(":", 1)[0].strip()

    return value


def main():
    parser = argparse.ArgumentParser(
        description="Add a clean geo_code column to an Eurostat CSV."
    )
    parser.add_argument("input_csv", help="Input CSV downloaded from Eurostat")
    parser.add_argument(
        "-o",
        "--output",
        help="Output CSV path. If omitted, creates *_geo_code.csv",
        default=None,
    )

    args = parser.parse_args()

    input_path = Path(args.input_csv)

    if args.output:
        output_path = Path(args.output)
    else:
        output_path = input_path.with_name(input_path.stem + "_geo_code.csv")

    with input_path.open("r", encoding="utf-8-sig", newline="") as infile:
        reader = csv.DictReader(infile)

        if reader.fieldnames is None:
            raise ValueError("CSV senza header.")

        if "geo" not in reader.fieldnames:
            raise ValueError(
                f"Colonna 'geo' non trovata. Colonne disponibili: {reader.fieldnames}"
            )

        fieldnames = list(reader.fieldnames)

        if "geo_code" not in fieldnames:
            fieldnames.append("geo_code")

        rows = []
        for row in reader:
            row["geo_code"] = extract_geo_code(row.get("geo", ""))
            rows.append(row)

    with output_path.open("w", encoding="utf-8", newline="") as outfile:
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(f"Creato: {output_path}")
    print(f"Righe elaborate: {len(rows)}")


if __name__ == "__main__":
    main()
