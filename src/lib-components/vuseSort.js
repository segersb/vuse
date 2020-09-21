import {reactive, watchEffect} from 'vue'

export default function vuseSort (items, sortProperty, sortAscending = true) {
  const sort = reactive({
    sortedItems: null
  })

  watchEffect(() => {
    if (!items || !sortProperty) {
      sort.sortedItems = items
    } else {
      sort.sortedItems = items.slice().sort((i1, i2) => {
        let v1 = i1.getProperty(sortProperty)
        let v2 = i2.getProperty(sortProperty)

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
          return sortAscending ? 1 : -1
        }
        if (v2 == null) {
          return sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && v1) {
          return sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && !v1) {
          return sortAscending ? 1 : -1
        }
        if (v1 > v2) {
          return sortAscending ? 1 : -1
        }
        return sortAscending ? -1 : 1
      })
    }
  })

  return sort
}
