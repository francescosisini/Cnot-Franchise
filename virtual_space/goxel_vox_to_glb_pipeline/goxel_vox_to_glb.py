#!/usr/bin/env python3
"""
goxel_vox_to_glb.py

Converte un file voxel testuale esportato da Goxel in un GLB 2.0.

Formato Goxel supportato:

    # Goxel 0.15.1
    v -9 0 10 1.000000 1.000000 1.000000
    v -8 0 10 1.000000 1.000000 1.000000
    ...

Ogni riga 'v' contiene:

    v x y z r g b

dove:
- x y z sono coordinate voxel intere
- r g b sono colori float da 0.0 a 1.0

Uso:

    python3 goxel_vox_to_glb.py input.vox convitto.glb

Opzioni:

    --voxel-size 0.5       dimensione di un voxel in metri/unità WebXR
    --center               centra automaticamente il modello sull'origine XZ
    --floor-y0             porta la quota minima Y a 0
    --swap-yz              scambia gli assi Y e Z, utile se il modello appare coricato
    --merge-colors         raggruppa colori simili in valori 0-255
"""

import argparse
import json
import struct
from pathlib import Path
from collections import defaultdict


def align4(data: bytes, pad_byte=b"\x00") -> bytes:
    padding = (4 - (len(data) % 4)) % 4
    return data + pad_byte * padding


def rgb_float_to_key(r, g, b, merge=True):
    if merge:
        return (
            max(0, min(255, round(float(r) * 255))),
            max(0, min(255, round(float(g) * 255))),
            max(0, min(255, round(float(b) * 255))),
        )
    return (float(r), float(g), float(b))


def color_key_to_rgba(key):
    if isinstance(key[0], int):
        r, g, b = key
        return [r / 255, g / 255, b / 255, 1.0]
    r, g, b = key
    return [float(r), float(g), float(b), 1.0]


def color_name(key):
    if isinstance(key[0], int):
        return f"rgb_{key[0]}_{key[1]}_{key[2]}"
    return f"rgb_{key[0]:.3f}_{key[1]:.3f}_{key[2]:.3f}"


def parse_goxel_vox(path, merge_colors=True, swap_yz=False):
    voxels = {}

    for line_no, raw in enumerate(Path(path).read_text(encoding="utf-8", errors="ignore").splitlines(), start=1):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue

        parts = line.split()
        if parts[0] != "v":
            continue

        if len(parts) < 7:
            raise ValueError(f"Riga {line_no}: formato voxel non valido: {raw}")

        x = int(float(parts[1]))
        y = int(float(parts[2]))
        z = int(float(parts[3]))

        r = float(parts[4])
        g = float(parts[5])
        b = float(parts[6])

        if swap_yz:
            y, z = z, y

        color = rgb_float_to_key(r, g, b, merge=merge_colors)
        voxels[(x, y, z)] = color

    return voxels


def normalize_voxels(voxels, center=False, floor_y0=False):
    if not voxels:
        return voxels

    xs = [p[0] for p in voxels]
    ys = [p[1] for p in voxels]
    zs = [p[2] for p in voxels]

    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    min_z, max_z = min(zs), max(zs)

    dx = 0
    dy = 0
    dz = 0

    if center:
        # Centro su XZ. Arrotondamento intero per restare su griglia voxel.
        dx = -round((min_x + max_x) / 2)
        dz = -round((min_z + max_z) / 2)

    if floor_y0:
        dy = -min_y

    out = {}
    for (x, y, z), color in voxels.items():
        out[(x + dx, y + dy, z + dz)] = color

    return out


def add_voxel_grid(primitives, voxels, voxel_size):
    """
    Genera solo le facce esterne: le facce interne tra voxel adiacenti vengono eliminate.
    primitives[color] = (positions, normals, indices)
    """
    directions = [
        ((1, 0, 0),  (1, 0, 0)),
        ((-1, 0, 0), (-1, 0, 0)),
        ((0, 1, 0),  (0, 1, 0)),
        ((0, -1, 0), (0, -1, 0)),
        ((0, 0, 1),  (0, 0, 1)),
        ((0, 0, -1), (0, 0, -1)),
    ]

    face_vertices = {
        (1, 0, 0):  [(1,0,0), (1,0,1), (1,1,1), (1,1,0)],
        (-1, 0, 0): [(0,0,1), (0,0,0), (0,1,0), (0,1,1)],
        (0, 1, 0):  [(0,1,0), (1,1,0), (1,1,1), (0,1,1)],
        (0, -1, 0): [(0,0,1), (1,0,1), (1,0,0), (0,0,0)],
        (0, 0, 1):  [(1,0,1), (0,0,1), (0,1,1), (1,1,1)],
        (0, 0, -1): [(0,0,0), (1,0,0), (1,1,0), (0,1,0)],
    }

    for (x, y, z), color in voxels.items():
        for d, normal in directions:
            neighbor = (x + d[0], y + d[1], z + d[2])
            if neighbor in voxels:
                continue

            positions, normals, indices = primitives[color]
            base_index = len(positions)

            for vx, vy, vz in face_vertices[d]:
                positions.append((
                    (x + vx) * voxel_size,
                    (y + vy) * voxel_size,
                    (z + vz) * voxel_size
                ))

            normals.extend([normal, normal, normal, normal])
            indices.extend([
                base_index + 0, base_index + 1, base_index + 2,
                base_index + 0, base_index + 2, base_index + 3,
            ])


def pack_floats3(values):
    out = bytearray()
    for x, y, z in values:
        out += struct.pack("<fff", float(x), float(y), float(z))
    return bytes(out)


def pack_uint32(values):
    out = bytearray()
    for v in values:
        out += struct.pack("<I", int(v))
    return bytes(out)


def min_max_vec3(values):
    xs = [v[0] for v in values]
    ys = [v[1] for v in values]
    zs = [v[2] for v in values]
    return [min(xs), min(ys), min(zs)], [max(xs), max(ys), max(zs)]


def build_glb(primitives, output_path):
    buffer = bytearray()
    buffer_views = []
    accessors = []
    mesh_primitives = []
    materials = []

    color_to_mat_index = {}

    for color in primitives.keys():
        color_to_mat_index[color] = len(materials)
        rgba = color_key_to_rgba(color)
        materials.append({
            "name": color_name(color),
            "pbrMetallicRoughness": {
                "baseColorFactor": rgba,
                "metallicFactor": 0.0,
                "roughnessFactor": 0.9
            },
            "doubleSided": False
        })

    def add_buffer_view(data_bytes, target):
        offset = len(buffer)
        buffer.extend(data_bytes)
        buffer.extend(b"\x00" * ((4 - (len(buffer) % 4)) % 4))

        buffer_views.append({
            "buffer": 0,
            "byteOffset": offset,
            "byteLength": len(data_bytes),
            "target": target
        })
        return len(buffer_views) - 1

    def add_accessor(buffer_view_index, component_type, count, accessor_type, min_val=None, max_val=None):
        acc = {
            "bufferView": buffer_view_index,
            "componentType": component_type,
            "count": count,
            "type": accessor_type
        }
        if min_val is not None:
            acc["min"] = min_val
        if max_val is not None:
            acc["max"] = max_val

        accessors.append(acc)
        return len(accessors) - 1

    for color, (positions, normals, indices) in primitives.items():
        if not positions or not indices:
            continue

        pos_data = pack_floats3(positions)
        nor_data = pack_floats3(normals)
        idx_data = pack_uint32(indices)

        pos_bv = add_buffer_view(pos_data, 34962)
        nor_bv = add_buffer_view(nor_data, 34962)
        idx_bv = add_buffer_view(idx_data, 34963)

        mn, mx = min_max_vec3(positions)

        pos_acc = add_accessor(pos_bv, 5126, len(positions), "VEC3", mn, mx)
        nor_acc = add_accessor(nor_bv, 5126, len(normals), "VEC3")
        idx_acc = add_accessor(idx_bv, 5125, len(indices), "SCALAR")

        mesh_primitives.append({
            "attributes": {
                "POSITION": pos_acc,
                "NORMAL": nor_acc
            },
            "indices": idx_acc,
            "material": color_to_mat_index[color],
            "mode": 4
        })

    gltf = {
        "asset": {
            "version": "2.0",
            "generator": "goxel_vox_to_glb.py"
        },
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes": [{"mesh": 0, "name": "GoxelVoxelScene"}],
        "meshes": [{
            "name": "GoxelVoxelMesh",
            "primitives": mesh_primitives
        }],
        "materials": materials,
        "buffers": [{"byteLength": len(buffer)}],
        "bufferViews": buffer_views,
        "accessors": accessors
    }

    json_chunk = json.dumps(gltf, separators=(",", ":")).encode("utf-8")
    json_chunk = align4(json_chunk, b" ")
    bin_chunk = align4(bytes(buffer), b"\x00")

    total_length = 12 + 8 + len(json_chunk) + 8 + len(bin_chunk)

    glb = bytearray()
    glb += struct.pack("<I", 0x46546C67)
    glb += struct.pack("<I", 2)
    glb += struct.pack("<I", total_length)

    glb += struct.pack("<I", len(json_chunk))
    glb += struct.pack("<I", 0x4E4F534A)
    glb += json_chunk

    glb += struct.pack("<I", len(bin_chunk))
    glb += struct.pack("<I", 0x004E4942)
    glb += bin_chunk

    Path(output_path).write_bytes(glb)


def print_stats(voxels):
    if not voxels:
        print("Nessun voxel trovato.")
        return

    xs = [p[0] for p in voxels]
    ys = [p[1] for p in voxels]
    zs = [p[2] for p in voxels]
    colors = set(voxels.values())

    print(f"Voxel: {len(voxels)}")
    print(f"Colori: {len(colors)}")
    print(f"Bounds X: {min(xs)} → {max(xs)}")
    print(f"Bounds Y: {min(ys)} → {max(ys)}")
    print(f"Bounds Z: {min(zs)} → {max(zs)}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("input_vox", help="File .vox testuale esportato da Goxel")
    parser.add_argument("output_glb", help="File .glb da creare")
    parser.add_argument("--voxel-size", type=float, default=0.5, help="Dimensione del voxel. Default: 0.5")
    parser.add_argument("--center", action="store_true", help="Centra il modello sull'origine XZ")
    parser.add_argument("--floor-y0", action="store_true", help="Porta la quota minima Y a 0")
    parser.add_argument("--swap-yz", action="store_true", help="Scambia Y e Z se il modello appare coricato")
    parser.add_argument("--no-merge-colors", action="store_true", help="Non quantizza i colori a 0-255")
    args = parser.parse_args()

    voxels = parse_goxel_vox(
        args.input_vox,
        merge_colors=not args.no_merge_colors,
        swap_yz=args.swap_yz
    )

    print("Prima della normalizzazione:")
    print_stats(voxels)

    voxels = normalize_voxels(
        voxels,
        center=args.center,
        floor_y0=args.floor_y0
    )

    print("\nDopo la normalizzazione:")
    print_stats(voxels)

    primitives = defaultdict(lambda: ([], [], []))
    add_voxel_grid(primitives, voxels, args.voxel_size)
    build_glb(primitives, args.output_glb)

    print(f"\nCreato: {args.output_glb}")


if __name__ == "__main__":
    main()
