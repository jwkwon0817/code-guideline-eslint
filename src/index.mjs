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

/**
 * `@stylistic/key-spacing` value alignment targets JS `ObjectExpression`.
 * On TS `TSTypeLiteral` / `TSPropertySignature` it mis-reports "extra" padding and
 * fights both manual column align and `no-multi-spaces`. TS/TSX turn it off last so
 * nest/react presets cannot re-enable it.
 */
const tsKeySpacingOff = {
  files: ['**/*.{ts,tsx,mts,cts}'],
  rules: { '@stylistic/key-spacing': 'off' },
};

function withTypeScriptKeySpacingDisabled(configs) {
  return [...configs, tsKeySpacingOff];
}

function eslintCodeGuideline(extendsConfig) {
  if (!extendsConfig) {
    return withTypeScriptKeySpacingDisabled(defaultConfig);
  }

  let configs = [...defaultConfig];

  const extendItems = Array.isArray(extendsConfig) ? extendsConfig : [extendsConfig];

  extendItems.forEach(item => {
    configs = [...configs, ...configMap[item]];
  });

  return withTypeScriptKeySpacingDisabled(configs);
}

export default eslintCodeGuideline;
