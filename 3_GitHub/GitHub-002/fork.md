# Git Fork

A fork is an operation that allows you to **create a copy of a remote repository** on your GitHub account.

## How it works

1. **Fork on GitHub**: 
You click the "Fork" button on someone else's repository → GitHub creates a complete copy in your account

2. **Clone locally**: 
You download your fork to your computer
   ```bash
   git clone https://github.com/YOUR-USERNAME/repo-name.git
   ```

3. **Changes**: Work on your copy, make commits and push

4. **Pull Request**: 
When you want to contribute to the original project, you create a Pull Request to propose your changes

## When to use

- ✅ Contributing to open source projects
- ✅ Experimenting with others' code without risks
- ✅ Creating your own customized version of a project

## Difference with Clone

- **Clone**: Copy only locally, not on GitHub
- **Fork**: Creates a copy on GitHub + then you clone it locally

## Practical example

```bash
# 1. Fork on GitHub (via web interface)
# 2. Clone your fork
git clone https://github.com/mattialemma/react.git

# 3. Work and commit
git add .
git commit -m "Added new feature"
git push

# 4. Create Pull Request on GitHub to propose changes to the original repository
```
