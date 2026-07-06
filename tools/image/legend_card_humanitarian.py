from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
import argparse
import textwrap


def load_font(size, style="regular"):
    """Carica font leggibili per una scheda tipo missione umanitaria."""
    if style == "title":
        candidates = [
            "DejaVuSans-Bold.ttf",
            "LiberationSans-Bold.ttf",
            "Arial Bold.ttf",
            "Arial.ttf",
        ]
    elif style == "bold":
        candidates = [
            "DejaVuSans-Bold.ttf",
            "LiberationSans-Bold.ttf",
            "Arial Bold.ttf",
            "Arial.ttf",
        ]
    else:
        candidates = [
            "DejaVuSans.ttf",
            "LiberationSans-Regular.ttf",
            "Arial.ttf",
        ]

    for font_name in candidates:
        try:
            return ImageFont.truetype(font_name, size)
        except OSError:
            pass
    return ImageFont.load_default()


def parse_item(raw):
    # Formato: "#3388ff|Accesso ai servizi|Discontinuo o assente"
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


def rounded_rectangle(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def add_soft_backplate(img, x, y, width, height, radius=22):
    """Leggera ombra morbida dietro la scheda."""
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle([x + 8, y + 10, x + width + 8, y + height + 10], radius=radius, fill=(0, 0, 0, 85))
    shadow = shadow.filter(ImageFilter.GaussianBlur(8))
    return Image.alpha_composite(img, shadow)


def draw_eu_stars(draw, cx, cy, r, fill=(255, 214, 0, 255)):
    """Piccolo riferimento UE: corona semplificata di puntini/stelle."""
    import math
    for i in range(12):
        a = 2 * math.pi * i / 12
        x = cx + math.cos(a) * r
        y = cy + math.sin(a) * r
        draw.ellipse([x - 2, y - 2, x + 2, y + 2], fill=fill)


def draw_humanitarian_card(
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
    accent="#1f6fb2",
    footer="FIELD ASSESSMENT CARD",
    status="AREA ABITATA / VULNERABILE",
):
    meta_font = load_font(13, "regular")
    meta_bold = load_font(13, "bold")
    title_font = load_font(25, "title")
    subtitle_font = load_font(15, "regular")
    item_font = load_font(16, "bold")
    desc_font = load_font(14, "regular")
    footer_font = load_font(11, "regular")
    badge_font = load_font(12, "bold")

    pad = 24
    line_h = 19
    item_gap = 14
    desc_chars = max(30, int((width - pad * 2 - 42) / 8.1))

    wrapped_items = []
    for item in items:
        desc_lines = wrap_text(item["desc"], desc_chars)
        wrapped_items.append((item, desc_lines))

    # Calcolo altezza dinamica.
    height = pad * 2
    height += 58                  # fascia alta
    height += 38                  # titolo
    if subtitle:
        height += len(wrap_text(subtitle, desc_chars + 10)) * 20 + 12
    height += 42                  # badge status + separatore
    for _item, desc_lines in wrapped_items:
        height += 24 + len(desc_lines) * line_h + item_gap
    height += 34                  # footer

    # Fondo chiaro, da report umanitario.
    rounded_rectangle(
        draw,
        [x, y, x + width, y + height],
        radius=22,
        fill=(248, 250, 252, 150),
        outline=(205, 216, 226, 255),
        width=2,
    )

    # Banda superiore istituzionale.
    draw.rounded_rectangle([x, y, x + width, y + 64], radius=22, fill=(235, 243, 250, 242))
    draw.rectangle([x, y + 42, x + width, y + 64], fill=(235, 243, 250, 242))

    # Barra laterale accento.
    draw.rounded_rectangle([x, y, x + 10, y + height], radius=22, fill=accent)
    draw.rectangle([x + 5, y, x + 10, y + height], fill=accent)

    yy = y + 17
    left = x + pad

    # Mini emblema UE e agency.
    draw.ellipse([left, yy + 3, left + 34, yy + 37], fill=(0, 51, 153, 255))
    draw_eu_stars(draw, left + 17, yy + 20, 11)
    draw.text((left + 46, yy + 1), agency.upper(), fill=(37, 52, 67), font=meta_bold)
    draw.text((left + 46, yy + 22), f"{report_id}  ·  {date}", fill=(92, 107, 122), font=meta_font)

    yy = y + 82

    # Titolo e sottotitolo.
    draw.text((left, yy), title.upper(), fill=accent, font=title_font)
    yy += 36

    if subtitle:
        for line in wrap_text(subtitle, desc_chars + 10):
            draw.text((left, yy), line, fill=(63, 76, 89), font=subtitle_font)
            yy += 20
        yy += 8

    # Badge status.
    badge_text = status.upper()
    bbox = draw.textbbox((0, 0), badge_text, font=badge_font)
    bw = bbox[2] - bbox[0] + 22
    draw.rounded_rectangle([left, yy, left + bw, yy + 25], radius=12, fill=(224, 238, 249, 255), outline=(164, 194, 219, 255), width=1)
    draw.text((left + 11, yy + 5), badge_text, fill=(31, 86, 126), font=badge_font)
    yy += 38

    draw.line([left, yy, x + width - pad, yy], fill=(199, 211, 222, 255), width=1)
    yy += 18

    # Elementi informativi.
    for item, desc_lines in wrapped_items:
        # indicatore morbido, non militare
        draw.rounded_rectangle(
            [left, yy + 3, left + 20, yy + 23],
            radius=5,
            fill=item["color"],
            outline=(255, 255, 255, 255),
            width=2,
        )
        draw.text((left + 34, yy), item["title"].upper(), fill=(41, 52, 64), font=item_font)
        yy += 24
        for line in desc_lines:
            draw.text((left + 34, yy), line, fill=(76, 88, 101), font=desc_font)
            yy += line_h
        yy += item_gap

    # Footer: principio di intervento.
    yy_footer = y + height - pad - 2
    footer_text = footer.upper()
    draw.line([left, yy_footer - 12, x + width - pad, yy_footer - 12], fill=(221, 228, 235, 255), width=1)
    draw.text((left, yy_footer), "PRINCIPIO: NON NUOCERE · MEDIAZIONE LOCALE · ACCESSO SICURO", fill=(94, 108, 122), font=footer_font)
    bbox = draw.textbbox((0, 0), footer_text, font=footer_font)
    fw = bbox[2] - bbox[0]
    draw.text((x + width - pad - fw, yy_footer), footer_text, fill=(132, 145, 158), font=footer_font)

    return height


def add_paper_wash(img, opacity=12, step=6):
    """Texture quasi impercettibile da documento/scansione, alternativa alle scanlines cyberpunk."""
    wash = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(wash)
    for yy in range(0, img.height, step):
        d.line([(0, yy), (img.width, yy)], fill=(255, 255, 255, opacity), width=1)
    return Image.alpha_composite(img, wash)


def main():
    parser = argparse.ArgumentParser(description="Aggiunge una scheda informativa in stile Missione Umanitaria UE a una mappa o immagine.")
    parser.add_argument("input_image")

    parser.add_argument("--title", default="SCHEDA DI SOPRALLUOGO")
    parser.add_argument("--subtitle", default="Valutazione rapida di area abitata informale: protezione, accesso ai servizi e rischi strutturali")

    parser.add_argument("--x", type=int, default=60)
    parser.add_argument("--y", type=int, default=60)
    parser.add_argument("--width", type=int, default=620)

    parser.add_argument(
        "--item",
        action="append",
        default=[],
        help='Formato: "#colore|Titolo|Descrizione informativa"',
    )

    parser.add_argument("--accent", default="#1f6fb2")
    parser.add_argument("--report-id", default="EU-HUM/FIELD-17")
    parser.add_argument("--date", default="17.04.2041")
    parser.add_argument("--agency", default="Missione Umanitaria UE")
    parser.add_argument("--footer", default="Field assessment card")
    parser.add_argument("--status", default="Area abitata / vulnerabile")

    parser.add_argument("--no-paper-wash", action="store_true")
    parser.add_argument("--paper-opacity", type=int, default=10)
    parser.add_argument("--paper-step", type=int, default=7)

    parser.add_argument("--output", default=None, help="Percorso output opzionale. Se omesso crea *_humanitarian.ext")

    args = parser.parse_args()

    input_path = Path(args.input_image)
    if args.output:
        output_path = Path(args.output)
    else:
        output_path = input_path.with_name(f"{input_path.stem}_humanitarian{input_path.suffix}")

    img = Image.open(input_path).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))

    # Precalcolo su canvas temporaneo per avere altezza e ombra corretta.
    tmp_draw = ImageDraw.Draw(overlay)
    items = [parse_item(raw) for raw in args.item]
    if not items:
        items = [
            parse_item("#3aa76d|Presenza stimata|Comunità informale con adulti, adolescenti e animali domestici."),
            parse_item("#d99b2b|Rischi strutturali|Scale danneggiate, locali allagati, pozzi e accessi non sicuri."),
            parse_item("#1f6fb2|Accesso ai servizi|Connettività assente o instabile; energia autonoma non documentata."),
            parse_item("#8a6bb8|Risorse interne|Spazi comuni, mensa, regole comunitarie e reti di mutuo aiuto."),
        ]

    # Misuriamo ridisegnando su un overlay vuoto; poi aggiungiamo ombra e ridisegniamo.
    height = draw_humanitarian_card(
        tmp_draw,
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
        status=args.status,
    )

    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    overlay = add_soft_backplate(overlay, args.x, args.y, args.width, height)
    draw = ImageDraw.Draw(overlay)
    draw_humanitarian_card(
        draw,
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
        status=args.status,
    )

    final = Image.alpha_composite(img, overlay)
    if not args.no_paper_wash:
        final = add_paper_wash(
            final,
            opacity=max(0, min(args.paper_opacity, 255)),
            step=max(1, args.paper_step),
        )

    if output_path.suffix.lower() in [".jpg", ".jpeg"]:
        final = final.convert("RGB")

    final.save(output_path)
    print(f"Salvata immagine: {output_path}")


if __name__ == "__main__":
    main()
