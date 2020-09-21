import {reactive, watchEffect} from 'vue'

export default function vuseItem (value, key, text) {
  const item = reactive({
    value: null,
    key: null,
    text: null,
  })

  item.getProperty = property => {
    if (!property) {
      return null
    }
    if (typeof property === 'string') {
      return property.split('.').reduce((i, p) => i ? i[p] : null, item.value);
    }
    if (typeof property === "function") {
      return property(value)
    }
  }

  watchEffect(() => {
    item.value = value || {}

    if (key) {
      item.key = item.getProperty(key)
    } else {
      item.key = item.value
    }

    if (text) {
      item.text = item.getProperty(text)
    } else {
      item.text = item.value
    }
  })

  return item
}
