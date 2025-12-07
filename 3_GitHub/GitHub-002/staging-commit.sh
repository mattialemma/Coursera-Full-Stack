
# Mostra le modifiche e il branch in cui mi trovo
git status

# Aggiungo un file .txt
touch file1.txt

# Tracciare il nuovo file
git add file1.txt

# Rieseguo git status
git status # Output: file1.txt è in fase di commit (area di staging)

# Rimuove il file dall'area di staging
git restore --stage file1.txt

# Rieseguo git status
git status # Output: file1.txt non è tracciato

git add file1.txt
git status 


# Commit
git commit -m "Message one, hey"
