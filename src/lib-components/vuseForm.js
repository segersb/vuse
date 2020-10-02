import {reactive, watchEffect} from 'vue'
import {vuseInput} from "@/lib-components";

export default function vuseForm (data, inputFields) {
  const form = reactive({
    inputs: [],
    error: false
  })

  watchEffect(() => {
    form.inputs.splice(0, form.inputs.length)
    for (let inputFieldKey of Object.keys(inputFields)) {
      const input = vuseInput(data, inputFieldKey)
      input.label = inputFields[inputFieldKey].label
      input.rules = inputFields[inputFieldKey].rules || {}
      form.inputs.push(input)
    }
  })

  watchEffect(() => {
    form.error = form.inputs.some(input => input.error)
  })

  return form
}
