#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Generatore copertina KDP hardcover per GIMP / stampa.

Crea:
  1) una copertina pulita
  2) una copertina con guide tecniche

Dipendenza:
  pip install pillow

Esempio:
  python3 make_kdp_cover.py \
    --title "CNOT 1.7" \
    --author "Francesco Sisini" \
    --publisher "Casa editrice Le Tradizionali" \
    --bg "#151821" \
    --front-bg "#20242f" \
    --back-bg "#1b1f29" \
    --spine-bg "#0f1118" \
    --title-size 118 \
    --author-size 44 \
    --publisher-size 32
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import argparse
import os
import math


# ============================================================
#  DIMENSIONI KDP DALLA TUA SCHERMATA
# ============================================================

DEFAULTS = {
    # Copertina completa
    "full_width_mm": 358.07,
    "full_height_mm": 264.60,

    # Parti principali
    "trim_width_mm": 157.40,
    "trim_height_mm": 234.60,
    "spine_width_mm": 13.27,

    # Margini tecnici KDP
    "wrap_mm": 15.00,
    "hinge_mm": 10.00,
    "safe_margin_mm": 3.17,
    "spine_margin_mm": 1.59,

    # Risoluzione
    "dpi": 300,
}


# ============================================================
#  UTILITY
# ============================================================

def mm_to_px(mm: float, dpi: int) -> int:
    return int(round(mm / 25.4 * dpi))


def parse_hex_color(value: str):
    """
    Accetta colori tipo:
      "#151821"
      "151821"
      "#fff"
    """
    value = value.strip()
    if value.startswith("#"):
        value = value[1:]

    if len(value) == 3:
        value = "".join(ch * 2 for ch in value)

    if len(value) != 6:
        raise ValueError(f"Colore non valido: {value}")

    return tuple(int(value[i:i+2], 16) for i in (0, 2, 4))


def find_font(preferred_path=None, bold=False, italic=False):
    """
    Cerca un font TTF.
    Se passi --font /percorso/font.ttf usa quello.
    Altrimenti prova DejaVu, che su Linux di solito c'è.
    """
    if preferred_path:
        p = Path(preferred_path)
        if p.exists():
            return str(p)
        raise FileNotFoundError(f"Font non trovato: {preferred_path}")

    candidates = []

    if bold and italic:
        candidates += [
            "/usr/share/fonts/truetype/dejavu/DejaVuSerif-BoldItalic.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-BoldOblique.ttf",
        ]
    elif bold:
        candidates += [
            "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        ]
    elif italic:
        candidates += [
            "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Italic.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf",
        ]
    else:
        candidates += [
            "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ]

    # fallback Mac / Windows molto basilari
    candidates += [
        "/Library/Fonts/Georgia.ttf",
        "/Library/Fonts/Times New Roman.ttf",
        "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/times.ttf",
    ]

    for c in candidates:
        if Path(c).exists():
            return c

    raise FileNotFoundError(
        "Non ho trovato un font TTF. Passa un font con --font /percorso/font.ttf"
    )


def load_font(size, path=None, bold=False, italic=False):
    return ImageFont.truetype(find_font(path, bold=bold, italic=italic), size)


def text_size(draw, text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def draw_centered_text(draw, box, text, font, fill):
    x1, y1, x2, y2 = box
    tw, th = text_size(draw, text, font)
    x = x1 + (x2 - x1 - tw) / 2
    y = y1 + (y2 - y1 - th) / 2
    draw.text((x, y), text, font=font, fill=fill)


def draw_multiline_centered(draw, box, lines, font, fill, line_spacing=1.25):
    x1, y1, x2, y2 = box
    line_heights = []
    line_widths = []

    for line in lines:
        tw, th = text_size(draw, line, font)
        line_widths.append(tw)
        line_heights.append(th)

    total_h = sum(line_heights) + int(font.size * (line_spacing - 1)) * (len(lines) - 1)
    y = y1 + (y2 - y1 - total_h) / 2

    for i, line in enumerate(lines):
        tw = line_widths[i]
        th = line_heights[i]
        x = x1 + (x2 - x1 - tw) / 2
        draw.text((x, y), line, font=font, fill=fill)
        y += th + int(font.size * (line_spacing - 1))


def px_box_mm(box_mm, dpi):
    x1, y1, x2, y2 = box_mm
    return tuple(mm_to_px(v, dpi) for v in (x1, y1, x2, y2))


# ============================================================
#  CREAZIONE COPERTINA
# ============================================================

def make_cover(args, with_guides=False):
    dpi = args.dpi

    # Misure principali
    W_mm = args.full_width_mm
    H_mm = args.full_height_mm
    wrap = args.wrap_mm
    trim_w = args.trim_width_mm
    trim_h = args.trim_height_mm
    spine_w = args.spine_width_mm
    hinge = args.hinge_mm
    safe = args.safe_margin_mm
    spine_margin = args.spine_margin_mm

    W = mm_to_px(W_mm, dpi)
    H = mm_to_px(H_mm, dpi)

    # Coordinate KDP in mm
    x_back_l = wrap
    x_back_r = wrap + trim_w

    x_spine_l = x_back_r
    x_spine_r = x_spine_l + spine_w

    x_front_l = x_spine_r
    x_front_r = x_front_l + trim_w

    y_trim_t = wrap
    y_trim_b = wrap + trim_h

    # Colori
    bg = parse_hex_color(args.bg)
    front_bg = parse_hex_color(args.front_bg)
    back_bg = parse_hex_color(args.back_bg)
    spine_bg = parse_hex_color(args.spine_bg)
    text_color = parse_hex_color(args.text_color)
    muted_text = parse_hex_color(args.muted_text_color)

    img = Image.new("RGB", (W, H), bg)
    draw = ImageDraw.Draw(img)

    # Box in pixel
    back_box = px_box_mm((x_back_l, y_trim_t, x_back_r, y_trim_b), dpi)
    spine_box = px_box_mm((x_spine_l, y_trim_t, x_spine_r, y_trim_b), dpi)
    front_box = px_box_mm((x_front_l, y_trim_t, x_front_r, y_trim_b), dpi)

    # Pannelli
    draw.rectangle(back_box, fill=back_bg)
    draw.rectangle(spine_box, fill=spine_bg)
    draw.rectangle(front_box, fill=front_bg)

    # Font
    title_font = load_font(args.title_size, args.font, bold=True)
    subtitle_font = load_font(args.subtitle_size, args.font, italic=True)
    author_font = load_font(args.author_size, args.font)
    publisher_font = load_font(args.publisher_size, args.font)
    spine_font = load_font(args.spine_size, args.font, bold=True)
    back_font = load_font(args.back_size, args.font)

    # Aree sicure
    # Sul fronte evito la zona hinge vicino al dorso.
    front_safe = px_box_mm((
        x_front_l + hinge + safe,
        y_trim_t + safe,
        x_front_r - safe,
        y_trim_b - safe
    ), dpi)

    # Sul retro evito la zona hinge vicino al dorso.
    back_safe = px_box_mm((
        x_back_l + safe,
        y_trim_t + safe,
        x_back_r - hinge - safe,
        y_trim_b - safe
    ), dpi)

    # Decorazione geometrica sul fronte, disattivabile
    if args.motif:
        cx = (front_box[0] + front_box[2]) // 2
        cy = (front_box[1] + front_box[3]) // 2

        motif_color = parse_hex_color(args.motif_color)
        max_r = min(front_box[2] - front_box[0], front_box[3] - front_box[1]) // 2

        for factor in (0.95, 0.72, 0.48):
            r = int(max_r * factor)
            draw.ellipse(
                (cx - r, cy - r, cx + r, cy + r),
                outline=motif_color,
                width=max(1, mm_to_px(0.35, dpi))
            )

        # piccole linee tipo reticolo/sfera
        for angle in range(0, 180, 20):
            rad = math.radians(angle)
            r = int(max_r * 0.84)
            dx = int(math.cos(rad) * r)
            dy = int(math.sin(rad) * r)
            draw.line(
                (cx - dx, cy - dy, cx + dx, cy + dy),
                fill=motif_color,
                width=max(1, mm_to_px(0.18, dpi))
            )

    # Testi fronte
    title_box = (
        front_safe[0],
        mm_to_px(y_trim_t + args.title_y_mm, dpi),
        front_safe[2],
        mm_to_px(y_trim_t + args.title_y_mm + 32, dpi)
    )
    draw_centered_text(draw, title_box, args.title, title_font, text_color)

    if args.subtitle:
        subtitle_box = (
            front_safe[0],
            mm_to_px(y_trim_t + args.subtitle_y_mm, dpi),
            front_safe[2],
            mm_to_px(y_trim_t + args.subtitle_y_mm + 18, dpi)
        )
        draw_centered_text(draw, subtitle_box, args.subtitle, subtitle_font, muted_text)

    author_box = (
        front_safe[0],
        mm_to_px(y_trim_t + args.author_y_mm, dpi),
        front_safe[2],
        mm_to_px(y_trim_t + args.author_y_mm + 18, dpi)
    )
    draw_centered_text(draw, author_box, args.author, author_font, muted_text)

    publisher_box = (
        front_safe[0],
        mm_to_px(y_trim_b - args.publisher_bottom_mm - 12, dpi),
        front_safe[2],
        mm_to_px(y_trim_b - args.publisher_bottom_mm, dpi)
    )
    draw_centered_text(draw, publisher_box, args.publisher, publisher_font, muted_text)

    # Retro
    if args.back_text:
        lines = args.back_text.replace("\\n", "\n").splitlines()
        back_text_box = (
            back_safe[0] + mm_to_px(8, dpi),
            mm_to_px(y_trim_t + args.back_text_y_mm, dpi),
            back_safe[2] - mm_to_px(8, dpi),
            mm_to_px(y_trim_t + args.back_text_y_mm + 55, dpi)
        )
        draw_multiline_centered(draw, back_text_box, lines, back_font, muted_text)

    # Area barcode provvisoria
    if args.barcode_box:
        barcode_w = mm_to_px(args.barcode_width_mm, dpi)
        barcode_h = mm_to_px(args.barcode_height_mm, dpi)

        # KDP indica barcode margin 6.35 x 9.52 mm.
        bc_x2 = mm_to_px(x_back_r - args.barcode_margin_x_mm, dpi)
        bc_y2 = mm_to_px(y_trim_b - args.barcode_margin_y_mm, dpi)
        bc_x1 = bc_x2 - barcode_w
        bc_y1 = bc_y2 - barcode_h

        draw.rectangle((bc_x1, bc_y1, bc_x2, bc_y2), fill=(242, 242, 238))
        draw.rectangle((bc_x1, bc_y1, bc_x2, bc_y2), outline=(80, 80, 80), width=2)
        barcode_font = load_font(args.barcode_size, args.font)
        draw_centered_text(draw, (bc_x1, bc_y1, bc_x2, bc_y2), "BARCODE", barcode_font, (90, 90, 90))

    # Dorso
    if args.spine_text:
        spine_text = args.spine_text
    else:
        spine_text = f"{args.title}   ·   {args.author}"

    # Testo del dorso ruotato.
    # Per libro left-to-right, su KDP di solito il testo sul dorso si legge
    # dal basso verso l'alto quando il libro è appoggiato di fronte.
    spine_h_px = mm_to_px(trim_h, dpi)
    spine_w_px = mm_to_px(spine_w, dpi)

    temp = Image.new("RGBA", (spine_h_px, spine_w_px), (0, 0, 0, 0))
    td = ImageDraw.Draw(temp)
    tw, th = text_size(td, spine_text, spine_font)
    td.text(
        ((temp.width - tw) / 2, (temp.height - th) / 2),
        spine_text,
        font=spine_font,
        fill=text_color + (255,)
    )

    rotated = temp.rotate(90 if args.spine_direction == "bottom-to-top" else -90, expand=True)

    rx = mm_to_px(x_spine_l, dpi) + (spine_w_px - rotated.width) // 2
    ry = mm_to_px(y_trim_t, dpi) + (spine_h_px - rotated.height) // 2
    img.paste(rotated, (rx, ry), rotated)

    # Guide tecniche opzionali
    if with_guides:
        add_guides(
            img=img,
            args=args,
            coords={
                "x_back_l": x_back_l,
                "x_back_r": x_back_r,
                "x_spine_l": x_spine_l,
                "x_spine_r": x_spine_r,
                "x_front_l": x_front_l,
                "x_front_r": x_front_r,
                "y_trim_t": y_trim_t,
                "y_trim_b": y_trim_b,
                "front_safe": front_safe,
                "back_safe": back_safe,
            }
        )

    return img


def add_guides(img, args, coords):
    dpi = args.dpi
    draw = ImageDraw.Draw(img)

    W, H = img.size

    def p(mm):
        return mm_to_px(mm, dpi)

    def line_mm(x1, y1, x2, y2, fill, width=2):
        draw.line((p(x1), p(y1), p(x2), p(y2)), fill=fill, width=width)

    def rect_mm(x1, y1, x2, y2, fill, width=3):
        draw.rectangle((p(x1), p(y1), p(x2), p(y2)), outline=fill, width=width)

    guide_trim = (255, 255, 255)
    guide_safe = (255, 215, 80)
    guide_hinge = (255, 120, 120)
    guide_spine = (120, 190, 255)
    guide_wrap = (170, 170, 170)

    full_w = args.full_width_mm
    full_h = args.full_height_mm
    wrap = args.wrap_mm
    trim_h = args.trim_height_mm
    safe = args.safe_margin_mm
    spine_margin = args.spine_margin_mm
    hinge = args.hinge_mm

    x_back_l = coords["x_back_l"]
    x_back_r = coords["x_back_r"]
    x_spine_l = coords["x_spine_l"]
    x_spine_r = coords["x_spine_r"]
    x_front_l = coords["x_front_l"]
    x_front_r = coords["x_front_r"]
    y_trim_t = coords["y_trim_t"]
    y_trim_b = coords["y_trim_b"]

    # Bordo esterno
    draw.rectangle((0, 0, W - 1, H - 1), outline=guide_wrap, width=2)

    # Linee wrap / abbondanza
    line_mm(wrap, 0, wrap, full_h, guide_wrap, 2)
    line_mm(full_w - wrap, 0, full_w - wrap, full_h, guide_wrap, 2)
    line_mm(0, wrap, full_w, wrap, guide_wrap, 2)
    line_mm(0, full_h - wrap, full_w, full_h - wrap, guide_wrap, 2)

    # Taglio fronte/retro/dorso
    rect_mm(x_back_l, y_trim_t, x_back_r, y_trim_b, guide_trim, 3)
    rect_mm(x_spine_l, y_trim_t, x_spine_r, y_trim_b, guide_spine, 3)
    rect_mm(x_front_l, y_trim_t, x_front_r, y_trim_b, guide_trim, 3)

    # Hinge zone
    rect_mm(x_back_r - hinge, 0, x_back_r, full_h, guide_hinge, 3)
    rect_mm(x_front_l, 0, x_front_l + hinge, full_h, guide_hinge, 3)

    # Aree sicure
    draw.rectangle(coords["front_safe"], outline=guide_safe, width=3)
    draw.rectangle(coords["back_safe"], outline=guide_safe, width=3)

    spine_safe = (
        p(x_spine_l + spine_margin),
        p(y_trim_t + safe),
        p(x_spine_r - spine_margin),
        p(y_trim_b - safe),
    )
    draw.rectangle(spine_safe, outline=guide_safe, width=2)

    # Etichette
    label_font = load_font(20, args.font)
    small_font = load_font(16, args.font)

    draw.text(
        (p(18), p(4)),
        "GUIDE: grigio=wrap | bianco=taglio | rosso=hinge | giallo=safe area | azzurro=dorso",
        font=label_font,
        fill=(255, 255, 255),
    )
    draw.text((p(x_front_l + 15), p(y_trim_t - 7)), "FRONTE", font=small_font, fill=guide_trim)
    draw.text((p(x_back_l + 15), p(y_trim_t - 7)), "RETRO", font=small_font, fill=guide_trim)
    draw.text((p(x_spine_l), p(y_trim_t - 7)), "DORSO", font=small_font, fill=guide_spine)


# ============================================================
#  ARGOMENTI DA TERMINALE
# ============================================================

def build_parser():
    p = argparse.ArgumentParser(
        description="Genera una copertina KDP hardcover con dimensioni configurabili."
    )

    # Testi
    p.add_argument("--title", default="CNOT 1.7")
    p.add_argument("--subtitle", default="")
    p.add_argument("--author", default="Francesco Sisini")
    p.add_argument("--publisher", default="Casa editrice Le Tradizionali")
    p.add_argument("--spine-text", default="")
    p.add_argument(
        "--back-text",
        default="Bozza copertina\\nper controllo dimensioni"
    )

    # Output
    p.add_argument("--out", default="copertina_cnot_clean.png")
    p.add_argument("--out-guides", default="copertina_cnot_guides.png")
    p.add_argument("--only-clean", action="store_true")
    p.add_argument("--only-guides", action="store_true")

    # Colori
    p.add_argument("--bg", default="#151821")
    p.add_argument("--front-bg", default="#20242f")
    p.add_argument("--back-bg", default="#1b1f29")
    p.add_argument("--spine-bg", default="#0f1118")
    p.add_argument("--text-color", default="#f2f0e6")
    p.add_argument("--muted-text-color", default="#d4d0c2")
    p.add_argument("--motif-color", default="#5b6277")

    # Font
    p.add_argument("--font", default="", help="Percorso a un font .ttf")
    p.add_argument("--title-size", type=int, default=118)
    p.add_argument("--subtitle-size", type=int, default=42)
    p.add_argument("--author-size", type=int, default=44)
    p.add_argument("--publisher-size", type=int, default=32)
    p.add_argument("--spine-size", type=int, default=42)
    p.add_argument("--back-size", type=int, default=34)
    p.add_argument("--barcode-size", type=int, default=15)

    # Posizioni testi, in mm relativi al taglio alto/basso
    p.add_argument("--title-y-mm", type=float, default=58.0)
    p.add_argument("--subtitle-y-mm", type=float, default=95.0)
    p.add_argument("--author-y-mm", type=float, default=110.0)
    p.add_argument("--publisher-bottom-mm", type=float, default=16.0)
    p.add_argument("--back-text-y-mm", type=float, default=52.0)

    # Elementi
    p.add_argument("--no-motif", dest="motif", action="store_false")
    p.set_defaults(motif=True)
    p.add_argument("--no-barcode-box", dest="barcode_box", action="store_false")
    p.set_defaults(barcode_box=True)
    p.add_argument(
        "--spine-direction",
        choices=["bottom-to-top", "top-to-bottom"],
        default="bottom-to-top"
    )

    # Dimensioni tecniche
    p.add_argument("--dpi", type=int, default=DEFAULTS["dpi"])
    p.add_argument("--full-width-mm", type=float, default=DEFAULTS["full_width_mm"])
    p.add_argument("--full-height-mm", type=float, default=DEFAULTS["full_height_mm"])
    p.add_argument("--trim-width-mm", type=float, default=DEFAULTS["trim_width_mm"])
    p.add_argument("--trim-height-mm", type=float, default=DEFAULTS["trim_height_mm"])
    p.add_argument("--spine-width-mm", type=float, default=DEFAULTS["spine_width_mm"])
    p.add_argument("--wrap-mm", type=float, default=DEFAULTS["wrap_mm"])
    p.add_argument("--hinge-mm", type=float, default=DEFAULTS["hinge_mm"])
    p.add_argument("--safe-margin-mm", type=float, default=DEFAULTS["safe_margin_mm"])
    p.add_argument("--spine-margin-mm", type=float, default=DEFAULTS["spine_margin_mm"])

    # Barcode
    p.add_argument("--barcode-width-mm", type=float, default=50.8)
    p.add_argument("--barcode-height-mm", type=float, default=30.5)
    p.add_argument("--barcode-margin-x-mm", type=float, default=6.35)
    p.add_argument("--barcode-margin-y-mm", type=float, default=9.52)

    return p


def main():
    parser = build_parser()
    args = parser.parse_args()

    if not args.only_guides:
        clean = make_cover(args, with_guides=False)
        clean.save(args.out, dpi=(args.dpi, args.dpi))
        print(f"Creato: {args.out}")

    if not args.only_clean:
        guides = make_cover(args, with_guides=True)
        guides.save(args.out_guides, dpi=(args.dpi, args.dpi))
        print(f"Creato: {args.out_guides}")

    W = mm_to_px(args.full_width_mm, args.dpi)
    H = mm_to_px(args.full_height_mm, args.dpi)
    print(f"Dimensioni canvas: {args.full_width_mm} x {args.full_height_mm} mm")
    print(f"Pixel a {args.dpi} dpi: {W} x {H} px")


if __name__ == "__main__":
    main()
