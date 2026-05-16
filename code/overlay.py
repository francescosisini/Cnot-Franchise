from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import argparse

# =========================
# ARGOMENTI DA LINEA DI COMANDO
# =========================

parser = argparse.ArgumentParser(description="Aggiunge overlay HUD a un'immagine.")
parser.add_argument("input_image", help="Percorso dell'immagine di input")
parser.add_argument("target_x", type=int, help="Coordinata X del mirino")
parser.add_argument("target_y", type=int, help="Coordinata Y del mirino")
args = parser.parse_args()

INPUT_IMAGE = args.input_image
TARGET_X = args.target_x
TARGET_Y = args.target_y

input_path = Path(INPUT_IMAGE)
OUTPUT_IMAGE = input_path.with_name(
    f"{input_path.stem}_overlay{input_path.suffix}"
)

# =========================
# CONFIGURAZIONE
# =========================

COLOR_RED = (255, 40, 35, 180)
COLOR_BLUE = (50, 150, 255, 180)

GRID_STEP = 120
GRID_OPACITY = 70

TEXTS = [
    {"text": "SUBJECT MATCH", "pos": (520, 420), "size": 34, "color": COLOR_RED},
    {"text": "ENTITY: ALICE", "pos": (520, 465), "size": 28, "color": COLOR_RED},
    {"text": "SIGNAL 86%", "pos": (60, 930), "size": 22, "color": COLOR_RED},
]

TARGETS = [
    {
        "center": (TARGET_X, TARGET_Y),
        "radius": 110,
        "color": COLOR_RED
    }
]

LINES = [
    {
        "points": [
            (TARGET_X, TARGET_Y),
            (520, 420),
            (730, 420)
        ],
        "color": COLOR_RED,
        "width": 4
    }
]



BOXES = [
    {"xy": (720, 880, 930, 1000), "label": "TARGET LOCK", "color": COLOR_RED}
]


# =========================
# FUNZIONI
# =========================

def load_font(size):
    try:
        return ImageFont.truetype("DejaVuSansMono.ttf", size)
    except OSError:
        return ImageFont.load_default()


def draw_grid(draw, w, h, step=100, color=(255, 0, 0, 70)):
    for x in range(0, w, step):
        draw.line((x, 0, x, h), fill=color, width=1)
    for y in range(0, h, step):
        draw.line((0, y, w, y), fill=color, width=1)


def draw_target(draw, center, radius, color):
    x, y = center

    for r in [radius, int(radius * 0.65), int(radius * 0.35)]:
        draw.ellipse((x-r, y-r, x+r, y+r), outline=color, width=3)

    draw.line((x-radius-40, y, x-radius+20, y), fill=color, width=3)
    draw.line((x+radius-20, y, x+radius+40, y), fill=color, width=3)
    draw.line((x, y-radius-40, x, y-radius+20), fill=color, width=3)
    draw.line((x, y+radius-20, x, y+radius+40), fill=color, width=3)

    draw.ellipse((x-6, y-6, x+6, y+6), fill=color)


def draw_box(draw, xy, label, color):
    x1, y1, x2, y2 = xy
    corner = 28

    draw.line((x1, y1, x1+corner, y1), fill=color, width=3)
    draw.line((x1, y1, x1, y1+corner), fill=color, width=3)

    draw.line((x2, y1, x2-corner, y1), fill=color, width=3)
    draw.line((x2, y1, x2, y1+corner), fill=color, width=3)

    draw.line((x1, y2, x1+corner, y2), fill=color, width=3)
    draw.line((x1, y2, x1, y2-corner), fill=color, width=3)

    draw.line((x2, y2, x2-corner, y2), fill=color, width=3)
    draw.line((x2, y2, x2, y2-corner), fill=color, width=3)

    font = load_font(22)
    draw.text((x1 + 12, y1 + 12), label, fill=color, font=font)


def draw_texts(draw, texts):
    for item in texts:
        font = load_font(item.get("size", 24))
        draw.text(
            item["pos"],
            item["text"],
            fill=item.get("color", COLOR_RED),
            font=font
        )


def draw_lines(draw, lines):
    for item in lines:
        draw.line(
            item["points"],
            fill=item.get("color", COLOR_RED),
            width=item.get("width", 3)
        )


# =========================
# MAIN
# =========================

img = Image.open(INPUT_IMAGE).convert("RGBA")
w, h = img.size

overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)

draw_grid(
    draw,
    w,
    h,
    step=GRID_STEP,
    color=(255, 40, 35, GRID_OPACITY)
)

for target in TARGETS:
    draw_target(
        draw,
        target["center"],
        target["radius"],
        target.get("color", COLOR_RED)
    )

draw_lines(draw, LINES)

for box in BOXES:
    draw_box(
        draw,
        box["xy"],
        box["label"],
        box.get("color", COLOR_RED)
    )

draw_texts(draw, TEXTS)

final = Image.alpha_composite(img, overlay)
final.save(OUTPUT_IMAGE)

print(f"Salvata immagine: {OUTPUT_IMAGE}")
