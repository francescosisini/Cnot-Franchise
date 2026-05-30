import pygame
import random


from actors.actor import BLACK, COLORS, GRAY, MAGENTA, RED, WHITE
from actors.caterina import Caterina
from actors.drone import Drone
from actors.agente import Agente
from actors.qbit import QBit

# Inizializza Pygame
pygame.init()
pygame.mixer.init()

# Imposta dimensioni della finestra
WIDTH, HEIGHT = 600, 800
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Quantum Tunnel Chase")

# Carica e riproduci musica
pygame.mixer.music.load("background_music.mp3")  # Sostituisci con il nome del tuo file audio
pygame.mixer.music.play(-1)  # Riproduci in loop


# Font per punteggio e messaggi
pygame.font.init()
font = pygame.font.Font(None, 50)
message_font = pygame.font.Font(None, 74)
intro_font = pygame.font.Font(None, 36)


# Secondo drone (agente)
agent_respawn_timer = 0
agent_defeated = 0  # Numero di droni sconfitti

# Qubit
qubits = []
spawn_rate = 30
frame_count = 0

# Caterina
caterina_collected = 0  # Numero di Caterine raccolte

# Griglia scorrevole
grid_offset = 0
grid_speed = 2

# Game state
game_over = False
victory = False
score = 0

# Obiettivo per vincere
TARGET_DRONES = 5
TARGET_CATERINA = 3

# Funzione per mostrare la schermata iniziale
def show_intro():
    '''Mostra la schermata iniziale del gioco.'''
    screen.fill(BLACK)
    intro_lines = [
        "Cnot Franchiese - Game 6",
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


# Funzione per disegnare la griglia
def draw_grid():
    '''Disegna la griglia.'''
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

drone = Drone(screen, GRAY, 50, WIDTH // 2, HEIGHT - 100, 6, 6)
agente = Agente(screen, RED, 50, WIDTH // 4, 100, 2, 2, drone)
caterina = Caterina(screen, MAGENTA, 50, random.randint(50, WIDTH - 50), random.randint(50, HEIGHT // 2), 0, 0)

# Ciclo principale
clock = pygame.time.Clock()
while not game_over and not victory:
    screen.fill(BLACK)
    game_over = drone.event_parser(pygame.event.get())

    # Movimento del drone agente
    agente.move_to()
    if agent_respawn_timer > 0:
        agent_respawn_timer -= 1
        if agent_respawn_timer == 0:
            agente.set_active()

    # Spawna Caterina se il drone agente è presente
    if not caterina.is_active() and agente.is_active() and random.randint(0, 500) == 0:
        caterina.set_active()
        caterina.center_x = random.randint(50, WIDTH - 50)
        caterina.center_y = random.randint(50, HEIGHT // 2)

    # Controlla vittoria
    if agent_defeated >= TARGET_DRONES and caterina_collected >= TARGET_CATERINA:
        victory = True

    # Disegna tutto
    draw_grid()
    drone.draw()
    if agente.is_active():
        agente.draw()
    for qbit in qubits:
        qbit.draw()
    caterina.draw()
    draw_score()

    # Aggiorna qubits e controlla collisioni
    frame_count += 1

    if frame_count % spawn_rate == 0:
        qubits.append(QBit(screen, WHITE, 12, random.randint(0, WIDTH), -20, 4, 4, drone, agente))

    for qbit in qubits[:]:
        qbit_out, agent_out, you_lose = qbit.move()
        if qbit_out:
            qubits.remove(qbit)
        if agent_out:
            agente.reset_active()
            agent_respawn_timer = 180
            score += 100
            agent_defeated += 1
        if you_lose:
            game_over = True

    if caterina.is_active() and caterina.collide(drone):
        caterina.reset_active()
        score += 500
        caterina_collected += 1
        
    if agente.is_active() and agente.collide(drone):
        game_over = True

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
