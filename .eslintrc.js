/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaFeatures: { jsx: true } },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['multi'],
    'func-style': 'expression',
    'max-depth': ['error', 3],
    'max-lines': ['error', 100],
    'max-params': ['error', 3],
    'no-else-return': ['error'],
    'no-shadow': ['error'],
  },
}
