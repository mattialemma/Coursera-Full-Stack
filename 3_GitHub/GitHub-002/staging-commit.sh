
# Show changes and the branch I'm on
git status

# Add a .txt file
touch file1.txt

# Track the new file
git add file1.txt

# Run git status again
git status # Output: file1.txt is in commit phase (staging area)

# Remove the file from staging area
git restore --stage file1.txt

# Run git status again
git status # Output: file1.txt is not tracked

git add file1.txt
git status 


# Commit
git commit -m "Message one, hey"
