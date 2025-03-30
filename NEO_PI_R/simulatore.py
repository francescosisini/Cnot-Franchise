import json
import glob
import time

from NEO_PI_R import Personaggio, Nodo, carica_profilo_da_json, decidi_con_potenziale

# ANSI Colors
class colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

# Funzione di stampa decorativa
def print_boxed(text):
    print(colors.OKBLUE + "\n" + "=" * (len(text) + 6))
    print(f"|| {text} ||")
    print("=" * (len(text) + 6) + colors.ENDC + "\n")

# Funzione di stampa con icona
def print_choice(text):
    print(colors.OKCYAN + f"  ➤ {text}" + colors.ENDC)

# Funzione effetto loading
def loading(msg, sec=1):
    print(colors.BOLD + msg + colors.ENDC, end="", flush=True)
    for _ in range(sec):
        print(".", end="", flush=True)
        time.sleep(0.5)
    print("\n")

# Carica profilo
print(colors.HEADER + "\n🟣 BENVENUTO NEL SIMULATORE DI SITUAZIONI 🟣" + colors.ENDC)
print("Crea prima il tuo profilo con test_neo.py se non lo hai ancora fatto.\n")
profilo_file = input("📄 Inserisci il nome del file del tuo profilo (es: mio_profilo.json): ")
profilo_personaggio = carica_profilo_da_json(profilo_file)
protagonista = Personaggio("Protagonista", profilo_personaggio)

# Trova tutte le situazioni
situazioni_files = sorted(glob.glob("situazione_*.json"))

print("\n🔍 Inizio simulazione delle situazioni:\n")
scelte_finali = []

for situazione_file in situazioni_files:
    with open(situazione_file, "r") as f:
        situazione = json.load(f)

    nodo = Nodo(
        nome=situazione["nome"],
        figli=[Nodo(figlio["nome"], figlio.get("potenziale", {})) for figlio in situazione.get("figli", [])]
    )

    print_boxed(f"Situazione: {nodo.nome}")

    print("\nLe possibili scelte sono:\n")
    for figlio in nodo.figli:
        print_choice(figlio.nome)

    loading("\nAnalisi della personalità in corso", 3)

    scelta = decidi_con_potenziale(protagonista, nodo)
    scelte_finali.append((nodo.nome, scelta.nome))

    print(colors.OKGREEN + "💡 Il simulatore suggerisce:" + colors.ENDC)
    print(colors.BOLD + f"👉 {scelta.nome}\n" + colors.ENDC)
    print("-" * 40 + "\n")

print_boxed("✅ Simulazione completata!")

print(colors.BOLD + "\n📜 Riepilogo delle tue decisioni:\n" + colors.ENDC)
for situazione, scelta in scelte_finali:
    print(f"- {situazione}: {scelta}")

print("\nGrazie per aver esplorato le tue decisioni!")
