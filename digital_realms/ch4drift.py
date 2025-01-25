import pygame
import random
import math

# Inizializza Pygame
pygame.init()
pygame.mixer.init()

# Imposta dimensioni della finestra
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("CNOT Animation with Rotating CH4 Drone")

# Carica e riproduci musica
pygame.mixer.music.load("background_music.mp3")  # Sostituisci con il nome del tuo file audio
pygame.mixer.music.play(-1)  # Riproduci in loop

# Colori
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
CYAN = (0, 255, 255)
GRAY = (150, 150, 150)
COLORS = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255, 255, 0), (0, 255, 255)]

# Font
font = pygame.font.Font(None, 74)
text = "Cnot - Franchise"
text_color = random.choice(COLORS)

# Coordinate iniziali per il testo
text_x = WIDTH // 2
text_y = -50
mirror_y = HEIGHT + 50
speed = 2

# Drone - Molecola di CH4
drone_radius = 50
drone_center = [WIDTH // 4, HEIGHT // 2]
drone_speed_x, drone_speed_y = 6, 4  # Velocità raddoppiata
rotation_angle = 0  # Angolo iniziale per la rotazione

# Funzione per disegnare il drone CH4
def draw_drone():
    global drone_center, drone_speed_x, drone_speed_y, rotation_angle

    # Disegna l'atomo centrale (carbonio)
    pygame.draw.circle(screen, GRAY, drone_center, 12)

    # Disegna gli atomi di idrogeno disposti a tetraedro con rotazione
    for i in range(4):
        angle = i * (360 // 4) + rotation_angle  # Rotazione dinamica
        dx = drone_radius * math.cos(math.radians(angle))
        dy = drone_radius * math.sin(math.radians(angle))
        pygame.draw.circle(screen, CYAN, (int(drone_center[0] + dx), int(drone_center[1] + dy)), 8)

    # Incrementa l'angolo di rotazione
    rotation_angle = (rotation_angle + 2) % 360  # Rotazione continua

    # Movimento del drone
    drone_center[0] += drone_speed_x
    drone_center[1] += drone_speed_y

    # Rimbalzo ai bordi
    if drone_center[0] - drone_radius <= 0 or drone_center[0] + drone_radius >= WIDTH:
        drone_speed_x *= -1
    if drone_center[1] - drone_radius <= 0 or drone_center[1] + drone_radius >= HEIGHT:
        drone_speed_y *= -1

# Funzione per disegnare la griglia
def draw_grid():
    for x in range(0, WIDTH, 40):
        for y in range(0, HEIGHT, 40):
            color = random.choice(COLORS)
            pygame.draw.rect(screen, color, (x, y, 40, 40), 1)

# Testo e specchio con Ket
def draw_text_with_ket():
    global text_y, mirror_y

    # Disegna il testo principale
    rendered_text = font.render(text, True, text_color)
    text_rect = rendered_text.get_rect(center=(text_x, text_y))
    screen.blit(rendered_text, text_rect)

    # Crea il testo specchiato
    mirrored_text = pygame.transform.flip(rendered_text, False, True)
    mirrored_rect = mirrored_text.get_rect(center=(text_x, mirror_y))
    screen.blit(mirrored_text, mirrored_rect)

    # Movimento del testo
    text_y += speed
    mirror_y -= speed

    # Resetta le posizioni quando escono dalla finestra
    if text_y > HEIGHT + 50:
        text_y = -50
        mirror_y = HEIGHT + 50

# Ciclo principale
running = True
clock = pygame.time.Clock()
while running:
    screen.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Disegna griglia, testo con Ket, e drone
    draw_grid()
    draw_text_with_ket()
    draw_drone()

    # Aggiorna la finestra
    pygame.display.flip()
    clock.tick(30)

# Esci da Pygame
pygame.quit()
