import numpy as np
import noise

# Configuration parameters
WIDTH = 1.0        # Width of the newspaper in Unity units
HEIGHT = 0.7       # Height of the newspaper in Unity units
SUBDIV_X = 100     # Number of subdivisions along width
SUBDIV_Y = 70      # Number of subdivisions along height
AMPLITUDE = 0.02   # Max displacement for crumple (along surface normal)
NOISE_SCALE = 5.0  # Controls noise frequency
OCTAVES = 4
PERSISTENCE = 0.5
LACUNARITY = 2.0

# Generate grid vertices with noise-based displacement
vertices = []
for j in range(SUBDIV_Y + 1):
    for i in range(SUBDIV_X + 1):
        u = i / SUBDIV_X
        v = j / SUBDIV_Y
        # Base plane coordinates centered at origin
        x = (u - 0.5) * WIDTH
        y = (v - 0.5) * HEIGHT
        # Noise-based displacement along z-axis
        z = noise.pnoise2(u * NOISE_SCALE,
                          v * NOISE_SCALE,
                          octaves=OCTAVES,
                          persistence=PERSISTENCE,
                          lacunarity=LACUNARITY,
                          repeatx=SUBDIV_X,
                          repeaty=SUBDIV_Y,
                          base=0) * AMPLITUDE
        vertices.append((x, y, z))

# Generate faces (quads split into triangles)
faces = []
for j in range(SUBDIV_Y):
    for i in range(SUBDIV_X):
        idx = j * (SUBDIV_X + 1) + i
        # Four corners of quad
        v0 = idx + 1
        v1 = idx + 2
        v2 = idx + SUBDIV_X + 2
        v3 = idx + SUBDIV_X + 1
        # Two triangles per quad
        faces.append((v0, v1, v2))
        faces.append((v0, v2, v3))

# Write OBJ file
output_path = "crumpled_newspaper.obj"
with open(output_path, 'w') as f:
    f.write("# Crumpled newspaper mesh\n")
    for vx, vy, vz in vertices:
        f.write(f"v {vx:.6f} {vy:.6f} {vz:.6f}\n")
    f.write("\n")
    # UV coordinates for texturing
    for j in range(SUBDIV_Y + 1):
        for i in range(SUBDIV_X + 1):
            u = i / SUBDIV_X
            v = j / SUBDIV_Y
            f.write(f"vt {u:.6f} {v:.6f}\n")
    f.write("\n")
    for face in faces:
        # Include vertex and uv indices: v/vt
        f.write("f")
        for vi in face:
            f.write(f" {vi}/{vi}")
        f.write("\n")

print(f"Saved crumpled mesh to {output_path}")
