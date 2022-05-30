module.exports = {
  env: {
    es6: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    semi: ["error", "always"],
    "prettier/prettier": "error",
  },
};
