# Code Styling and Formatting Guide

This document provides comprehensive information about the automated code styling and formatting setup for the PayTM Clone project.

## 🎯 Overview

We use a combination of tools to ensure consistent code quality and formatting:

- **Prettier**: Automatic code formatting
- **ESLint**: Code quality and style linting
- **Husky**: Git hooks for automation
- **lint-staged**: Run linters on staged files
- **GitHub Actions**: CI/CD formatting checks

## 🛠️ Tools Configuration

### Prettier Configuration (`.prettierrc`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "jsxSingleQuote": true,
  "proseWrap": "preserve"
}
```

### ESLint Configuration

#### Frontend (React/Vite)

- Extends: `eslint:recommended`, `plugin:react/recommended`, `plugin:prettier/recommended`
- Plugins: `react-refresh`, `prettier`
- Rules: Prettier integration, React best practices, modern JavaScript

#### Backend (Node.js/Express)

- Extends: `eslint:recommended`, `plugin:prettier/recommended`
- Environment: Node.js
- Rules: Prettier integration, Node.js best practices, security rules

## 📝 Available Scripts

### Root Level Commands

```bash
# Install all dependencies
npm run install:all

# Development
npm run dev                 # Start both frontend and backend
npm run dev:frontend        # Start only frontend
npm run dev:backend         # Start only backend

# Formatting
npm run format              # Format all files
npm run format:check        # Check formatting without changes

# Linting
npm run lint                # Lint all projects
npm run lint:fix            # Fix linting issues
npm run lint:frontend       # Lint only frontend
npm run lint:backend        # Lint only backend
npm run lint:fix:frontend   # Fix frontend linting issues
npm run lint:fix:backend    # Fix backend linting issues

# Build
npm run build               # Build frontend for production
```

### Frontend Specific Commands

```bash
cd frontend

npm run dev                 # Start development server
npm run build               # Build for production
npm run lint                # Run ESLint
npm run lint:fix            # Fix ESLint issues
npm run format              # Format frontend files
npm run format:check        # Check frontend formatting
npm run preview             # Preview production build
```

### Backend Specific Commands

```bash
cd backend

npm run dev                 # Start development server
npm run start               # Start production server
npm run lint                # Run ESLint
npm run lint:fix            # Fix ESLint issues
npm run format              # Format backend files
npm run format:check        # Check backend formatting
```

## 🔧 Development Workflow

### 1. Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd paytm-clone

# Install all dependencies
npm run install:all

# Verify setup
npm run format:check
npm run lint
```

### 2. Daily Development

```bash
# Start development servers
npm run dev

# Make your changes...

# Before committing (optional - pre-commit hooks will do this automatically)
npm run format
npm run lint:fix

# Commit your changes
git add .
git commit -m "feat: add new feature"
# Pre-commit hooks will automatically run formatting and linting
```

### 3. Pre-commit Hooks

The pre-commit hooks automatically:

1. Run Prettier on staged files
2. Run ESLint with auto-fix on staged files
3. Block the commit if there are unfixable linting errors

### 4. CI/CD Pipeline

GitHub Actions automatically:

1. Check Prettier formatting
2. Run ESLint on both frontend and backend
3. Build the frontend
4. Report any issues in pull requests

## 🎨 VSCode Integration

### Recommended Extensions

The project includes VSCode extension recommendations (`.vscode/extensions.json`):

- **Prettier - Code formatter**: Automatic formatting
- **ESLint**: Real-time linting
- **Tailwind CSS IntelliSense**: Tailwind CSS support
- **Path Intellisense**: Auto-complete for file paths
- **Auto Rename Tag**: Automatically rename paired HTML/JSX tags
- **Error Lens**: Inline error highlighting
- **Code Spell Checker**: Spell checking for code

### VSCode Settings

The project includes optimized VSCode settings (`.vscode/settings.json`):

- Format on save enabled
- ESLint auto-fix on save
- Prettier as default formatter
- Tailwind CSS support
- Consistent line endings (LF)
- Trim trailing whitespace

## 🚨 Troubleshooting

### Common Issues

#### 1. Pre-commit hooks not running

```bash
# Reinstall Husky
npm run prepare
# or
npx husky install
```

#### 2. Formatting conflicts

```bash
# Reset formatting
npm run format
git add .
git commit -m "style: fix formatting"
```

#### 3. ESLint errors

```bash
# Try auto-fix first
npm run lint:fix

# If issues persist, check the specific error messages
npm run lint
```

#### 4. VSCode not formatting

1. Check if Prettier extension is installed and enabled
2. Verify `.prettierrc` file exists
3. Check VSCode settings for default formatter
4. Restart VSCode

### Debugging Commands

```bash
# Check Prettier configuration
npx prettier --find-config-path .

# Check ESLint configuration
npx eslint --print-config frontend/src/App.jsx

# Test pre-commit hooks manually
npx lint-staged

# Check Husky installation
ls -la .husky/
```

## 📋 Best Practices

### 1. Commit Messages

- Use conventional commit format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Keep formatting changes separate from logic changes

### 2. Pull Requests

- Ensure all CI checks pass
- Run `npm run format:check` and `npm run lint` locally before pushing
- Include screenshots for UI changes
- Keep PRs focused and atomic

### 3. Code Organization

- Follow the existing project structure
- Use meaningful file and variable names
- Add comments for complex logic
- Keep functions small and focused

### 4. Performance

- Use React best practices (hooks, memoization)
- Optimize bundle size
- Follow Node.js performance guidelines
- Use proper error handling

## 🔄 Updating the Configuration

### Adding New ESLint Rules

1. Update the appropriate `.eslintrc.cjs` file
2. Run `npm run lint:fix` to apply changes
3. Test with `npm run lint`
4. Update this guide if needed

### Modifying Prettier Settings

1. Update `.prettierrc`
2. Run `npm run format` to reformat all files
3. Commit the formatting changes separately
4. Update this guide if needed

### Adding New Scripts

1. Add to the appropriate `package.json`
2. Test the script
3. Update documentation
4. Consider adding to CI/CD pipeline if needed

## 📚 Additional Resources

- [Prettier Documentation](https://prettier.io/docs/en/)
- [ESLint Documentation](https://eslint.org/docs/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

For questions or issues with the styling setup, please create an issue or refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file.
