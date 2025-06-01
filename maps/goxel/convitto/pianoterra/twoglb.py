import numpy as np, trimesh as tm
from pygltflib import GLTF2

# carica il tuo txt
vox = np.loadtxt("scene.txt", dtype=str)
xyz  = vox[:, :3].astype(np.float32)
cols = vox[:, 3]

# genera un cubo unitario e replicalo in tutte le posizioni
unit = tm.creation.box(extents=(1,1,1))
scene = tm.Scene()
for (x,y,z), col in zip(xyz, cols):
    mesh = unit.copy()
    mesh.apply_translation((x, y, z))
    mesh.visual.vertex_colors = [int(col[i:i+2],16) for i in (0,2,4)] + [255]
    scene.add_geometry(mesh)

scene.export("scene.glb")      # glTF 2.0 binario
