from pathlib import Path
import re

cartella = Path(".")

# ============================================================
# SOSTITUZIONI LETTERALI
# ============================================================

sostituzioni = {
    # --------------------------------------------------------
    # Parole in -ché: accento acuto
    # --------------------------------------------------------

    # perché
    r"perch\`e": r"perch\'e",
    "perchè":     r"perch\'e",
    "perché":     r"perch\'e",

    # poiché
    r"poich\`e": r"poich\'e",
    "poichè":     r"poich\'e",
    "poiché":     r"poich\'e",

    # affinché
    r"affinch\`e": r"affinch\'e",
    "affinchè":     r"affinch\'e",
    "affinché":     r"affinch\'e",

    # benché
    r"bench\`e": r"bench\'e",
    "benchè":     r"bench\'e",
    "benché":     r"bench\'e",

    # purché
    r"purch\`e": r"purch\'e",
    "purchè":     r"purch\'e",
    "purché":     r"purch\'e",

    # finché
    r"finch\`e": r"finch\'e",
    "finchè":     r"finch\'e",
    "finché":     r"finch\'e",

    # cosicché
    r"cosicch\`e": r"cosicch\'e",
    "cosicchè":     r"cosicch\'e",
    "cosicché":     r"cosicch\'e",

    # sicché
    r"sicch\`e": r"sicch\'e",
    "sicchè":     r"sicch\'e",
    "sicché":     r"sicch\'e",

    # giacché
    r"giacch\`e": r"giacch\'e",
    "giacchè":     r"giacch\'e",
    "giacché":     r"giacch\'e",

    # nonché
    r"nonch\`e": r"nonch\'e",
    "nonchè":     r"nonch\'e",
    "nonché":     r"nonch\'e",

    # --------------------------------------------------------
    # né: accento acuto
    # --------------------------------------------------------
    r"n\`e": r"n\'e",
    "nè":     r"n\'e",
    "né":     r"n\'e",

    # --------------------------------------------------------
    # Accenti gravi: Unicode -> LaTeX
    # --------------------------------------------------------
    "cioè": r"cio\`e",
    "però": r"per\`o",
    "più":  r"pi\`u",
    "già":  r"gi\`a",
    "può":  r"pu\`o",
    "così": r"cos\`i",
    "lì":   r"l\`i",
    "là":   r"l\`a",
}


# ============================================================
# ELABORAZIONE DEI FILE .tex
# ============================================================

totale = 0
files_modificati = 0

for file in cartella.rglob("*.tex"):

    testo = file.read_text(encoding="utf-8")
    originale = testo
    modifiche_file = 0

    # ========================================================
    # 1. Sostituzioni delle parole
    # ========================================================

    for vecchio, nuovo in sostituzioni.items():

        n = testo.count(vecchio)

        if n:
            testo = testo.replace(vecchio, nuovo)
            modifiche_file += n

            print(
                f"{file}: {vecchio!r} -> {nuovo!r} "
                f"({n} sostituzioni)"
            )

    # ========================================================
    # 2. VERBO ESSERE ISOLATO: è
    #
    # Riconosce:
    #   è
    #   é       (errore)
    #   \`e     (già corretto)
    #   \'e     (errore)
    #
    # e uniforma tutto a:
    #   \`e
    # ========================================================

    patterns_essere_minuscolo = [
        r"(?<![\w\\])è(?!\w)",
        r"(?<![\w\\])é(?!\w)",
        r"(?<!\w)\\`e(?!\w)",
        r"(?<!\w)\\'e(?!\w)",
    ]

    for pattern in patterns_essere_minuscolo:

        testo, n = re.subn(
            pattern,
            lambda m: r"\`e",
            testo
        )

        if n:
            modifiche_file += n
            print(
                f"{file}: verbo essere 'è' "
                f"({n} sostituzioni)"
            )

    # ========================================================
    # 3. VERBO ESSERE ISOLATO: È
    #
    # Riconosce:
    #   È
    #   É       (errore se isolato)
    #   \`E     (già corretto)
    #   \'E     (errore)
    #
    # e uniforma tutto a:
    #   \`E
    #
    # NON modifica PERCHÉ, POICHÉ ecc.
    # ========================================================

    patterns_essere_maiuscolo = [
        r"(?<![\w\\])È(?!\w)",
        r"(?<![\w\\])É(?!\w)",
        r"(?<!\w)\\`E(?!\w)",
        r"(?<!\w)\\'E(?!\w)",
    ]

    for pattern in patterns_essere_maiuscolo:

        testo, n = re.subn(
            pattern,
            lambda m: r"\`E",
            testo
        )

        if n:
            modifiche_file += n
            print(
                f"{file}: verbo essere 'È' "
                f"({n} sostituzioni)"
            )

    # ========================================================
    # 4. Salvataggio
    # ========================================================

    if testo != originale:

        file.write_text(testo, encoding="utf-8")

        files_modificati += 1
        totale += modifiche_file


# ============================================================
# RISULTATO
# ============================================================

print()
print("=" * 60)
print(f"File modificati:     {files_modificati}")
print(f"Sostituzioni totali: {totale}")
print("=" * 60)
print("Fatto.")
