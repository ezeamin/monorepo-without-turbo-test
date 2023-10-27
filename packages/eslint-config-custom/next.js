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
    ...[
      '@vercel/style-guide/eslint/node',
      '@vercel/style-guide/eslint/typescript',
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/react',
      '@vercel/style-guide/eslint/next',
    ].map(require.resolve),
    'eslint-config-turbo',
    'next/core-web-vitals',
  ],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  // add rules configurations here
  rules: {
    'import/no-default-export': 'off',

    // Defines how React function components should be written.
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'eslint-comments/require-description': ['error', { ignore: [] }],

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

    'import/order': 'off',

    'no-implicit-coercion': 'off',
  },
};
