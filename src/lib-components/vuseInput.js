import {reactive, watchEffect} from 'vue'

export default function vuseInput (object, key) {
  const input = reactive({
    key: null,
    label: null,
    value: null,
    rules: {},
    error: false,
    errorMessage: null,
  })

  watchEffect(() => {
    input.key = key
    input.value = object[key]
  })

  watchEffect(() => {
    object[key] = input.value
  })

  watchEffect(async () => {
    const ruleKeys = Object.keys(input.rules)
    for (const ruleKey of ruleKeys) {
      const ruleReturn = await input.rules[ruleKey](input.value);
      if (!ruleReturn) {
        input.error = true
        input.errorMessage = ruleKey
        return
      }
    }
    input.error = false
    input.errorMessage = null
  })

  return input
}
