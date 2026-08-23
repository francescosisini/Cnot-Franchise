import fitz

INPUT = "main_cnot17.pdf"
OUTPUT = "main_cnot17_KDP_BLEED.pdf"

# KDP: 0.125" = 9 punti PDF = 3.175 mm
BLEED = 0.125 * 72

doc = fitz.open(INPUT)

# ----------------------------------------------------------
# Cerca automaticamente le pagine con fondo nero.
# Controlliamo vari punti lungo i bordi della pagina.
# ----------------------------------------------------------

def pagina_nera(page):
    pix = page.get_pixmap(
        matrix=fitz.Matrix(0.15, 0.15),
        colorspace=fitz.csRGB,
        alpha=False
    )

    w = pix.width
    h = pix.height

    punti = [
        (1, 1),
        (w - 2, 1),
        (1, h - 2),
        (w - 2, h - 2),
        (w // 2, 1),
        (w // 2, h - 2),
        (1, h // 2),
        (w - 2, h // 2),
    ]

    scuri = 0

    for x, y in punti:
        r, g, b = pix.pixel(x, y)[:3]

        if r < 60 and g < 60 and b < 60:
            scuri += 1

    return scuri >= 6


pagine_nere = []

for i, page in enumerate(doc):
    if pagina_nera(page):
        pagine_nere.append(i + 1)

print("Pagine nere rilevate:")
print(pagine_nere)

# ----------------------------------------------------------
# Costruzione PDF KDP con bleed
# ----------------------------------------------------------

out = fitz.open()

for i, page in enumerate(doc):

    numero = i + 1

    old_w = page.rect.width
    old_h = page.rect.height

    # KDP:
    # + 0.125" alla larghezza
    # + 0.125" sopra
    # + 0.125" sotto
    new_w = old_w + BLEED
    new_h = old_h + 2 * BLEED

    nuova = out.new_page(
        width=new_w,
        height=new_h
    )

    # Se la pagina originale è nera,
    # anche tutta la zona di bleed deve essere nera.
    if numero in pagine_nere:
        nuova.draw_rect(
            nuova.rect,
            color=None,
            fill=(0, 0, 0)
        )

    # La pagina 1 è una pagina destra:
    #
    # dispari -> dorso a sinistra, bleed a destra
    # pari    -> dorso a destra, bleed a sinistra

    if numero % 2 == 1:
        x = 0
    else:
        x = BLEED

    # Il bleed verticale è metà sopra e metà sotto
    y = BLEED

    destinazione = fitz.Rect(
        x,
        y,
        x + old_w,
        y + old_h
    )

    nuova.show_pdf_page(
        destinazione,
        doc,
        i
    )

out.save(
    OUTPUT,
    garbage=4,
    deflate=True
)

out.close()
doc.close()

print()
print("Creato:", OUTPUT)
