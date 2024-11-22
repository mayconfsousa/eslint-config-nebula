import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwind from 'eslint-plugin-tailwindcss'
import globals from 'globals'

import node from './node.mjs'

export default [
  ...node,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    rules: {
      'react/jsx-boolean-value': 'warn',
      'react/self-closing-comp': 'warn',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'cn'],
      },
    },
  },
]
