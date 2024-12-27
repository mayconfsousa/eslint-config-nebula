# eslint-config-nebula

[![npm version](https://img.shields.io/npm/v/eslint-config-nebula)](https://www.npmjs.com/package/eslint-config-nebula)

## What's included?

- [Perfectionist plugin](https://www.npmjs.com/package/eslint-plugin-perfectionist) - Enforces consistent sorting for objects, imports, TypeScript types, enums, JSX props, and more.
- [Prettier plugin](https://www.npmjs.com/package/eslint-plugin-prettier) - Integrates Prettier with ESLint, reporting formatting issues as ESLint errors.
- [React plugin](https://www.npmjs.com/package/eslint-plugin-react) - Provides linting rules for React applications.
- [React Hooks plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Enforces the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks).
- [React Refresh plugin](https://www.npmjs.com/package/eslint-plugin-react-refresh) - Ensures components support fast refresh updates.
- [TailwindCSS plugin](https://www.npmjs.com/package/eslint-plugin-tailwindcss) - Enforces best practices and consistency with Tailwind CSS.
- [Unused Imports plugin](https://www.npmjs.com/package/eslint-plugin-unused-imports) - Detects and removes unused ES6 imports.
- [React Refresh plugin](https://www.npmjs.com/package/eslint-plugin-react-refresh) - Ensures components are compatible with fast refresh updates.

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

### React + Tailwind

```js
// eslint.config.mjs

import reactTailwind from 'eslint-config-nebula/react-tailwind'

export default [
  ...reactTailwind,
  // Override any settings from the "eslint-config-nebula" config here
]
```

### VS Code

```jsonc
// package.json

"scripts": {
  "lint": "eslint --fix && tsc --noEmit"
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