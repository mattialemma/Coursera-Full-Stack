
git checkout -B newBranch # Crea un nuovo branch e mi sposta su di esso

git branch newBranch2 # Crea un nuovo branch

# Capire in che branch mi trovo
git branch

# Creo file, faccio tracking, commit, push
touch text2.txt
git add text2.txt
git commit -m "New file"
git push -u origin newBranch

