import random
import math

# Parametri di configurazione
SIZE = 30              # Dimensione del cubo (50x50x50)
MAX_VOXELS = 500     # Numero massimo di voxel da generare (esclusi tronco e rami)
RADIUS_FACTOR = 0.45   # Fattore per il raggio della sfera (0 < f <= 0.5)
NUM_BRANCHES = 7       # Numero di rami da generare
BRANCH_LENGTH = 10     # Lunghezza massima dei rami

OUTPUT_FILE = 'cespugli.txt'

# Colori in esadecimale
def green_color():
    g = random.randint(120, 255)
    return f"00{g:02X}00"

BROWN = '8B4513'  # Tronco e rami

# Centro e raggio della sfera
center = (SIZE - 1) / 2.0
radius = SIZE * RADIUS_FACTOR
radius_sq = radius * radius

# 1) Generazione voxels della chioma
candidates = []
for x in range(SIZE):
    dx = x - center
    dx_sq = dx * dx
    for y in range(SIZE):
        dy = y - center
        dy_sq = dy * dy
        for z in range(SIZE):
            dz = z - center
            dz_sq = dz * dz
            if dx_sq + dy_sq + dz_sq <= radius_sq:
                candidates.append((x, y, z))

# Selezione casuale fino a MAX_VOXELS
if len(candidates) > MAX_VOXELS:
    selected = set(random.sample(candidates, MAX_VOXELS))
else:
    selected = set(candidates)

# 2) Generazione tronco centrale
trunk_voxels = set()
# trunk dal suolo (y=0) fino a metà altura del cespuglio
trunk_height = int(center)
trunk_x = trunk_z = int(center)
for y in range(trunk_height):
    trunk_voxels.add((trunk_x, y, trunk_z))

# 3) Generazione rami casuali
branch_voxels = set()
for _ in range(NUM_BRANCHES):
    # punto di partenza sul tronco: altezza casuale tra metà e cima
    y0 = random.randint(int(trunk_height/2), trunk_height)
    angle = random.uniform(0, 2*math.pi)
    dx = math.cos(angle)
    dz = math.sin(angle)
    length = random.randint(int(BRANCH_LENGTH/2), BRANCH_LENGTH)
    for i in range(1, length):
        bx = int(trunk_x + dx * i)
        by = y0 + int(i/4)  # leggero innalzamento
        bz = int(trunk_z + dz * i)
        # dentro griglia e non troppo lontano dal centro
        if 0 <= bx < SIZE and 0 <= by < SIZE and 0 <= bz < SIZE:
            branch_voxels.add((bx, by, bz))

# Unione di tutti i voxel
all_voxels = []
# Aggiungi tronco e rami in marrone
for v in trunk_voxels | branch_voxels:
    all_voxels.append((*v, BROWN))
# Aggiungi foglie verdi
for v in selected:
    # evita sovrapposizioni con legno
    if v not in trunk_voxels and v not in branch_voxels:
        all_voxels.append((*v, green_color()))

# Scrittura file
with open(OUTPUT_FILE, 'w') as f:
    f.write('# Goxel 0.15.1\n')
    for x, y, z, col in all_voxels:
        f.write(f'{x} {y} {z} {col}\n')

print(f'Saved {len(all_voxels)} bush voxels (foglie + legno) to {OUTPUT_FILE}')
