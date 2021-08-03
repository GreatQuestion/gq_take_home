module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    warnOnUnsupportedTypeScriptVersion: true,
  },
  reportUnusedDisableDirectives: true,
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.js"],
      env: { node: true },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["app/javascript/**"],
      env: { browser: true },
    },
    {
      files: ["app/javascript/**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
