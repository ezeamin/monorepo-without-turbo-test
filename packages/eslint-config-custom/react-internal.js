const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node" ,
    '@vercel/style-guide/eslint/react',
    "@vercel/style-guide/eslint/typescript",
    // require.resolve('./rules/react'),
  ].map(require.resolve),
  globals: {
    JSX: true,
  },
  parserOptions: {
    project,
  },
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],

    'no-param-reassign': 'off',

    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'import/extensions': 'off', // no extensions are needed in import statements
    'react/jsx-props-no-spreading': 'off',
    'import/order': 'off', // customized order in .prettierrc
    'func-names': 'off', // disabled to allow IIFEs
    'import/no-extraneous-dependencies': 'off', // disabled to allow devDependencies
    'react/require-default-props': 'off', // deprecated check

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react/react-in-jsx-scope': 'off',

    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true, // Permite nombres en camelCase (primera letra en minúscula)
          pascalCase: true, // Permite nombres en PascalCase (primera letra en mayúscula)
          kebabCase: false, // Deshabilita kebab-case
        },
      },
    ],
  },
  settings: {
    // 'import/resolver': {
    //   typescript: {
    //     project,
    //   },
    // },
    react: {
      version: 'detect',
    },
  },
};
