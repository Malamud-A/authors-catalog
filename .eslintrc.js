module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
  ],
  'rules': {
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
};