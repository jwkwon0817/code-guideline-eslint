import nestjsTyped from '@darraghor/eslint-plugin-nestjs-typed';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: { '@darraghor/nestjs-typed': nestjsTyped },
  rules:   {},

  ...nestjsTyped.configs.flatRecommended,
};

export default config;
