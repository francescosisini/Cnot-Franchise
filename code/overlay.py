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
parser.add_argument(
    "--target-scale",
    type=float,
    default=100.0,
    help="Scala percentuale di mirino e callout: 1-100. 100 mantiene la dimensione attuale."
)
parser.add_argument("--legend", action="store_true")
parser.add_argument("--legend-cx", type=int, default=None)
parser.add_argument("--legend-cy", type=int, default=None)
parser.add_argument("--legend-title", default="Legenda")
parser.add_argument(
    "--legend-item",
    action="append",
    default=[],
    help='Voce legenda nel formato "#ff0033:Target"'
)
args = parser.parse_args()


INPUT_IMAGE = args.input_image
TARGET_X = args.target_x
TARGET_Y = args.target_y

target_scale = max(1.0, min(args.target_scale, 100.0)) / 100.0


legend_items = []

for item in args.legend_item:
    color, label = item.split(":", 1)
    legend_items.append((color.strip(), label.strip()))

input_path = Path(INPUT_IMAGE)
OUTPUT_IMAGE = input_path.with_name(
    f"{input_path.stem}_overlay{input_path.suffix}"
)

# =========================
# CONFIGURAZIONE
# =========================

COLOR_RED = (255, 40, 35, 180)
COLOR_BLUE = (50, 150, 255, 180)
COLOR_WHITE = (255, 255, 255, 255)

GRID_STEP = 120
GRID_OPACITY = 70


BASE_TEXTS = [
    {"text": "SUBJECT MATCH", "pos": (520, 420), "size": 34, "color": COLOR_WHITE},
    {"text": "ENTITY: ALICE", "pos": (520, 465), "size": 28, "color": COLOR_WHITE},
    {"text": "SIGNAL 86%", "pos": (60, 930), "size": 22, "color": COLOR_WHITE},
]

def scale_point_around_center(pos, center, scale):
    x, y = pos
    cx, cy = center
    return (
        int(cx + (x - cx) * scale),
        int(cy + (y - cy) * scale)
    )

TEXTS = [
    {
        "text": t["text"],
        "pos": scale_point_around_center(t["pos"], (TARGET_X, TARGET_Y), target_scale),
        "size": max(1, int(t["size"] * target_scale)),
        "color": t["color"]
    }
    for t in BASE_TEXTS
]

TARGETS = [
    {
        "center": (TARGET_X, TARGET_Y),
        "radius": int(110 * target_scale),
        "color": COLOR_RED
    }
]


BASE_LINES = [
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

LINES = [
    {
        "points": [
            scale_point_around_center(p, (TARGET_X, TARGET_Y), target_scale)
            for p in line["points"]
        ],
        "color": line["color"],
        "width": max(1, int(line["width"] * target_scale))
    }
    for line in BASE_LINES
]




BOXES = [
    {"xy": (720, 880, 930, 1000), "label": "TARGET LOCK", "color": COLOR_RED}
]


# =========================
# FUNZIONI
# =========================

def draw_legend(draw, items, title, cx=None, cy=None):
    box_w = 420
    row_h = 34
    pad = 18
    title_h = 38
    box_h = pad * 2 + title_h + row_h * len(items)

    if cx is None:
        cx = 40 + box_w // 2
    if cy is None:
        cy = 40 + box_h // 2

    x = int(cx - box_w / 2)
    y = int(cy - box_h / 2)

    draw.rectangle(
        [x, y, x + box_w, y + box_h],
        fill=(0, 0, 0, 180),
        outline=(255, 0, 51, 220),
        width=2
    )

    draw.text((x + pad, y + pad), title, fill=(255, 0, 51))

    yy = y + pad + title_h
    for color, label in items:
        draw.rectangle(
            [x + pad, yy + 6, x + pad + 22, yy + 28],
            fill=color,
            outline=(255, 255, 255)
        )
        draw.text((x + pad + 36, yy + 6), label, fill=(230, 230, 230))
        yy += row_h

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


if args.legend:
    draw_legend(
    draw,
    legend_items,
    args.legend_title,
    cx=args.legend_cx,
    cy=args.legend_cy
)


final = Image.alpha_composite(img, overlay)
final.save(OUTPUT_IMAGE)

print(f"Salvata immagine: {OUTPUT_IMAGE}")
