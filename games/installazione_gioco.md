# Installazione Manuale per Utenti Non Tecnici

Questa guida ti aiuterà a eseguire il gioco *CH4 Drone Chase* anche se non hai mai usato il terminale o non conosci i comandi. Segui attentamente i passaggi!

---

## 1. Scaricare i file del progetto
1. Vai alla pagina ufficiale del progetto su [GitHub](https://github.com/francescosisini/Cnot-Franchise).
2. Cerca il pulsante verde con scritto **Code** in alto a destra.
3. Clicca su **Download ZIP**.
4. Una volta scaricato, trova il file ZIP nella cartella di download del tuo computer.
5. Fai clic con il tasto destro sul file ZIP e seleziona **Estrai tutto...**.
6. Segui le istruzioni per estrarre i file in una nuova cartella (ad esempio sul Desktop o in una cartella di tua scelta).

---

## 2. Installare Python e Pygame
Se non hai Python installato:
1. Vai su [python.org](https://www.python.org/downloads/) e scarica la versione più recente per Windows.
2. Durante l'installazione, **assicurati di selezionare l'opzione "Add Python to PATH"**.
3. Completa l'installazione.

Installare Pygame:
1. Apri il menu Start e digita **cmd** per aprire il Prompt dei Comandi.
2. Nel Prompt dei Comandi, digita il seguente comando e premi **Invio**:
   ```bash
   pip install pygame

Se ricevi un messaggio di errore, controlla che Python sia installato correttamente e che l'opzione "Add Python to PATH" sia stata selezionata.

## 3. Spostarti nella cartella del gioco
1. Vai nella cartella dove hai estratto i file (ad esempio sul Desktop).
2. Apri la sottocartella `games`.
3. Copia il percorso completo della cartella:
   - Su Windows, clicca con il tasto destro sulla barra degli indirizzi della cartella e seleziona **Copia come testo**.

Aprire il terminale e spostarti nella cartella:
1. Apri il menu Start, digita **cmd** e premi **Invio**.
2. Nel Prompt dei Comandi, digita il seguente comando, sostituendo `PERCORSO_CARTELLA` con il percorso della cartella che hai copiato:
   ```bash
   cd PERCORSO_CARTELLA

ad esempio

   ```bash
   cd C:\Users\TuoNome\Desktop\Cnot-Franchise-main\games

## 4. Eseguire il gioco
1. Nel Prompt dei Comandi, digita il seguente comando e premi Invio:
    ```bash
    python ch4dronechase.py

2. Il gioco dovrebbe avviarsi in una nuova finestra!


## Problemi Comuni

    - Errore: "pip non è riconosciuto come comando"
    Assicurati di aver selezionato l'opzione "Add Python to PATH" durante l'installazione di Python.
    - Il gioco non si avvia
    Controlla di aver scaricato tutti i file necessari e di essere nella cartella corretta.

Con questi passaggi, dovresti essere pronto a giocare! Buon divertimento!
