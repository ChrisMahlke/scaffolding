import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // ✅ Ignore compiled files and dependencies
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // ✅ Apply linting to source files only
  {
    files: ['src/**/*.{js,mjs,cjs,ts}'],
  },

  // ✅ Configure JavaScript rules
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },

  // ✅ Global environment settings
  { languageOptions: { globals: globals.node } },

  // ✅ ESLint Recommended Rules
  pluginJs.configs.recommended,

  // ✅ TypeScript ESLint Rules
  ...tseslint.configs.recommended,

  // ✅ Prettier Formatting Rules
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: { 'prettier/prettier': 'error' },
  },
]
