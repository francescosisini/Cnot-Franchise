#!/usr/bin/env python3
import sys

def generate_uvs_smart(input_path, output_path):
    verts, normals, headers = [], [], []
    faces = []  # ciascun elemento = ([vert_indices], [normal_indices])
    with open(input_path) as f:
        for line in f:
            if line.startswith('v '):
                parts = line.split()
                verts.append(tuple(map(float, parts[1:4])))
            elif line.startswith('vn '):
                normals.append(tuple(map(float, line.split()[1:4])))
            elif line.startswith('f '):
                idxs = line.split()[1:]
                v_idx, n_idx = [], []
                for p in idxs:
                    v, _, n = p.partition('//')
                    v_idx.append(int(v))
                    n_idx.append(int(n))
                faces.append((v_idx, n_idx))
            else:
                headers.append(line.rstrip())

    # bounding box
    xs = [v[0] for v in verts]; ys = [v[1] for v in verts]; zs = [v[2] for v in verts]
    minX, maxX = min(xs), max(xs)
    minY, maxY = min(ys), max(ys)
    minZ, maxZ = min(zs), max(zs)
    dx = maxX-minX or 1.0; dy = maxY-minY or 1.0; dz = maxZ-minZ or 1.0

    # collector per vt: un vt per faccia-vertice
    vt_list = []
    # nuovo indice vt
    def add_vt(u,v):
        vt_list.append((u,v))
        return len(vt_list)

    # prepariamo output
    with open(output_path, 'w') as out:
        # header
        for h in headers: out.write(h+'\n')
        out.write('\n')
        # v
        for x,y,z in verts:
            out.write(f"v {x:.6f} {y:.6f} {z:.6f}\n")
        out.write('\n')
        # vt e f
        for v_idxs, n_idxs in faces:
            # per ogni vertice della faccia, calcolo UV basato sulla normale
            face_vt_idxs = []
            # leggi normale dominante
            nx, ny, nz = normals[n_idxs[0]-1]
            ax = abs(nx); ay = abs(ny); az = abs(nz)
            for vi in v_idxs:
                x,y,z = verts[vi-1]
                if ay>=ax and ay>=az:
                    u = (x-minX)/dx; v = (z-minZ)/dz      # pavimento/tetto
                elif az>=ax and az>=ay:
                    u = (x-minX)/dx; v = (y-minY)/dy      # pareti front/back
                else:
                    u = (z-minZ)/dz; v = (y-minY)/dy      # pareti lat
                face_vt_idxs.append(add_vt(u,v))
            # ora scrivo i vt di tutte le facce
        # dump vt
        for u,v in vt_list:
            out.write(f"vt {u:.6f} {v:.6f}\n")
        out.write('\n')
        # vn
        for nx,ny,nz in normals:
            out.write(f"vn {nx:.6f} {ny:.6f} {nz:.6f}\n")
        out.write('\n')
        # facce f v/vt/vn
        vt_cursor = 1
        for v_idxs, n_idxs in faces:
            parts = []
            for vi, ni in zip(v_idxs, n_idxs):
                parts.append(f"{vi}/{vt_cursor}/{ni}")
                vt_cursor += 1
            out.write("f " + " ".join(parts) + "\n")

if __name__ == "__main__":
    if len(sys.argv)!=3:
        print("Usage: python smart_uvs.py in.obj out.obj"); sys.exit(1)
    generate_uvs_smart(sys.argv[1], sys.argv[2])
    print("Wrote", sys.argv[2])
