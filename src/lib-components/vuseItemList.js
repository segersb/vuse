import {reactive, watchEffect} from 'vue'

export default function vuseItemList (init = {}) {
  const itemList = reactive({
    items: null,
    sortProperty: null,
    sortAscending: null,
    selectedKeys: []
  })

  itemList.sort = (sortProperty, sortAscending = false) => {
    itemList.sortProperty = sortProperty
    itemList.sortAscending = sortAscending
    if (itemList.items != null && itemList.sortProperty != null) {
      itemList.items.sort((i1, i2) => {
        let v1 = i1.getProperty(itemList.sortProperty)
        let v2 = i2.getProperty(itemList.sortProperty)

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
          return itemList.sortAscending ? 1 : -1
        }
        if (v2 == null) {
          return itemList.sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && v1) {
          return itemList.sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && !v1) {
          return itemList.sortAscending ? 1 : -1
        }
        if (v1 > v2) {
          return itemList.sortAscending ? 1 : -1
        }
        return itemList.sortAscending ? -1 : 1
      })
    }
  }

  itemList.selectItemKey = key => {
    itemList.items.forEach(item => {
      item.selected = item.key === key
    })
  }

  itemList.selectItemKeys = keys => {
    itemList.items.forEach(item => {
      item.selected = keys.some(key => item.key === key)
    })
  }

  watchEffect(() => {
    itemList.items = init.items || []
    itemList.sort(init.sortProperty, init.sortAscending)
    if (init.selectedKey) {
      itemList.selectItemKey(init.selectedKey)
    }
    if (init.selectedKeys) {
      itemList.selectItemKeys(init.selectedKeys)
    }
    console.debug('initialized item list', itemList)
  })

  return itemList
}
