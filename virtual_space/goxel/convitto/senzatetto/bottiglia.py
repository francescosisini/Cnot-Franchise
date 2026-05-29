import math

# Profilo reale della bottiglia, raggi dal basso verso l'alto (28 voxel)
radii = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5,5,4,4,3,3,2,2,2,2,2,3]
TOTAL_HEIGHT = len(radii)

THICKNESS = 1.0
LIQUID_HEIGHT = 12  # Riempimento acqua

RADIUS_OUTER = max(radii)
SIZE = int(RADIUS_OUTER * 2 + 6)
CENTER = SIZE // 2

bottle_voxels = []
liquid_voxels = []

for y in range(TOTAL_HEIGHT):
    r_outer = radii[y]
    r_inner = r_outer - THICKNESS
    r_outer_sq = r_outer ** 2
    r_inner_sq = r_inner ** 2

    for x in range(SIZE):
        dx = x - CENTER
        for z in range(SIZE):
            dz = z - CENTER
            d_sq = dx * dx + dz * dz

            if y == 0 and d_sq <= r_inner_sq:
                bottle_voxels.append((x, y, z, '88CCFF'))  # fondo
            elif r_inner_sq <= d_sq <= r_outer_sq:
                bottle_voxels.append((x, y, z, '88CCFF'))  # vetro
            elif y < LIQUID_HEIGHT and d_sq < r_inner_sq:
                liquid_voxels.append((x, y, z, '3366FF'))  # acqua

print(f"Bottle voxels: {len(bottle_voxels)}")
print(f"Liquid voxels: {len(liquid_voxels)}")

# Funzione per salvataggio in formato Goxel
def save_voxels(voxel_list, filename):
    with open(filename, 'w') as f:
        f.write('# Goxel 0.15.1\n')
        for x, y, z, col in voxel_list:
            f.write(f"{x} {y} {z} {col}\n")
    print(f"Saved {len(voxel_list)} voxels to {filename}")

save_voxels(bottle_voxels, 'bottle.txt')
save_voxels(liquid_voxels, 'liquid.txt')
