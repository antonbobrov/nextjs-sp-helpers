/** @type{import("eslint").Linter.Config} */
module.exports = {
  extends: ['@anton.bobrov/eslint-config/next', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['lib/**', 'docs/**', 'storybook-static/**'],
};
