const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
  ].map(require.resolve),
  globals: {
    JSX: true,
  },
  parserOptions: {
    project,
  },
  rules: {
    // Disables the rule that prohibits empty interfaces in TypeScript.
    '@typescript-eslint/no-empty-interface': 'off',

    // Marks unused variables in TypeScript as errors.
    '@typescript-eslint/no-unused-vars': 'error',

    // Disables the rule that prohibits the use of "any" in TypeScript.
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Allows the use of anonymous functions (IIFEs).
    'func-names': 'off',

    // No need to specify extensions in imports.
    'import/extensions': 'off',

    // Disables the rule that prohibits default exports.
    'import/no-default-export': 'off',

    // Allows additional dependencies in development files.
    'import/no-extraneous-dependencies': 'off',

    // Disables the custom import order rule.
    'import/order': 'off',

    // Disables the rule that prohibits parameter reassignment.
    'no-param-reassign': 'error',
  },
};
