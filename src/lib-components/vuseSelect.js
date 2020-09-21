import {reactive, watchEffect} from 'vue'

export default function vuseSelect (items, ...selectedKeys) {
  const select = reactive({
    selectionItems: null
  })

  watchEffect(() => {
    select.selectionItems = items.map(item => {
      return {
        ...item,
        selected: selectedKeys.some(selectedKey => item.key === selectedKey)
      }
    })
  })

  return select
}
