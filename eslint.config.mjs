/**
 * 🎯 ESLint Configuration File (`eslint.config.mjs`)
 * -------------------------------------
 * This file sets up ESLint for the project, ensuring consistent code style
 * and detecting errors early. It is written using the **Flat Config format**,
 * which is the latest recommended format for ESLint configurations.
 *
 * 🚀 Why Use ESLint?
 * - Enforces best coding practices.
 * - Helps catch syntax errors and potential bugs.
 * - Standardizes formatting using Prettier integration.
 * - Works seamlessly with TypeScript.
 *
 * 📌 Key Features:
 * - Ignores `dist/` (compiled files) and `node_modules/`.
 * - Lints JavaScript and TypeScript files inside `src/`.
 * - Uses **ESLint Recommended** and **TypeScript ESLint Rules**.
 * - Enforces **Prettier formatting** to maintain consistent styling.
 */

import globals from 'globals' // ✅ Provides predefined global variables (e.g., `console`, `process`).
import pluginJs from '@eslint/js' // ✅ The official ESLint JavaScript plugin.
import tseslint from 'typescript-eslint' // ✅ Adds support for TypeScript linting.
import prettierConfig from 'eslint-config-prettier' // ✅ Prettier rules to avoid conflicts with ESLint.
import prettierPlugin from 'eslint-plugin-prettier' // ✅ Integrates Prettier with ESLint.

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // ✅ Ignore compiled files and dependencies
  {
    ignores: ['dist/**', 'node_modules/**'], // Prevents ESLint from checking generated files.
  },

  // ✅ Apply linting to source files only (JavaScript and TypeScript)
  {
    files: ['src/**/*.{js,mjs,cjs,ts}'], // Lints all JavaScript and TypeScript files inside `src/`.
  },

  // ✅ Configure JavaScript rules
  {
    files: ['**/*.js'], // Applies only to JavaScript files.
    languageOptions: { sourceType: 'commonjs' }, // Ensures support for `require()`-style imports.
  },

  // ✅ Global environment settings (allows access to Node.js built-in globals)
  { languageOptions: { globals: globals.node } }, // Includes globals like `process`, `__dirname`, etc.

  // ✅ ESLint Recommended Rules (General JavaScript best practices)
  pluginJs.configs.recommended,

  // ✅ TypeScript ESLint Rules (Best practices for TypeScript projects)
  ...tseslint.configs.recommended,

  // ✅ Prettier Formatting Rules
  prettierConfig, // Disables conflicting ESLint rules that clash with Prettier.
  {
    plugins: { prettier: prettierPlugin }, // Enables Prettier as an ESLint plugin.
    rules: { 'prettier/prettier': 'error' }, // Enforces Prettier formatting as an ESLint error.
  },
]
