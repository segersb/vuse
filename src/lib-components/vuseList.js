import {reactive, watchEffect} from 'vue'
import {vuseObjectProperty} from "@/lib-components";

export default function vuseList (objects, keyProperty, properties) {
  const list = reactive({
    items: []
  })

  watchEffect(() => {
    list.items = objects.map(object => {
      const key = vuseObjectProperty(object, keyProperty).value

      const objectProperties = {}
      Object.keys(properties).forEach(propertyKey => {
        objectProperties[propertyKey] = vuseObjectProperty(object, properties[propertyKey])
      })

      return {
        key,
        object,
        objectProperties
      }
    })
  })

  vuseListSelect(list)
  vuseListSort(list)
  return list
}

function vuseListSelect (list) {
  list.selectedKeys = []

  list.toggleSelection = key => {
    if (!list.selectedKeys.some(selectedKey => selectedKey === key)) {
      list.selectedKeys.push(key)
    } else {
      const keyIndex = list.selectedKeys.findIndex(selectedKey => selectedKey === key)
      if (keyIndex !== -1) {
        list.selectedKeys.splice(keyIndex, 1)
      }
    }
  }

  watchEffect(() => {
    list.items.forEach(item => {
      item.selected = list.selectedKeys.some(selectedKey => selectedKey === item.key)
    })
  })
}

function vuseListSort (list) {
  list.sortProperty = null
  list.sortAscending = null

  list.sort = (sortProperty, sortAscending = true) => {
    list.sortProperty = sortProperty
    list.sortAscending = sortAscending
  }

  list.toggleSortProperty = sortProperty => {
    if (list.sortProperty === sortProperty && list.sortAscending) {
      list.sortAscending = false
    } else {
      list.sortProperty = sortProperty
      list.sortAscending = true
    }
  }

  watchEffect(() => {
    if (list.sortProperty) {
      list.items.sort((i1, i2) => {
        let v1 = i1.objectProperties[list.sortProperty].value
        let v2 = i2.objectProperties[list.sortProperty].value

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
  })
}
