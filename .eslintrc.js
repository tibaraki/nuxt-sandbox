module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  extends: [
    'typescript',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue'
  ],
  // custom rules
  rules: {
    //'no-console': 'off'
  }
}