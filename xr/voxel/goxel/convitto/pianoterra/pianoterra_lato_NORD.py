# Script aggiornato: aggiunta di un "muro" ciclando sull'asse Z

def write_goxel_voxel_file(filename, voxels):
    """
    Scrive un file per Goxel 0.15.1 con lista di voxel.
    """
    header = "# Goxel 0.15.1\n# One line per voxel\n# X Y Z RRGGBB\n"
    with open(filename, 'w') as f:
        f.write(header)
        for x, y, z, color in voxels:
            f.write(f"{x} {y} {z} {color}\n")

def generate_line(start, direction, count, color):
    """
    Genera una linea di voxel.
    """
    sx, sy, sz = start
    dx, dy, dz = direction
    return [(sx + dx*i, sy + dy*i, sz + dz*i, color) for i in range(count)]

def generate_rectangle(start, dir1, dir2, count1, count2, color):
    """
    Genera un rettangolo piano di voxel.
    """
    voxels = []
    sx, sy, sz = start
    d1x, d1y, d1z = dir1
    d2x, d2y, d2z = dir2
    for i in range(count1):
        for j in range(count2):
            x = sx + d1x*i + d2x*j
            y = sy + d1y*i + d2y*j
            z = sz + d1z*i + d2z*j
            voxels.append((x, y, z, color))
    return voxels

def generate_cube(start, size, color):
    """
    Genera un cubo solido di lato 'size'.
    """
    voxels = []
    sx, sy, sz = start
    for i in range(size):
        for j in range(size):
            for k in range(size):
                voxels.append((sx+i, sy+j, sz+k, color))
    return voxels

def generate_wall(start, direction, length, height, color):
    """
    Genera un muro ciclando sull'altezza (asse Z).
    
    Args:
        start: (x, y, z) punto di partenza
        direction: (dx, dy, dz) direzione orizzontale del muro
        length: numero di voxel lungo l'asse orizzontale
        height: numero di voxel in altezza (asse Z)
        color: colore esadecimale es. "888888"
    """
    voxels = []
    sx, sy, sz = start
    dx, dy, dz = direction
    for h in range(height):
        # ad ogni livello Z, genera una linea orizzontale
        base = (sx, sy, sz + h)
        voxels += generate_line(base, direction, length, color)
    return voxels

# Esempio: generazione pattern con muro verticale
voxels = []
# Due porte
voxels += generate_line((0, 47, 1), (1, 0, 0), 12, "ff0000")
voxels += generate_line((15, 47, 1), (1, 0, 0), 57, "ff0000")
voxels += generate_line((75, 47, 1), (1, 0, 0), 5, "ff0000")

voxels += generate_line((0, 47, 2), (1, 0, 0), 12, "ff0000")
voxels += generate_line((15, 47, 2), (1, 0, 0), 57, "ff0000")
voxels += generate_line((75, 47, 2), (1, 0, 0), 5, "ff0000")

voxels += generate_line((0, 47, 3), (1, 0, 0), 12, "ff0000")
voxels += generate_line((15, 47, 3), (1, 0, 0), 57, "ff0000")
voxels += generate_line((75, 47, 3), (1, 0, 0), 5, "ff0000")

#finestra riga 1
voxels += generate_line((0, 47, 4), (1, 0, 0), 5, "ff0000")
voxels += generate_line((8, 47, 4), (1, 0, 0), 4, "ff0000")
voxels += generate_line((15, 47, 4), (1, 0, 0), 16, "ff0000")
voxels += generate_line((32, 47, 4), (1, 0, 0), 17, "ff0000")
voxels += generate_line((50, 47, 4), (1, 0, 0), 22, "ff0000")
voxels += generate_line((75, 47, 4), (1, 0, 0), 5, "ff0000")

#finestra riga 2
voxels += generate_line((0, 47, 5), (1, 0, 0), 5, "ff0000")
voxels += generate_line((8, 47, 5), (1, 0, 0), 4, "ff0000")
voxels += generate_line((15, 47, 5), (1, 0, 0), 16, "ff0000")
voxels += generate_line((32, 47, 5), (1, 0, 0), 17, "ff0000")
voxels += generate_line((50, 47, 5), (1, 0, 0), 22, "ff0000")
voxels += generate_line((75, 47, 5), (1, 0, 0), 5, "ff0000")

#finestra riga 3
voxels += generate_line((0, 47, 5), (1, 0, 0), 5, "ff0000")
voxels += generate_line((8, 47, 5), (1, 0, 0), 7, "ff0000")
voxels += generate_line((15, 47, 5), (1, 0, 0), 16, "ff0000")
voxels += generate_line((32, 47, 5), (1, 0, 0), 17, "ff0000")
voxels += generate_line((50, 47, 5), (1, 0, 0), 25, "ff0000")
voxels += generate_line((75, 47, 5), (1, 0, 0), 5, "ff0000")

#finestra riga 4
voxels += generate_line((0, 47, 6), (1, 0, 0), 5, "ff0000")
voxels += generate_line((8, 47, 6), (1, 0, 0), 7, "ff0000")
voxels += generate_line((15, 47, 6), (1, 0, 0), 16, "ff0000")
voxels += generate_line((32, 47, 6), (1, 0, 0), 17, "ff0000")
voxels += generate_line((50, 47, 6), (1, 0, 0), 25, "ff0000")
voxels += generate_line((75, 47, 6), (1, 0, 0), 5, "ff0000")

#fine
voxels += generate_line((0, 47, 7), (1, 0, 0), 80, "ff0000")
voxels += generate_line((0, 47, 8), (1, 0, 0), 80, "ff0000")
voxels += generate_line((0, 47, 9), (1, 0, 0), 80, "ff0000")
voxels += generate_line((0, 47, 10), (1, 0, 0), 80, "ff0000")



#voxels += generate_rectangle((0, 0, 0), (1, 0, 0), (0, 1, 0), 80, 48, "0000ff")

# muro lungo X di lunghezza 100 e altezza 20
#voxels += generate_wall(start=(0, 0, 0), direction=(1, 0, 0), length=100, height=20, color="888888")

# salva il file
output_file = "pianoterra_NORD.txt"
write_goxel_voxel_file(output_file, voxels)
print(f"Generati {len(voxels)} voxel (incluso muro) in '{output_file}'")
