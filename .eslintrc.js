module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      modules: true
    }
  },
  env: {
    browser: true,
  },
  rules: {
    'max-len': [
      'error',
      120,
      2
    ],
    'semi': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'quotes': [
      'error',
      'single',
      {'avoidEscape': true}
    ],
  },
};
