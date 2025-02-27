import ts from 'typescript-eslint'

import base from './src/base.mjs'

export default ts.config(...base, {
  files: ['**/*.d.ts'],
  extends: [ts.configs.disableTypeChecked],
})
