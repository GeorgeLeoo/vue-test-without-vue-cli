module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [],
  parser: 'babel-eslint',
  plugins: ['react', 'import'],
  globals: {
    var1: true,
    var2: false
  },
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'no-console': 'error',
    'arrow-parents': 0
  }
};
