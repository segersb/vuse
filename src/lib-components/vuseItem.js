import {reactive, watchEffect} from 'vue'

export default function vuseItem (init = {}) {
  const item = reactive({
    key: null,
    value: null,
    text: null,
  })

  watchEffect(() => {
    console.log('initializing item')
    if (!init.item) {
      item.key = null
      item.value = null
      item.text = null
    } else {
      if (init.itemKey) {
        item.key = init.item[init.itemKey]
      } else {
        item.key = init.item
      }

      if (init.itemValue) {
        item.value = init.item[init.itemValue]
      } else {
        item.value = item.key
      }

      if (init.itemText) {
        item.text = init.item[init.itemText]
      } else {
        item.text = item.value
      }
    }
  })

  return item
}
