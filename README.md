# eslint-config-nebula

[![npm version](https://img.shields.io/npm/v/eslint-config-nebula)](https://www.npmjs.com/package/eslint-config-nebula)

## What's included?

- [Perfectionist plugin](https://www.npmjs.com/package/eslint-plugin-perfectionist)
- [Prettier plugin](https://www.npmjs.com/package/eslint-plugin-prettier)
- [React plugin](https://www.npmjs.com/package/eslint-plugin-react)
- [React Hooks plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [TailwindCSS plugin](https://www.npmjs.com/package/eslint-plugin-tailwindcss)
- [Unused Imports plugin](https://www.npmjs.com/package/eslint-plugin-unused-imports)

## Installation

```bash
npm add -D eslint eslint-config-nebula
pnpm add -D eslint eslint-config-nebula
yarn add -D eslint eslint-config-nebula
bun add -D eslint eslint-config-nebula
```

## Configuration

### Node

```js
// eslint.config.mjs

import node from 'eslint-config-nebula/node'

export default [
  ...node,
  // Override any settings from the "eslint-config-nebula" config here
]

```
### React

```js
// eslint.config.mjs

import react from 'eslint-config-nebula/react'

export default [
  ...react,
  // Override any settings from the "eslint-config-nebula" config here
]
```

### VS Code

```jsonc
// package.json

"scripts": {
  "lint": "eslint --fix"
},
```
> Recommend to use [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

```jsonc
// settings.json

"[javascript]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[javascriptreact]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescript]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"editor.codeActionsOnSave": {
  "source.fixAll": "explicit"
},
```