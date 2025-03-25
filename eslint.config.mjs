import ts from 'typescript-eslint'

import configs from './src/index.mjs'

export default ts.config(configs.base, {
  files: ['**/*.{ts,tsx}'],
  extends: [ts.configs.disableTypeChecked],
})
