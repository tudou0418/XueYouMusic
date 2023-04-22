module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    indent: 0,
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    // 设置成警告
    'no-unused-vars': 'warn'
  }
}
