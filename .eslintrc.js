const path = require("node:path");

const repoRoot = process.cwd();
const tsconfigPath = path.join(repoRoot, "tsconfig.json");

const typescriptConfig = {
  files: ["**/*.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    tsconfigRootDir: repoRoot,
    project: tsconfigPath,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // We have hook libraries.
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": ["warn", { fixToUnknown: true }],
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      { ignoreStringArrays: true },
    ],
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/unbound-method": "warn",
  },
};

const tsxConfig = {
  files: ["**/*.tsx"],
  extends: [
    ...typescriptConfig.extends,
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ...typescriptConfig.parserOptions,
    ecmaFeatures: { jsx: true },
  },
  rules: {
    ...typescriptConfig.rules,
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/boolean-prop-naming": "error",
    "react/hook-use-state": "error",
    "react/iframe-missing-sandbox": "error",
    "react/js-props-no-spreading": "off",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "react/jsx-max-depth": ["warn", { max: 4 }],
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    "react/no-unstable-nested-components": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};

const testConfig = {
  env: {
    jest: true,
  },
  files: ["**/*.spec.ts", "*.spec.ts", "**/*.spec.tsx", "*.spec.tsx"],
  rules: {
    "@typescript-eslint/unbound-method": "off",
    // Needed for component mocks.
    "react/display-name": "off",
    // undefined is needed with toHaveBeenCalledWith/toHaveBeenNthCalledWith.
    "unicorn/no-useless-undefined": ["off", { checkArguments: false }],
  },
};

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: ["plugin:unicorn/recommended"],
  ignorePatterns: ["**/dist/**", "**/node_modules/**", ".eslintrc.js"],
  overrides: [typescriptConfig, tsxConfig, testConfig],
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "react",
    "react-hooks",
    "unicorn",
    "unused-imports",
  ],
  rules: {
    "no-console": "off",
    "no-debugger": "warn",
    "sort-imports": "off",
    "unicorn/catch-error-name": [
      "error",
      {
        ignore: ["^err$", "^error.*"],
      },
    ],
    "unicorn/consistent-function-scoping": "off",
    "unicorn/custom-error-definition": "error",
    "unicorn/empty-brace-spaces": "off",
    "unicorn/filename-case": "off",
    "unicorn/import-style": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/no-null": "off",
    "unicorn/no-static-only-class": "off",
    "unicorn/no-thenable": "off",
    "unicorn/prefer-string-replace-all": "warn",
    "unicorn/prefer-ternary": "off",
    "unicorn/prevent-abbreviations": "off",
    "unused-imports/no-unused-imports": "warn",
  },
  reportUnusedDisableDirectives: true,
};
