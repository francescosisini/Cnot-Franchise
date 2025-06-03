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
#Muro 1
##base
voxels += generate_rectangle((55, 37, 0), (0, 1, 0), (0, 0, 1), 10,10 , "007700")


# salva il file
output_file = "muro_b8.txt"
write_goxel_voxel_file(output_file, voxels)
print(f"Generati {len(voxels)} voxel (incluso muro) in '{output_file}'")
