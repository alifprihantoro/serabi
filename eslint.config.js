import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import Lit from 'eslint-plugin-lit'
// import LitAlly from 'eslint-plugin-lit-a11y'
//         'plugin:wc/recommended',
//         'plugin:lit-a11y/recommended',

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'prefer-template': ['error'],
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': ['error'],
      'no-mixed-spaces-and-tabs': ['error'],
      'camelcase': ['error'],
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-console': ['warn'],
      'no-alert': ['warn'],
    },
  },
  {
    ...Lit.configs['flat/recommended'],
    rules: {
      'lit/no-template-map': 'error',
      'lit/no-invalid-html': 'error',
      'lit/prefer-nothing': 'error',
      'lit/no-useless-template-literals': 'error',
      'lit/no-invalid-escape-sequences': 'error',
      'lit/no-duplicate-template-bindings': 'error',
      'lit/quoted-expressions': ['error', 'always'],
    },
  },
]
