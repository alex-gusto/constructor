module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://www.npmjs.com/package/eslint-plugin-vue
    // https://www.npmjs.com/package/eslint-config-standard
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // js
    'indent': [ 'error', 2 ],
    'no-console': 0,
    'prefer-const': [ 'error', { 'destructuring': 'all' } ],
    'no-return-await': 0,
    'no-unused-expressions': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': [ 'error', { "max": 3 }],

    // vue
    'vue/html-closing-bracket-newline': [ 'error', {
      'singleline': 'never',
      'multiline': 'always'
    } ],
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    } ],
    'vue/attribute-hyphenation': 0,
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'vue/script-indent': [ 'error', 2, { 'baseIndent': 1 } ]
  },
  overrides: [
    {
      'files': [ '*.vue' ],
      'rules': {
        'indent': 'off'
      }
    }
  ],
  globals: {
    'TweenMax': true,
    'TweenLite': true,
    'TimelineMax': true,
    'TimelineLite': true,
    'CustomEase': true,
    'Elastic': true,
    'Back': true,
    'Power0': true,
    'Power1': true,
    'Power2': true,
    'Power3': true,
    'Power4': true,
    'SplitText': true,
    '_get': true,
    'debug': true
  }
}
