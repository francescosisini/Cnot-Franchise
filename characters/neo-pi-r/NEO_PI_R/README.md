# 🌟 NEO PI R – Esplora Te Stesso e le Tue Decisioni 🌟

La storia di Cnot come sai non è completamente inventata, nel senso che sebbene la situazione iniziale sia frutto di fantasia, in particolare ispirata al film TRON, le scelte dei personaggi hanno seguito un algoritmo che utilizza i loro profili di personalità


In questi progetto implementiamo un algoritmo decisionale quasi uguale a quello usato per Cnot e che utilizza un albero di decisioni basato sul tuo profilo NEO-PI-R, misurato su cinque dimensioni fondamentali:

- Nevroticismo (come gestisci ansia e stress)

- Estroversione (il tuo modo di relazionarti agli altri)

- Apertura all'esperienza (il tuo interesse per il nuovo e l'ignoto)

- Amicalità (la tua capacità di collaborare e fidarti)

- Coscienziosità (il tuo livello di organizzazione e autodisciplina)

Ognuna di queste dimensioni è divisa in 6 sfaccettature precise (facets), per un totale di 30 aspetti dettagliati che definiscono chi sei davvero.

---

Abbiamo pensato che sarbbe stato interessante condividere una versiona dell'algoritmo analoga a quella che abbiamo usato e... eccoci qui!

## 🚀 Cosa trovi in questo progetto?

- **Test NEO PI R interattivo** (`test_NEOPIR.py`): rispondi a 30 domande semplici per generare il tuo profilo personalizzato.
- **5 Situazioni intriganti** (`situazione_1.json` fino a `situazione_5.json`): scenari realistici per vedere come reagiresti in base al tuo profilo.
- **Simulatore decisionale** (`simulatore_situazioni.py`): uno script coinvolgente che utilizza il tuo profilo per mostrarti automaticamente la scelta migliore in ogni situazione.

---

## 📌 Come utilizzare questo progetto (istruzioni dettagliate):

### 1️⃣ Clona il repository

```bash
git clone https://github.com/francescosisini/Cnot-Franchise/tree/main/NEO_PI_R
cd NEO_PI_R
```

### 2️⃣ Installa le librerie necessarie

```bash
pip install reportlab matplotlib
```

### 3️⃣ Genera il tuo profilo psicologico

```bash
python test_NEOPIR.py
```
- Rispondi alle domande sulla scala da 1 a 5.
- Il tuo profilo verrà salvato automaticamente in un file `.json`.

### 4️⃣ Esplora le tue decisioni con il simulatore

```bash
python simulatore_situazioni.py
```
- Inserisci il nome del file `.json` generato al passo precedente.
- Guarda come il simulatore analizza le situazioni e ti suggerisce la scelta migliore in base al tuo profilo.

### 5️⃣ Situazioni incluse

- 🥳 **L'INVITO INATTESO**
- 🎯 **IL PROGETTO DI GRUPPO**
- 🎒 **IL VIAGGIO IMPROVVISO**
- 🛡️ **IL CONFLITTO TRA AMICI**
- 🎤 **LA SFIDA PUBBLICA**

Puoi modificare questi scenari o aggiungerne di nuovi editando i file JSON nella cartella del progetto.

---

## 💡 Perché usare questo progetto?

- **Autoconsapevolezza**: Comprendi meglio chi sei e cosa davvero desideri.
- **Decisioni consapevoli**: Scopri quali scelte sono più coerenti con la tua vera personalità.
- **Empatia e Relazioni**: Comprendi meglio anche le decisioni e comportamenti degli altri.

---

## 🛠️ Personalizzazioni avanzate

- **Generazione Report PDF**: il sistema può generare automaticamente report in PDF del tuo profilo (opzionale, richiede libreria `reportlab`).
- **Grafici**: Puoi creare grafici radar o a barre del tuo profilo utilizzando `matplotlib` (opzionale).

---

## 🎨 Personalizza e contribuisci!

Sentiti libero di espandere il progetto con nuovi scenari, migliorare le grafiche testuali, o aggiungere altre funzionalità interessanti. Pull request sono benvenute!

---

**✨ "Conoscere se stessi è il primo passo per vivere davvero" ✨**

