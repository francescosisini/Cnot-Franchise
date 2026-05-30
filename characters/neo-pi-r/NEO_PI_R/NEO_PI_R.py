import json
import sys

# Struttura del personaggio con profilo completo NEO-PI-R (5 dimensioni x 6 facets ciascuna)
class Personaggio:
    def __init__(self, nome, neo_pi_r):
        self.nome = nome
        self.neo_pi_r = neo_pi_r  # dizionario con tutte le 30 facets e le medie per dimensione

# Nodo dell'albero decisionale
class Nodo:
    def __init__(self, nome, potenziale=None, figli=None):
        self.nome = nome
        self.potenziale = potenziale if potenziale else {}
        self.figli = figli if figli else []

# Carica un profilo NEO-PI-R completo o parziale da un file JSON
def carica_profilo_da_json(filepath):
    with open(filepath, "r") as file:
        profilo = json.load(file)
    return profilo

# Carica un albero decisionale da un file JSON
def carica_albero_da_json(filepath):
    with open(filepath, "r") as file:
        dati = json.load(file)

    def crea_nodo(diz):
        nome = diz["nome"]
        potenziale = diz.get("potenziale", {})
        figli = [crea_nodo(figlio) for figlio in diz.get("figli", [])]
        return Nodo(nome, potenziale, figli)

    return crea_nodo(dati)

# Dizionario con preferenze per ciascuna dimensione/facet
preferenze_dimensioni = {
    "Nevroticismo_Ansieta": "meno",
    "Nevroticismo_Rabbia": "meno",
    "Nevroticismo_Depressione": "meno",
    "Nevroticismo_Imbarazzo": "meno",
    "Nevroticismo_Impulsivita": "meno",
    "Nevroticismo_Vulnerabilita": "meno",

    "Estroversione_Cordialita": "piu",
    "Estroversione_Gregarieta": "piu",
    "Estroversione_Assertivita": "piu",
    "Estroversione_Attivita": "piu",
    "Estroversione_RicercaEccitazione": "piu",
    "Estroversione_EmozioniPositive": "piu",

    "Apertura_Fantasia": "piu",
    "Apertura_Estetica": "piu",
    "Apertura_Sentimenti": "piu",
    "Apertura_Azioni": "piu",
    "Apertura_Idee": "piu",
    "Apertura_Valori": "piu",

    "Amicalita_Fiducia": "piu",
    "Amicalita_Moralita": "piu",
    "Amicalita_Altruismo": "piu",
    "Amicalita_Collaborazione": "piu",
    "Amicalita_Modestia": "piu",
    "Amicalita_Sensibilita": "piu",

    "Coscienziosita_Competenza": "piu",
    "Coscienziosita_Ordine": "piu",
    "Coscienziosita_SensoDelDovere": "piu",
    "Coscienziosita_RicercaSuccesso": "piu",
    "Coscienziosita_Autodisciplina": "piu",
    "Coscienziosita_Prudenza": "piu"
}

# Calcola affinità considerando preferenze
def calcola_affinita(profilo, potenziale, preferenze=preferenze_dimensioni):
    affinita = 0
    conteggio = 0

    for dimensione in potenziale:
        valore_profilo = profilo.get(dimensione)
        if valore_profilo is None:
            dimensione_base = dimensione.split("_")[0]
            valore_profilo = profilo.get(dimensione_base, 50)  # default neutro se manca

        differenza = valore_profilo - potenziale[dimensione]

        preferenza = preferenze.get(dimensione, "neutro")

        if preferenza == "meno":
            affinita += 100 + abs(differenza) if differenza < 0 else 100 - abs(differenza)
        elif preferenza == "piu":
            affinita += 100 + abs(differenza) if differenza >= 0 else 100 - abs(differenza)
        else:
            affinita += 100 - abs(differenza)

        conteggio += 1

    return affinita / conteggio if conteggio else 0

# Algoritmo decisionale che sceglie il ramo con maggiore affinità rispetto al profilo NEO-PI-R
def decidi_con_potenziale(protagonista, nodo):
    miglior_affinita = float('-inf')
    miglior_figlio = None

    for figlio in nodo.figli:
        affinita = calcola_affinita(protagonista.neo_pi_r, figlio.potenziale)
        if affinita > miglior_affinita:
            miglior_affinita = affinita
            miglior_figlio = figlio

    return miglior_figlio

# Utilizzo da riga di comando
if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Uso: python script.py <file_profilo.json> <file_albero.json>")
        sys.exit(1)

    profilo_filepath = sys.argv[1]
    albero_filepath = sys.argv[2]

    profilo_personaggio = carica_profilo_da_json(profilo_filepath)
    protagonista = Personaggio("Protagonista", profilo_personaggio)

    radice_albero = carica_albero_da_json(albero_filepath)

    scelta = decidi_con_potenziale(protagonista, radice_albero)
    print(f"La scelta consigliata per {protagonista.nome} è: {scelta.nome}")
