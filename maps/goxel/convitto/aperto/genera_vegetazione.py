import random

# Parametri di configurazione
SIZE = 30         # Dimensione del cubo (50x50x50)
THRESHOLD = 0.6    # Soglia di riempimento (0 a 1)

OUTPUT_FILE = 'vegetazione_simple.vxl'

# Apri il file e scrivi l'intestazione Goxel
with open(OUTPUT_FILE, 'w') as f:
    f.write('# Goxel 0.15.1\n')

    # Ciclo su tutti i voxel
    for x in range(SIZE):
        for y in range(SIZE):
            for z in range(SIZE):
                # Genera un numero casuale e controlla la soglia
                if random.random() > THRESHOLD:
                    # Colore verde variabile: canale G tra 100 e 255
                    g = random.randint(100, 255)
                    hexcol = f'00{g:02X}00'
                    # Scrivi la riga voxel: X Y Z RRGGBB
                    f.write(f'{x} {y} {z} {hexcol}\n')

print(f'Saved simple vegetation voxels to {OUTPUT_FILE}')
