module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['import', 'unused-imports', 'sort-exports'],
  rules: {
    // FIXME: no-unsafe-* 룰과 restrict-template-expressions 룰은 자바스크립트에서 타입스크립트로 마이그레이션하는 과정에서 any 타입 경고를 무시하기 위해 임시로 warn으로 설정한 것이므로 추후 error로 복구 필요
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase'],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'utils/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'contexts/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'hooks/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'services/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'layouts/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'pages/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'styles/**',
            group: 'external',
            position: 'after',
          },
          {
            // FIXME: import/from 구문에서는 작동하지만 import 단독 구문에서는 작동 안 함
            pattern: '**/*.css',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['{react*,react*/**}'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
    'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/no-autofocus': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
