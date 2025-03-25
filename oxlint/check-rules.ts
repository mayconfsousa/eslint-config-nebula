import eslintJsConfig from './eslint-js-config.json'
import eslintTsConfig from './eslint-ts-config.json'
import oxlintRules from './oxlint-rules.json'

// function difference<K, V>(map1: Map<K, V>, map2: Map<K, V>): Map<K, V> {
//   const result = new Map<K, V>()
//   for (const [key, value] of map1) {
//     if (!map2.has(key) || map2.get(key) !== value) {
//       result.set(key, value)
//     }
//   }
//   return result
// }

function main() {
  const eslintRulesSet = new Set<string>()

  for (const [rule, params] of Object.entries({ ...eslintJsConfig.rules, ...eslintTsConfig.rules })) {
    const status = params[0] as number

    if (rule === '@typescript-eslint/no-floating-promises') {
      console.log('rule', rule, status)
    }

    if (status > 0) {
      eslintRulesSet.add(rule)
    }
  }

  console.log('Active eslint rules:', eslintRulesSet.size)

  console.log('Rules not enabled by default:')

  for (const rule of oxlintRules) {
    let found = false

    if (eslintRulesSet.has(rule.name)) {
      eslintRulesSet.delete(rule.name)
      found = true
    }
    if (eslintRulesSet.has(`@typescript-eslint/${rule.name}`)) {
      eslintRulesSet.delete(`@typescript-eslint/${rule.name}`)
      found = true
    }
    if (eslintRulesSet.has(`react/${rule.name}`)) {
      eslintRulesSet.delete(`react/${rule.name}`)
      found = true
    }
    if (eslintRulesSet.has(`react-hooks/${rule.name}`)) {
      eslintRulesSet.delete(`react-hooks/${rule.name}`)
      found = true
    }

    if (found && !rule.isDefault) {
      console.log(`"${rule.source}/${rule.name}": "error",`)
    }
  }

  console.log('Missing eslint rules:', eslintRulesSet.size)

  for (const rule of Array.from(eslintRulesSet).sort()) {
    console.log(`"${rule}": "error",`)
  }

  // const recommendedRules = new Map(
  //   ts.configs.recommended.flatMap((config) =>
  //     Object.entries(config.rules ?? {}).map(([rule, params]) => [rule, params]),
  //   ),
  // )

  // const recommendedTypeCheckedRules = new Map(
  //   ts.configs.recommendedTypeChecked.flatMap((config) =>
  //     Object.entries(config.rules ?? {}).map(([rule, params]) => [rule, params]),
  //   ),
  // )

  // const stylisticRules = new Map(
  //   ts.configs.stylistic.flatMap((config) =>
  //     Object.entries(config.rules ?? {}).map(([rule, params]) => [rule, params]),
  //   ),
  // )

  // const stylisticTypeCheckedRules = new Map(
  //   ts.configs.stylisticTypeChecked.flatMap((config) =>
  //     Object.entries(config.rules ?? {}).map(([rule, params]) => [rule, params]),
  //   ),
  // )

  // console.log(difference(recommendedRules, recommendedTypeCheckedRules))
  // console.log(difference(recommendedTypeCheckedRules, recommendedRules))

  process.exit(0)
}

main()

// // Print oxlint rules

// const result = []

// $$('tbody > tr').forEach((tr) => {
//   const name = tr.querySelector('td:nth-child(1)')?.textContent
//   const source = tr.querySelector('td:nth-child(2)')?.textContent
//   const isDefault = !!tr.querySelector('td:nth-child(3)')?.innerHTML.trim()

//   result.push({ name, source, isDefault })
// })

// console.log(JSON.stringify(result))
