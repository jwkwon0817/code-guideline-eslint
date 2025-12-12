import tsParser from '@typescript-eslint/parser';
import formatterConfig from './formatter.mjs';

const typedConfig = { languageOptions: {
  parser:        tsParser,
  parserOptions: {
    project:         './tsconfig.json',
    tsconfigRootDir: process.cwd(),
    sourceType:      'module',
  },
} };

export default [
  typedConfig,
  formatterConfig,
];
