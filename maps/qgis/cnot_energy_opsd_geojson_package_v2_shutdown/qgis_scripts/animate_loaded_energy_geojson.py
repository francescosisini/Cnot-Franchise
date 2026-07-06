# -*- coding: utf-8 -*-
"""
CNOT GIS — Animate loaded OPSD energy GeoJSON in QGIS.

Run inside QGIS Python Console > Show Editor.
Load one of the generated GeoJSONs first, then set LAYER_NAME below.
"""

from qgis.core import QgsProject
from qgis.PyQt.QtCore import QTimer

LAYER_NAME = "energy_opsd_all_except_nuclear"
START_YEAR = 1900
END_YEAR = 2050
INTERVAL_MS = 500

layers = QgsProject.instance().mapLayersByName(LAYER_NAME)
if not layers:
    raise Exception(f"Layer non trovato: {LAYER_NAME}")

layer = layers[0]
years = list(range(START_YEAR, END_YEAR + 1))
state = {"i": 0}


def show_year(year):
    expression = (
        f"\"temporal_start\" <= '{year}-12-31' "
        f"AND \"temporal_end\" >= '{year}-01-01'"
    )
    layer.setSubsetString(expression)
    iface.mapCanvas().refresh()
    count = layer.featureCount()
    msg = f"{LAYER_NAME}: centrali visibili nel {year}: {count}"
    iface.mainWindow().statusBar().showMessage(msg)
    print(msg)


def step_energy_animation():
    if state["i"] >= len(years):
        energy_animation_timer.stop()
        iface.mainWindow().statusBar().showMessage("Animazione energia terminata")
        print("Animazione energia terminata")
        return
    show_year(years[state["i"]])
    state["i"] += 1


def stop_energy_animation():
    energy_animation_timer.stop()
    iface.mainWindow().statusBar().showMessage("Animazione energia fermata")
    print("Animazione energia fermata")


def reset_energy_filter():
    layer.setSubsetString("")
    iface.mapCanvas().refresh()
    iface.mainWindow().statusBar().showMessage("Filtro energia rimosso")
    print("Filtro energia rimosso")


energy_animation_timer = QTimer()
energy_animation_timer.timeout.connect(step_energy_animation)
energy_animation_timer.start(INTERVAL_MS)
