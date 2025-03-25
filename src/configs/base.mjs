import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import ts from 'typescript-eslint'

export default ts.config(
  { files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'] },
  { ignores: ['node_modules/**', 'dist/**', 'build/**'] },
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as', arrayLiteralTypeAssertions: 'never', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: true }],
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
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
        'error',
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
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
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
      'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }],
      'perfectionist/sort-imports': [
        'error',
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
          internalPattern: ['^@/.*', '^~/.*'],
          customGroups: {
            value: {
              react: ['^react$', '^react-dom.*'],
            },
            type: {
              react: ['^react$', '^react-dom.*'],
            },
          },
        },
      ],
      'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc', groupKind: 'values-first' }],
      'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc', groupKind: 'values-first' }],
    },
  },
)
