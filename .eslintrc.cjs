module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['./vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    'prefer-arrow-callback': 0,
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'react/no-unescaped-entities': 1,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unstable-nested-components': [
      2,
      {
        allowAsProps: true,
      },
    ],
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    '@typescript-eslint/no-loop-func': 0,
    'sort-keys': [0, 'asc', { natural: true, allowLineSeparatedGroups: true }],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    // 'import/order': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 1,
    'import/prefer-default-export': 0,
    'import/export': 0,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          // 'pages',
          // 'features',
          // 'entities',
          // 'shared',
          // 'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          // {
          //   pattern: '@/pages/**',
          //   group: 'pages',
          // },
          // {
          //   pattern: '@/widgets/**',
          //   group: 'widgets',
          // },
          // {
          //   pattern: '@/features/**',
          //   group: 'features',
          // },
          // {
          //   pattern: '@/entities/**',
          //   group: 'entities',
          // },
          // {
          //   pattern: '@/shared/**',
          //   group: 'shared',
          // },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
