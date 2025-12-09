# 3️⃣ Version Control (Git & GitHub)

**Data completamento**: 09/12/2025  
**Stato**: ✅ Completato

---

## 📖 Descrizione del Modulo

Questo modulo copre i fondamenti del version control con Git e GitHub, strumenti essenziali per lo sviluppo software moderno.

### Argomenti trattati:
- Introduzione a GitHub e al versioning
- Sistemi di versioning distribuiti vs centralizzati
- Unix e comandi da terminale
- Editor Vim
- Principali comandi di Git e GitHub
- Esercizi pratici e laboratori online

---

## 📁 Contenuto del Modulo

### GitHub-001
- `cmd-1.sh` - Comandi base di Git
- `cmd-2.sh` - Comandi avanzati
- `cmd-3.sh` - Workflow Git
- `explanation-cmd-2.md` - Spiegazioni dettagliate

### GitHub-002
- `diff.sh` - Comandi `git diff` con esempi
- `blame.sh` - Comandi `git blame` con esempi
- `branch.sh` - Gestione branch
- `merge.sh` - Merge e risoluzione conflitti
- `staging-commit.sh` - Area di staging e commit
- `fork.md` - Guida alle fork su GitHub

---

## 🛠️ Comandi Git Principali

### Configurazione iniziale
```bash
git config --global user.name "Nome Cognome"
git config --global user.email "email@example.com"
```

### Repository
```bash
git init                    # Inizializza repository
git clone <url>             # Clona repository remoto
git status                  # Stato del repository
```

### Staging e Commit
```bash
git add <file>              # Aggiungi file allo staging
git add .                   # Aggiungi tutti i file
git commit -m "messaggio"   # Crea commit
git diff                    # Vedi modifiche non staged
git diff --staged           # Vedi modifiche staged
```

### Branch
```bash
git branch                  # Lista branch
git branch <nome>           # Crea branch
git checkout <branch>       # Cambia branch
git merge <branch>          # Merge branch
```

### Remote
```bash
git remote add origin <url> # Aggiungi remote
git push origin main        # Push su remote
git pull                    # Pull da remote
git fetch                   # Scarica aggiornamenti
```

### Cronologia
```bash
git log                     # Cronologia commit
git show                    # Mostra ultimo commit
git blame <file>            # Mostra autori per riga
```

---

## 🌐 GitHub Features

### Repository
- Creazione e gestione repository
- README.md e documentazione
- .gitignore per file da escludere
- LICENSE per licenze open source

### Collaborazione
- **Fork**: Copia di un repository sul tuo account
- **Pull Request**: Proposta di modifiche
- **Issues**: Tracciamento bug e feature
- **Projects**: Gestione progetti

### Workflow
1. Fork del repository
2. Clone in locale
3. Creazione branch per feature
4. Commit e push
5. Pull Request
6. Code review
7. Merge

---

## 🔄 CI/CD - Continuous Integration, Delivery, and Deployment

Pratiche fondamentali nello sviluppo software moderno, specialmente nella metodologia Agile.

### Continuous Integration (CI)
Gli sviluppatori integrano frequentemente il codice in un repository condiviso. Ogni integrazione viene verificata automaticamente attraverso test.

**Analogia**: Come costruire un puzzle - ogni volta che aggiungi un pezzo, controlli se si incastra bene con gli altri.

**Benefici**:
- Identificazione rapida dei problemi
- Riduzione dei conflitti di merge
- Feedback immediato sulla qualità del codice

### Continuous Delivery (CD)
Il software è sempre in uno stato pronto per essere rilasciato in produzione.

**Analogia**: Come avere un piatto pronto in cucina - puoi servirlo quando vuoi, senza dover cucinare all'ultimo minuto.

**Benefici**:
- Deploy rapidi e affidabili
- Riduzione del rischio
- Feedback veloce dagli utenti

### Continuous Deployment
Ogni modifica che supera i test automatici viene automaticamente distribuita in produzione, senza intervento manuale.

**Analogia**: Come un ristorante che serve automaticamente i piatti appena pronti, senza aspettare il cameriere.

**Benefici**:
- Rilasci frequenti
- Automazione completa
- Time-to-market ridotto

---

## 📚 Risorse

- [Git Cheat Sheet](github-git-cheat-sheet.pdf)
- [Documentazione Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)

---

## ✅ Competenze Acquisite

- ✅ Configurazione e utilizzo di Git
- ✅ Gestione di repository locali e remoti
- ✅ Branching e merging
- ✅ Risoluzione conflitti
- ✅ Utilizzo di GitHub per collaborazione
- ✅ Fork e Pull Request
- ✅ Comprensione di CI/CD
- ✅ Best practices per version control
