/**
 * 🔍 Jest Configuration File
 * -------------------------------------
 * This file configures Jest for testing the TypeScript-based project.
 * Jest is a JavaScript testing framework that allows writing unit and
 * integration tests in a structured and efficient way.
 *
 * 📌 Key Features:
 * - Uses `ts-jest` preset to support TypeScript.
 * - Runs tests in a Node.js environment.
 * - Specifies which files should be recognized as test files.
 *
 * 🚀 Why Use Jest?
 * - Provides fast and reliable test execution.
 * - Built-in mocking, assertion, and snapshot testing capabilities.
 * - Works well with TypeScript when configured properly.
 */

module.exports = {
  // ✅ Use `ts-jest` preset to allow Jest to run TypeScript files.
  preset: 'ts-jest',

  // ✅ Set the test environment to `node`, since we are testing a backend (not a browser-based app).
  testEnvironment: 'node',

  // ✅ Define the pattern to locate test files.
  // This tells Jest to look inside the `__tests__` folder for files ending in `.test.ts`.
  testMatch: ['**/__tests__/**/*.test.ts'],
}
