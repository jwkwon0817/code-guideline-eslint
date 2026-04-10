import stylistic from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  files:   ['**/*.{jsx,tsx}'],
  plugins: {
    '@stylistic': stylistic,
    perfectionist,
  },
  rules: {
    '@stylistic/jsx-child-element-spacing': 'off',

    '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    '@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],

    '@stylistic/jsx-curly-brace-presence': [
      'error',
      {
        props:             'never',
        children:          'never',
        propElementValues: 'always',
      },
    ],

    '@stylistic/jsx-curly-newline': [
      'error',
      {
        multiline:  'consistent',
        singleline: 'forbid',
      },
    ],

    '@stylistic/jsx-curly-spacing': [
      'error',
      'never',
      { allowMultiline: false },
    ],

    '@stylistic/jsx-equals-spacing': ['error', 'never'],

    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],

    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

    '@stylistic/jsx-indent-props': ['error', 2],

    '@stylistic/jsx-max-props-per-line': 'error',

    '@stylistic/jsx-newline': [
      'error',
      {
        prevent:         true,
        allowMultilines: true,
      },
    ],

    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'non-jsx' }],

    '@stylistic/jsx-pascal-case': [
      'error',
      {
        allowAllCaps:   true,
        allowNamespace: true,
      },
    ],

    '@stylistic/no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property:            true,
          ImportAttribute:     true,
          TSPropertySignature: true,
          TSIndexSignature:    true,
          TSMethodSignature:   true,
          TSTypeAnnotation:    true,
          TSTypeLiteral:       true,
        },
      },
    ],

    '@stylistic/jsx-quotes': ['error', 'prefer-single'],

    '@stylistic/jsx-self-closing-comp': [
      'error',
      {
        component: true,
        html:      true,
      },
    ],

    'perfectionist/sort-jsx-props': [
      'error',
      {
        type:       'unsorted',
        ignoreCase: true,
        groups:     [
          'reserved',
          'shorthand-prop',
          'unknown',
          'multiline-prop',
          'callback',
        ],
        customGroups: [
          {
            groupName:          'reserved',
            elementNamePattern: '^(key|ref)$',
          },
          {
            groupName:          'callback',
            elementNamePattern: '^on[A-Z]',
          },
        ],
      },
    ],

    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        closingSlash:      'allow',
        beforeClosing:     'never',
        beforeSelfClosing: 'always',
      },
    ],

    '@stylistic/jsx-wrap-multilines': [
      'error',
      {
        declaration:   'parens-new-line',
        assignment:    'parens-new-line',
        return:        'parens-new-line',
        arrow:         'parens-new-line',
        condition:     'parens-new-line',
        logical:       'parens-new-line',
        prop:          'parens-new-line',
        propertyValue: 'parens',
      },
    ],
  },
};

export default config;
