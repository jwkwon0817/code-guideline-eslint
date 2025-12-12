import stylistic from '@stylistic/eslint-plugin';
import newlineDestructuring from 'eslint-plugin-newline-destructuring';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: {
    '@stylistic':            stylistic,
    'newline-destructuring': newlineDestructuring,
  },
  files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
  rules: {
    '@stylistic/array-bracket-newline': [
      'error',
      {
        minItems:  3,
        multiline: true,
      },
    ],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern:    'consistent',
      },
    ],
    '@stylistic/arrow-parens':  ['error', 'as-needed'],
    '@stylistic/arrow-spacing': [
      'error',
      {
        after:  true,
        before: true,
      },
    ],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style':   [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    '@stylistic/comma-dangle':  ['error', 'always-multiline'],
    '@stylistic/comma-spacing': [
      'error',
      {
        after:  true,
        before: false,
      },
    ],
    '@stylistic/comma-style':                    ['error', 'last'],
    '@stylistic/computed-property-spacing':      ['error', 'never'],
    '@stylistic/curly-newline':                  ['error', { consistent: true }],
    '@stylistic/dot-location':                   ['error', 'property'],
    '@stylistic/eol-last':                       ['error', 'always'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing':          ['error', 'never'],
    '@stylistic/function-paren-newline':         ['error', { minItems: 5 }],
    '@stylistic/generator-star-spacing':         [
      'error',
      {
        after:  true,
        before: false,
      },
    ],
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent':                   ['error', 2],
    '@stylistic/indent-binary-ops':        ['error', 2],
    '@stylistic/key-spacing':              [
      'error',
      { align: {
        beforeColon: false,
        afterColon:  true,
        mode:        'strict',
        on:          'value',
      } },
    ],
    '@stylistic/keyword-spacing': [
      'error',
      {
        before: true,
        after:  true,
      },
    ],
    '@stylistic/line-comment-position': 'off',
    '@stylistic/linebreak-style':       ['off', 'unix'],
    '@stylistic/lines-around-comment':  [
      'error',
      {
        beforeLineComment:          false,
        beforeBlockComment:         true,
        allowClassStart:            true,
        allowClassEnd:              true,
        allowObjectStart:           true,
        allowObjectEnd:             true,
        allowArrayStart:            true,
        allowArrayEnd:              true,
        allowBlockStart:            true,
        allowBlockEnd:              true,
        allowEnumStart:             true,
        allowEnumEnd:               true,
        allowInterfaceStart:        true,
        allowInterfaceEnd:          true,
        allowModuleStart:           true,
        allowModuleEnd:             true,
        allowTypeStart:             true,
        allowTypeEnd:               true,
        applyDefaultIgnorePatterns: true,
        afterHashbangComment:       true,
      },
    ],
    '@stylistic/lines-between-class-members': [
      'error',
      { enforce: [
        {
          blankLine: 'always',
          prev:      'method',
          next:      'method',
        },
      ] },
    ],
    '@stylistic/max-len': [
      'error',
      {
        code:                   Number.POSITIVE_INFINITY,
        tabWidth:               2,
        comments:               100,
        ignoreComments:         true,
        ignoreTrailingComments: true,
        ignoreUrls:             true,
        ignoreStrings:          true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals:   true,
      },
    ],
    '@stylistic/max-statements-per-line':  ['error', { max: 2 }],
    '@stylistic/member-delimiter-style':   'error',
    '@stylistic/multiline-comment-style':  'off',
    '@stylistic/multiline-ternary':        ['error', 'always-multiline'],
    '@stylistic/new-parens':               ['error', 'always'],
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    '@stylistic/no-confusing-arrow':       [
      'error',
      {
        onlyOneSimpleParam: true,
        allowParens:        true,
      },
    ],
    '@stylistic/no-extra-parens': [
      'error',
      'all',
      {
        nestedBinaryExpressions:         false,
        ternaryOperandBinaryExpressions: false,
        ignoreJSX:                       'multi-line',
        nestedConditionalExpressions:    false,
        ignoredNodes:                    ['ConditionalExpression', 'ArrowFunctionExpression'],
      },
    ],
    '@stylistic/no-extra-semi':            'error',
    '@stylistic/no-floating-decimal':      'error',
    '@stylistic/no-mixed-operators':       'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces':          'off',
    '@stylistic/no-multiple-empty-lines':  [
      'error',
      {
        max:    1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    '@stylistic/no-tabs':                          'error',
    '@stylistic/no-trailing-spaces':               'error',
    '@stylistic/no-whitespace-before-property':    'error',
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
    '@stylistic/object-curly-newline':             [
      'error',
      {
        ObjectExpression:  { minProperties: 2 },
        ObjectPattern:     { minProperties: 3 },
        ImportDeclaration: { minProperties: 4 },
        ExportDeclaration: 'always',
        TSTypeLiteral:     'always',
        TSInterfaceBody:   'always',
      },
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true },
    ],
    '@stylistic/object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],
    '@stylistic/operator-linebreak':           [
      'error',
      'after',
      { overrides: {
        '?': 'before',
        ':': 'before',
      } },
    ],
    '@stylistic/padded-blocks':                   ['error', 'never'],
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev:      '*',
        next:      'return',
      },
      {
        blankLine: 'always',
        prev:      '*',
        next:      'function',
      },
      {
        blankLine: 'always',
        prev:      'function',
        next:      '*',
      },
      {
        blankLine: 'always',
        prev:      '*',
        next:      'class',
      },
      {
        blankLine: 'always',
        prev:      'class',
        next:      '*',
      },
      {
        blankLine: 'always',
        prev:      '*',
        next:      'export',
      },
      {
        blankLine: 'any',
        prev:      'export',
        next:      'export',
      },
      {
        blankLine: 'always',
        prev:      'block-like',
        next:      '*',
      },
      {
        blankLine: 'always',
        prev:      '*',
        next:      'block-like',
      },
      {
        blankLine: 'any',
        prev:      'import',
        next:      'import',
      },
    ],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes':      [
      'error',
      'single',
      { avoidEscape: true },
    ],
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/semi':                'error',
    '@stylistic/semi-spacing':        [
      'error',
      {
        before: false,
        after:  true,
      },
    ],
    '@stylistic/semi-style':                  'error',
    '@stylistic/space-before-blocks':         'error',
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous:  'never',
        named:      'never',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/space-in-parens':          'error',
    '@stylistic/space-infix-ops':          'error',
    '@stylistic/space-unary-ops':          'error',
    '@stylistic/spaced-comment':           ['error', 'always'],
    '@stylistic/switch-colon-spacing':     'error',
    '@stylistic/template-curly-spacing':   'error',
    '@stylistic/template-tag-spacing':     'error',
    '@stylistic/type-annotation-spacing':  'error',
    '@stylistic/type-generic-spacing':     'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-iife':                ['error', 'inside'],
    '@stylistic/wrap-regex':               'error',
    '@stylistic/yield-star-spacing':       ['error', 'after'],
    'newline-destructuring/newline':       ['error', { itemsWithRest: 2 }],
  },
};

export default config;
