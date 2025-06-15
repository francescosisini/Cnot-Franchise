import math

# Parametri della bacinella
HEIGHT = 10           # Altezza del tronco di cono
BASE_RADIUS = 5     # Raggio alla base (in voxel)
TOP_RADIUS = 7      # Raggio in cima (in voxel)
THICKNESS = 1         # Spessore delle pareti in voxel
OUTPUT_FILE = 'cone_basin.txt'

# Dimensione della griglia (centrata)
SIZE = int(TOP_RADIUS * 2 + 2)
CENTER = SIZE // 2

voxels = []

for y in range(HEIGHT):
    # Interpolazione lineare del raggio
    r = BASE_RADIUS + (TOP_RADIUS - BASE_RADIUS) * (y / (HEIGHT - 1))
    r_sq = r * r
    r_inner_sq = (r - THICKNESS) ** 2

    for x in range(SIZE):
        dx = x - CENTER
        for z in range(SIZE):
            dz = z - CENTER
            d_sq = dx*dx + dz*dz
            if r_inner_sq <= d_sq <= r_sq:
                # Parete
                voxels.append((x, y, z, 'AAAAAA'))
            elif y == 0 and d_sq <= r_inner_sq:
                # Fondo interno
                voxels.append((x, y, z, 'AAAAAA'))

# Scrittura file Goxel
with open(OUTPUT_FILE, 'w') as f:
    f.write('# Goxel 0.15.1\n')
    for x, y, z, col in voxels:
        f.write(f'{x} {y} {z} {col}\n')

print(f"Saved {len(voxels)} voxels to {OUTPUT_FILE}")
