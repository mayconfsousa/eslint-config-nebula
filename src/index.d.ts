import type { Linter } from 'eslint'

interface Config {
  base: Linter.Config[]
  node: Linter.Config[]
  react: Linter.Config[]
  reactTailwind: Linter.Config[]
}

declare const config: Config

export = config
