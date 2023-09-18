const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  // env: { browser: true, es2021: true, node: true },
  extends: [
    // '@vercel/style-guide/eslint/browser',
    // '@vercel/style-guide/eslint/typescript',
    // '@vercel/style-guide/eslint/react',


   
  ].map(require.resolve),
  globals: {
    JSX: true,
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  parserOptions: {
    project,
  },
  rules: {
    },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    react: {
      version: 'detect',
    },
  },
};


 // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',

    // 'airbnb',
    // 'airbnb-typescript',
    // 'plugin:react/recommended',
    // 'plugin:jsx-a11y/recommended',
    // 'plugin:prettier/recommended',





    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],

    // 'no-param-reassign': 'off',
    // 'import/prefer-default-export': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/function-component-definition': 'off',
    // '@typescript-eslint/no-empty-interface': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',

    // 'import/extensions': 'off', // no extensions are needed in import statements
    // 'react/jsx-props-no-spreading': 'off',
    // 'import/order': 'off', // customized order in .prettierrc
    // 'func-names': 'off', // disabled to allow IIFEs
    // 'import/no-extraneous-dependencies': 'off', // disabled to allow devDependencies
    // 'react/require-default-props': 'off', // deprecated check
  


    