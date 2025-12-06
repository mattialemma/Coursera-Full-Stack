# Per aprire la cartella Desktop
cd Desktop

# Per tornare alla cartella precedente
cd ..

# Per visionare il contenuti della directory corrente
ls

# Per creare un nuovo file con il testo "Ciao a tutti"
echo Ciao a tutti > file.txt # Per Windows e Unix

# Per creare un nuovo file di testo vuoto
type nul > file.txt # Per Windows e Unix
touch nome_file # Per Unix

# Per creare una cartella
mkdir nome_cartella

# Per aprire un file in Visual Studio Code
code nome_file 

# Copiare un file 
# (es: copio documentazione.txt e lo incollo all'interno della cartella Backup rinominandolo documentazione_backup.txt)
cp Progetto/documentazione.txt Progetto/Backup/documentazione_backup.txt

# Spostare un file
mv Progetto/script.py Progetto/Sorgenti/

# Per mostrare il percorso della directory corrente
pwd # Ovvero: Print Working Directory

# I flag sono combinati con i comandi Unix.
ls -l       # -l elenca i file in ordine di elenco e mostra i permessi di lettura o scrittura (Per Unix)
ls -a       # -a elenca tutti i file e le directory, compresi gli elementi nascosti (Per Unix)

# Stampa il contenuto in un file
cat file1.txt # Stampa a console il contenuto del file

# Restituisce il conteggio delle parole nel file
wc file1.txt -w # Output: 181

# Pipes: consentono di passare l'output di un comando come input a un altro
ls 
# Output: file1.txt file2.txt
ls | wc -w
# Output: 2
cat file1.txt | wc -w
# Output: 
181
cat file1.txt file2.txt | wc -w
362
