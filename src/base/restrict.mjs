import typescript from '@typescript-eslint/eslint-plugin';

/**
 * @type {import('eslint').Linter.Config}
 */
const defaultConfig = { rules: {
  'no-console':           ['warn', { allow: ['warn', 'error'] }],
  'no-debugger':          'error',
  'no-alert':             'error',
  'no-var':               'error',
  'no-duplicate-imports': 'error',
  'no-restricted-syntax': 'off',
} };

/**
 * @type {import('eslint').Linter.Config}
 */
const typescriptConfig = {
  plugins: { '@typescript-eslint': typescript },
  files:   ['**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}'],
  rules:   {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars':  [
      'error',
      {
        varsIgnorePattern:              '^_',
        caughtErrorsIgnorePattern:      '^_',
        destructuredArrayIgnorePattern: '^_',
        argsIgnorePattern:              '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern:              '^_',
        caughtErrorsIgnorePattern:      '^_',
        destructuredArrayIgnorePattern: '^_',
        argsIgnorePattern:              '^_',
      },
    ],
    'no-redeclare': 'error',
  },
};

export default [defaultConfig, typescriptConfig];
