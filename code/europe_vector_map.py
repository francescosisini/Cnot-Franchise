import json
import matplotlib.pyplot as plt

# =========================
# CONFIG
# =========================

INPUT_GEOJSON = "europe.json"
OUTPUT_PNG = "europe_vector_oscilloscope.png"

LINE_COLOR = "#8cff8c"
POINT_COLOR = "#d7ffd7"
GRID_COLOR = "#245524"
BG_COLOR = "#020702"

SHOW_VERTICES = True
VERTEX_SIZE = 1.2

LINE_WIDTH = 0.45
FIGSIZE = (16, 10)
DPI = 300

# Limiti Europa circa
LON_MIN, LON_MAX = -25, 45
LAT_MIN, LAT_MAX = 34, 72


# =========================
# FUNZIONI
# =========================

def draw_ring(ax, ring):
    xs = [p[0] for p in ring]
    ys = [p[1] for p in ring]

    ax.plot(
        xs,
        ys,
        color=LINE_COLOR,
        linewidth=LINE_WIDTH,
        alpha=0.95
    )

    if SHOW_VERTICES:
        ax.scatter(
            xs,
            ys,
            s=VERTEX_SIZE,
            color=POINT_COLOR,
            alpha=0.7,
            linewidths=0
        )


def draw_geometry(ax, geom):
    gtype = geom["type"]
    coords = geom["coordinates"]

    if gtype == "Polygon":
        for ring in coords:
            draw_ring(ax, ring)

    elif gtype == "MultiPolygon":
        for polygon in coords:
            for ring in polygon:
                draw_ring(ax, ring)


# =========================
# MAIN
# =========================

with open(INPUT_GEOJSON, "r", encoding="utf-8") as f:
    data = json.load(f)

fig, ax = plt.subplots(figsize=FIGSIZE, dpi=DPI)

fig.patch.set_facecolor(BG_COLOR)
ax.set_facecolor(BG_COLOR)

for feature in data["features"]:
    geom = feature.get("geometry")
    if geom:
        draw_geometry(ax, geom)

# Griglia tipo oscilloscopio
ax.set_xlim(LON_MIN, LON_MAX)
ax.set_ylim(LAT_MIN, LAT_MAX)

ax.set_xticks(range(LON_MIN, LON_MAX + 1, 5))
ax.set_yticks(range(LAT_MIN, LAT_MAX + 1, 5))

ax.grid(
    True,
    color=GRID_COLOR,
    linestyle="--",
    linewidth=0.45,
    alpha=0.65
)

# Aspetto tecnico
ax.tick_params(colors=LINE_COLOR, labelsize=8)
for spine in ax.spines.values():
    spine.set_color(LINE_COLOR)
    spine.set_linewidth(0.7)

ax.set_title(
    "EUROPA VECTOR MAP // VERTEX SCAN",
    color=LINE_COLOR,
    fontsize=14,
    loc="left",
    pad=12
)

ax.text(
    LON_MIN + 1,
    LAT_MAX - 3,
    "MODE: VECTOR\nDATA: GEOJSON\nSCAN: ACTIVE\nVERTICES: ON",
    color=LINE_COLOR,
    fontsize=9,
    family="monospace",
    va="top"
)

ax.set_aspect("equal", adjustable="box")

plt.savefig(
    OUTPUT_PNG,
    facecolor=fig.get_facecolor(),
    bbox_inches="tight",
    pad_inches=0.15
)

plt.close()

print(f"Immagine salvata: {OUTPUT_PNG}")
