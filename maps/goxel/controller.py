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

def generate_parallelepipede(start, size_x,size_y,size_z, color):
    """
    Genera un cubo solido di lato 'size'.
    """
    voxels = []
    sx, sy, sz = start
    for i in range(size_x):
        for j in range(size_y):
            for k in range(size_z):
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

#console
voxels += generate_parallelepipede((1,1,0), 7,7,1, "c0c0c0")
voxels += generate_parallelepipede((11,1,0), 7,7,1, "c0c0c0")
voxels += generate_parallelepipede((8,2,0), 3,6,1, "c0c0c0")

#cornice grigia
voxels += generate_rectangle((1,1,1), (1,0,0), (0,1,0), 7, 1, "c0c0c0")
voxels += generate_rectangle((1,1,1), (1,0,0), (0,1,0), 1, 7, "c0c0c0")
voxels += generate_rectangle((7,1,1), (1,0,0), (0,1,0), 1, 7, "c0c0c0")
voxels += generate_rectangle((1,7,1), (1,0,0), (0,1,0), 17, 1, "c0c0c0")

voxels += generate_rectangle((11,1,1), (1,0,0), (0,1,0), 7, 1, "c0c0c0")
voxels += generate_rectangle((11,1,1), (1,0,0), (0,1,0), 1, 7, "c0c0c0")
voxels += generate_rectangle((17,1,1), (1,0,0), (0,1,0), 1, 7, "c0c0c0")
voxels += generate_rectangle((11,7,1), (1,0,0), (0,1,0), 7, 1, "c0c0c0")

voxels += generate_rectangle((7,2,1), (1,0,0), (0,1,0), 5, 2, "c0c0c0")
voxels += generate_rectangle((7,6,1), (1,0,0), (0,1,0), 5, 2, "c0c0c0")

#interno
voxels += generate_rectangle((2,2,1), (1,0,0), (0,1,0), 5, 5, "606060")
voxels += generate_rectangle((12,2,1), (1,0,0), (0,1,0), 5, 5, "606060")

#pad-direzionale (D pad)
voxels += generate_rectangle((3,4,2), (1,0,0), (0,1,0), 3, 1, "000000")
voxels += generate_rectangle((4,3,2), (1,0,0), (0,1,0), 1, 3, "000000")

#Start-Select
voxels += generate_rectangle((8,5,1), (1,0,0), (0,0,1), 1, 2, "000000")
voxels += generate_rectangle((10,5,1), (1,0,0), (0,0,1), 1, 2, "000000")

#tasti azione
voxels += generate_rectangle((14,5,2), (1,0,0), (0,0,1), 1, 1, "0000ff")
voxels += generate_rectangle((13,4,2), (1,0,0), (0,0,1), 1, 1, "ffff00")
voxels += generate_rectangle((15,4,2), (1,0,0), (0,0,1), 1, 1, "ff0000")
voxels += generate_rectangle((14,3,2), (1,0,0), (0,0,1), 1, 1, "00ff00")

#porta
voxels += generate_rectangle((3,8,1), (1,0,0), (0,0,1), 3, 1, "000000")

# muro lungo X di lunghezza 100 e altezza 20
#voxels += generate_wall(start=(0, 0, 0), direction=(1, 0, 0), length=100, height=20, color="888888")

# salva il file
output_file = "controlller.txt"
write_goxel_voxel_file(output_file, voxels)
print(f"Generati {len(voxels)} voxel (incluso muro) in '{output_file}'")
