import tsParser from '@typescript-eslint/parser';
import baseFormatterConfig from './base/formatter.mjs';
import baseImportConfig from './base/import.mjs';
import baseRestrictConfig from './base/restrict.mjs';
import configMap from './configMap.mjs';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
const defaultConfig = [
  {
    languageOptions: {
      ecmaVersion:   'latest',
      sourceType:    'module',
      parser:        tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
  },
  { ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/next-env.d.ts',
  ] },
  baseFormatterConfig,
  baseImportConfig,
  ...baseRestrictConfig,
];

function eslintCodeGuideline(config) {
  if (!config) { return defaultConfig; }

  const { options, extends: extendsConfig } = config;

  let configs = [...defaultConfig];

  if (extendsConfig) {
    const extendItems = Array.isArray(extendsConfig) ? extendsConfig : [extendsConfig];

    extendItems.forEach((item) => {
      configs = [...configs, ...configMap[item]];
    })
  }

  if (options) { configs = [...configs, ...Array.isArray(options) ? options : [options]]; }

  return configs;
}

export default eslintCodeGuideline;
