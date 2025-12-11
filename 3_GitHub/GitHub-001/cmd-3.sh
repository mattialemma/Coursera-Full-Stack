# I have a text file called "names.txt" that contains an unsorted list of names

# Search for names that start with Sam
less name.txt # Open the file
grep sam names.txt # Search for names containing "sam" (case-sensitive)
grep -i Sam names.txt # Makes it case-insensitive
grep -w Sam names.txt # Get only names equal to Sam

# I can combine commands:
ls /folder | grep -i photo1

