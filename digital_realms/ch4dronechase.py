import pygame
import random
import math

# Inizializza Pygame
pygame.init()
pygame.mixer.init()

# Imposta dimensioni della finestra
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Quantum Tunnel Chase")

# Carica e riproduci musica
pygame.mixer.music.load("background_music.mp3")  # Sostituisci con il nome del tuo file audio
pygame.mixer.music.play(-1)  # Riproduci in loop

# Colori
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
CYAN = (0, 255, 255)
GRAY = (150, 150, 150)
RED = (255, 0, 0)
MAGENTA = (255, 0, 255)
COLORS = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255, 255, 0), (0, 255, 255)]

# Font per punteggio e messaggi
pygame.font.init()
font = pygame.font.Font(None, 50)
message_font = pygame.font.Font(None, 74)
intro_font = pygame.font.Font(None, 36)

# Drone - Molecola di CH4
drone_radius = 50
drone_center = [WIDTH // 2, HEIGHT - 100]
drone_speed_x = 6
drone_speed_y = 6
rotation_angle = 0

# Secondo drone (agente)
agent_radius = 50
agent_center = [WIDTH // 4, 100]
agent_speed = 2
agent_rotation_angle = 0
agent_active = True
agent_respawn_timer = 0
agent_defeated = 0  # Numero di droni sconfitti

# Qubit
qubit_radius = 15
qubits = []
qubit_speed = 4
spawn_rate = 30
frame_count = 0

# Caterina
caterina_radius = 25
caterina_spawned = False
caterina_position = [random.randint(50, WIDTH - 50), random.randint(50, HEIGHT // 2)]
caterina_timer = 300
caterina_collected = 0  # Numero di Caterine raccolte

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
victory = False
score = 0

# Obiettivo per vincere
TARGET_DRONES = 5
TARGET_CATERINA = 3

# Funzione per mostrare la schermata iniziale
def show_intro():
    screen.fill(BLACK)
    intro_lines = [
        "Cnot Franchiese - Game 1",
        "Sei Laura che pilota il drone CH4.",
        "Evita i qubit che cadono e l'agente che ti insegue.",
        "Salva Caterina dalla trappola di ioni per accumulare punti.",
        f"Vinci schivandi {TARGET_DRONES} i droni e salvando {TARGET_CATERINA} Caterina.",
        "Premi un tasto per continuare."
    ]
    y_offset = HEIGHT // 2 - len(intro_lines) * 20
    for line in intro_lines:
        text_surface = intro_font.render(line, True, WHITE)
        screen.blit(text_surface, (WIDTH // 2 - text_surface.get_width() // 2, y_offset))
        y_offset += 40
    pygame.display.flip()
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                exit()
            elif event.type == pygame.KEYDOWN:
                waiting = False

# Funzione per disegnare il drone CH4
def draw_drone(center, color, rotation_angle):
    pygame.draw.circle(screen, color, center, 12)
    for i in range(4):
        angle = i * (360 // 4) + rotation_angle
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
    global game_over, agent_active, score, agent_respawn_timer, agent_defeated
    for qubit in qubits:
        qubit[1] += qubit_speed
        qubit[2] = (qubit[2] + 5) % 360
        if qubit[1] > HEIGHT:
            qubits.remove(qubit)
        if math.hypot(qubit[0] - drone_center[0], qubit[1] - drone_center[1]) < qubit_radius + 12:
            game_over = True
        if agent_active and math.hypot(qubit[0] - agent_center[0], qubit[1] - agent_center[1]) < qubit_radius + 12:
            agent_active = False
            agent_respawn_timer = 180
            score += 100
            agent_defeated += 1

# Funzione per verificare collisione con l'agente
def check_agent_collision():
    global game_over
    if agent_active and math.hypot(agent_center[0] - drone_center[0], agent_center[1] - drone_center[1]) < agent_radius + drone_radius:
        game_over = True

# Funzione per disegnare Caterina
def draw_caterina():
    if caterina_spawned:
        pygame.draw.circle(screen, MAGENTA, caterina_position, caterina_radius)
        pygame.draw.circle(screen, WHITE, caterina_position, caterina_radius + 5, 2)

# Funzione per controllare la collisione con Caterina
def check_caterina_collision():
    global caterina_spawned, score, caterina_collected
    if caterina_spawned and math.hypot(caterina_position[0] - drone_center[0], caterina_position[1] - drone_center[1]) < drone_radius + caterina_radius:
        caterina_spawned = False
        score += 500
        caterina_collected += 1

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

# Mostra la schermata di presentazione
show_intro()

# Ciclo principale
clock = pygame.time.Clock()
while not game_over and not victory:
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

    # Spawna Caterina se il drone agente è presente
    if not caterina_spawned and agent_active and random.randint(0, 500) == 0:
        caterina_spawned = True
        caterina_position = [random.randint(50, WIDTH - 50), random.randint(50, HEIGHT // 2)]

    # Controlla vittoria
    if agent_defeated >= TARGET_DRONES and caterina_collected >= TARGET_CATERINA:
        victory = True

    # Disegna tutto
    draw_grid()
    draw_drone(drone_center, GRAY, rotation_angle)
    if agent_active:
        draw_drone(agent_center, RED, agent_rotation_angle)
    draw_qubits()
    draw_caterina()
    draw_score()

    # Aggiorna qubits e controlla collisioni
    frame_count += 1
    
    if frame_count % spawn_rate == 0:
        qubits.append([random.randint(0, WIDTH), -20, random.randint(0, 360)])
    update_qubits()
    check_caterina_collision()
    check_agent_collision()

    # Aggiorna schermo
    pygame.display.flip()
    clock.tick(30)

# Messaggio finale
screen.fill(BLACK)
message = "Victory!" if victory else "Game Over!"
message_surface = message_font.render(message, True, WHITE)
screen.blit(message_surface, (WIDTH // 2 - message_surface.get_width() // 2, HEIGHT // 2))
pygame.display.flip()
pygame.time.wait(3000)

pygame.quit()
