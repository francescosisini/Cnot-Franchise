from qgis.core import QgsProject
from qgis.PyQt.QtCore import QTimer

# ============================================================
# Nuclear reactors temporal animation
# Layer required: nuclear_reactors_europe_all
# Fields required: temporal_start, temporal_end
# ============================================================

layer_name = "nuclear_reactors_europe_all"

start_year = 1950
end_year = 2050
interval_ms = 500

layers = QgsProject.instance().mapLayersByName(layer_name)

if not layers:
    raise Exception(f"Layer non trovato: {layer_name}")

layer = layers[0]

years = list(range(start_year, end_year + 1))

state = {
    "i": 0
}

def show_year(year):
    expression = (
        f"\"temporal_start\" <= '{year}-12-31' "
        f"AND "
        f"\"temporal_end\" >= '{year}-01-01'"
    )

    layer.setSubsetString(expression)
    iface.mapCanvas().refresh()

    count = layer.featureCount()

    message = f"Centrali nucleari attive nel {year}: {count}"
    iface.mainWindow().statusBar().showMessage(message)
    print(message)

def step_animation():
    if state["i"] >= len(years):
        nuclear_animation_timer.stop()
        iface.mainWindow().statusBar().showMessage("Animazione terminata")
        print("Animazione terminata")
        return

    year = years[state["i"]]
    show_year(year)
    state["i"] += 1

def stop_nuclear_animation():
    nuclear_animation_timer.stop()
    iface.mainWindow().statusBar().showMessage("Animazione fermata")
    print("Animazione fermata")

def reset_nuclear_filter():
    layer.setSubsetString("")
    iface.mapCanvas().refresh()
    iface.mainWindow().statusBar().showMessage("Filtro rimosso")
    print("Filtro rimosso")

# Variabile globale: importante, altrimenti QGIS può cancellare il timer
nuclear_animation_timer = QTimer()
nuclear_animation_timer.timeout.connect(step_animation)
nuclear_animation_timer.start(interval_ms)