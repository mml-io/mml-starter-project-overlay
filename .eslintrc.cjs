module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow",
          },
        ],
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./packages/*/tsconfig.json", "./tsconfig.json"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  ignorePatterns: [],
  rules: {
    "no-unused-vars": "off",
    "no-var": ["error"],
    "no-empty": "off",
    "no-console": "off",
    "prettier/prettier": ["warn"],
    "react-hooks/exhaustive-deps": "off",
    eqeqeq: ["error", "always", { null: "ignore" }],
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
};
