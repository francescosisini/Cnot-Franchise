import random
import math

# Parametri di configurazione
SIZE = 50              # Dimensione del cubo (50x50x50)
THRESHOLD = 0.7        # Soglia di riempimento (più alto = meno fitto)
RADIUS_FACTOR = 0.45   # Fattore per il raggio della sfera (0 < f <= 0.5)

OUTPUT_FILE = 'bush_voxels.txt'

# Centro della griglia
center = (SIZE - 1) / 2.0
radius = SIZE * RADIUS_FACTOR
radius_sq = radius * radius

with open(OUTPUT_FILE, 'w') as f:
    # Intestazione Goxel
    f.write('# Goxel 0.15.1\n')

    for x in range(SIZE):
        dx = x - center
        dx_sq = dx * dx
        for y in range(SIZE):
            dy = y - center
            dy_sq = dy * dy
            for z in range(SIZE):
                dz = z - center
                dz_sq = dz * dz
                # Verifica dentro la sfera
                if dx_sq + dy_sq + dz_sq <= radius_sq:
                    # Occorrenza basata su soglia: meno fitto
                    if random.random() > THRESHOLD:
                        # Tonalità di verde variabile
                        g = random.randint(120, 255)
                        hexcol = f'00{g:02X}00'
                        f.write(f'{x} {y} {z} {hexcol}\n')

print(f'Saved bush voxels to {OUTPUT_FILE}')
