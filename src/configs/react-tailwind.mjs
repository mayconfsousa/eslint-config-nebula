import tailwind from 'eslint-plugin-tailwindcss'

import react from './react.mjs'

export default [...react, ...tailwind.configs['flat/recommended']]
