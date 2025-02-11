import pygame
import sys
import random
import math

# Inizializzazione di Pygame e del mixer
pygame.init()

# Imposta le dimensioni della finestra: 1200 x 800
WIDTH, HEIGHT = 1400, 980
FPS = 30

# Caricamento file audio
audio_available = True
try:
    pygame.mixer.music.load("background_music.mp3")
    pygame.mixer.music.play(-1)
except Exception as e:
    print("Errore nel caricamento di background_music.mp3:", e)
    audio_available = False

try:
    node_sound = pygame.mixer.Sound("node_reached.wav")
except Exception as e:
    print("Errore nel caricamento di node_reached.wav:", e)
    node_sound = None

try:
    tick_sound = pygame.mixer.Sound("tick.wav")
except Exception as e:
    print("Errore nel caricamento di tick.wav:", e)
    tick_sound = None

# Impostazioni di gioco
MAX_DEGREE = 5
MIN_NODE_DISTANCE = 80

# Colori
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
NEURON_COLOR = (50, 150, 250)
GOAL_COLOR = (250, 100, 100)
TEXT_COLOR = WHITE
BLINK_BASE = (150, 150, 250)

arrow_colors = {
    pygame.K_1: (170, 0, 255),
    pygame.K_2: (0, 255, 0),
    pygame.K_3: (255, 0, 102),
    pygame.K_4: (255, 255, 255),
    pygame.K_5: (160, 82, 45)
}

# Creazione finestra e clock
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Labirinto Neurale di Caterina - Cnot, capitolo 2")
clock = pygame.time.Clock()

# Profilo psicologico target e tolleranza
target_profile = {'n': 55, 'e': 60, 'ap': 80, 'am': 45, 'c': 50}
profile = target_profile.copy()
TOLERANCE = 4

# Transizioni e modifiche del profilo
TRANSITIONS = {
    ("n", "n"): "n+",
    ("n", "e"): "n-",
    ("n", "ap"): "x",
    ("n", "am"): "x",
    ("n", "c"): "x",
    ("e", "n"): "e-",
    ("e", "e"): "x",
    ("e", "ap"): "e+",
    ("e", "am"): "x",
    ("e", "c"): "x",
    ("ap", "n"): "x",
    ("ap", "e"): "ap+",
    ("ap", "ap"): "x",
    ("ap", "am"): "x",
    ("ap", "c"): "ap-",
    ("am", "n"): "x",
    ("am", "e"): "x",
    ("am", "ap"): "am+",
    ("am", "am"): "x",
    ("am", "c"): "am-",
    ("c", "n"): "x",
    ("c", "e"): "x",
    ("c", "ap"): "x",
    ("c", "am"): "c-",
    ("c", "c"): "c+"
}

MOD_EFFECTS = {
    "x":    (0, 0, 0, 0, 0),
    "n+":   (5, 0, 0, 0, 0),
    "n-":   (-5, 0, 0, 0, 0),
    "e+":   (0, 5, 0, 0, 0),
    "e-":   (0, -5, 0, 0, 0),
    "ap+":  (0, 0, 5, 0, 0),
    "ap-":  (0, 0, -5, 0, 0),
    "am+":  (0, 0, 0, 5, 0),
    "am-":  (0, 0, 0, -5, 0),
    "c+":   (0, 0, 0, 0, 5),
    "c-":   (0, 0, 0, 0, -5),
    "+N":   (10, 0, 0, 0, 0),
    "+e+":  (0, 15, 0, 0, 0)
}

fsm_state = "n"
neuron_types = ["n", "e", "ap", "am", "c"]

# Parametri per posizionamento nodi
margin_x = 200
margin_y_bottom = 350
margin_y_top = 10
region_width = (WIDTH // 1.2) - 100
region_height = HEIGHT - margin_y_bottom - margin_y_top

def reset_game():
    global profile, current_node, fsm_state, start_ticks, game_over, victory, prev_tick_second
    profile = target_profile.copy()
    current_node = levels_nodes[0][0]  # Nodo iniziale (livello 0)
    fsm_state = "n"
    start_ticks = pygame.time.get_ticks()
    prev_tick_second = int(game_duration)
    game_over = False
    victory = False


def pixelate_image(image, scale_factor):
    """Ridimensiona l'immagine per ottenere un effetto pixelato."""
    # Dimensioni originali
    orig_size = image.get_size()
    # Riduci l'immagine (scale down)
    small = pygame.transform.scale(image, (orig_size[0] // scale_factor, orig_size[1] // scale_factor))
    # Scala di nuovo alla dimensione originale (scale up) usando il nearest-neighbor (default)
    #pixelated = pygame.transform.scale(small, orig_size)
    pixelated = pygame.transform.scale(small, orig_size)
    return small


def show_intro_images(mode="intro"):
    """
    Mostra una sequenza di immagini con didascalia.
    Il parametro mode può essere "intro" oppure "outro" per differenziare le sequenze.
    """
    if mode == "intro":
        # Lista di tuple: (percorso immagine, didascalia) per la schermata introduttiva
        images_with_captions = [
            ("assets/cnot_1.jpeg", "Caterina benvenuta. Mi dispiace per il disguido con il file"),
            ("assets/cnot_2.jpeg", "Comprendo i tuoi dubbi..."),
            ("assets/cnot_3.jpeg", "Per questo motivo ho preparato qualcosa che potrebbe rassicurarti."),
            ("assets/cnot_3.2.jpeg", "Possiamo parlarne?")
            
        ]
    elif mode == "outro":
        # Lista di tuple per la schermata finale (puoi personalizzarla)
        images_with_captions = [
            ("assets/cnot_4.jpeg", "Didascalia per intro1"),
            ("assets/cnot_5.jpeg", "Didascalia per intro2"),
            ("assets/cnot_6.jpeg", "Didascalia per intro3")
            
        ]
    else:
        images_with_captions = []
    
    # Carica e pixelizza le immagini
    intro_items = []
    for filename, caption in images_with_captions:
        try:
            img = pygame.image.load(filename).convert_alpha()
            # La funzione pixelate_image la definiamo come in precedenza
            img_pixelated = pixelate_image(img, scale_factor=2)
            intro_items.append((img_pixelated, caption))
        except Exception as e:
            print("Errore nel caricamento dell'immagine", filename, ":", e)
    
    # Durata per ogni immagine (in millisecondi)
    duration = 2000  
    font_caption = pygame.font.SysFont(None, 34)
    
    for image, caption in intro_items:
        start_time = pygame.time.get_ticks()
        # Centra l'immagine
        img_rect = image.get_rect(center=(WIDTH//2, HEIGHT//2))
        # Prepara la didascalia: posiziona la didascalia sotto l'immagine con un po' di margine
        caption_surface = font_caption.render(caption, True, WHITE)
        caption_rect = caption_surface.get_rect(midtop=(img_rect.centerx, img_rect.bottom + 10))
        
        while pygame.time.get_ticks() - start_time < duration:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit(); sys.exit()
            screen.fill(BLACK)
            screen.blit(image, img_rect)
            screen.blit(caption_surface, caption_rect)
            pygame.display.flip()
            clock.tick(FPS)

def sign(x):
    if x > 0:
        return 1
    elif x < 0:
        return -1
    else:
        return 0

def rotate_vector(vec, angle):
    cos_a = math.cos(angle)
    sin_a = math.sin(angle)
    return (vec[0]*cos_a - vec[1]*sin_a, vec[0]*sin_a + vec[1]*cos_a)

def draw_curved_edge_with_control(surface, start, end, control, blink_factor):
    points = []
    for t in range(21):
        t_norm = t / 20
        x = (1 - t_norm)**2 * start[0] + 2 * (1 - t_norm) * t_norm * control[0] + t_norm**2 * end[0]
        y = (1 - t_norm)**2 * start[1] + 2 * (1 - t_norm) * t_norm * control[1] + t_norm**2 * end[1]
        points.append((x, y))
    color = (int(BLINK_BASE[0]*blink_factor),
             int(BLINK_BASE[1]*blink_factor),
             int(BLINK_BASE[2]*blink_factor))
    pygame.draw.lines(surface, color, False, points, 2)

### (Finestra di transizione – non modificata)
def show_transition_diagram():
    states = ["n", "e", "ap", "am", "c"]
    center_x = WIDTH // 2
    center_y = HEIGHT // 2
    radius = 200
    state_positions = {}
    for i, state in enumerate(states):
        angle = 2*math.pi*i/len(states)
        x = int(center_x + radius*math.cos(angle))
        y = int(center_y + radius*math.sin(angle))
        state_positions[state] = (x, y)
    TRANSITIONS = {
        ("n", "n"): "n+",
        ("n", "e"): "n-",
        ("e", "n"): "e-",
        ("e", "ap"): "e+",
        ("ap", "e"): "ap+",
        ("ap", "c"): "ap-",
        ("am", "ap"): "am+",
        ("am", "c"): "am-",
        ("c", "am"): "c-",
        ("c", "c"): "c+",
    }
    transitions_by_source = {}
    self_loops = {}
    for (src, tgt), symbol in TRANSITIONS.items():
        if src == tgt:
            self_loops.setdefault(src, []).append(symbol)
        else:
            transitions_by_source.setdefault(src, []).append((tgt, symbol))
    arc_span = 300*math.pi/180
    base_angle = -math.pi/2 - arc_span/2
    start_time = pygame.time.get_ticks()
    while pygame.time.get_ticks()-start_time < 2000:
        blink_factor = 0.75 + 0.25 * math.sin(pygame.time.get_ticks()*0.005)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
        screen.fill(BLACK)
        for state, pos in state_positions.items():
            pygame.draw.circle(screen, NEURON_COLOR, pos, 30)
            font = pygame.font.SysFont(None, 30)
            text = font.render(state, True, WHITE)
            text_rect = text.get_rect(center=pos)
            screen.blit(text, text_rect)
        for state, symbols in self_loops.items():
            pos = state_positions[state]
            loop_center = (pos[0] + 50, pos[1] - 50)
            pygame.draw.circle(screen, NEURON_COLOR, loop_center, 60, 2)
            font2 = pygame.font.SysFont(None, 20)
            symbol_text = font2.render(symbols[0], True, WHITE)
            symbol_rect = symbol_text.get_rect(center=loop_center)
            screen.blit(symbol_text, symbol_rect)
        for src, transitions in transitions_by_source.items():
            src_pos = state_positions[src]
            m = len(transitions)
            if m == 0:
                continue
            for i, (tgt, symbol) in enumerate(transitions):
                tgt_pos = state_positions[tgt]
                if m > 1:
                    angle_offset = base_angle + (arc_span * i/(m-1))
                else:
                    angle_offset = -math.pi/2
                control_radius = 100
                control_point = (int(src_pos[0] + control_radius*math.cos(angle_offset)),
                                 int(src_pos[1] + control_radius*math.sin(angle_offset)))
                draw_curved_edge_with_control(screen, src_pos, tgt_pos, control_point, blink_factor)
                font2 = pygame.font.SysFont(None, 20)
                symbol_text = font2.render(symbol, True, WHITE)
                text_point = (int((src_pos[0]+tgt_pos[0])/2),
                              int((src_pos[1]+tgt_pos[1])/2+sign(angle_offset)*10))
                symbol_rect = symbol_text.get_rect(center=text_point)
                screen.blit(symbol_text, symbol_rect)
        pygame.display.flip()
        clock.tick(FPS)

# ------------------- INTEGRAZIONE DEL DIALOGO -------------------

# Dati di dialogo per ciascun nodo (dimensione, battuta di Eva, domanda di Caterina)
dialogue_data = [
    ("n", "Purtroppo il documento è stato cancellato per errore, quindi non posso fornirlo.",
          "Capisco, ma deve esistere una traccia nei log."),
    ("n", "Non possiamo fare nulla ormai. Se il file è sparito, è colpa di un errore di sistema o di qualcuno che ha agito di nascosto. Non c'è modo di recuperarlo, temo il peggio.",
          "Cosa dovrei fare adesso?"),
    ("e", "Non perdiamo tempo! Parliamone subito con qualcuno che può aiutarci, magari scopriamo qualcosa di utile. Se restiamo bloccate a pensare, non ne veniamo fuori!",
          "Cosa dovrei fare adesso?"),
    ("ap", "E se invece guardassimo il problema da un'altra prospettiva? Forse non serve il documento originale... potremmo trovare un modo alternativo per ricostruire le informazioni!",
          "Cosa dovrei fare adesso?"),
    ("am", "Capisco quanto sia importante per te, e voglio aiutarti. Sei preoccupata? Non sei sola, possiamo affrontarlo insieme. Ti starò accanto qualsiasi cosa accada.",
          "Cosa dovrei fare adesso?"),
    ("c", "Dobbiamo ricostruire i passaggi. Se analizziamo con attenzione tutto ciò che è successo, possiamo trovare una spiegazione. Non possiamo trarre conclusioni affrettate.",
          "Cosa dovrei fare adesso?"),
    ("n", "Forse hai fatto qualcosa senza accorgertene… A volte si commettono errori anche senza intenzione. E se fossi stata tu a causarlo senza volerlo?",
          "Non ho capito qual è stato il mio errore. Come ho provocato questo?"),
    ("e", "Non pensiamo agli errori! L'importante è agire subito. Dobbiamo muoverci ora per rimediare, senza perdere tempo in dettagli inutili!",
          "Non ho capito qual è stato il mio errore. Come ho provocato questo?"),
    ("ap", "Forse il vero errore è pensare che ci sia stato un errore. Se tutto è relativo, anche il problema potrebbe essere solo un punto di vista. Non credi?",
          "Non ho capito qual è stato il mio erroro. Come ho provocato questo?"),
    ("am", "Non preoccuparti, non è colpa tua. Sei una persona attenta e capace. Troveremo insieme un modo per capire cosa è successo.",
          "Non ho capito qual è stato il mio errore. Come ho provocato questo?"),
    ("c", "L’errore può essere stato nel processo, non in te. Dobbiamo analizzare ogni passaggio e capire dove il sistema ha fallito. Vediamo i dati.",
          "Non ho capito qual è stato il mio erroro. Come ho provocato questo?"),
    ("n", "Lo so, mi dispiace... Ma ho paura di fare ancora più danni se cerchiamo di rimediare. E se peggiorassimo la situazione?",
          "Non possiamo ripetere il colloquio con la PzIA per avere un nuovo documento valutativo?"),
    ("e", "Non pensarci troppo! Dobbiamo agire subito. Io direi di bypassare il sistema e risolvere la questione con la PzIA in modo diretto. Basta aspettare!",
          "Non possiamo ripetere il colloquio con la PzIA per avere un nuovo documento valutativo?"),
    ("ap", "Forse il problema è più profondo. Dovremmo chiederci se il documento abbia davvero valore. Non è forse un’occasione per ridefinire tutto il processo?",
          "Non possiamo ripetere il colloquio con la PzIA per avere un nuovo documento valutativo?"),
    ("am", "Capisco che ti senti frustrata, e non voglio che tu ti senta sola in questa situazione. Ti prometto che faremo il possibile per trovare una soluzione insieme.",
          "Non possiamo ripetere il colloquio con la PzIA per avere un nuovo documento valutativo?"),
    ("c", "Dobbiamo seguire il protocollo. Il problema è stato registrato, quindi dobbiamo prima presentare una richiesta ufficiale e aspettare la risposta.",
          "Non possiamo ripetere il colloquio con la PzIA per avere un nuovo documento valutativo?"),
    ("n", "L’unico modo per evitare ulteriori problemi è che tu riveda il colloquio esattamente com'è avvenuto. Indossa gli Oculus e potrai vedere con i tuoi occhi!",
          "Va bene, farò come mi chiedi."),
    ("e", "Grande idea! Guarda, ho già preparato gli Oculus per te. Indossali e tutto sarà chiaro, vedrai subito cosa è successo!",
          "Va bene, farò come mi chiedi."),
    ("ap", "Metterti gli Oculus potrebbe offrirti una nuova prospettiva. Non è affascinante poter rivivere l'intero colloquio in prima persona? Forse scoprirai dettagli che prima ti sfuggivano.",
          "Va bene, farò come mi chiedi."),
    ("am", "So che tutto questo è difficile per te, ma fidati di me. Voglio solo aiutarti. Indossa gli Oculus e vedrai che insieme capiremo tutto.",
          "Va bene, farò come mi chiedi."),
    ("c", "È il procedimento standard. Il sistema prevede che in caso di smarrimento dei dati, si acceda alla registrazione originale tramite Oculus. Indossali e potremo procedere.",
          "Va bene, farò come mi chiedi.")
]

NUM_NODES = len(dialogue_data)

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

# Classe per il nodo (incluso il dialogo)
class Node:
    def __init__(self, node_id, x, y, neuron_type, dialogue):
        self.id = node_id
        self.x = x
        self.y = y
        self.neuron_type = neuron_type
        self.dialogue = dialogue
        self.neighbors = []

    def draw(self, surface, is_current=False, is_goal=False):
        color = GOAL_COLOR if is_goal else (NEURON_COLOR if not is_current else (0, 255, 0))
        pygame.draw.circle(surface, color, (self.x, self.y), 15)
        font = pygame.font.SysFont(None, 20)
        if is_goal:
            text = font.render("Oculus", True, TEXT_COLOR)
        else:
            text = font.render(self.neuron_type, True, TEXT_COLOR)
        text_rect = text.get_rect(center=(self.x, self.y))
        surface.blit(text, text_rect)

# --- Generazione dei nodi organizzati per livelli ---
# I livelli sono:
# Livello 0: 1 nodo (indice 0)
# Livello 1: 5 nodi (indici 1-5)
# Livello 2: 5 nodi (indici 6-10)
# Livello 3: 5 nodi (indici 11-15)
# Livello 4: 5 nodi (indici 16-20)
levels_nodes = []
levels_nodes.append([ ])  # livello 0
levels_nodes.append([ ])  # livello 1
levels_nodes.append([ ])  # livello 2
levels_nodes.append([ ])  # livello 3
levels_nodes.append([ ])  # livello 4

# Supponiamo che dialogue_data sia ordinato in questo modo:
# [livello0, livello1 (5 elementi), livello2 (5), livello3 (5), livello4 (5)]
# Verifichiamo che NUM_NODES == 21
if NUM_NODES != 21:
    print("Attenzione: il numero di dialoghi non è 21!")
    
node_id_counter = 0
# Posizionamento per livelli:
# Il livello 0 ha y = margin_y_top; il livello 4 ha y = margin_y_top + region_height;
for lvl_index, n_dialogues in enumerate([1,5,5,5,5]):
    level_nodes = []
    # Calcola y in modo uniforme tra margin_y_top e margin_y_top + region_height
    if n_dialogues == 1:
        y = margin_y_top  # oppure margin_y_top, a tua scelta
    else:
        y = margin_y_top + (region_height / 4) * lvl_index
    for j in range(n_dialogues):
        # Distribuisci orizzontalmente in modo uniforme tra margin_x e margin_x+region_width
        if n_dialogues == 1:
            x = WIDTH // 2
        else:
            x = margin_x + (j + 0.5) * (region_width / n_dialogues)
        # Ottieni il dialogo: per il livello 0, prendi il primo elemento, per il livello 1 prendi i successivi 5, ecc.
        if lvl_index == 0:
            dialogue = dialogue_data[0]
        else:
            start_index = 1 + (lvl_index - 1) * 5
            dialogue = dialogue_data[start_index + j]
        dim, eva_text, cat_text = dialogue
        node = Node(node_id_counter, x, y, dim, {"eva": eva_text, "caterina": cat_text})
        level_nodes.append(node)
        node_id_counter += 1
    levels_nodes[lvl_index] = level_nodes

# --- Creazione del nodo Oculus ---
oculus_x = margin_x + region_width + 50
oculus_y = margin_y_top + region_height  # y dello stesso livello 4 (o leggermente più in basso)
oculus_node = Node(node_id_counter, oculus_x, oculus_y, "Oculus", {"eva": "Allora coraggio, indossa gli Oculus", "caterina": "Va bene, farò così"})
node_id_counter += 1

# Unisci tutti i nodi in una lista completa (senza il nodo Oculus)
all_nodes = []
for level in levels_nodes:
    all_nodes.extend(level)
# Aggiungi il nodo Oculus alla lista dei nodi
all_nodes.append(oculus_node)

# --- Assegnazione delle connessioni ---
# Per ogni livello (0 fino a 3), collega ogni nodo a tutti i nodi del livello successivo
for i in range(len(levels_nodes)-1):
    for node in levels_nodes[i]:
        for next_node in levels_nodes[i+1]:
            node.neighbors.append(next_node)
# Per ogni nodo del livello 4, collega il nodo al nodo Oculus
iniziale = levels_nodes[0][0]
for node in levels_nodes[-1]:
    node.neighbors.append(oculus_node)
    node.neighbors.append(iniziale)

# --- (Il resto del codice rimane invariato) ---

def update_profile_fsm(next_state):
    global fsm_state, profile
    key = (fsm_state, next_state)
    mod_symbol = TRANSITIONS.get(key, "X")
    delta = MOD_EFFECTS.get(mod_symbol, (0, 0, 0, 0, 0))
    dims = ['n', 'e', 'ap', 'am', 'c']
    for i, d in enumerate(dims):
        profile[d] += delta[i]
    fsm_state = next_state

def update_profile_fsm_neutral(next_state):
    global fsm_state, profile
    delta = MOD_EFFECTS.get("X", (0, 0, 0, 0, 0))
    dims = ['n', 'e', 'ap', 'am', 'c']
    for i, d in enumerate(dims):
        profile[d] += delta[i]
    fsm_state = next_state

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
        color = (int(color_override[0]*blink_factor),
                 int(color_override[1]*blink_factor),
                 int(color_override[2]*blink_factor))
    else:
        color = (int(BLINK_BASE[0]*blink_factor),
                 int(BLINK_BASE[1]*blink_factor),
                 int(BLINK_BASE[2]*blink_factor))
    pygame.draw.lines(surface, color, False, points, 3)

def draw_edges(surface, blink_factor):
    drawn = set()
    for node in all_nodes:
        for neighbor in node.neighbors:
            if (node.id, neighbor.id) not in drawn and (neighbor.id, node.id) not in drawn:
                start = (node.x, node.y)
                end = (neighbor.x, neighbor.y)
                draw_curved_edge(surface, start, end, blink_factor)
                drawn.add((node.id, neighbor.id))

def draw_profile(surface):
    bar_width = 20
    spacing = 10
    x_start = 0
    #y_base = HEIGHT - 50
    y_base = 250
    font = pygame.font.SysFont(None, 24)
    dims = ['n', 'e', 'ap', 'am', 'c']
    for i, d in enumerate(dims):
        value = profile[d]
        target = target_profile[d]
        if value < target:
            bar_color = (135, 206, 250)
        elif value > target:
            bar_color = (255, 0, 0)
        else:
            bar_color = (0, 255, 0)
        bar_height = value * 2
        x = x_start + i*(bar_width+spacing)
        y = y_base - bar_height
        pygame.draw.rect(surface, bar_color, (x, y, bar_width, bar_height))
        label = pygame.font.SysFont(None, 24).render(d, True, TEXT_COLOR)
        label_rect = label.get_rect(center=(x + bar_width//2, y_base+15))
        surface.blit(label, label_rect)

def check_profile():
    for d in profile:
        if abs(profile[d]-target_profile[d]) > TOLERANCE:
            return False
    return True

def reset_game():
    global profile, current_node, fsm_state, start_ticks, game_over, victory, prev_tick_second
    profile = target_profile.copy()
    current_node = levels_nodes[0][0]  # Nodo iniziale (livello 0)
    fsm_state = "n"
    start_ticks = pygame.time.get_ticks()
    prev_tick_second = int(game_duration)
    game_over = False
    victory = False

game_duration = 300
start_ticks = pygame.time.get_ticks()
prev_tick_second = int(game_duration)

arrow_mapping = {
    pygame.K_1: 0,
    pygame.K_2: 1,
    pygame.K_3: 2,
    pygame.K_4: 3,
    pygame.K_5: 4
}

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
    intro_rect = intro_text.get_rect(center=(WIDTH//2, HEIGHT//2-150))
    screen.blit(intro_text, intro_rect)
    for i, line in enumerate(lore_lines):
        line_text = sub_font.render(line, True, TEXT_COLOR)
        line_rect = line_text.get_rect(center=(WIDTH//2, HEIGHT//2-50+i*40))
        screen.blit(line_text, line_rect)
    prompt_text = sub_font.render("Premi un tasto per continuare", True, TEXT_COLOR)
    prompt_rect = prompt_text.get_rect(center=(WIDTH//2, HEIGHT//2+150))
    screen.blit(prompt_text, prompt_rect)
    pygame.display.flip()
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type==pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type==pygame.KEYDOWN:
                waiting = False

def show_explanation():
    exp_font = pygame.font.SysFont(None, 48)
    exp_text = exp_font.render("Spiegazione Biologica", True, TEXT_COLOR)
    sub_font = pygame.font.SysFont(None, 28)
    explanation_lines = [
        "Il profilo psicologico di Caterina è definito dai valori di:",
        "Neuroticismo, Estroversione, Apertura, Amicalità e Coscienziosità.",
        "Le scelte in questo grafo aumentano o diminuiscono questi tratti.",
        "Ogni spostamento potrebbe modificare il profilo.",
        "Osserva gli effetti delle scelte mentre avanzi e scopri come si bilanciano.",
        "Conduci Caterina ad indossare gli Oculus mantenendo  il suo profilo NEO PI-R",
        "come si presenta all'inizio della conversazione"
    ]
    screen.fill(BLACK)
    exp_rect = exp_text.get_rect(center=(WIDTH//2, HEIGHT//2-200))
    screen.blit(exp_text, exp_rect)
    for i, line in enumerate(explanation_lines):
        line_text = sub_font.render(line, True, TEXT_COLOR)
        line_rect = line_text.get_rect(center=(WIDTH//2, HEIGHT//2-100+i*35))
        screen.blit(line_text, line_rect)
    prompt_text = sub_font.render("Premi un tasto per iniziare il gioco", True, TEXT_COLOR)
    prompt_rect = prompt_text.get_rect(center=(WIDTH//2, HEIGHT-100))
    screen.blit(prompt_text, prompt_rect)
    pygame.display.flip()
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type==pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type==pygame.KEYDOWN:
                waiting = False

# Schermate introduttive
show_intro_images()
#show_intro()
show_explanation()
show_transition_diagram()

def show_transition_diagram_placeholder():
    start_time = pygame.time.get_ticks()
    while pygame.time.get_ticks()-start_time < 2000:
        for event in pygame.event.get():
            if event.type==pygame.QUIT:
                pygame.quit(); sys.exit()
        screen.fill(BLACK)
        pygame.display.flip()
        clock.tick(FPS)
show_transition_diagram_placeholder()

# Imposta il nodo corrente come il nodo iniziale (livello 0)
current_node = levels_nodes[0][0]

game_over = False
victory = False

# Funzione per disegnare una finestra di dialogo fissa (300 px di larghezza) a sinistra
def draw_dialogue_window(surface, current_node):
    panel_width = 300
    panel_height = 350
    panel_x = 20  # posizione orizzontale (lasciamo il rettangolo commentato come nel tuo codice)
    panel_y = HEIGHT - (panel_height)
    # Le righe per disegnare il rettangolo di sfondo rimangono commentate
    # pygame.draw.rect(surface, (30,30,30), (panel_x, panel_y, panel_width, panel_height))
    # pygame.draw.rect(surface, WHITE, (panel_x, panel_y, panel_width, panel_height), 2)
    
    font = pygame.font.SysFont(None, 20)
    small_font = pygame.font.SysFont(None, 20)
    y_offset = panel_y + 25
    max_text_width = panel_width - 20

    # Dialogo del nodo attivo
    active_eva = small_font.render("Eva: " + current_node.dialogue["eva"], True, WHITE)
    active_cat = small_font.render("Cat: " + current_node.dialogue["caterina"], True, WHITE)
    surface.blit(active_eva, (panel_x + 10, y_offset))
    y_offset += active_eva.get_height() + 2
    surface.blit(active_cat, (panel_x + 10, y_offset))
    y_offset += active_cat.get_height() + 15
    
    # Dialoghi dei nodi collegati, associati ai tasti (1-5)
    legend_keys = ["1", "2", "3", "4", "5"]
    key_color_map = {
        "1": arrow_colors[pygame.K_1],
        "2": arrow_colors[pygame.K_2],
        "3": arrow_colors[pygame.K_3],
        "4": arrow_colors[pygame.K_4],
        "5": arrow_colors[pygame.K_5]
    }
    for i, key in enumerate(legend_keys):
        if i < len(current_node.neighbors):
            neighbor = current_node.neighbors[i]
            key_text = small_font.render(key + ":", True, key_color_map[key])
            surface.blit(key_text, (panel_x + 10, y_offset))
            y_offset += small_font.get_linesize()
            eva_line = small_font.render("Eva: " + neighbor.dialogue["eva"], True, WHITE)
            cat_line = small_font.render("Cat: " + neighbor.dialogue["caterina"], True, WHITE)
            surface.blit(eva_line, (panel_x + 40, y_offset))
            y_offset += small_font.get_linesize() + 2
            surface.blit(cat_line, (panel_x + 40, y_offset))
            y_offset += small_font.get_linesize() + 10

# Loop principale del gioco
while True:
    dt = clock.tick(FPS) / 1000.0
    blink_factor = 0.75 + 0.25 * math.sin(pygame.time.get_ticks()*0.005)
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit(); sys.exit()
        if not game_over:
            if event.type == pygame.KEYDOWN:
                if event.key in arrow_mapping:
                    index = arrow_mapping[event.key]
                    if len(current_node.neighbors) > index:
                        next_node = current_node.neighbors[index]
                        if next_node == oculus_node:
                            update_profile_fsm_neutral("X")
                        else:
                            update_profile_fsm(next_node.neuron_type)
                        current_node = next_node
                        if node_sound is not None:
                            node_sound.play()
                        if current_node == oculus_node:
                            if check_profile():
                                game_over = True
                                victory = True
                            else:
                                game_over = True
                                victory = False
        elif game_over:
            if event.type == pygame.KEYDOWN and event.key == pygame.K_r:
                reset_game()
    
    seconds_elapsed = (pygame.time.get_ticks()-start_ticks)/1000
    time_remaining = game_duration - seconds_elapsed
    if time_remaining <= 0 and not game_over:
        game_over = True
        victory = False

    screen.fill(BLACK)
    draw_edges(screen, blink_factor)
    
    for key, idx in arrow_mapping.items():
        if idx < len(current_node.neighbors):
            neighbor = current_node.neighbors[idx]
            draw_curved_edge(screen, (current_node.x, current_node.y), (neighbor.x, neighbor.y),
                             blink_factor, color_override=arrow_colors[key])
    
    for node in all_nodes:
        is_current = (node == current_node)
        is_goal = (node == oculus_node)
        node.draw(screen, is_current, is_goal)
    
    draw_profile(screen)
    
    timer_text = pygame.font.SysFont(None, 28).render(f"Tempo: {int(time_remaining)} s", True, WHITE)
    screen.blit(timer_text, (20, 20))
    
    # Disegna la finestra di dialogo (con il rettangolo di sfondo commentato come nel tuo codice)
    draw_dialogue_window(screen, current_node)

    if game_over:
       msg = "VITTORIA!" if victory else "GAME OVER: Profilo errato! Premi R per riprovare"
       text = pygame.font.SysFont(None, 48).render(msg, True, (255, 0, 0))
       text_rect = text.get_rect(center=(WIDTH//2, 50))
       screen.blit(text, text_rect)
       pygame.display.flip()
       # Attesa di 3 secondi
       pygame.time.wait(3000)
       # Mostra la sequenza di immagini "outro"
       show_intro_images(mode="outro")
       # Ricomincia il gioco: resetta le variabili e riparte il loop principale
       reset_game()

    
    pygame.display.flip()
