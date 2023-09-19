// const { resolve } = require('node:path');

// const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [

    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
    'prettier',
    require.resolve('./rules/react'),
    // require.resolve('./rules/jsx-a11y'),
  ].map(require.resolve),
  globals: {
    JSX: true,
  },
  // ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  parserOptions: {
    project,
  },
  rules: {
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
