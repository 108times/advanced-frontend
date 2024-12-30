/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: ['eslint:recommended', 'plugin:i18next/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  parserOptions: { ecmaFeatures: { jsx: true } },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
    curly: ['error', 'multi'],
    'func-style': ['error', 'expression'],
    'max-depth': ['error', 3],
    'max-lines': ['error', 100],
    'max-params': ['error', 3],
    'no-else-return': ['error'],
    'i18next/no-literal-string': [
      'error',
      { ignoreAttribute: ['data-testid'] },
    ],
  },
}
