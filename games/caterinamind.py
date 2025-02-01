import pygame
import sys
import random
import math

# Inizializzazione di Pygame e del mixer
pygame.init()

# Imposta le dimensioni della finestra: 1200 x 800
WIDTH, HEIGHT = 1200, 800
FPS = 30

# Gestione del caricamento dei file audio con try/except
audio_available = True
try:
    pygame.mixer.music.load("background_music.mp3")  # Musica di sottofondo
    pygame.mixer.music.play(-1)  # Riproduce in loop
except Exception as e:
    print("Errore nel caricamento di background_music.mp3:", e)
    audio_available = False

try:
    node_sound = pygame.mixer.Sound("node_reached.wav")  # Suono al raggiungimento di un nodo
except Exception as e:
    print("Errore nel caricamento di node_reached.wav:", e)
    node_sound = None

try:
    tick_sound = pygame.mixer.Sound("tick.wav")  # Suono "tic tic" del timer
except Exception as e:
    print("Errore nel caricamento di tick.wav:", e)
    tick_sound = None

# Impostazioni di gioco
NUM_NODES = 20
MAX_DEGREE = 4   # grado massimo di connessioni per ogni neurone
MIN_NODE_DISTANCE = 40  # distanza minima tra nodi

# Colori
BLACK = (0, 0, 0)       # sfondo scuro
WHITE = (255, 255, 255)
NEURON_COLOR = (50, 150, 250)
GOAL_COLOR = (250, 100, 100)
TEXT_COLOR = WHITE      # testi in bianco
BLINK_BASE = (150, 150, 250)

# Colori per le direzioni (lampeggianti)
arrow_colors = {
    pygame.K_LEFT: (135, 206, 250),  # Azzurro
    pygame.K_UP: (0, 255, 0),         # Verde
    pygame.K_RIGHT: (255, 255, 0),    # Giallo
    pygame.K_DOWN: (255, 255, 255)    # Bianco
}

# Creazione della finestra
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Labirinto Neurale di Caterina - Cnot, capitolo 2")
clock = pygame.time.Clock()

# Definizione degli stati e del profilo target/iniziale
# Gli stati sono: "n", "e", "ap", "am", "c"
target_profile = {'n': 55, 'e': 60, 'ap': 80, 'am': 45, 'c': 50}
profile = target_profile.copy()
TOLERANCE = 4  # tolleranza ±4 per la vittoria

# Tabella delle transizioni (stato corrente, stato destinazione) -> simbolo
TRANSITIONS = {
    ("n", "n"): "X",
    ("n", "e"): "+e",
    ("n", "ap"): "-c",
    ("n", "am"): "-e",
    ("n", "c"): "-n",

    ("e", "n"): "+n",
    ("e", "e"): "X",
    ("e", "ap"): "+ap",
    ("e", "am"): "-n",
    ("e", "c"): "+c",

    ("ap", "n"): "-ap",
    ("ap", "e"): "-c",
    ("ap", "ap"): "X",
    ("ap", "am"): "+am",
    ("ap", "c"): "-c",

    ("am", "n"): "-am",
    ("am", "e"): "+am",
    ("am", "ap"): "+ap",
    ("am", "am"): "X",
    ("am", "c"): "-am",

    ("c", "n"): "+N",
    ("c", "e"): "+e+",
    ("c", "ap"): "+e",
    ("c", "am"): "-am",
    ("c", "c"): "X"
}

# Dizionario che traduce il simbolo in modifica al profilo.
# L'ordine delle componenti del vettore è: (n, e, ap, am, c)
MOD_EFFECTS = {
    "X":    (0, 0, 0, 0, 0),
    "+e":   (0, 10, 0, 0, 0),
    "-c":   (0, 0, 0, 0, -5),
    "-e":   (0, -5, 0, 0, 0),
    "-n":   (-5, 0, 0, 0, 0),
    "+n":   (10, 0, 0, 0, 0),
    "+ap":  (0, 0, 10, 0, 0),
    "+c":   (0, 0, 0, 0, 10),
    "-ap":  (0, 0, -5, 0, 0),
    "+am":  (0, 0, 0, 10, 0),
    "-am":  (0, 0, 0, -5, 0),
    "+N":   (10, 0, 0, 0, 0),
    "+e+":  (0, 15, 0, 0, 0)
}

# Stato iniziale del modello FSM
fsm_state = "n"

# Definizione della lista dei tipi di neurone (stati) per i nodi.
# Questi corrispondono agli stati di destinazione possibili.
neuron_types = ["n", "e", "ap", "am", "c"]

# Posizionamento dei nodi: la regione verrà generata nella metà sinistra, a partire da x = 200.
margin_x = 200
margin_y = 50
region_width = (WIDTH // 2) - 100
region_height = HEIGHT - 2 * margin_y

# Funzione per generare una posizione casuale non sovrapposta
def generate_random_position(margin_x, margin_y, region_width, region_height, existing_nodes, min_distance):
    for _ in range(100):
        x = random.randint(margin_x, margin_x + region_width)
        y = random.randint(margin_y, margin_y + region_height)
        valid = True
        for node in existing_nodes:
            if math.hypot(x - node.x, y - node.y) < min_distance:
                valid = False
                break
        if valid:
            return x, y
    return x, y

# Classe per il nodo
class Node:
    def __init__(self, node_id, x, y, neuron_type):
        self.id = node_id
        self.x = x
        self.y = y
        self.neuron_type = neuron_type  # Questo rappresenta lo "stato di destinazione"
        self.neighbors = []

    def draw(self, surface, is_current=False, is_goal=False):
        color = GOAL_COLOR if is_goal else (NEURON_COLOR if not is_current else (0, 255, 0))
        pygame.draw.circle(surface, color, (self.x, self.y), 15)
        font = pygame.font.SysFont(None, 20)
        text = font.render(self.neuron_type, True, TEXT_COLOR)
        text_rect = text.get_rect(center=(self.x, self.y))
        surface.blit(text, text_rect)
        if is_goal:
            goal_font = pygame.font.SysFont(None, 16)
            goal_text = goal_font.render("Oculus", True, TEXT_COLOR)
            goal_rect = goal_text.get_rect(midbottom=(self.x, self.y - 20))
            surface.blit(goal_text, goal_rect)

# Genera i nodi casuali evitando sovrapposizioni
nodes = []
for i in range(NUM_NODES):
    x, y = generate_random_position(margin_x, margin_y, region_width, region_height, nodes, MIN_NODE_DISTANCE)
    neuron_type = neuron_types[i % len(neuron_types)]
    nodes.append(Node(i, x, y, neuron_type))

# Genera la matrice di adiacenza casuale e costruisce le liste di vicinato
adj_matrix = [[0 for _ in range(NUM_NODES)] for _ in range(NUM_NODES)]
degrees = [0 for _ in range(NUM_NODES)]
p_connect = 0.15

for i in range(NUM_NODES):
    for j in range(i+1, NUM_NODES):
        if random.random() < p_connect and degrees[i] < MAX_DEGREE and degrees[j] < MAX_DEGREE:
            adj_matrix[i][j] = 1
            adj_matrix[j][i] = 1
            degrees[i] += 1
            degrees[j] += 1

for i in range(NUM_NODES):
    if degrees[i] == 0:
        candidates = [j for j in range(NUM_NODES) if j != i and degrees[j] < MAX_DEGREE]
        if candidates:
            j = random.choice(candidates)
            adj_matrix[i][j] = 1
            adj_matrix[j][i] = 1
            degrees[i] += 1
            degrees[j] += 1

for i in range(NUM_NODES):
    for j in range(NUM_NODES):
        if adj_matrix[i][j] == 1 and nodes[j] not in nodes[i].neighbors:
            nodes[i].neighbors.append(nodes[j])

# Seleziona il nodo iniziale e il nodo obiettivo (Oculus)
current_node = nodes[0]
goal_node = nodes[-1]
goal_node.x = margin_x + region_width
goal_node.y = margin_y + 20

# Funzione per applicare la transizione FSM e aggiornare il profilo
def update_profile_fsm(next_state):
    global fsm_state, profile
    key = (fsm_state, next_state)
    mod_symbol = TRANSITIONS.get(key, "X")
    delta = MOD_EFFECTS.get(mod_symbol, (0, 0, 0, 0, 0))
    dims = ['n', 'e', 'ap', 'am', 'c']
    for i, d in enumerate(dims):
        profile[d] += delta[i]
    fsm_state = next_state

# Funzione per disegnare una connessione curva con effetto lampeggiante
def draw_curved_edge(surface, start, end, blink_factor, color_override=None):
    mid_x = (start[0] + end[0]) / 2
    mid_y = (start[1] + end[1]) / 2
    dx = end[0] - start[0]
    dy = end[1] - start[1]
    length = math.hypot(dx, dy)
    if length == 0:
        length = 1
    offset = 30
    perp_x = -dy / length * offset
    perp_y = dx / length * offset
    control = (mid_x + perp_x, mid_y + perp_y)
    points = []
    for t in range(21):
        t_norm = t / 20
        x = (1 - t_norm)**2 * start[0] + 2*(1 - t_norm)*t_norm * control[0] + t_norm**2 * end[0]
        y = (1 - t_norm)**2 * start[1] + 2*(1 - t_norm)*t_norm * control[1] + t_norm**2 * end[1]
        points.append((x, y))
    if color_override is not None:
        color = (int(color_override[0] * blink_factor),
                 int(color_override[1] * blink_factor),
                 int(color_override[2] * blink_factor))
    else:
        color = (int(BLINK_BASE[0] * blink_factor),
                 int(BLINK_BASE[1] * blink_factor),
                 int(BLINK_BASE[2] * blink_factor))
    pygame.draw.lines(surface, color, False, points, 3)

# Disegna tutte le connessioni senza duplicati
def draw_edges(surface, blink_factor):
    drawn = set()
    for node in nodes:
        for neighbor in node.neighbors:
            if (node.id, neighbor.id) not in drawn and (neighbor.id, node.id) not in drawn:
                start = (node.x, node.y)
                end = (neighbor.x, neighbor.y)
                draw_curved_edge(surface, start, end, blink_factor)
                drawn.add((node.id, neighbor.id))

# Disegna l'istogramma del profilo (parte sinistra, da x=0)
def draw_profile(surface):
    bar_width = 20
    spacing = 10
    x_start = 0
    y_base = HEIGHT - 50
    font = pygame.font.SysFont(None, 24)
    dims = ['n', 'e', 'ap', 'am', 'c']
    for i, d in enumerate(dims):
        bar_height = profile[d] * 2
        x = x_start + i * (bar_width + spacing)
        y = y_base - bar_height
        bar_color = (255, 0, 0) if abs(profile[d] - target_profile[d]) > TOLERANCE else (0, 255, 0)
        pygame.draw.rect(surface, bar_color, (x, y, bar_width, bar_height))
        label = font.render(d, True, TEXT_COLOR)
        label_rect = label.get_rect(center=(x + bar_width // 2, y_base + 15))
        surface.blit(label, label_rect)

# Disegna la legenda sul lato destro con le scritte per le direzioni
def draw_legend(surface):
    font = pygame.font.SysFont(None, 32)
    title = font.render("Legenda Direzioni:", True, TEXT_COLOR)
    surface.blit(title, (WIDTH - 300, 50))
    legend_items = [
        ("Sinistra", arrow_colors[pygame.K_LEFT]),
        ("Su", arrow_colors[pygame.K_UP]),
        ("Destra", arrow_colors[pygame.K_RIGHT]),
        ("Giù", arrow_colors[pygame.K_DOWN])
    ]
    for i, (direction, color) in enumerate(legend_items):
        item_text = font.render(direction, True, color)
        surface.blit(item_text, (WIDTH - 300, 100 + i * 40))

# Verifica se il profilo rientra nella tolleranza
def check_profile():
    for d in profile:
        if abs(profile[d] - target_profile[d]) > TOLERANCE:
            return False
    return True

# Funzione per resettare il gioco
def reset_game():
    global profile, current_node, fsm_state, start_ticks, game_over, victory, prev_tick_second
    profile = target_profile.copy()
    current_node = nodes[0]
    fsm_state = "n"
    start_ticks = pygame.time.get_ticks()
    prev_tick_second = int(game_duration)
    game_over = False
    victory = False

# Timer per il gioco: 180 secondi
game_duration = 180
start_ticks = pygame.time.get_ticks()
prev_tick_second = int(game_duration)

# Mappatura dei tasti freccia: indice del vicino selezionato
arrow_mapping = {
    pygame.K_LEFT: 0,
    pygame.K_UP: 1,
    pygame.K_RIGHT: 2,
    pygame.K_DOWN: 3
}

# Schermata di presentazione (Lore)
def show_intro():
    intro_font = pygame.font.SysFont(None, 72)
    intro_text = intro_font.render("Cnot, capitolo 2", True, TEXT_COLOR)
    sub_font = pygame.font.SysFont(None, 36)
    lore_lines = [
        "In un futuro distopico, la mente umana e l'intelligenza artificiale",
        "si fondono in una realtà dove i ricordi e le emozioni sono in bilico.",
        "Caterina, la nostra eroina, deve attraversare un labirinto neurale,",
        "un reame di connessioni e decisioni critiche, per salvare la propria identità",
        "e impedire che forze oscure alterino il suo destino.",
        "Preparati a immergerti in Cnot, capitolo 2..."
    ]
    screen.fill(BLACK)
    intro_rect = intro_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 - 150))
    screen.blit(intro_text, intro_rect)
    for i, line in enumerate(lore_lines):
        line_text = sub_font.render(line, True, TEXT_COLOR)
        line_rect = line_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 - 50 + i * 40))
        screen.blit(line_text, line_rect)
    prompt_text = sub_font.render("Premi un tasto per continuare", True, TEXT_COLOR)
    prompt_rect = prompt_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 + 150))
    screen.blit(prompt_text, prompt_rect)
    pygame.display.flip()
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN:
                waiting = False

# Schermata di spiegazione "Biologica"
def show_explanation():
    exp_font = pygame.font.SysFont(None, 48)
    exp_text = exp_font.render("Spiegazione Biologica", True, TEXT_COLOR)
    sub_font = pygame.font.SysFont(None, 28)
    explanation_lines = [
        "Nel cervello di Caterina, ogni neurone agisce come un operatore",
        "che modula l'equilibrio dei suoi tratti: n, e, ap, am, c.",
        "Il modello a stati finiti determina la transizione tra questi stati.",
        "Ad ogni transizione, la combinazione dello stato corrente",
        "e del tipo del nodo determina un impulso (es. +e, -n, +ap, ecc.)",
        "che modifica il profilo di Caterina.",
        "Se il percorso scelto fa annullare gli impulsi, l'effetto netto è nullo",
        "e il profilo rimane in equilibrio: questo è il percorso identitario.",
        "Trova il percorso giusto e salva l'identità di Caterina."
    ]
    screen.fill(BLACK)
    exp_rect = exp_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 - 200))
    screen.blit(exp_text, exp_rect)
    for i, line in enumerate(explanation_lines):
        line_text = sub_font.render(line, True, TEXT_COLOR)
        line_rect = line_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 - 100 + i * 35))
        screen.blit(line_text, line_rect)
    prompt_text = sub_font.render("Premi un tasto per iniziare il gioco", True, TEXT_COLOR)
    prompt_rect = prompt_text.get_rect(center=(WIDTH // 2, HEIGHT - 100))
    screen.blit(prompt_text, prompt_rect)
    pygame.display.flip()
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN:
                waiting = False

# Mostra le schermate iniziali
show_intro()
show_explanation()

# Stato del gioco
game_over = False
victory = False

# Loop principale del gioco
while True:
    dt = clock.tick(FPS) / 1000.0
    blink_factor = 0.75 + 0.25 * math.sin(pygame.time.get_ticks() * 0.005)
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit(); sys.exit()
        if not game_over:
            if event.type == pygame.KEYDOWN:
                if event.key in arrow_mapping:
                    index = arrow_mapping[event.key]
                    if len(current_node.neighbors) > index:
                        next_node = current_node.neighbors[index]
                        update_profile_fsm(next_node.neuron_type)
                        current_node = next_node
                        if node_sound is not None:
                            node_sound.play()
                        if current_node == goal_node:
                            if check_profile():
                                game_over = True
                                victory = True
                            else:
                                game_over = True
                                victory = False
        elif game_over:
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_r:
                    reset_game()
    
    seconds_elapsed = (pygame.time.get_ticks() - start_ticks) / 1000
    time_remaining = game_duration - seconds_elapsed
    current_tick_second = int(time_remaining)
    if current_tick_second < prev_tick_second:
        if tick_sound is not None:
            tick_sound.play()
        prev_tick_second = current_tick_second
    if time_remaining <= 0 and not game_over:
        game_over = True
        victory = False

    screen.fill(BLACK)
    draw_edges(screen, blink_factor)
    
    for key, idx in arrow_mapping.items():
        if len(current_node.neighbors) > idx:
            neighbor = current_node.neighbors[idx]
            draw_curved_edge(screen, (current_node.x, current_node.y), (neighbor.x, neighbor.y),
                             blink_factor, color_override=arrow_colors[key])
    
    for node in nodes:
        is_current = (node == current_node)
        is_goal = (node == goal_node)
        node.draw(screen, is_current, is_goal)
    
    draw_profile(screen)
    
    font_timer = pygame.font.SysFont(None, 28)
    timer_text = font_timer.render(f"Tempo: {int(time_remaining)} s", True, WHITE)
    screen.blit(timer_text, (20, 20))
    
    draw_legend(screen)
    
    if game_over:
        font_big = pygame.font.SysFont(None, 48)
        if victory:
            msg = "VITTORIA!"
        else:
            msg = "GAME OVER: Profilo errato! Premi R per riprovare"
        text = font_big.render(msg, True, (255, 0, 0))
        text_rect = text.get_rect(center=(WIDTH // 2, 50))
        screen.blit(text, text_rect)
    
    pygame.display.flip()
