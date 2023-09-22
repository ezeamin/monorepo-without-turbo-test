const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/react',
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
    'no-param-reassign': 'off',

    // Allows props spreading in JSX.
    'react/jsx-props-no-spreading': 'off',

    // Defines how React function components should be written.
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Disables checking for default props in React components.
    'react/require-default-props': 'off',

    // Disables the rule that prohibits "kebab-case" in file names.
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true, // Allows camelCase file names (initial letter in lowercase)
          pascalCase: true, // Allows PascalCase file names (initial letter in uppercase)
          kebabCase: false, // Disables kebab-case
        },
      },
    ],

    // Disables checking for unnecessary eslint-disable comments.
    // 'eslint-comments/no-unused-disable': 'off',

    // Example rule for using React with Fast Refresh.
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
