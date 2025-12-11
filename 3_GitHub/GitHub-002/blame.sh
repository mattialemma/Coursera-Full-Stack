# Git blame - Main commands
# Used to show who made changes to a file and when.

# -_-_-_-| MAIN COMMANDS |-_-_-_-

# See who modified each line of a file
git blame Feature.js

# See only lines 5 to 20
git blame -L 5,20 Feature.js

# Compact format (hash only)
git blame -s Feature.js

# -_-_-_-| OUTPUT EXAMPLE |-_-_-_-

# When we run "git blame Feature.js", we'll see:
#
# a1b2c3d4 (Mattia Lemma 2025-12-09 19:15:30 +0100 1) function calculate() {
# e5f6g7h8 (Mario Rossi  2025-11-20 14:22:15 +0100 2)   return x + y;
# a1b2c3d4 (Mattia Lemma 2025-12-09 19:15:30 +0100 3) }
#
# Legend:
# - a1b2c3d4 = commit hash
# - (Mattia Lemma...) = author and date
# - 1, 2, 3 = line number
# - function calculate()... = line content
