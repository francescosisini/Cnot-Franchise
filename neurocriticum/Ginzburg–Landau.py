import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# Parametri della simulazione
N = 200           # Dimensione griglia (NxN)
dx = 1          # Passo spaziale
dt = 0.1       # Passo temporale
steps = 1000       # Numero di passi temporali
r = -1  # Parametro vicino al critico
u = 1.0           # Coefficiente non lineare

# Inizializzazione del campo φ con piccoli rumori
phi = 0.1 * np.random.randn(N, N)

# Operatore laplaciano 2D con condizioni al contorno periodiche
def laplacian(f):
    return (
        -4 * f
        + np.roll(f, 1, axis=0)
        + np.roll(f, -1, axis=0)
        + np.roll(f, 1, axis=1)
        + np.roll(f, -1, axis=1)
    ) / dx**2

# Evoluzione temporale del campo φ
frames = []
for _ in range(steps):
    dF_dphi = -laplacian(phi) + r * phi + u * phi**3
    phi -= dt * dF_dphi
    if _ % 10 == 0:
        frames.append(phi.copy())

# Creazione dell'animazione
fig, ax = plt.subplots(figsize=(6, 6))
im = ax.imshow(frames[0], cmap='RdBu', vmin=-1, vmax=1)
ax.set_title("Evoluzione di $\\phi(x,t)$ (Ginzburg–Landau)")

def update(i):
    im.set_array(frames[i])
    ax.set_title(f"$\\phi(x,t)$ — passo {i * 10}")
    return [im]

ani = FuncAnimation(fig, update, frames=len(frames), interval=100, blit=True)
plt.show()
