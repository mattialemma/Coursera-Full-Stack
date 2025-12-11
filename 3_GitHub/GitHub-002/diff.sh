# Git diff - Main commands
# Used to compare differences between file versions, between commits, and also between project branches.

# Imagine having a diary where you write down your experiences. 
# If you want to see what you wrote in a previous version compared to the current one, 
# git diff shows you exactly which words you added or removed.

# ==========================================
# MAIN COMMANDS
# ==========================================

# 1️⃣ See changes NOT yet added (not staged)
git diff

# 2️⃣ See changes ALREADY added with git add (staged)
git diff --staged

# 3️⃣ Compare with the last commit
git diff HEAD

# 4️⃣ See only the names of modified files
git diff --name-only

# ==========================================
# OUTPUT EXAMPLE
# ==========================================

# When you run "git diff", you'll see something like:
#
# diff --git a/index.html b/index.html
# --- a/index.html
# +++ b/index.html
# @@ -10,3 +10,4 @@
#  <body>
# -    <h1>Old Title</h1>
# +    <h1>New Title</h1>
# +    <p>New paragraph</p>
#
# Legend:
# - (red)  = removed line
# + (green)  = added line

# ==========================================
# PRACTICAL EXAMPLES
# ==========================================

# 1️⃣ SEE CHANGES NOT YET STAGED (most common)
# Shows differences between working directory and staging area
git diff

# Example output:
# diff --git a/index.html b/index.html
# index 1234567..abcdefg 100644
# --- a/index.html
# +++ b/index.html
# @@ -10,7 +10,8 @@
#  <body>
# -    <h1>Old Title</h1>
# +    <h1>New Title</h1>
# +    <p>Added paragraph</p>
#      <div class="container">

# Output legend:
# - (red) = removed line
# + (green) = added line
# @@ -10,7 +10,8 @@ = indicates modified lines


# 2️⃣ SEE CHANGES ALREADY STAGED (ready for commit)
# Shows what you added with "git add" but haven't committed yet
git diff --staged
# or
git diff --cached


# 3️⃣ COMPARE WITH A SPECIFIC COMMIT
# See differences between working directory and a previous commit
git diff HEAD         # compare with last commit
git diff HEAD~1       # compare with second-to-last commit
git diff HEAD~2       # compare with 2 commits ago
git diff abc1234      # compare with a specific commit (use hash)


# 4️⃣ COMPARE TWO COMMITS WITH EACH OTHER
git diff commit1 commit2
# Example:
git diff abc1234 def5678
git diff HEAD~3 HEAD~1


# 5️⃣ COMPARE TWO BRANCHES
git diff main feature-branch        # see differences between two branches
git diff main..feature-branch       # same result
git diff main...feature-branch      # shows only unique changes of feature-branch


# 6️⃣ SEE CHANGES OF A SPECIFIC FILE
git diff index.html                 # only for index.html (not staged)
git diff --staged style.css         # only for style.css (staged)
git diff HEAD~1 script.js           # compare script.js with previous commit


# 7️⃣ SEE ONLY NAMES OF MODIFIED FILES (without details)
git diff --name-only                # list only file names
git diff --name-status              # list files with status (M=modified, A=added, D=deleted)


# 8️⃣ SEE MODIFICATION STATISTICS
git diff --stat                     # shows how many lines added/removed per file
# Example output:
#  index.html | 5 +++--
#  style.css  | 12 ++++++++++++
#  2 files changed, 15 insertions(+), 2 deletions(-)


# 9️⃣ IGNORE WHITESPACE
git diff -w                         # ignore whitespace differences
git diff --ignore-all-space         # same result


# 🔟 SEE CHANGES OF THE LAST COMMIT
git show                            # shows last commit with its changes
git show HEAD~1                     # shows second-to-last commit


# ==========================================
# PRACTICAL USE CASE - TYPICAL WORKFLOW
# ==========================================

# Scenario: You modified some files and want to verify before committing

# Step 1: See what you modified
git diff

# Step 2: Add the files you want to commit
git add index.html style.css

# Step 3: Verify what you're about to commit
git diff --staged

# Step 4: If everything is ok, commit
git commit -m "Updated homepage layout"

# Step 5: Verify what you committed
git show


# ==========================================
# USEFUL TIPS
# ==========================================

# ✅ Use git diff before "git add" to see what you're about to add
# ✅ Use git diff --staged before "git commit" to verify what you're committing
# ✅ Use git diff --name-only for a quick view of modified files
# ✅ Combine with grep to search for specific changes: git diff | grep "word"
