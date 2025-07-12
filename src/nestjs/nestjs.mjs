import nestjsTyped from '@darraghor/eslint-plugin-nestjs-typed';
import tsParser from '@typescript-eslint/parser';

const typedConfig = {
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: process.cwd(),
      sourceType: 'module',
    },
  },
};

export default [
  typedConfig,
  ...nestjsTyped.configs.flatRecommended,
];
