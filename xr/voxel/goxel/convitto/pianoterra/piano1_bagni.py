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
#Bagno Femmine
voxels += generate_line((24, 36, 1), (1, 0, 0), 6, "ff00aa")
voxels += generate_line((32, 36, 1), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((33, 37, 1), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 2), (1, 0, 0), 6, "ff00aa")
voxels += generate_line((32, 36, 2), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((33, 37, 2), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 3), (1, 0, 0), 6, "ff00aa")
voxels += generate_line((32, 36, 3), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((33, 37, 3), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 4), (1, 0, 0), 6, "ff00aa")
voxels += generate_line((32, 36, 4), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((33, 37, 4), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 5), (1, 0, 0), 6, "ff00aa")
voxels += generate_line((32, 36, 5), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((33, 37, 5), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 6), (1, 0, 0), 6, "ff00aa")
voxels += generate_line((32, 36, 6), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((33, 37, 6), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 7), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((33, 37, 7), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 8), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((33, 37, 8), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 9), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((33, 37, 9), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((24, 36, 10), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((33, 37, 10), (0, 1, 0), 11, "ff00aa")

# - cessi

voxels += generate_line((24, 40, 1), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 1), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 1), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 2), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 2), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 2), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 3), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 3), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 3), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 4), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 4), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 4), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 5), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 5), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 5), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 6), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 6), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 6), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 7), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 7), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 7), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 8), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 8), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 8), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 9), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 9), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 9), (1, 0, 0), 5, "ff00aa")

voxels += generate_line((24, 40, 10), (1, 0, 0), 5, "ff00aa")
voxels += generate_line((28, 41, 10), (0, 1, 0), 1, "ff00aa")
voxels += generate_line((24, 44, 10), (1, 0, 0), 5, "ff00aa")



#Bago Maschi
voxels += generate_line((46, 36, 1), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((50, 36, 1), (1, 0, 0), 6, "ff00aa")
#
voxels += generate_line((46, 37, 1), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 2), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((50, 36, 2), (1, 0, 0), 6, "ff00aa")
#
voxels += generate_line((46, 37, 2), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 3), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((50, 36, 3), (1, 0, 0), 6, "ff00aa")
#
voxels += generate_line((46, 37, 3), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 4), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((50, 36, 4), (1, 0, 0), 6, "ff00aa")
#
voxels += generate_line((46, 37, 4), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 5), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((50, 36, 5), (1, 0, 0), 6, "ff00aa")
#
voxels += generate_line((46, 37, 5), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 6), (1, 0, 0), 2, "ff00aa")
voxels += generate_line((50, 36, 6), (1, 0, 0), 6, "ff00aa")
#
voxels += generate_line((46, 37, 6), (0, 1, 0), 11, "ff00aa")


voxels += generate_line((46, 36, 7), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((46, 37, 7), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 8), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((46, 37, 8), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 9), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((46, 37, 9), (0, 1, 0), 11, "ff00aa")

voxels += generate_line((46, 36, 10), (1, 0, 0), 10, "ff00aa")
voxels += generate_line((46, 37, 10), (0, 1, 0), 11, "ff00aa")

#cessi
voxels += generate_line((51, 40, 1), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 1), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 2), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 2), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 3), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 3), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 4), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 4), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 5), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 5), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 6), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 6), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 7), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 7), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 8), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 8), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 9), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 9), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 40, 10), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 41, 10), (1, 0, 0), 1, "ffccaa")

voxels += generate_line((51, 44, 1), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 2), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 3), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 4), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 5), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 6), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 7), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 8), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 9), (1, 0, 0), 5, "ffccaa")
voxels += generate_line((51, 44, 10), (1, 0, 0), 5, "ffccaa")



#voxels += generate_rectangle((0, 0, 0), (1, 0, 0), (0, 1, 0), 80, 48, "0000ff")

# muro lungo X di lunghezza 100 e altezza 20
#voxels += generate_wall(start=(0, 0, 0), direction=(1, 0, 0), length=100, height=20, color="888888")

# salva il file
output_file = "piano1_bagni.txt"
write_goxel_voxel_file(output_file, voxels)
print(f"Generati {len(voxels)} voxel (incluso muro) in '{output_file}'")
