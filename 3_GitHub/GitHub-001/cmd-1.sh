# To open the Desktop folder
cd Desktop

# To go back to the previous folder
cd ..

# To view the contents of the current directory
ls

# To create a new file with the text "Hello everyone"
echo Hello everyone > file.txt # For Windows and Unix

# To create a new empty text file
type nul > file.txt # For Windows and Unix
touch filename # For Unix

# To create a folder
mkdir folder_name

# To open a file in Visual Studio Code
code filename 

# Copy a file 
# (e.g.: I copy documentation.txt and paste it inside the Backup folder renaming it documentation_backup.txt)
cp Project/documentation.txt Project/Backup/documentation_backup.txt

# Move a file
mv Project/script.py Project/Sources/

# To show the current directory path
pwd # That is: Print Working Directory

# Flags are combined with Unix commands.
ls -l       # -l lists files in list order and shows read or write permissions (For Unix)
ls -a       # -a lists all files and directories, including hidden items (For Unix)

# Print the content in a file
cat file1.txt # Prints the file content to console

# Returns the word count in the file
wc file1.txt -w # Output: 181

# Pipes: allow you to pass the output of one command as input to another
ls 
# Output: file1.txt file2.txt
ls | wc -w
# Output: 2
cat file1.txt | wc -w
# Output: 
181
cat file1.txt file2.txt | wc -w
362
