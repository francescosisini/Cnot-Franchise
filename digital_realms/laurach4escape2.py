import pygame
import random
import math

# Inizializza Pygame
pygame.init()

# Imposta dimensioni della finestra
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Quantum Tunnel Chase with Points")

# Colori
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
CYAN = (0, 255, 255)
GRAY = (150, 150, 150)
RED = (255, 0, 0)
COLORS = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255, 255, 0), (0, 255, 255)]

# Font per punteggio
pygame.font.init()
font = pygame.font.Font(None, 50)

# Drone - Molecola di CH4
drone_radius = 50
drone_center = [WIDTH // 2, HEIGHT - 100]  # Posizione iniziale in basso al centro
drone_speed_x = 6  # Velocità orizzontale
drone_speed_y = 6  # Velocità verticale
rotation_angle = 0  # Angolo iniziale per la rotazione

# Secondo drone (agente)
agent_radius = 50
agent_center = [WIDTH // 4, 100]  # Posizione iniziale in alto
agent_speed = 2  # Velocità ridotta
agent_rotation_angle = 0  # Angolo iniziale per la rotazione
agent_active = True  # Stato del drone agente
agent_respawn_timer = 0  # Timer per il respawn del drone agente

# Qubit
qubit_radius = 15
qubits = []  # Lista per i qubit (posizione x, posizione y, angolo di rotazione)
qubit_speed = 4  # Velocità verticale dei qubit
spawn_rate = 30  # Ogni quanti frame aggiungere un nuovo qubit
frame_count = 0

# Griglia scorrevole
grid_offset = 0
grid_speed = 2

# Controllo continuo
move_left = False
move_right = False
move_up = False
move_down = False

# Game state
game_over = False
score = 0  # Punteggio iniziale

# Funzione per disegnare il drone CH4
def draw_drone(center, color, rotation_angle):
    # Disegna l'atomo centrale (carbonio)
    pygame.draw.circle(screen, color, center, 12)

    # Disegna gli atomi di idrogeno disposti a tetraedro con rotazione
    for i in range(4):
        angle = i * (360 // 4) + rotation_angle  # Rotazione dinamica
        dx = drone_radius * math.cos(math.radians(angle))
        dy = drone_radius * math.sin(math.radians(angle))
        pygame.draw.circle(screen, CYAN, (int(center[0] + dx), int(center[1] + dy)), 8)

# Funzione per disegnare i qubit come triangoli rotanti
def draw_qubits():
    for qubit in qubits:
        x, y, angle = qubit
        points = [
            (x + qubit_radius * math.cos(math.radians(angle)), y + qubit_radius * math.sin(math.radians(angle))),
            (x + qubit_radius * math.cos(math.radians(angle + 120)), y + qubit_radius * math.sin(math.radians(angle + 120))),
            (x + qubit_radius * math.cos(math.radians(angle + 240)), y + qubit_radius * math.sin(math.radians(angle + 240)))
        ]
        pygame.draw.polygon(screen, WHITE, points)

# Funzione per aggiornare la posizione dei qubit
def update_qubits():
    global game_over, agent_active, score, agent_respawn_timer
    for qubit in qubits:
        qubit[1] += qubit_speed
        qubit[2] = (qubit[2] + 5) % 360  # Rotazione
        if qubit[1] > HEIGHT:
            qubits.remove(qubit)
        if math.hypot(qubit[0] - drone_center[0], qubit[1] - drone_center[1]) < qubit_radius + 12:
            game_over = True
        if agent_active and math.hypot(qubit[0] - agent_center[0], qubit[1] - agent_center[1]) < qubit_radius + 12:
            agent_active = False
            agent_respawn_timer = 180  # Attiva il timer per respawn
            score += 100  # Incrementa il punteggio

# Funzione per disegnare la griglia
def draw_grid():
    global grid_offset
    for x in range(0, WIDTH, 40):
        for y in range(-40, HEIGHT, 40):
            pygame.draw.rect(screen, random.choice(COLORS), (x, y + grid_offset, 40, 40), 1)
    grid_offset = (grid_offset + grid_speed) % 40

# Funzione per disegnare il punteggio
def draw_score():
    score_text = font.render(f"Score: {score}", True, WHITE)
    screen.blit(score_text, (10, 10))

# Ciclo principale
clock = pygame.time.Clock()
while not game_over:
    screen.fill(BLACK)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                move_left = True
            elif event.key == pygame.K_RIGHT:
                move_right = True
            elif event.key == pygame.K_UP:
                move_up = True
            elif event.key == pygame.K_DOWN:
                move_down = True
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT:
                move_left = False
            elif event.key == pygame.K_RIGHT:
                move_right = False
            elif event.key == pygame.K_UP:
                move_up = False
            elif event.key == pygame.K_DOWN:
                move_down = False

    # Movimento del drone di Laura
    if move_left:
        drone_center[0] = max(drone_center[0] - drone_speed_x, drone_radius)
    if move_right:
        drone_center[0] = min(drone_center[0] + drone_speed_x, WIDTH - drone_radius)
    if move_up:
        drone_center[1] = max(drone_center[1] - drone_speed_y, drone_radius)
    if move_down:
        drone_center[1] = min(drone_center[1] + drone_speed_y, HEIGHT - drone_radius)

    # Movimento del drone agente
    if agent_active:
        if agent_center[0] < drone_center[0]:
            agent_center[0] += agent_speed
        elif agent_center[0] > drone_center[0]:
            agent_center[0] -= agent_speed
        if agent_center[1] < drone_center[1]:
            agent_center[1] += agent_speed
        elif agent_center[1] > drone_center[1]:
            agent_center[1] -= agent_speed
    elif agent_respawn_timer > 0:
        agent_respawn_timer -= 1
        if agent_respawn_timer == 0:
            agent_center = [random.randint(50, WIDTH - 50), 100]
            agent_active = True

    # Disegna tutto
    draw_grid()
    draw_drone(drone_center, GRAY, rotation_angle)
    if agent_active:
        draw_drone(agent_center, RED, agent_rotation_angle)
    draw_qubits()
    draw_score()

    # Aggiorna qubits e spawna nuovi
    frame_count += 1
    if frame_count % spawn_rate == 0:
        qubits.append([random.randint(0, WIDTH), -20, random.randint(0, 360)])
    update_qubits()

    # Aggiorna schermo
    pygame.display.flip()
    clock.tick(30)

pygame.quit()
