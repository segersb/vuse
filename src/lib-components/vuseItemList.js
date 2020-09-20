import {reactive, watchEffect} from 'vue'
import {vuseItem} from '@/entry'

export default function vuseItemList (init = {}) {
  const itemList = reactive({
    items: []
  })

  watchEffect(() => {
    console.log('initializing item list')
    if (!init.items) {
      itemList.items = []
    } else {
      itemList.items = init.items.map(item => vuseItem({
        item,
        itemKey: init.itemKey,
        itemValue: init.itemValue,
        itemText: init.itemText
      }))
    }
  })
  return itemList
}
