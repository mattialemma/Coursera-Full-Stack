# Git diff - Comandi principali
# Serve a confrontare le differenze tra le versioni di un file, tra i commit e anche tra i rami (branches) di un progetto.

# Immagina di avere un diario in cui annoti le tue esperienze. 
# Se vuoi vedere cosa hai scritto in una versione precedente rispetto a quella attuale, 
# git diff ti mostra esattamente quali parole hai aggiunto o rimosso.

# ==========================================
# COMANDI PRINCIPALI
# ==========================================

# 1️⃣ Vedere modifiche NON ancora aggiunte (non staged)
git diff

# 2️⃣ Vedere modifiche GIÀ aggiunte con git add (staged)
git diff --staged

# 3️⃣ Confrontare con l'ultimo commit
git diff HEAD

# 4️⃣ Vedere solo i nomi dei file modificati
git diff --name-only

# ==========================================
# ESEMPIO DI OUTPUT
# ==========================================

# Quando esegui "git diff", vedrai qualcosa tipo:
#
# diff --git a/index.html b/index.html
# --- a/index.html
# +++ b/index.html
# @@ -10,3 +10,4 @@
#  <body>
# -    <h1>Titolo Vecchio</h1>
# +    <h1>Titolo Nuovo</h1>
# +    <p>Nuovo paragrafo</p>
#
# Legenda:
# - (rosso)  = linea rimossa
# + (verde)  = linea aggiunta

# ==========================================
# ESEMPI PRATICI
# ==========================================

# 1️⃣ VEDERE LE MODIFICHE NON ANCORA STAGED (più comune)
# Mostra le differenze tra la working directory e l'area di staging
git diff

# Esempio di output:
# diff --git a/index.html b/index.html
# index 1234567..abcdefg 100644
# --- a/index.html
# +++ b/index.html
# @@ -10,7 +10,8 @@
#  <body>
# -    <h1>Titolo Vecchio</h1>
# +    <h1>Titolo Nuovo</h1>
# +    <p>Paragrafo aggiunto</p>
#      <div class="container">

# Legenda output:
# - (rosso) = linea rimossa
# + (verde) = linea aggiunta
# @@ -10,7 +10,8 @@ = indica le righe modificate


# 2️⃣ VEDERE LE MODIFICHE GIÀ STAGED (pronte per il commit)
# Mostra cosa hai aggiunto con "git add" ma non ancora committato
git diff --staged
# oppure
git diff --cached


# 3️⃣ CONFRONTARE CON UN COMMIT SPECIFICO
# Vedere le differenze tra la working directory e un commit precedente
git diff HEAD         # confronta con l'ultimo commit
git diff HEAD~1       # confronta con il penultimo commit
git diff HEAD~2       # confronta con 2 commit fa
git diff abc1234      # confronta con un commit specifico (usa l'hash)


# 4️⃣ CONFRONTARE DUE COMMIT TRA LORO
git diff commit1 commit2
# Esempio:
git diff abc1234 def5678
git diff HEAD~3 HEAD~1


# 5️⃣ CONFRONTARE DUE BRANCH
git diff main feature-branch        # vede le differenze tra due branch
git diff main..feature-branch       # stesso risultato
git diff main...feature-branch      # mostra solo le modifiche uniche del feature-branch


# 6️⃣ VEDERE LE MODIFICHE DI UN FILE SPECIFICO
git diff index.html                 # solo per index.html (non staged)
git diff --staged style.css         # solo per style.css (staged)
git diff HEAD~1 script.js           # confronta script.js con il commit precedente


# 7️⃣ VEDERE SOLO I NOMI DEI FILE MODIFICATI (senza dettagli)
git diff --name-only                # lista solo i nomi dei file
git diff --name-status              # lista file con status (M=modified, A=added, D=deleted)


# 8️⃣ VEDERE LE STATISTICHE DELLE MODIFICHE
git diff --stat                     # mostra quante righe aggiunte/rimosse per file
# Esempio output:
#  index.html | 5 +++--
#  style.css  | 12 ++++++++++++
#  2 files changed, 15 insertions(+), 2 deletions(-)


# 9️⃣ IGNORARE GLI SPAZI BIANCHI
git diff -w                         # ignora differenze negli spazi
git diff --ignore-all-space         # stesso risultato


# 🔟 VEDERE LE MODIFICHE DELL'ULTIMO COMMIT
git show                            # mostra l'ultimo commit con le sue modifiche
git show HEAD~1                     # mostra il penultimo commit


# ==========================================
# CASO D'USO PRATICO - WORKFLOW TIPICO
# ==========================================

# Scenario: Hai modificato alcuni file e vuoi verificare prima di committare

# Passo 1: Vedi cosa hai modificato
git diff

# Passo 2: Aggiungi i file che vuoi committare
git add index.html style.css

# Passo 3: Verifica cosa stai per committare
git diff --staged

# Passo 4: Se tutto ok, committa
git commit -m "Aggiornato layout homepage"

# Passo 5: Verifica cosa hai committato
git show


# ==========================================
# TIPS UTILI
# ==========================================

# ✅ Usa git diff prima di "git add" per vedere cosa stai per aggiungere
# ✅ Usa git diff --staged prima di "git commit" per verificare cosa stai committando
# ✅ Usa git diff --name-only per una vista rapida dei file modificati
# ✅ Combina con grep per cercare modifiche specifiche: git diff | grep "parola"
