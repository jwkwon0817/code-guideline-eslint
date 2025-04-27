import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      import: eslintPluginImport,
      promise: eslintPluginPromise,
      'unused-imports': eslintPluginUnusedImports,
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',

      // Import rules
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'import/no-unresolved': 'error',

      // Promise rules
      'promise/always-return': 'off',
      'promise/no-nesting': 'warn',

      // Unused imports
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      // Formatting rules
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
    },
  },
];
