# Ho un file di testo chiamato "names.txt" che contiene una lista non ordinata di nomi

# Cerco i nomi che iniziano con Sam
less name.txt # Apro il file
grep sam names.txt # Cerco i nomi che contengono "sam" (case-sensitive)
grep -i Sam names.txt # Diventa case-insensitive
grep -w Sam names.txt # Ottengo solo i nomi uguali a Sam

# Posso combinare i comandi:
ls /folder | grep -i foto1

