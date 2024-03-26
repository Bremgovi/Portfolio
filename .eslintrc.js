module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "modules-newline/import-declaration-newline": "warn",
    "modules-newline/export-declaration-newline": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "plugins": [
      "modules-newline"
  ]
  },
};
