# Contributing to PayTM Clone 🤝

I am open sourcing PayTm clone project to help others learn from my journey building it. If you're interested in contributing, here's how you can get started:

## 🎯 How to Contribute

### 1. Fork and Clone

1. Fork the repository to your GitHub account
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/paytm-clone.git
   cd paytm-clone
   ```

### 2. Set Up Development Environment

#### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn
- Git

#### Installation Steps

1. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the backend directory:

   ```env
   MONGO_URL=mongodb://localhost:27017/paytm
   JWT_PASS=your-secret-key
   PORT=3000
   ```

4. **Start the development servers:**

   Terminal 1 (Backend):

   ```bash
   cd backend
   npm start
   ```

   Terminal 2 (Frontend):

   ```bash
   cd frontend
   npm run dev
   ```

### 3. Create a Branch

Always create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number
```

## 🛠️ Development Guidelines

### Code Style and Formatting

We use automated code formatting and linting to ensure consistent code style across the project. All code is automatically formatted using **Prettier** and linted using **ESLint**.

#### Automated Formatting

- **Prettier** handles all code formatting automatically
- **ESLint** enforces code quality rules and catches potential issues
- **Pre-commit hooks** automatically format and lint your code before commits
- **CI/CD pipeline** checks formatting and linting on all pull requests

#### Code Style Rules

- **JavaScript**: Use ES6+ features and modern syntax
- **React**: Use functional components with hooks
- **Naming**: Use camelCase for variables and functions, PascalCase for components
- **Indentation**: 2 spaces (enforced by Prettier)
- **Quotes**: Single quotes for strings (enforced by Prettier)
- **Semicolons**: Always use semicolons (enforced by Prettier)
- **Line Length**: Maximum 80 characters (enforced by Prettier)

#### Setting Up Your Development Environment

1. **Install recommended VSCode extensions:**

   ```bash
   # VSCode will prompt you to install recommended extensions
   # Or install manually: Prettier, ESLint, Tailwind CSS IntelliSense
   ```

2. **Verify formatting setup:**

   ```bash
   # Check if code is properly formatted
   npm run format:check

   # Format all code
   npm run format

   # Run linting
   npm run lint

   # Fix linting issues automatically
   npm run lint:fix
   ```

3. **Pre-commit hooks:**
   - Husky automatically runs formatting and linting before each commit
   - If there are issues, the commit will be blocked until fixed
   - The hooks will automatically fix most formatting issues

#### Manual Formatting Commands

```bash
# Root level commands (formats entire project)
npm run format          # Format all files
npm run format:check    # Check formatting without changing files
npm run lint            # Run ESLint on all projects
npm run lint:fix        # Fix ESLint issues automatically

# Frontend specific
cd frontend
npm run format          # Format frontend files
npm run lint            # Lint frontend code
npm run lint:fix        # Fix frontend linting issues

# Backend specific
cd backend
npm run format          # Format backend files
npm run lint            # Lint backend code
npm run lint:fix        # Fix backend linting issues
```

### Frontend Guidelines

- Follow React best practices
- Use Tailwind CSS for styling
- Create reusable components in the `components/` directory
- Use custom hooks for business logic when appropriate
- Implement proper error handling

### Backend Guidelines

- Follow RESTful API conventions
- Use proper HTTP status codes
- Implement input validation using Zod
- Use middleware for authentication
- Follow the existing project structure
- Add proper error handling

### Database Guidelines

- Use Mongoose for database operations
- Create proper indexes for query optimization
- Use transactions for critical operations (like money transfers)
- Follow MongoDB best practices

## 📝 Types of Contributions

### 🐛 Bug Fixes

- Check if the issue is already reported
- Create a detailed bug report if not exists
- Fix the issue and add tests if applicable

### ✨ New Features

- Discuss the feature in an issue first
- Implement the feature following the guidelines
- Add tests for new functionality
- Update documentation

### 📖 Documentation

- Fix typos or improve clarity
- Add missing documentation
- Create tutorials or examples

### 🎨 UI/UX Improvements

- Improve user interface
- Enhance user experience
- Add animations or transitions
- Improve responsive design

## 🧪 Testing

### Running Tests

Currently, the project doesn't have automated tests. You can contribute by:

- Adding unit tests for utility functions
- Creating integration tests for API endpoints
- Adding component tests for React components

### Manual Testing

Before submitting a PR, please test:

1. User registration and login
2. Dashboard functionality
3. Money transfer operations
4. User search functionality
5. Responsive design on different devices

## 📋 Pull Request Process

### Before Submitting

1. ✅ Test your changes locally
2. ✅ Run `npm run format` to ensure proper formatting
3. ✅ Run `npm run lint:fix` to fix any linting issues
4. ✅ Ensure `npm run format:check` and `npm run lint` pass without errors
5. ✅ Update documentation if needed
6. ✅ Check for console errors
7. ✅ Verify pre-commit hooks are working (they should run automatically on commit)

### Pull Request Format

```
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] UI/UX improvement

## Testing
- [ ] Tested locally
- [ ] All existing features work
- [ ] New feature works as expected

## Screenshots (if applicable)
Add screenshots for UI changes

## Additional Notes
Any additional information or context
```

### Review Process

1. Pull requests will be reviewed by maintainers
2. Address any feedback or requested changes
3. Once approved, your PR will be merged

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `frontend` - Frontend related
- `backend` - Backend related
- `database` - Database related

## 💡 Ideas for Contributions

### Features to Add

- [ ] Email notifications for transactions
- [ ] Transaction history page
- [ ] User profile management
- [ ] Two-factor authentication
- [ ] Transaction limits and verification
- [ ] Dark mode support
- [ ] Mobile app using React Native

### Improvements Needed

- [ ] Add proper error handling
- [ ] Implement loading states
- [ ] Add form validation
- [ ] Improve responsive design
- [ ] Add unit tests
- [ ] Add API documentation
- [ ] Implement rate limiting

### Bug Fixes

- [ ] Fix any existing bugs
- [ ] Improve error messages
- [ ] Handle edge cases
- [ ] Optimize performance

## 🔄 Updating Existing Forks

If you have an existing fork of this repository and want to adopt the new styling rules, follow these steps:

### 1. Sync Your Fork

```bash
# Add upstream remote (if not already added)
git remote add upstream https://github.com/original-repo/paytm-clone.git

# Fetch latest changes
git fetch upstream

# Merge or rebase with upstream main
git checkout main
git merge upstream/main
# or
git rebase upstream/main
```

### 2. Install New Dependencies

```bash
# Install root dependencies (includes Prettier, ESLint, Husky)
npm install

# Install updated frontend dependencies
cd frontend && npm install

# Install updated backend dependencies
cd ../backend && npm install
```

### 3. Set Up Pre-commit Hooks

```bash
# Initialize Husky (if not already done)
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

### 4. Format Existing Code

```bash
# Format all existing code to match new standards
npm run format

# Fix any linting issues
npm run lint:fix
```

### 5. Commit the Formatting Changes

```bash
# Create a separate commit for formatting changes
git add .
git commit -m "style: apply automated code formatting

- Add Prettier and ESLint configuration
- Format existing code to match new standards
- Set up pre-commit hooks for automatic formatting"
```

### 6. Verify Setup

```bash
# Verify everything is working
npm run format:check
npm run lint

# Test pre-commit hooks
git add .
git commit -m "test: verify pre-commit hooks"
```

### 7. Update Your Development Environment

- Install recommended VSCode extensions (see `.vscode/extensions.json`)
- VSCode should automatically use the new formatting settings
- Verify that format-on-save is working

## 📞 Getting Help

- Create an issue for bugs or feature requests
- Join discussions in existing issues
- Check the README.md for basic setup information
- For styling/formatting issues, check the [Code Style Guidelines](#code-style-and-formatting)

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (ISC License).

---

**Happy Contributing! 🎉**

If you have any questions, feel free to open an issue or reach out to the maintainers.
