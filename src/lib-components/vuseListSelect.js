import {reactive, watchEffect} from 'vue'

export default function vuseListSelect (list) {
  const select = reactive({
    selectedKeys: []
  })

  watchEffect(() => {
    list.toggleSelection = key => {
      if (!select.selectedKeys.some(selectedKey => selectedKey === key)) {
        select.selectedKeys.push(key)
      } else {
        const keyIndex = select.selectedKeys.findIndex(selectedKey => selectedKey === key)
        if (keyIndex !== -1) {
          select.selectedKeys.splice(keyIndex, 1)
        }
      }
    }

    list.items.forEach(item => {
      item.selected = select.selectedKeys.some(selectedKey => selectedKey === item.key)
    })
  })

  return select
}
