import importNewLines from 'eslint-plugin-import-newlines';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: {
    'simple-import-sort': simpleImportSort,
    'import-newlines':    importNewLines,
    'unused-imports':     unusedImports,
  },
  settings: { 'import/resolver': {
    typescript: {},
    node:       { extensions: [
      '.js',
      '.mjs',
      '.cjs',
      '.jsx',
      '.ts',
      '.mts',
      '.cts',
      '.tsx',
    ] },
  } },
};

export default config;
