# Acquire input and insert it into a .txt file (STANDARD INPUT)

cat > file.txt
This is the text to be inserted into the file! # Ctrl + D to indicate to the cat command that the file is finished
cat < file.txt # Prints the file content to screen

# (STANDARD OUTPUT)
# The command:
ls > output.txt
# will not show the ls path on screen, but will save it in a file called output.txt
# this way we can view the result later!

# When an error occurs, input has the less-than sign and output has the greater-than sign
# The error is indicated with the number 2

# Case 1) Non-existent path, the error is not printed in the .txt file
ls -l /bin/usr > error.txt
# Output: ls: cannot access '/bin/usr': No such file or directory

# Case 2) Only the error output is written to the error.txt file, while the standard output (if present) is displayed on the screen
ls -l /bin/usr 2> error.txt
less error.txt # Shows the file content


# Case 3) Both standard output and error output are written to the error_output.txt file 
ls -l /bin/usr > error_output.txt 2>&1 
less error.txt 
