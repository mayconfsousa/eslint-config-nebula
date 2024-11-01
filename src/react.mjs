import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwind from 'eslint-plugin-tailwindcss'
import globals from 'globals'

import base from './base.mjs'

export default [
  ...base,
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
