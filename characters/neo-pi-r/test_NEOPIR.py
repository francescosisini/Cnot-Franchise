import json

# Lista delle domande NEO PI R
questions = {
    "Nevroticismo_Ansieta": "Ti senti spesso preoccupato o in ansia anche senza un motivo chiaro?",
    "Nevroticismo_Rabbia": "Ti irriti facilmente quando qualcosa va storto?",
    "Nevroticismo_Depressione": "Ti senti frequentemente triste o giù di morale?",
    "Nevroticismo_Imbarazzo": "Ti senti a disagio in situazioni sociali nuove?",
    "Nevroticismo_Impulsivita": "Ti capita spesso di agire d'impulso senza riflettere?",
    "Nevroticismo_Vulnerabilita": "Ti senti facilmente sopraffatto dalle difficoltà?",

    "Estroversione_Cordialita": "Ti consideri una persona amichevole e calorosa?",
    "Estroversione_Gregarieta": "Ti senti a tuo agio in mezzo a gruppi numerosi di persone?",
    "Estroversione_Assertivita": "Ti senti a tuo agio a prendere la parola e dirigere le situazioni?",
    "Estroversione_Attivita": "Sei una persona sempre attiva e piena di energia?",
    "Estroversione_RicercaEccitazione": "Cerchi spesso situazioni nuove ed eccitanti?",
    "Estroversione_EmozioniPositive": "Ti senti spesso allegro e pieno di entusiasmo?",

    "Apertura_Fantasia": "Ti piace fantasticare e immaginare scenari alternativi alla realtà?",
    "Apertura_Estetica": "Apprezzi profondamente l'arte e la bellezza?",
    "Apertura_Sentimenti": "Ti senti in contatto con le tue emozioni?",
    "Apertura_Azioni": "Ti piace provare attività nuove e diverse dal solito?",
    "Apertura_Idee": "Ti interessa esplorare idee non convenzionali o insolite?",
    "Apertura_Valori": "Metti spesso in discussione le regole e i valori tradizionali?",

    "Amicalita_Fiducia": "Tendi a fidarti facilmente degli altri?",
    "Amicalita_Moralita": "Ti impegni ad essere sincero anche quando non conviene?",
    "Amicalita_Altruismo": "Ti viene naturale aiutare gli altri senza aspettarti nulla in cambio?",
    "Amicalita_Collaborazione": "Sei disposto a mettere da parte i tuoi interessi per il bene comune?",
    "Amicalita_Modestia": "Eviti di vantarti anche quando avresti motivo di farlo?",
    "Amicalita_Sensibilita": "Ti commuovi facilmente per le emozioni altrui?",

    "Coscienziosita_Competenza": "Ti ritieni una persona capace ed efficace nelle cose che fai?",
    "Coscienziosita_Ordine": "Ti piace mantenere le cose ordinate e organizzate?",
    "Coscienziosita_SensoDelDovere": "Ti senti in obbligo di portare a termine ciò che inizi?",
    "Coscienziosita_RicercaSuccesso": "Ti impegni per raggiungere i tuoi obiettivi personali?",
    "Coscienziosita_Autodisciplina": "Riesci a mantenere la concentrazione fino a completare i tuoi compiti?",
    "Coscienziosita_Prudenza": "Rifletti attentamente prima di agire?"
}

profile = {}
print("\n✨ Benvenuto al test NEO PI R ✨")
print("Rispondi alle seguenti domande su una scala da 1 (per niente vero) a 5 (molto vero)\n")

for facet, question in questions.items():
    while True:
        try:
            answer = int(input(f"{question} [1-5]: "))
            if 1 <= answer <= 5:
                profile[facet] = (answer - 1) * 25
                break
            else:
                print("Per favore inserisci un numero tra 1 e 5.")
        except ValueError:
            print("Inserisci un numero valido.")

# Calcolo delle dimensioni
dimensions = ["Nevroticismo", "Estroversione", "Apertura", "Amicalita", "Coscienziosita"]
for dim in dimensions:
    facets_dim = [f for f in profile if f.startswith(dim)]
    profile[dim] = round(sum(profile[f] for f in facets_dim) / len(facets_dim), 2)

# Feedback automatico
print("\n🌀 Il tuo profilo:")
for dim in dimensions:
    print(f"- {dim}: {profile[dim]}")
    if profile[dim] >= 70:
        print("   • Alta: Questo tratto è molto presente.")
    elif profile[dim] <= 30:
        print("   • Bassa: Questo tratto è poco presente.")
    else:
        print("   • Media: Tendenza equilibrata.")

# Salvataggio
filename = input("\nNome del file per salvare il profilo (esempio: mio_profilo.json): ")
with open(filename, "w") as f:
    json.dump(profile, f, indent=4)

print(f"\n✅ Profilo salvato in {filename}!")
print("Ora puoi usarlo con il simulatore di decisioni!")
