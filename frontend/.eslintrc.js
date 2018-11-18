module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-case-declarations": 0,
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
};
