#!/usr/bin/env python3
import argparse
import json
import math
from pathlib import Path


def meters_to_lonlat(lon0, lat0, east_m, north_m):
    meters_per_deg_lat = 111_320
    meters_per_deg_lon = 111_320 * math.cos(math.radians(lat0))
    return [lon0 + east_m / meters_per_deg_lon, lat0 + north_m / meters_per_deg_lat]


def rotate_xy(x, y, angle_deg):
    a = math.radians(angle_deg)
    return x * math.cos(a) - y * math.sin(a), x * math.sin(a) + y * math.cos(a)


def local_to_geo(x, y, lon0, lat0, rotation_deg):
    # Coordinate locali: x verso destra/est, y verso il basso/sud.
    east = x
    north = -y
    east_r, north_r = rotate_xy(east, north, rotation_deg)
    return meters_to_lonlat(lon0, lat0, east_r, north_r)


def rect_to_polygon(rect):
    x, y, w, h = rect["x"], rect["y"], rect["w"], rect["h"]
    return [[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]]


def feature_to_geojson(feat, lon0, lat0, rotation_deg):
    props = {k: v for k, v in feat.items() if k not in ("rect", "line", "point", "polygon")}

    if "rect" in feat:
        coords_local = rect_to_polygon(feat["rect"])
        coords_geo = [local_to_geo(x, y, lon0, lat0, rotation_deg) for x, y in coords_local]
        geometry = {"type": "Polygon", "coordinates": [coords_geo]}
    elif "polygon" in feat:
        coords_geo = [local_to_geo(x, y, lon0, lat0, rotation_deg) for x, y in feat["polygon"]]
        geometry = {"type": "Polygon", "coordinates": [coords_geo]}
    elif "line" in feat:
        coords_geo = [local_to_geo(x, y, lon0, lat0, rotation_deg) for x, y in feat["line"]]
        geometry = {"type": "LineString", "coordinates": coords_geo}
    elif "point" in feat:
        x, y = feat["point"]
        geometry = {"type": "Point", "coordinates": local_to_geo(x, y, lon0, lat0, rotation_deg)}
    else:
        raise ValueError(f"Feature senza geometria riconosciuta: {feat.get('nome', '<senza nome>')}")

    return {"type": "Feature", "properties": props, "geometry": geometry}


def main():
    parser = argparse.ArgumentParser(description="Converte una pianta locale in metri in GeoJSON EPSG:4326.")
    parser.add_argument("input_json", help="File JSON con coordinate locali in metri.")
    parser.add_argument("-o", "--output", help="GeoJSON di output.")
    args = parser.parse_args()

    input_path = Path(args.input_json)
    data = json.loads(input_path.read_text(encoding="utf-8"))

    origin = data["coordinate_system"]["origin"]
    lon0 = origin["lon"]
    lat0 = origin["lat"]
    rotation_deg = data["coordinate_system"].get("rotation_deg", 0)

    features = [feature_to_geojson(feat, lon0, lat0, rotation_deg) for feat in data["features"]]

    geojson = {
        "type": "FeatureCollection",
        "name": data.get("name", input_path.stem),
        "crs": {"type": "name", "properties": {"name": "EPSG:4326"}},
        "features": features,
    }

    output_path = Path(args.output) if args.output else input_path.with_suffix(".geojson")
    output_path.write_text(json.dumps(geojson, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Creato: {output_path}")


if __name__ == "__main__":
    main()
