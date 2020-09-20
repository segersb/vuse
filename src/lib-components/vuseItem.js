import {reactive, watchEffect} from 'vue'

export default function vuseItem (init = {}) {
  const item = reactive({
    value: null,
    key: null,
    text: null,
  })

  item.getProperty = propertyName => {
    return propertyName.split('.').reduce((i, p) => i ? i[p] : null, item.value)
  }

  watchEffect(() => {
    item.value = init.value || {}

    if (init.key) {
      item.key = item.value[init.key]
    } else {
      item.key = item.value
    }

    if (init.text) {
      item.text = item.value[init.text]
    } else {
      item.text = item.value
    }

    console.debug('initialized item', item)
  })

  return item
}
