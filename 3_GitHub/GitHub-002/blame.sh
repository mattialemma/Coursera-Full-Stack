# Git blame - Comandi principali
# Serve a mostrare chi ha fatto le modifiche su un file e quando.

# -_-_-_-| COMANDI PRINCIPALI |-_-_-_-

# Vedere chi ha modificato ogni riga di un file
git blame Feature.js

# Vedere solo le righe da 5 a 20
git blame -L 5,20 Feature.js

# Formato compatto (solo hash)
git blame -s Feature.js

# -_-_-_-| ESEMPIO DI OUTPUT |-_-_-_-

# Quando eseguiamo "git blame Feature.js", vedremo:
#
# a1b2c3d4 (Mattia Lemma 2025-12-09 19:15:30 +0100 1) function calculate() {
# e5f6g7h8 (Mario Rossi  2025-11-20 14:22:15 +0100 2)   return x + y;
# a1b2c3d4 (Mattia Lemma 2025-12-09 19:15:30 +0100 3) }
#
# Legenda:
# - a1b2c3d4 = hash del commit
# - (Mattia Lemma...) = autore e data
# - 1, 2, 3 = numero di riga
# - function calculate()... = contenuto della riga
