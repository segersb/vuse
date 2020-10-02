import {reactive, watchEffect} from 'vue'

export default function vuseListSort (list) {
  const sort = reactive({
    sortProperty: null,
    sortAscending: null
  })

  watchEffect(() => {
    list.sort = (sortProperty, sortAscending = true) => {
      sort.sortProperty = sortProperty
      sort.sortAscending = sortAscending
    }

    list.toggleSortProperty = sortProperty => {
      if (sort.sortProperty === sortProperty && sort.sortAscending) {
        sort.sortAscending = false
      } else {
        sort.sortProperty = sortProperty
        sort.sortAscending = true
      }
    }

    if (sort.sortProperty) {
      list.items.sort((i1, i2) => {
        let v1 = i1.objectProperties[sort.sortProperty].value
        let v2 = i2.objectProperties[sort.sortProperty].value

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
          return sort.sortAscending ? 1 : -1
        }
        if (v2 == null) {
          return sort.sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && v1) {
          return sort.sortAscending ? -1 : 1
        }
        if (typeof v1 === 'boolean' && !v1) {
          return sort.sortAscending ? 1 : -1
        }
        if (v1 > v2) {
          return sort.sortAscending ? 1 : -1
        }
        return sort.sortAscending ? -1 : 1
      })
    }
  })

  return sort
}
