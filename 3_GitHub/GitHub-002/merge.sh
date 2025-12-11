# Performing a merge on two different branches: CONFLICT MANAGEMENT

# DEVELOPER 1
git pull
git checkout -b feauture1

# DEVELOPER 2
git pull
git checkout -b feautur2

# DEVELOPER 1
git add Feauture.js
git commit -m "Task: added functionality 1"
git pull origin main
git push -u origin feauture1

# DEVELOPER 2
git add Feauture.js
git commit -m "Task: added functionality 2"
git pull origin main

# Output:
From github.com:demo/demo-repo
 * branch            main       -> FETCH_HEAD
   9012934..d3b3cc0  main       -> origin/main
Auto-merging Feature.js
CONFLICT (content): Merge conflict in Feature.js
Automatic merge failed; fix conflicts and then commit the result.

git status

# Output:
On branch feature2
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   Feature.js

no changes added to commit (use "git add" and/or "git commit -a")

# To resolve the problem, developer 2 must compare the changes made by developer 1.

git log --merge

# Output:
commit 79bca730b68e5045b38b96bec35ad374f44fe4e3 (HEAD -> feature2)
Author: Developer 2 
<developer2@demo.com>
Date:   Sat Jan 29 16:55:40 2022 +0000

    chore: add feature 2

commit 678b0648107b7c53e90682f2eb8103c59f3cb0c0
Author: Developer 1 
<developer1@demo.com>
Date:   Sat Jan 29 16:53:40 2022 +0000

    chore: add feature 1

# Developer 2 now examines the specific differences:

git diff

# Output
diff --cc Feature.js
index 1b1136f,c3be92f..0000000
--- a/Feature.js
+++ b/Feature.js
@@@ -1,4 -1,4 +1,8 @@@
  let add = (a, b) => {
++<<<<<<< HEAD
 +  if(a + b > 10) { return 'way too much'}
++=======
+   if(a + b > 10){ return 'too much' }
++>>>>>>> d3b3cc0d9b6b084eef3e0afe111adf9fe612898e
    return a + b;
  }

# The difference is that developer 1 returned "too much" while developer 2 returned "way too much"
# Developer 2 can now fix the code:

let add = (a, b) => {
  if(a + b > 10) { return 'way too much'}
  return a + b;
}

# Developer 2 can now execute the commands for the pull request:
git add Feauture.js
git commit -m "fix merge conflicts"
git push -u origin feauture2
