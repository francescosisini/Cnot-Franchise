from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import argparse
import textwrap


def load_font(size, style="mono"):
    """Carica font locali se disponibili, altrimenti usa DejaVu/Font default."""
    candidates = []

    if style == "title":
        candidates = [
            "Orbitron-Bold.ttf",
            "BankGothic.ttf",
            "Eurostile.ttf",
            "DejaVuSansMono-Bold.ttf",
        ]
    elif style == "mono_bold":
        candidates = [
            "ShareTechMono-Regular.ttf",
            "DejaVuSansMono-Bold.ttf",
            "DejaVuSansMono.ttf",
        ]
    else:
        candidates = [
            "ShareTechMono-Regular.ttf",
            "OCR-A.ttf",
            "DejaVuSansMono.ttf",
        ]

    for font_name in candidates:
        try:
            return ImageFont.truetype(font_name, size)
        except OSError:
            pass

    return ImageFont.load_default()


def parse_item(raw):
    # Formato: "#3388ff|Eolico|Densità elevata nel Nord Europa. Il vento non è più paesaggio: è rete."
    parts = raw.split("|", 2)
    if len(parts) != 3:
        raise ValueError('Ogni item deve essere nel formato: "#colore|Titolo|Descrizione"')
    return {
        "color": parts[0].strip(),
        "title": parts[1].strip(),
        "desc": parts[2].strip(),
    }


def wrap_text(text, max_chars):
    return textwrap.wrap(text, width=max_chars, break_long_words=False, replace_whitespace=False)


def draw_hud_corners(draw, x, y, width, height, accent, corner=28, line_width=4):
    # alto sinistra
    draw.line([x, y, x + corner, y], fill=accent, width=line_width)
    draw.line([x, y, x, y + corner], fill=accent, width=line_width)

    # alto destra
    draw.line([x + width, y, x + width - corner, y], fill=accent, width=line_width)
    draw.line([x + width, y, x + width, y + corner], fill=accent, width=line_width)

    # basso sinistra
    draw.line([x, y + height, x + corner, y + height], fill=accent, width=line_width)
    draw.line([x, y + height, x, y + height - corner], fill=accent, width=line_width)

    # basso destra
    draw.line([x + width, y + height, x + width - corner, y + height], fill=accent, width=line_width)
    draw.line([x + width, y + height, x + width, y + height - corner], fill=accent, width=line_width)


def draw_narrative_legend(
    draw,
    title,
    subtitle,
    items,
    x,
    y,
    width,
    report_id,
    date,
    agency,
    accent="#ff0033",
    footer="SIGINT MAP OVERLAY",
):
    header_font = load_font(15, "mono")
    title_font = load_font(26, "title")
    subtitle_font = load_font(15, "mono")
    item_font = load_font(18, "mono_bold")
    desc_font = load_font(14, "mono")
    footer_font = load_font(12, "mono")

    pad = 22
    line_h = 20
    item_gap = 18
    desc_chars = max(24, int((width - pad * 2 - 32) / 10))

    wrapped_items = []
    for item in items:
        desc_lines = wrap_text(item["desc"], desc_chars)
        wrapped_items.append((item, desc_lines))

    # Altezza: header + titolo + subtitle + separatore + item + footer.
    height = pad * 2
    height += 22 * 3 + 18          # report-id, data, agency, spazio
    height += 34                   # titolo
    if subtitle:
        height += 34
    height += 18                   # separatore
    for _item, desc_lines in wrapped_items:
        height += 28 + len(desc_lines) * line_h + item_gap
    height += 22                   # footer

    # Box principale
    draw.rectangle(
        [x, y, x + width, y + height],
        fill=(0, 0, 0, 205),
        outline=accent,
        width=2,
    )
    draw_hud_corners(draw, x, y, width, height, accent)

    yy = y + pad

    # Header rapporto
    draw.text((x + pad, yy), report_id, fill=(255, 80, 80), font=header_font)
    yy += 22
    draw.text((x + pad, yy), date, fill=(180, 180, 180), font=header_font)
    yy += 22
    draw.text((x + pad, yy), agency, fill=(180, 180, 180), font=header_font)
    yy += 38

    # Titolo
    draw.text((x + pad, yy), title.upper(), fill=accent, font=title_font)
    yy += 34

    if subtitle:
        for line in wrap_text(subtitle, desc_chars + 8):
            draw.text((x + pad, yy), line, fill=(220, 220, 220), font=subtitle_font)
            yy += 20
        yy += 10

    # Linea separatrice
    draw.line([x + pad, yy, x + width - pad, yy], fill=(255, 0, 51, 130), width=1)
    yy += 18

    # Items narrativi
    for item, desc_lines in wrapped_items:
        draw.rectangle(
            [x + pad, yy + 4, x + pad + 18, yy + 22],
            fill=item["color"],
            outline=(240, 240, 240),
            width=1,
        )

        draw.text((x + pad + 32, yy), item["title"].upper(), fill=(245, 245, 245), font=item_font)
        yy += 28

        for line in desc_lines:
            draw.text((x + pad + 32, yy), line, fill=(190, 190, 190), font=desc_font)
            yy += line_h

        yy += item_gap

    # Footer tecnico in basso a destra
    footer_text = footer.upper()
    bbox = draw.textbbox((0, 0), footer_text, font=footer_font)
    footer_w = bbox[2] - bbox[0]
    draw.text(
        (x + width - pad - footer_w, y + height - pad),
        footer_text,
        fill=(120, 120, 120),
        font=footer_font,
    )


def add_scanlines(img, opacity=18, step=4, color=(255, 0, 0)):
    scan = Image.new("RGBA", img.size, (0, 0, 0, 0))
    scan_draw = ImageDraw.Draw(scan)

    for yy in range(0, img.height, step):
        scan_draw.line(
            [(0, yy), (img.width, yy)],
            fill=(color[0], color[1], color[2], opacity),
            width=1,
        )

    return Image.alpha_composite(img, scan)


def main():
    parser = argparse.ArgumentParser(description="Aggiunge una legenda narrativa HUD a una mappa.")
    parser.add_argument("input_image")

    parser.add_argument("--title", default="ENTITÀ DEL SISTEMA")
    parser.add_argument("--subtitle", default="Classificazione narrativa dei layer visibili")

    parser.add_argument("--x", type=int, default=60)
    parser.add_argument("--y", type=int, default=60)
    parser.add_argument("--width", type=int, default=520)

    parser.add_argument(
        "--item",
        action="append",
        default=[],
        help='Formato: "#colore|Titolo|Descrizione narrativa"',
    )

    parser.add_argument("--accent", default="#ff0033")
    parser.add_argument("--report-id", default="DOSSIER E-17-A")
    parser.add_argument("--date", default="17.04.2041")
    parser.add_argument("--agency", default="CENTRO ANALISI EUROPA")
    parser.add_argument("--footer", default="SIGINT MAP OVERLAY")

    parser.add_argument("--no-scanlines", action="store_true")
    parser.add_argument("--scanline-opacity", type=int, default=18)
    parser.add_argument("--scanline-step", type=int, default=4)

    args = parser.parse_args()

    input_path = Path(args.input_image)
    output_path = input_path.with_name(f"{input_path.stem}_legend{input_path.suffix}")

    img = Image.open(input_path).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    items = [parse_item(raw) for raw in args.item]

    draw_narrative_legend(
        draw=draw,
        title=args.title,
        subtitle=args.subtitle,
        items=items,
        x=args.x,
        y=args.y,
        width=args.width,
        report_id=args.report_id,
        date=args.date,
        agency=args.agency,
        accent=args.accent,
        footer=args.footer,
    )

    final = Image.alpha_composite(img, overlay)

    if not args.no_scanlines:
        final = add_scanlines(
            final,
            opacity=max(0, min(args.scanline_opacity, 255)),
            step=max(1, args.scanline_step),
        )

    # Convertiamo in RGB se l'output è JPG/JPEG.
    if output_path.suffix.lower() in [".jpg", ".jpeg"]:
        final = final.convert("RGB")

    final.save(output_path)
    print(f"Salvata immagine: {output_path}")


if __name__ == "__main__":
    main()
