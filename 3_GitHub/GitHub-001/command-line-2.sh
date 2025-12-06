# Acquisire input e inserirlo in un file .txt (INPUT STANDARD)

cat > file.txt
Questo è il testo che va inserito nel file! # Ctrl + D per indicare  al comando cat che il file è terminato
cat < file.txt # Stampa a schermo il contenuto del file

# (OUTPUT STANDARD)
# Il comando:
ls > output.txt
# non mostrerà a schermo il percorso ls, ma lo salverà in un file chiamato output.txt
# in questo modo possiamo guardare il risultato anche in un secondo momento!

# Quando si verifica un errore,  l'input ha il segno di minore  e l'output ha il segno di maggiore
# L'errore è indicato con il numero 2

# Caso 1) Percorso inesistente, l'errore non viene stampato nel file .txt
ls -l /bin/usr > error.txt
# Output: ls: cannot access '/bin/usr': No such file or directory

# Caso 2) Solo l'output di errore viene scritto nel file error.txt, mentre l'output standard (se presente) viene visualizzato sullo schermo
ls -l /bin/usr 2> error.txt
less error.txt # Mostra il contenuto del file


# Caso 3) Sia l'output standard che l'output di errore vengono scritti nel file error_output.txt 
ls -l /bin/usr > error_output.txt 2>&1 
less error.txt 
