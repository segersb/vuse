import { ref } from 'vue'

export default function vuseOption(options = {}) {
  const getOptionProperty = property => {
    if (!options[property]) {
      return null
    }

    return property.split('.').reduce((i, p) => i ? i[p] : null, options)
  }

  const getOptionValue = property => {
    const optionProperty = getOptionProperty(property)
    if (optionProperty == null) {
      return null
    }

    if (typeof optionProperty === "function") {
      return optionProperty()
    }
    return optionProperty
  }

  const getOptionValueRef = property => {
    return ref(getOptionValue(property))
  }

  const runOption = property => {
    const optionProperty = getOptionProperty(property)
    if (optionProperty == null) {
      return
    }
    if (typeof optionProperty === "function") {
      return optionProperty()
    } else {
      console.error(`Unable to run option property ${property}, value is not a function: ${optionProperty}`)
    }
  }

  return {
    getOptionValue,
    getOptionValueRef,
    runOption,
  }
}
