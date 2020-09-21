import {reactive, watchEffect} from 'vue'
import {vuseItem} from "@/lib-components";

export default function vuseList (init = {}) {
  const list = reactive({
    values: null,
    items: null,
    itemKey: null,
    itemText: null,
    sortProperty: null,
    sortAscending: null,
    selectedKeys: []
  })

  list.sort = (sortProperty, sortAscending = true) => {
    list.sortProperty = sortProperty
    list.sortAscending = sortAscending
    if (list.items != null && list.sortProperty != null) {
      list.items.sort((i1, i2) => {
        let v1 = i1.getProperty(list.sortProperty)
        let v2 = i2.getProperty(list.sortProperty)

        if (v1 && v1.toLowerCase) {
          v1 = v1.toLowerCase()
        }
        if (v2 && v2.toLowerCase) {
          v2 = v2.toLowerCase()
        }

        if (v1 === v2) {
          return 0
        }
        if (v1 == null) {
          return list.sortAscending ? 1 : -1
        }
        if (v2 == null) {
          return list.sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && v1) {
          return list.sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && !v1) {
          return list.sortAscending ? 1 : -1
        }
        if (v1 > v2) {
          return list.sortAscending ? 1 : -1
        }
        return list.sortAscending ? -1 : 1
      })
    }
  }

  list.selectItemKey = key => {
    list.items.forEach(item => {
      item.selected = item.key === key
    })
  }

  list.selectItemKeys = keys => {
    list.items.forEach(item => {
      item.selected = keys.some(key => item.key === key)
    })
  }

  watchEffect(() => {
    list.values = init.values || []
    list.itemKey = init.itemKey
    list.itemText = init.itemText

    list.items = init.values.map(value => vuseItem({
      value,
      key: list.itemKey,
      text: list.itemText
    }))

    list.sort(init.sortProperty, init.sortAscending)

    if (init.selectedKey) {
      list.selectItemKey(init.selectedKey)
    }
    if (init.selectedKeys) {
      list.selectItemKeys(init.selectedKeys)
    }
  })

  return list
}
