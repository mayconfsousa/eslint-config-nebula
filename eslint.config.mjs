import ts from 'typescript-eslint'

import nebula from './src/index.mjs'

export default ts.config(nebula.base, {
  files: ['**/*.{ts,tsx}'],
  extends: [ts.configs.disableTypeChecked],
})
