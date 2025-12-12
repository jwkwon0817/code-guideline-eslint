import stylistic from '@stylistic/eslint-plugin';

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  plugins: { '@stylistic': stylistic },
  rules:   {
    '@stylistic/jsx-child-element-spacing': 'off',

    '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    '@stylistic/jsx-closing-tag-location': ['error', 'tag-aligned'],

    '@stylistic/indent': ['error', 2],

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
      { allowMultiline: true },
    ],

    '@stylistic/jsx-equals-spacing': ['error', 'never'],

    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],

    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

    '@stylistic/jsx-indent-props': ['error', 2],

    '@stylistic/jsx-max-props-per-line': [
      'error', { maximum: {
        single: 3, multi: 1,
      } },
    ],

    '@stylistic/jsx-newline': 'off',

    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],

    '@stylistic/jsx-pascal-case': [
      'error',
      {
        allowAllCaps:   true,
        allowNamespace: true,
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

    '@stylistic/jsx-sort-props': [
      'error',
      {
        ignoreCase:           true,
        callbacksLast:        true,
        shorthandFirst:       true,
        multiline:            'last',
        noSortAlphabetically: true,
        reservedFirst:        true,
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
        condition:     'ignore',
        logical:       'ignore',
        prop:          'ignore',
        propertyValue: 'ignore',
      },
    ],
  },
};

export default config;
