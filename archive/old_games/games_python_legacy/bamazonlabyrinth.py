import pygame
import random

# Inizializza Pygame
pygame.init()

# Imposta dimensioni della finestra
WIDTH, HEIGHT = 800, 600
TILE_SIZE = 40
ROWS = HEIGHT // TILE_SIZE
COLS = WIDTH // TILE_SIZE

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Labirinto di Bamazon con ISING")

# Colori
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
CYAN = (0, 255, 255)
GRAY = (150, 150, 150)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
DARK_GRAY = (50, 50, 50)

# Font
pygame.font.init()
font = pygame.font.Font(None, 50)

# Timer
timer = 120  # 120 secondi
start_ticks = pygame.time.get_ticks()

# Laura
laura_pos = [0, 0]

# ISING
ising_pos = [COLS - 2, ROWS - 2]  # Posizione iniziale di ISING
ising_speed = 1  # ISING si muove ogni frame

# Punti di interesse (codici logistici)
num_codici = 5
codici = []

# Funzione per generare un labirinto complesso con DFS e vicoli ciechi
def generate_labirinto(rows, cols):
    grid = [[1 for _ in range(cols)] for _ in range(rows)]
    stack = [(0, 0)]
    visited = set(stack)

    while stack:
        x, y = stack[-1]
        grid[y][x] = 0
        neighbors = []

        for dx, dy in [(-2, 0), (2, 0), (0, -2), (0, 2)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < cols and 0 <= ny < rows and (nx, ny) not in visited:
                neighbors.append((nx, ny))

        if neighbors:
            nx, ny = random.choice(neighbors)
            visited.add((nx, ny))
            stack.append((nx, ny))
            grid[(y + ny) // 2][(x + nx) // 2] = 0
        else:
            stack.pop()

    # Aggiunge vicoli ciechi
    for _ in range(rows * cols // 10):
        cx, cy = random.randint(1, cols - 2), random.randint(1, rows - 2)
        if grid[cy][cx] == 1:
            grid[cy][cx] = 0

    return grid

# Genera il labirinto
labirinto = generate_labirinto(ROWS, COLS)
labirinto[ROWS - 1][COLS - 1] = 0  # Assicura che l'uscita sia accessibile

# Posiziona i codici
while len(codici) < num_codici:
    x, y = random.randint(0, COLS - 1), random.randint(0, ROWS - 1)
    if labirinto[y][x] == 0 and (x, y) not in codici and (x, y) != (0, 0) and (x, y) != (COLS - 1, ROWS - 1):
        codici.append((x, y))

# Funzione per disegnare il labirinto
def draw_labirinto():
    for row in range(ROWS):
        for col in range(COLS):
            if labirinto[row][col] == 1:
                pygame.draw.rect(screen, DARK_GRAY, (col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE))
            else:
                pygame.draw.rect(screen, WHITE, (col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE))
    for c in codici:
        pygame.draw.rect(screen, BLUE, (c[0] * TILE_SIZE + 10, c[1] * TILE_SIZE + 10, 20, 20))  # Pacchi

# Funzione per disegnare Laura
def draw_laura():
    pygame.draw.circle(screen, GREEN, (laura_pos[0] * TILE_SIZE + TILE_SIZE // 2, laura_pos[1] * TILE_SIZE + TILE_SIZE // 2), TILE_SIZE // 3)

# Funzione per disegnare ISING
def draw_ising():
    pygame.draw.circle(screen, RED, (ising_pos[0] * TILE_SIZE + TILE_SIZE // 2, ising_pos[1] * TILE_SIZE + TILE_SIZE // 2), TILE_SIZE // 3)

# Funzione per verificare il movimento
def can_move(x, y):
    return 0 <= x < COLS and 0 <= y < ROWS and labirinto[y][x] == 0

# Movimento di ISING
def move_ising():
    global ising_pos
    dx, dy = 0, 0
    if laura_pos[0] > ising_pos[0]:
        dx = 1
    elif laura_pos[0] < ising_pos[0]:
        dx = -1
    if laura_pos[1] > ising_pos[1]:
        dy = 1
    elif laura_pos[1] < ising_pos[1]:
        dy = -1

    # Priorità al movimento orizzontale
    if can_move(ising_pos[0] + dx, ising_pos[1]):
        ising_pos[0] += dx
    elif can_move(ising_pos[0], ising_pos[1] + dy):
        ising_pos[1] += dy

# Ciclo principale
running = True
clock = pygame.time.Clock()

while running:
    screen.fill(BLACK)

    # Timer
    seconds = timer - (pygame.time.get_ticks() - start_ticks) // 1000
    if seconds <= 0:
        print("Tempo scaduto! Game over!")
        running = False

    # Gestione eventi
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            new_x, new_y = laura_pos[0], laura_pos[1]
            if event.key == pygame.K_LEFT:
                new_x -= 1
            elif event.key == pygame.K_RIGHT:
                new_x += 1
            elif event.key == pygame.K_UP:
                new_y -= 1
            elif event.key == pygame.K_DOWN:
                new_y += 1
            if can_move(new_x, new_y):
                laura_pos = [new_x, new_y]

    # Movimento di ISING
    move_ising()

    # Controlla se Laura interagisce con un codice
    for c in codici:
        if laura_pos == list(c):
            codici.remove(c)

    # Controlla vittoria
    if not codici and laura_pos == [COLS - 1, ROWS - 1]:
        print("Hai trovato l'uscita! VITTORIA!")
        running = False

    # Controlla collisione con ISING
    if laura_pos == ising_pos:
        print("Sei stato catturato da ISING! Game over!")
        running = False

    # Disegna tutto
    draw_labirinto()
    draw_laura()
    draw_ising()
    timer_text = font.render(f"Time: {seconds}s", True, CYAN)
    screen.blit(timer_text, (10, 10))

    pygame.display.flip()
    clock.tick(30)

pygame.quit()
