# Git blame - Comandi principali
# Serve a mostrare chi ha fatto le modifiche su un file e quando.

git blame Feauture.js
# Output: 1234567890 (User <email>) 10m ago

# 1234567890 è l'autore del commit


# Mostra le modifiche tra le righe 5 e 20 del file Feauture.js
git blame -L 5, 20 Feauture.js
