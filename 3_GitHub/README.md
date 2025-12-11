# 3️⃣ Version Control (Git & GitHub)

**Completion Date**: 12/09/2025  
**Status**: ✅ Completed

---

## 📖 Module Description

This module covers the fundamentals of version control with Git and GitHub, essential tools for modern software development.

### Topics Covered:
- Introduction to GitHub and versioning
- Distributed vs centralized versioning systems
- Unix and terminal commands
- Vim editor
- Main Git and GitHub commands
- Practical exercises and online labs

---

## 📁 Module Content

### GitHub-001
- `cmd-1.sh` - Basic Git commands
- `cmd-2.sh` - Advanced commands
- `cmd-3.sh` - Git workflow
- `explanation-cmd-2.md` - Detailed explanations

### GitHub-002
- `diff.sh` - `git diff` commands with examples
- `blame.sh` - `git blame` commands with examples
- `branch.sh` - Branch management
- `merge.sh` - Merge and conflict resolution
- `staging-commit.sh` - Staging area and commits
- `fork.md` - GitHub fork guide

---

## 🛠️ Main Git Commands

### Initial Configuration
```bash
git config --global user.name "First Last"
git config --global user.email "email@example.com"
```

### Repository
```bash
git init                    # Initialize repository
git clone <url>             # Clone remote repository
git status                  # Repository status
```

### Staging and Commit
```bash
git add <file>              # Add file to staging
git add .                   # Add all files
git commit -m "message"     # Create commit
git diff                    # See unstaged changes
git diff --staged           # See staged changes
```

### Branch
```bash
git branch                  # List branches
git branch <name>           # Create branch
git checkout <branch>       # Switch branch
git merge <branch>          # Merge branch
```

### Remote
```bash
git remote add origin <url> # Add remote
git push origin main        # Push to remote
git pull                    # Pull from remote
git fetch                   # Download updates
```

### History
```bash
git log                     # Commit history
git show                    # Show last commit
git blame <file>            # Show authors per line
```

---

## 🌐 GitHub Features

### Repository
- Creating and managing repositories
- README.md and documentation
- .gitignore for files to exclude
- LICENSE for open source licenses

### Collaboration
- **Fork**: Copy of a repository to your account
- **Pull Request**: Proposal for changes
- **Issues**: Bug and feature tracking
- **Projects**: Project management

### Workflow
1. Fork the repository
2. Clone locally
3. Create branch for feature
4. Commit and push
5. Pull Request
6. Code review
7. Merge

---

## 🔄 CI/CD - Continuous Integration, Delivery, and Deployment

Fundamental practices in modern software development, especially in Agile methodology.

### Continuous Integration (CI)
Developers frequently integrate code into a shared repository. Each integration is automatically verified through tests.

**Analogy**: Like building a puzzle - every time you add a piece, you check if it fits well with the others.

**Benefits**:
- Rapid problem identification
- Reduced merge conflicts
- Immediate feedback on code quality

### Continuous Delivery (CD)
The software is always in a state ready to be released to production.

**Analogy**: Like having a ready dish in the kitchen - you can serve it whenever you want, without having to cook at the last minute.

**Benefits**:
- Fast and reliable deploys
- Risk reduction
- Quick feedback from users

### Continuous Deployment
Every change that passes automated tests is automatically deployed to production, without manual intervention.

**Analogy**: Like a restaurant that automatically serves dishes as soon as they're ready, without waiting for the waiter.

**Benefits**:
- Frequent releases
- Complete automation
- Reduced time-to-market

---

## 📚 Resources

- [Git Cheat Sheet](github-git-cheat-sheet.pdf)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)

---

## ✅ Skills Acquired

- ✅ Configuration and use of Git
- ✅ Managing local and remote repositories
- ✅ Branching and merging
- ✅ Conflict resolution
- ✅ Using GitHub for collaboration
- ✅ Fork and Pull Request
- ✅ Understanding CI/CD
- ✅ Best practices for version control
