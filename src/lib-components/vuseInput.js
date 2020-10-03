import {reactive, watchEffect} from 'vue'

const inputConfig = reactive({
  rules: {}
})

export function vuseInputConfig() {
  return inputConfig
}

export default function vuseInput (object, key, label = null, required = false) {
  const input = reactive({
    key: null,
    label: null,
    value: null,
    required: null,
    rules: null,
    error: false,
    errorMessage: null,
    autoValidate: false
  })

  input.validate = async () => {
    input.error = false
    input.errorMessage = null

    let ruleList = []
    if (typeof input.rules === 'object') {
      const ruleKeys = Object.keys(input.rules)
      for (const ruleKey of ruleKeys) {
        ruleList.push(input.rules[ruleKey])
      }
    }
    if (Array.isArray(input.rules)) {
      ruleList.push(...input.rules)
    }

    for (let rule of ruleList) {
      if (typeof rule === 'string') {
        rule = inputConfig.rules[rule]
      }

      let ruleReturn = await rule.checkHandler(input.value)
      if (!ruleReturn) {
        input.error = true
        input.errorMessage = rule.errorMessage
        return
      }
    }
  }

  watchEffect(() => {
    input.key = key
    input.label = label
    input.required = required
    input.value = object[key]
  })

  watchEffect(() => {
    object[key] = input.value
  })

  watchEffect(async () => {
    if (input.autoValidate) {
      await input.validate()
    }
  })

  return input
}
