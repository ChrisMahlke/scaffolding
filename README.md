# TypeScript Project

## Description
This is a TypeScript-based project with Express, Jest for testing, ESLint for linting, and various utilities for enhanced development workflow. The project is structured for scalability and maintainability.

## Features
- **TypeScript**: Strongly typed JavaScript.
- **ESLint & Prettier**: Enforces code quality and formatting.
- **Jest & ts-jest**: Supports unit testing.
- **Nodemon**: Watches for file changes during development.
- **Husky & lint-staged**: Pre-commit hooks for automatic linting.
- **Express**: Minimalist web framework for building APIs.

## Installation
### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Git](https://git-scm.com/)

### Clone the Repository
```sh
git clone https://github.com/ChrisMahlke/typescript-project.git
cd typescript-project
```

### Install Dependencies
```sh
npm install
```

## Usage
### Development Server
```sh
npm run dev
```
Runs the project in development mode using `nodemon`.

### Compiling TypeScript
```sh
npm run compile
```
Generates JavaScript files in the `dist/` directory.

### Running Tests
```sh
npm run test
```
Executes Jest unit tests.

For test coverage:
```sh
npm run test:coverage
```

### Linting and Formatting
Check for lint errors:
```sh
npm run lint
```
Fix lint errors:
```sh
npm run lint --fix
```
Check Prettier formatting:
```sh
npx prettier --check "src/**/*.ts"
```
Fix Prettier formatting:
```sh
npx prettier --write "src/**/*.ts"
```

## Git Hooks (Husky & lint-staged)
Husky enforces linting before committing. Try:
```sh
git add .
git commit -m "Test commit"
```
If there are lint errors, the commit will be blocked until they are fixed.

## Folder Structure
```
typescript-project/
├── src/
│   ├── index.ts   # Main entry file
│   ├── routes/    # API routes (if applicable)
│   ├── utils/     # Utility functions
│   └── __tests__/ # Unit tests
├── dist/          # Compiled output (ignored in Git)
├── .husky/        # Git hooks for pre-commit linting
├── .eslintrc      # ESLint configuration
├── tsconfig.json  # TypeScript compiler settings
├── jest.config.js # Jest testing configuration
├── package.json   # Project metadata & scripts
└── README.md      # This file
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License
This project is licensed under the MIT License. See `LICENSE` for details.

---
🚀 Happy Coding!

