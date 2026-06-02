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


def local_to_geo(x, y, lon0, lat0, rotation_deg, unit_scale):
    # Coordinate locali: x verso destra/est, y verso il basso/sud.
    # unit_scale = metri per unità locale.
    east = x * unit_scale
    north = -y * unit_scale
    east_r, north_r = rotate_xy(east, north, rotation_deg)
    return meters_to_lonlat(lon0, lat0, east_r, north_r)


def rect_to_polygon(rect):
    x, y, w, h = rect["x"], rect["y"], rect["w"], rect["h"]
    return [[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]]


def collect_local_points(feat):
    """Restituisce tutti i punti locali usati da una feature."""
    if "rect" in feat:
        return rect_to_polygon(feat["rect"])
    if "polygon" in feat:
        return feat["polygon"]
    if "line" in feat:
        return feat["line"]
    if "point" in feat:
        return [feat["point"]]
    return []


def compute_center(features):
    """Calcola il centro del bounding box di tutte le geometrie locali."""
    pts = []
    for feat in features:
        pts.extend(collect_local_points(feat))

    if not pts:
        raise ValueError("Impossibile calcolare il centro: nessuna geometria trovata in features.")

    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    return [(min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2]


def make_metadata_label_feature(data):
    """Crea una feature locale Point con i metadata globali, se show_label è true."""
    metadata = data.get("metadata", {})
    if not metadata.get("show_label", False):
        return None

    center_point = compute_center(data.get("features", []))

    label = metadata.get("label", data.get("name", "luogo"))
    tipo = metadata.get("tipo", "label")

    props = dict(metadata)
    props.update({
        "nome": label,
        "label": label,
        "tipo": tipo,
        "feature_role": "metadata_label",
        "source": "global_metadata",
        "center_x": center_point[0],
        "center_y": center_point[1],
    })

    return {
        **props,
        "point": center_point,
    }


def feature_to_geojson(feat, lon0, lat0, rotation_deg, unit_scale):
    props = {k: v for k, v in feat.items() if k not in ("rect", "line", "point", "polygon")}

    if "rect" in feat:
        coords_local = rect_to_polygon(feat["rect"])
        coords_geo = [local_to_geo(x, y, lon0, lat0, rotation_deg, unit_scale) for x, y in coords_local]
        geometry = {"type": "Polygon", "coordinates": [coords_geo]}
    elif "polygon" in feat:
        coords_geo = [local_to_geo(x, y, lon0, lat0, rotation_deg, unit_scale) for x, y in feat["polygon"]]
        geometry = {"type": "Polygon", "coordinates": [coords_geo]}
    elif "line" in feat:
        coords_geo = [local_to_geo(x, y, lon0, lat0, rotation_deg, unit_scale) for x, y in feat["line"]]
        geometry = {"type": "LineString", "coordinates": coords_geo}
    elif "point" in feat:
        x, y = feat["point"]
        geometry = {"type": "Point", "coordinates": local_to_geo(x, y, lon0, lat0, rotation_deg, unit_scale)}
    else:
        raise ValueError(f"Feature senza geometria riconosciuta: {feat.get('nome', '<senza nome>')}")

    return {"type": "Feature", "properties": props, "geometry": geometry}


def main():
    parser = argparse.ArgumentParser(description="Converte una pianta locale in GeoJSON EPSG:4326.")
    parser.add_argument("input_json", help="File JSON con coordinate locali.")
    parser.add_argument("-o", "--output", help="GeoJSON di output.")
    parser.add_argument(
        "-s", "--unit-scale",
        type=float,
        default=1.0,
        help="Metri per unità locale. Esempi: 1=metri, 0.5=mezzo metro, 0.01=centimetri."
    )
    parser.add_argument(
        "--no-metadata-label",
        action="store_true",
        help="Non crea il punto centrale dei metadata, anche se metadata.show_label=true."
    )
    args = parser.parse_args()

    input_path = Path(args.input_json)
    data = json.loads(input_path.read_text(encoding="utf-8"))

    origin = data["coordinate_system"]["origin"]
    lon0 = origin["lon"]
    lat0 = origin["lat"]
    rotation_deg = data["coordinate_system"].get("rotation_deg", 0)

    local_features = list(data.get("features", []))

    metadata_label = None
    if not args.no_metadata_label:
        metadata_label = make_metadata_label_feature(data)
        if metadata_label is not None:
            local_features.append(metadata_label)

    features = [
        feature_to_geojson(feat, lon0, lat0, rotation_deg, args.unit_scale)
        for feat in local_features
    ]

    geojson = {
        "type": "FeatureCollection",
        "name": data.get("name", input_path.stem),
        "metadata": data.get("metadata", {}),
        "crs": {"type": "name", "properties": {"name": "EPSG:4326"}},
        "features": features,
    }

    output_path = Path(args.output) if args.output else input_path.with_suffix(".geojson")
    output_path.write_text(json.dumps(geojson, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Creato: {output_path}")
    if metadata_label is not None:
        print(
            "Aggiunto punto metadata centrale: "
            f"{metadata_label.get('label')} "
            f"({metadata_label['center_x']}, {metadata_label['center_y']})"
        )


if __name__ == "__main__":
    main()
