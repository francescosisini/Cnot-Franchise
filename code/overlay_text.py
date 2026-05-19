from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import argparse

parser = argparse.ArgumentParser(description="Aggiunge overlay HUD a un'immagine.")
parser.add_argument("input_image")
parser.add_argument("target_x", type=int)
parser.add_argument("target_y", type=int)

parser.add_argument("--target-scale", type=float, default=100.0)

parser.add_argument("--label", default="SUBJECT MATCH|ENTITY: ALICE")
parser.add_argument("--label-x", type=int, default=520)
parser.add_argument("--label-y", type=int, default=420)
parser.add_argument("--label-size", type=int, default=34)

parser.add_argument("--signal", default="SIGNAL 86%")
parser.add_argument("--signal-x", type=int, default=60)
parser.add_argument("--signal-y", type=int, default=930)

parser.add_argument("--legend", action="store_true")
parser.add_argument("--legend-cx", type=int, default=None)
parser.add_argument("--legend-cy", type=int, default=None)
parser.add_argument("--legend-title", default="ENTITÀ DEL SISTEMA")
parser.add_argument("--legend-item", action="append", default=[])

args = parser.parse_args()

INPUT_IMAGE = args.input_image
TARGET_X = args.target_x
TARGET_Y = args.target_y
target_scale = max(1.0, min(args.target_scale, 100.0)) / 100.0

input_path = Path(INPUT_IMAGE)
OUTPUT_IMAGE = input_path.with_name(f"{input_path.stem}_overlay{input_path.suffix}")

COLOR_RED = (255, 40, 35, 180)
COLOR_WHITE = (255, 255, 255, 255)

GRID_STEP = 120
GRID_OPACITY = 70


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


def draw_callout_to_label(
    draw,
    target,
    label_pos,
    color,
    scale=1.0,
    placement="right"
):
    tx, ty = target
    lx, ly = label_pos

    radius = int(110 * scale)
    width = max(1, int(4 * scale))

    # parte dal mirino, leggermente decentrato: più naturale del centro matematico
    start = (
        tx + int(radius * 0.15),
        ty - int(radius * 0.15)
    )

    if placement == "right":
        elbow = (
            lx - int(120 * scale),
            ly + int(10 * scale)
        )
        end = (
            lx + int(340 * scale),
            ly + int(10 * scale)
        )

    elif placement == "left":
        elbow = (
            lx + int(120 * scale),
            ly + int(10 * scale)
        )
        end = (
            lx - int(340 * scale),
            ly + int(10 * scale)
        )

    elif placement == "above":
        elbow = (
            lx + int(20 * scale),
            ly + int(80 * scale)
        )
        end = (
            lx + int(20 * scale),
            ly - int(120 * scale)
        )

    elif placement == "below":
        elbow = (
            lx + int(20 * scale),
            ly - int(80 * scale)
        )
        end = (
            lx + int(20 * scale),
            ly + int(120 * scale)
        )

    else:
        elbow = label_pos
        end = label_pos

    draw.line([start, elbow, end], fill=color, width=width)

def draw_callout_to_label(draw, target, label_pos, color, scale=1.0):
    tx, ty = target
    lx, ly = label_pos

    width = max(1, int(4 * scale))

    # PARTE ESATTAMENTE DAL CENTRO DEL MIRINO
    start = (tx, ty)

    # arriva appena a sinistra del testo, senza attraversarlo
    elbow = (lx - int(80 * scale), ly + int(28 * scale))

    # linea orizzontale SOTTO il testo
    end = (lx + int(360 * scale), ly + int(28 * scale))

    draw.line([start, elbow, end], fill=color, width=width)    

def draw_label_block(draw, text, x, y, size, color):
    lines = text.split("|")
    fonts = [
        load_font(size if i == 0 else int(size * 0.82))
        for i in range(len(lines))
    ]

    line_gap = int(size * 1.2)
    pad = 10

    widths = []
    for line, font in zip(lines, fonts):
        bbox = draw.textbbox((0, 0), line, font=font)
        widths.append(bbox[2] - bbox[0])

    box_w = max(widths) + pad * 2
    box_h = line_gap * len(lines) + pad

    draw.rectangle(
        [x - pad, y - pad, x + box_w, y + box_h],
        fill=(0, 0, 0, 150)
    )

    for i, (line, font) in enumerate(zip(lines, fonts)):
        draw.text(
            (x, y + i * line_gap),
            line,
            fill=color,
            font=font
        )

    
def draw_label_block_old(draw, text, x, y, size, color):
    lines = text.split("|")

    for i, line in enumerate(lines):
        font_size = size if i == 0 else int(size * 0.82)
        font = load_font(font_size)
        draw.text(
            (x, y + i * int(size * 1.2)),
            line,
            fill=color,
            font=font
        )


def draw_signal(draw, text, x, y, color):
    font = load_font(22)
    draw.text((x, y), text, fill=color, font=font)


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

    draw.text((x + pad, y + pad), title, fill=(255, 0, 51), font=load_font(22))

    yy = y + pad + title_h
    for color, label in items:
        draw.rectangle(
            [x + pad, yy + 6, x + pad + 22, yy + 28],
            fill=color,
            outline=(255, 255, 255)
        )
        draw.text((x + pad + 36, yy + 6), label, fill=(230, 230, 230), font=load_font(18))
        yy += row_h


img = Image.open(INPUT_IMAGE).convert("RGBA")
w, h = img.size

overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)

draw_grid(draw, w, h, step=GRID_STEP, color=(255, 40, 35, GRID_OPACITY))

target_center = (TARGET_X, TARGET_Y)
target_radius = int(110 * target_scale)

draw_target(draw, target_center, target_radius, COLOR_RED)

draw_callout_to_label(
    draw,
    target_center,
    (args.label_x, args.label_y),
    COLOR_RED,
    scale=target_scale
)


draw_label_block(
    draw,
    args.label,
    args.label_x,
    args.label_y,
    args.label_size,
    COLOR_WHITE
)

draw_signal(
    draw,
    args.signal,
    args.signal_x,
    args.signal_y,
    COLOR_WHITE
)

draw_box(
    draw,
    (720, 880, 930, 1000),
    "TARGET LOCK",
    COLOR_RED
)

if args.legend:
    legend_items = []
    for item in args.legend_item:
        color, label = item.split(":", 1)
        legend_items.append((color.strip(), label.strip()))

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
