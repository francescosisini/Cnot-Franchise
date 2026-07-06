from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
import argparse
import textwrap
import math


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
    return {"color": parts[0].strip(), "title": parts[1].strip(), "desc": parts[2].strip()}


def wrap_text(text, max_chars):
    return textwrap.wrap(text, width=max_chars, break_long_words=False, replace_whitespace=False)


def hex_to_rgba(value, alpha=255):
    value = value.strip()
    if value.startswith("#"):
        value = value[1:]
    if len(value) == 3:
        value = "".join(ch * 2 for ch in value)
    r = int(value[0:2], 16)
    g = int(value[2:4], 16)
    b = int(value[4:6], 16)
    return (r, g, b, alpha)


def draw_text_glow(draw, xy, text, font, fill, shadow=(0, 0, 0, 210), glow_radius=2):
    """Testo leggibile su sfondo complesso: ombra morbida + testo."""
    x, y = xy
    # Piccolo alone direzionale e diagonale. Costa poco ed evita il box pieno.
    for dx, dy in [(-glow_radius, 0), (glow_radius, 0), (0, -glow_radius), (0, glow_radius), (glow_radius, glow_radius)]:
        draw.text((x + dx, y + dy), text, font=font, fill=shadow)
    draw.text((x, y), text, font=font, fill=fill)


def draw_line_glow(draw, xy, fill, width=1, shadow=(0, 0, 0, 160)):
    x1, y1, x2, y2 = xy
    draw.line([x1 + 1, y1 + 1, x2 + 1, y2 + 1], fill=shadow, width=width + 2)
    draw.line([x1, y1, x2, y2], fill=fill, width=width)


def draw_eu_stars(draw, cx, cy, r, fill=(255, 214, 0, 255), shadow=True):
    """Piccolo riferimento UE: corona semplificata di puntini/stelle."""
    for i in range(12):
        a = 2 * math.pi * i / 12
        x = cx + math.cos(a) * r
        y = cy + math.sin(a) * r
        if shadow:
            draw.ellipse([x - 3, y - 3, x + 3, y + 3], fill=(0, 0, 0, 150))
        draw.ellipse([x - 2, y - 2, x + 2, y + 2], fill=fill)


def add_soft_backplate(img, x, y, width, height, radius=22, alpha=55):
    """Ombra opzionale, molto leggera. Usala solo se il testo si perde."""
    if alpha <= 0:
        return img
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle([x + 6, y + 8, x + width + 6, y + height + 8], radius=radius, fill=(0, 0, 0, alpha))
    shadow = shadow.filter(ImageFilter.GaussianBlur(10))
    return Image.alpha_composite(img, shadow)


def compute_height(subtitle, wrapped_items, desc_chars, pad=24, line_h=19, item_gap=14):
    height = pad * 2
    height += 50                  # intestazione
    height += 38                  # titolo
    if subtitle:
        height += len(wrap_text(subtitle, desc_chars + 10)) * 20 + 10
    height += 40                  # status + linea
    for _item, desc_lines in wrapped_items:
        height += 24 + len(desc_lines) * line_h + item_gap
    height += 30                  # footer
    return height


def draw_humanitarian_overlay(
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
    accent="#6ec6ff",
    footer="FIELD ASSESSMENT CARD",
    status="AREA ABITATA / VULNERABILE",
    background_alpha=0,
    header_alpha=0,
    outline_alpha=0,
    light_text=True,
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
    accent_rgba = hex_to_rgba(accent, 255)

    wrapped_items = [(item, wrap_text(item["desc"], desc_chars)) for item in items]
    height = compute_height(subtitle, wrapped_items, desc_chars, pad, line_h, item_gap)

    # Palette per overlay trasparente. Default: testo chiaro per immagini scure/vegetazione.
    if light_text:
        primary = (242, 248, 252, 255)
        secondary = (206, 224, 235, 255)
        muted = (169, 190, 204, 255)
        line = (142, 205, 240, 185)
        shadow = (0, 0, 0, 225)
        badge_fill = (35, 83, 112, 145)
        badge_outline = (166, 219, 247, 210)
        badge_text = (232, 248, 255, 255)
    else:
        primary = (36, 50, 64, 255)
        secondary = (61, 75, 88, 255)
        muted = (92, 107, 122, 255)
        line = (45, 112, 162, 185)
        shadow = (255, 255, 255, 210)
        badge_fill = (224, 238, 249, 150)
        badge_outline = (31, 111, 178, 210)
        badge_text = (31, 86, 126, 255)

    # Fondo opzionale: di default è completamente trasparente.
    if background_alpha > 0:
        draw.rounded_rectangle(
            [x, y, x + width, y + height],
            radius=22,
            fill=(248, 250, 252, max(0, min(background_alpha, 255))),
            outline=(205, 216, 226, max(0, min(outline_alpha, 255))),
            width=2,
        )

    # Header opzionale, anch'esso trasparente di default.
    if header_alpha > 0:
        draw.rounded_rectangle([x, y, x + width, y + 60], radius=20, fill=(10, 40, 70, max(0, min(header_alpha, 255))))

    left = x + pad
    yy = y + 12

    # Piccoli segni di interfaccia, non un riquadro pieno.
    corner = 28
    draw_line_glow(draw, [x, y, x + corner, y], fill=line, width=2, shadow=shadow)
    draw_line_glow(draw, [x, y, x, y + corner], fill=line, width=2, shadow=shadow)
    draw_line_glow(draw, [x + width, y, x + width - corner, y], fill=line, width=2, shadow=shadow)
    draw_line_glow(draw, [x + width, y, x + width, y + corner], fill=line, width=2, shadow=shadow)

    # Mini emblema UE e agency.
    draw.ellipse([left, yy + 4, left + 32, yy + 36], fill=(0, 51, 153, 225))
    draw_eu_stars(draw, left + 16, yy + 20, 10, shadow=False)
    draw_text_glow(draw, (left + 44, yy + 1), agency.upper(), font=meta_bold, fill=primary, shadow=shadow)
    draw_text_glow(draw, (left + 44, yy + 22), f"{report_id}  ·  {date}", font=meta_font, fill=muted, shadow=shadow)

    yy = y + 66

    # Titolo e sottotitolo.
    draw_text_glow(draw, (left, yy), title.upper(), font=title_font, fill=accent_rgba, shadow=shadow, glow_radius=2)
    yy += 36

    if subtitle:
        for line_text in wrap_text(subtitle, desc_chars + 10):
            draw_text_glow(draw, (left, yy), line_text, font=subtitle_font, fill=secondary, shadow=shadow)
            yy += 20
        yy += 8

    # Badge status semitrasparente. Non è un fondo scheda, è un'etichetta.
    status_text = status.upper()
    bbox = draw.textbbox((0, 0), status_text, font=badge_font)
    bw = bbox[2] - bbox[0] + 22
    draw.rounded_rectangle([left, yy, left + bw, yy + 25], radius=12, fill=badge_fill, outline=badge_outline, width=1)
    draw_text_glow(draw, (left + 11, yy + 5), status_text, font=badge_font, fill=badge_text, shadow=shadow, glow_radius=1)
    yy += 38

    draw_line_glow(draw, [left, yy, x + width - pad, yy], fill=line, width=1, shadow=shadow)
    yy += 18

    # Elementi informativi.
    for item, desc_lines in wrapped_items:
        item_color = hex_to_rgba(item["color"], 255)
        # Indicatore piccolo, leggibile ma non invasivo.
        draw.rounded_rectangle([left, yy + 4, left + 18, yy + 22], radius=5, fill=(0, 0, 0, 130))
        draw.rounded_rectangle([left + 2, yy + 6, left + 16, yy + 20], radius=4, fill=item_color, outline=(255, 255, 255, 230), width=1)
        draw_text_glow(draw, (left + 34, yy), item["title"].upper(), fill=primary, font=item_font, shadow=shadow)
        yy += 24
        for line_text in desc_lines:
            draw_text_glow(draw, (left + 34, yy), line_text, fill=secondary, font=desc_font, shadow=shadow)
            yy += line_h
        yy += item_gap

    # Footer: principio di intervento.
    yy_footer = y + height - pad
    footer_text = footer.upper()
    draw_line_glow(draw, [left, yy_footer - 12, x + width - pad, yy_footer - 12], fill=line, width=1, shadow=shadow)
    draw_text_glow(draw, (left, yy_footer), "PRINCIPIO: NON NUOCERE · MEDIAZIONE LOCALE · ACCESSO SICURO", fill=muted, font=footer_font, shadow=shadow, glow_radius=1)
    bbox = draw.textbbox((0, 0), footer_text, font=footer_font)
    fw = bbox[2] - bbox[0]
    draw_text_glow(draw, (x + width - pad - fw, yy_footer), footer_text, fill=muted, font=footer_font, shadow=shadow, glow_radius=1)

    return height


def add_paper_wash(img, opacity=6, step=7):
    """Texture quasi impercettibile da documento/scansione."""
    if opacity <= 0:
        return img
    wash = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(wash)
    for yy in range(0, img.height, step):
        d.line([(0, yy), (img.width, yy)], fill=(255, 255, 255, opacity), width=1)
    return Image.alpha_composite(img, wash)


def main():
    parser = argparse.ArgumentParser(description="Aggiunge un overlay informativo in stile Missione Umanitaria UE a una mappa o immagine.")
    parser.add_argument("input_image")

    parser.add_argument("--title", default="SCHEDA DI SOPRALLUOGO")
    parser.add_argument("--subtitle", default="Valutazione rapida di area abitata informale: protezione, accesso ai servizi e rischi strutturali")

    parser.add_argument("--x", type=int, default=60)
    parser.add_argument("--y", type=int, default=60)
    parser.add_argument("--width", type=int, default=620)

    parser.add_argument("--item", action="append", default=[], help='Formato: "#colore|Titolo|Descrizione informativa"')

    parser.add_argument("--accent", default="#6ec6ff")
    parser.add_argument("--report-id", default="EU-HUM/FIELD-17")
    parser.add_argument("--date", default="17.04.2041")
    parser.add_argument("--agency", default="Missione Umanitaria UE")
    parser.add_argument("--footer", default="Field assessment card")
    parser.add_argument("--status", default="Area abitata / vulnerabile")

    # Nuovi controlli: default senza fondo.
    parser.add_argument("--background-alpha", type=int, default=0, help="Opacità del fondo scheda: 0 = nessun fondo, 255 = opaco")
    parser.add_argument("--header-alpha", type=int, default=0, help="Opacità della fascia header: 0 = nessuna fascia")
    parser.add_argument("--outline-alpha", type=int, default=0, help="Opacità del bordo del fondo, se background-alpha > 0")
    parser.add_argument("--backplate-alpha", type=int, default=0, help="Ombra morbida dietro all'overlay: utile se il testo si perde")
    parser.add_argument("--dark-text", action="store_true", help="Usa testo scuro invece del testo chiaro")

    parser.add_argument("--no-paper-wash", action="store_true")
    parser.add_argument("--paper-opacity", type=int, default=0)
    parser.add_argument("--paper-step", type=int, default=7)

    parser.add_argument("--output", default=None, help="Percorso output opzionale. Se omesso crea *_humanitarian_overlay.ext")

    args = parser.parse_args()

    input_path = Path(args.input_image)
    output_path = Path(args.output) if args.output else input_path.with_name(f"{input_path.stem}_humanitarian_overlay{input_path.suffix}")

    img = Image.open(input_path).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))

    items = [parse_item(raw) for raw in args.item]
    if not items:
        items = [
            parse_item("#3aa76d|Presenza stimata|Comunità informale con adulti, adolescenti e animali domestici."),
            parse_item("#d99b2b|Rischi strutturali|Scale danneggiate, locali allagati, pozzi e accessi non sicuri."),
            parse_item("#1f6fb2|Accesso ai servizi|Connettività assente o instabile; energia autonoma non documentata."),
            parse_item("#8a6bb8|Risorse interne|Spazi comuni, mensa, regole comunitarie e reti di mutuo aiuto."),
        ]

    # Calcolo altezza senza sporcare l'immagine finale.
    tmp = Image.new("RGBA", img.size, (0, 0, 0, 0))
    tmp_draw = ImageDraw.Draw(tmp)
    height = draw_humanitarian_overlay(
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
        background_alpha=args.background_alpha,
        header_alpha=args.header_alpha,
        outline_alpha=args.outline_alpha,
        light_text=not args.dark_text,
    )

    overlay = add_soft_backplate(overlay, args.x, args.y, args.width, height, alpha=max(0, min(args.backplate_alpha, 255)))
    draw = ImageDraw.Draw(overlay)
    draw_humanitarian_overlay(
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
        background_alpha=args.background_alpha,
        header_alpha=args.header_alpha,
        outline_alpha=args.outline_alpha,
        light_text=not args.dark_text,
    )

    final = Image.alpha_composite(img, overlay)
    if not args.no_paper_wash:
        final = add_paper_wash(final, opacity=max(0, min(args.paper_opacity, 255)), step=max(1, args.paper_step))

    if output_path.suffix.lower() in [".jpg", ".jpeg"]:
        final = final.convert("RGB")

    final.save(output_path)
    print(f"Salvata immagine: {output_path}")


if __name__ == "__main__":
    main()
