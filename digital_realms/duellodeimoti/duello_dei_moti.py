import pygame, sys, random, math

pygame.init()
pygame.mixer.init()

# Carica i suoni
bounce_sound = pygame.mixer.Sound("bounce.wav")
bin_sound = pygame.mixer.Sound("bin.wav")
rotola_sound = pygame.mixer.Sound("rotola.wav")

# Dimensioni della finestra
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Confronto tra moti: Sinusoidale vs. Parabolico con attrito")


# Imposta lo sfondo nero
BACKGROUND = (0, 0, 0)

# Colori neon
NEON_PINK = (255, 20, 147)   # piano superiore (moto sinusoidale)
NEON_GREEN = (57, 255, 20)   # piano inferiore (moto parabolico)
SIMPATICA = (255, 223, 0)
ANTIPATICA = (64, 64, 64)
NEON_YELLOW = (255, 255, 0)  # linee del suolo e divisorie
WHITE = (255, 255, 255)

# --- Divisione in piani verticali ---
upper_area_top = 0
upper_area_bottom = HEIGHT // 2
lower_area_top = HEIGHT // 2
lower_area_bottom = HEIGHT

# --- Piano superiore: moto sinusoidale (palla rossa, NEON_PINK) ---
red_radius = 20
red_x = 50                # posizione iniziale (pixel)
red_vx = 100              # velocità orizzontale (pixel/s)
red_x_min = 50
red_x_max = WIDTH - 50     # area del piano superiore
red_y_baseline = upper_area_bottom - 40  # posizione base verticale
red_amplitude = 50        # ampiezza del moto verticale in pixel
red_period = 2            # periodo in secondi
red_floor = upper_area_bottom - red_radius  # linea del suolo del piano superiore

# --- Piano inferiore: moto parabolico (palla blu, NEON_GREEN) ---
blue_radius = 20
blue_x = 50               # posizione iniziale (pixel)
blue_vx = 100             # velocità orizzontale (pixel/s)
blue_x_min = 50
blue_x_max = WIDTH - 50
blue_y = lower_area_top + 50   # posizione iniziale (pixel)
blue_vy = 0                    # velocità verticale iniziale (pixel/s)
g = 9.81                       # accelerazione (m/s^2)
scale = 100                    # 1 m = 100 pixel
blue_floor = lower_area_bottom - 20  # linea del suolo nel piano inferiore
blue_ceiling = lower_area_top          # bordo superiore del piano inferiore

# Attrito per il moto orizzontale del piano inferiore
friction_factor = 0.1  # coefficiente di attrito

# Variabili per l'effetto di deformazione (squash and stretch) della palla blu
blue_scale_x = 1.0
blue_scale_y = 1.0

# Variabile per il tempo del moto sinusoidale
t = 0

# --- Schermata di attesa ---
# Pulizia iniziale degli eventi residui
pygame.event.clear()

waiting = True
font = pygame.font.SysFont(None, 36)
while waiting:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            waiting = False
    screen.fill(BACKGROUND)
    text = font.render("Premi un tasto per iniziare", True, WHITE)
    text_rect = text.get_rect(center=(WIDTH // 2, HEIGHT // 2))
    screen.blit(text, text_rect)
    pygame.display.flip()

# Dopo il loop di attesa, pulisci di nuovo la coda e azzera il timer
pygame.event.clear()
t = 0
clock = pygame.time.Clock()
# --- Ciclo principale dell'animazione ---
running = True
while running:
    dt = clock.tick(60) / 1000.0
    t += dt
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # --- Aggiornamento del moto orizzontale ---
    # Piano superiore (palla rossa)
    red_x += red_vx * dt
    if red_x < red_x_min or red_x > red_x_max:
        red_vx = -red_vx

    # Piano inferiore (palla blu) con attrito
    blue_x += blue_vx * dt
    blue_vx *= (1 - friction_factor * dt)
    if blue_x < blue_x_min or blue_x > blue_x_max:
        blue_vx = -blue_vx

    # --- Aggiornamento del moto verticale ---
    # Piano superiore (palla rossa, moto sinusoidale)
    red_y = red_y_baseline - 45 + red_amplitude * math.sin(2 * math.pi * t / red_period)
    if red_y > red_floor:
        red_y = red_floor
        bin_sound.play()

    # Piano inferiore (palla blu, moto parabolico)
    blue_vy += g * dt * scale  # accelerazione in pixel/s^2
    blue_y += blue_vy * dt
    if blue_y > blue_floor - blue_radius:
        blue_y = blue_floor - blue_radius
        blue_vy = -blue_vy * 0.9  # rimbalzo con perdita
        if blue_vy * blue_vy > 100.11:
            bounce_sound.play()
        # Applica deformazione: aumenta la larghezza e riduci l'altezza (squash)
        blue_scale_x = 1.2
        blue_scale_y = 0.8
    if blue_y < blue_ceiling + blue_radius:
        blue_y = blue_ceiling + blue_radius
        blue_vy = -blue_vy

    # Graduale ritorno alla forma originale per la palla blu
    blue_scale_x += (1.0 - blue_scale_x) * 0.1
    blue_scale_y += (1.0 - blue_scale_y) * 0.1

    # --- Disegno ---
    screen.fill(BACKGROUND)
    pygame.draw.line(screen, NEON_YELLOW, (red_x_min, red_floor), (red_x_max, red_floor), 2)
    pygame.draw.line(screen, NEON_YELLOW, (blue_x_min, blue_floor), (blue_x_max, blue_floor), 2)
    pygame.draw.line(screen, WHITE, (0, lower_area_top), (WIDTH, lower_area_top), 2)
    
    pygame.draw.circle(screen, NEON_PINK, (int(red_x), int(red_y)), red_radius)
    blue_width = int(blue_radius * 2 * blue_scale_x)
    blue_height = int(blue_radius * 2 * blue_scale_y)
    blue_rect = pygame.Rect(0, 0, blue_width, blue_height)
    blue_rect.center = (int(blue_x), int(blue_y))
    pygame.draw.ellipse(screen, NEON_GREEN, blue_rect)
    
    font_small = pygame.font.SysFont(None, 24)
    label_top = font_small.render("Moto arbitrario", True, WHITE)
    label_bottom = font_small.render("Moto parabolico con attrito", True, WHITE)
    screen.blit(label_top, (red_x_min, 20))
    screen.blit(label_bottom, (blue_x_min, lower_area_top + 20))
    
    pygame.display.flip()

pygame.quit()
sys.exit()
