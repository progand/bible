module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 6
  },
  extends: 'eslint:recommended',
  env: {
    node: true
  },
  rules: {
    'no-console': 0
  },
  globals: {
    Promise: true
  }
};
