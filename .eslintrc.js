module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  plugins: ['riot', 'prettier'],
  rules: {
    object-curly-spacing: ["error", "always"],
    no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1 }],
    no-unused-vars: ["error"],
    semi: ["error", "never"],
    space-before-blocks: ["error", "always"],
    quotes: ["error", "single"]
  },
  globals: {
    "document": true,
    "window": true,
    "riot": true
  }
}
