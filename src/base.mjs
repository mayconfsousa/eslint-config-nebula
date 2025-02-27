import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import ts from 'typescript-eslint'

export default ts.config(
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['node_modules/', 'dist/', 'build/'] },
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  {
    rules: {
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: false }],
      '@typescript-eslint/prefer-nullish-coalescing': ['warn', { ignorePrimitives: true }],
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    extends: [ts.configs.disableTypeChecked],
  },
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          printWidth: 120,
          tabWidth: 2,
          singleQuote: true,
          semi: false,
          trailingComma: 'all',
        },
      ],
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-exports': ['warn', { type: 'natural', order: 'asc' }],
      'perfectionist/sort-imports': [
        'warn',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'side-effect',
            'builtin',
            'react',
            'type',
            'external',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'style',
            'object',
            'unknown',
          ],
          newlinesBetween: 'always',
          internalPattern: ['@/**', '~/**'],
          customGroups: {
            value: {
              react: ['react', 'react-dom', 'react-dom/*'],
            },
            type: {
              react: ['react', 'react-dom', 'react-dom/*'],
            },
          },
        },
      ],
      'perfectionist/sort-named-exports': ['warn', { type: 'natural', order: 'asc', groupKind: 'values-first' }],
      'perfectionist/sort-named-imports': ['warn', { type: 'natural', order: 'asc', groupKind: 'values-first' }],
    },
  },
  {
    rules: {
      'object-shorthand': 'warn',
      'prefer-const': 'warn',
      'prefer-template': 'warn',
      'require-await': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
)
