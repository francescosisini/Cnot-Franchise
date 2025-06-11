import noise
import random

# Configuration parameters
SIZE = 100
OCTAVES = 5
PERSISTENCE = 0.5
LACUNARITY = 2.0
SCALE = 0.05  # Controls the "zoom" of the noise

# Color endpoints for interpolation (dark -> light green)
COLOR_LOW = (0x00, 0x64, 0x00)  # #006400
COLOR_HIGH = (0xAD, 0xFF, 0x2F)  # #ADFF2F


def lerp(a, b, t):
    """Linear interpolation between a and b by t"""
    return a + (b - a) * t


def interpolate_color(low, high, t):
    """Interpolate two RGB colors with factor t in [0,1]"""
    return (
        int(lerp(low[0], high[0], t)),
        int(lerp(low[1], high[1], t)),
        int(lerp(low[2], high[2], t)),
    )


def generate_voxels(size=SIZE):
    voxels = []
    for x in range(size):
        for y in range(size):
            # Dynamic threshold: denser at ground, sparser at top
            thresh = 0.3 + (y / (size - 1)) * 0.4
            for z in range(size):
                # Compute fractal noise value in [-1,1]
                n = noise.pnoise3(
                    x * SCALE,
                    y * SCALE,
                    z * SCALE,
                    octaves=OCTAVES,
                    persistence=PERSISTENCE,
                    lacunarity=LACUNARITY,
                    repeatx=size,
                    repeaty=size,
                    repeatz=size,
                    base=0,
                )
                # Normalize to [0,1]
                val = (n + 1) / 2.0
                if val > thresh:
                    # Use noise value to interpolate color
                    color = interpolate_color(COLOR_LOW, COLOR_HIGH, val)
                    # Format as RRGGBB
                    hexcol = f"{color[0]:02X}{color[1]:02X}{color[2]:02X}"
                    voxels.append((x, y, z, hexcol))
    return voxels


def save_to_goxel(voxels, filename="vegetazione.vox"):
    with open(filename, "w") as f:
        f.write("# Goxel 0.15.1\n")
        for x, y, z, col in voxels:
            f.write(f"{x} {y} {z} {col}\n")
    print(f"Saved {len(voxels)} voxels to {filename}")


if __name__ == "__main__":
    voxels = generate_voxels()
    save_to_goxel(voxels)
