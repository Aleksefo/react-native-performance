module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 0,
    'react-native/no-unused-styles': 1,
    'react-native/no-color-literals': 1,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 1,
  },
}
