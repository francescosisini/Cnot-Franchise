# Il Duello dei Moti

"Il Duello dei Moti" è una simulazione realizzata in Python con Pygame che mette a confronto due tipi di movimento:
- **Moto Sinusoidale** (rappresentato dalla palla rossa), che simula un movimento arbitrario e oscillatorio.
- **Moto Parabolico con Attrito** (rappresentato dalla palla verde), che segue le vere leggi della fisica.

Questa simulazione trae ispirazione dal libro **Cnot** e dal modo in cui i personaggi del libro prendono le loro decisioni basandosi su un algoritmo fondato sul profilo **NEO PI R**. In questo contesto, la palla verde rappresenta le scelte guidate da principi solidi e verificabili, proprio come il sistema decisionale dei personaggi, mentre la palla rossa simboleggia scelte più creative e meno vincolate da regole rigide.

## Contesto e Ispirazione

Il progetto **Cnot** (disponibile [qui](https://github.com/francescosisini/Cnot-Franchise/tree/main)) esplora il modo in cui i personaggi possono prendere decisioni utilizzando un algoritmo ispirato al profilo **NEO PI R**, uno strumento consolidato per la valutazione della personalità. Questa simulazione si propone come una metafora visiva:
- **La palla rossa** si muove seguendo un percorso sinusoidale, simbolo di scelte più fluide e imprevedibili.
- **La palla verde** segue invece un moto parabolico, determinato dalle leggi della fisica (gravità, attrito, rimbalzo), e rappresenta così decisioni basate su logica e precisione algoritmica.

## Descrizione della Simulazione

- **Palla Rossa (Moto Sinusoidale):**
  - Si muove in maniera oscillatoria grazie a una funzione seno che ne regola il moto verticale.
  - Rappresenta un approccio creativo e arbitrario alle scelte.

- **Palla Verde (Moto Parabolico con Attrito):**
  - Segue un percorso determinato dalla gravità e dall'attrito, con rimbalzi realistici.
  - Simboleggia le scelte basate su un algoritmo robusto, in analogia con il profilo **NEO PI R** e le decisioni logiche dei personaggi del libro.

## Istruzioni per l'Esecuzione

1. **Prerequisiti:**  
   - **Python 3**  
   - **Pygame:** installabile con  
     ```bash
     pip install pygame
     ```  
   - I file audio necessari (ad es. `bounce.wav`, `bin.wav`, `rotola.wav`) devono essere presenti nella stessa cartella del codice.

2. **Clonare il Repository:**  
   Scarica o clona il repository del progetto dal [Cnot Franchise](https://github.com/francescosisini/Cnot-Franchise/tree/main).

3. **Esecuzione della Simulazione:**  
   Avvia lo script Python:
   ```bash
   python nome_del_file.py

All'avvio, verrà mostrata una schermata di attesa con il messaggio "Premi un tasto per iniziare". L'animazione partirà solo dopo che l'utente avrà premuto un tasto, garantendo che la simulazione inizi "da zero".

4. Osservazione della Simulazione:
      -  Palla Rossa: si muove seguendo un percorso sinusoidale, simbolo delle scelte creative.
      -  Palla Verde: segue un moto parabolico con attrito, rappresentando decisioni basate su leggi fisiche precise, in analogia con l'algoritmo del profilo NEO PI R.

## Conclusioni

"Il Duello dei Moti" è una metafora visiva che esplora il contrasto tra due approcci decisionali:

    - Creatività vs. Razionalità:
    La palla rossa, con il suo moto sinusoidale, simboleggia l'approccio creativo e imprevedibile, mentre la palla verde, seguendo un percorso basato sulle leggi della fisica, rappresenta decisioni logiche e strutturate.

    - Algoritmo e Personalità:
    I personaggi del libro Cnot prendono decisioni basandosi su un algoritmo ispirato al profilo NEO PI R. In maniera simile, la palla verde segue "le vere leggi" del moto, suggerendo che anche nelle scelte quotidiane un approccio basato su regole ben definite possa portare a risultati coerenti e prevedibili.

Questo progetto fonde arte, fisica e algoritmi decisionali, offrendo un'interessante prospettiva su come la scienza e la creatività possano interagire nel processo decisionale.
Riferimenti

    Cnot Franchise su GitHub
    NEO PI R: Uno strumento di valutazione della personalità che ha ispirato l'algoritmo decisionale dei personaggi nel libro Cnot.


   
