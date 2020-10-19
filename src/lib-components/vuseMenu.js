import {computed, ref} from 'vue'

export default function vuseMenu () {
  const menuItems = ref([])
  const selectedKey = ref('')
  const collapsed = ref(false)

  const addMenuItem = function (menuItem) {
    const key = menuItem.key
    menuItems.value.push({
      ...menuItem,
      selected: computed(() => key === selectedKey.value),
      selectedClass: computed(() => key === selectedKey.value ? 'selected' : ''),
      select() {
        if (selectedKey.value !== key) {
          selectedKey.value = key
        }
      }
    })

    if (menuItems.value.length === 1) {
      menuItems.value[0].select()
    }
  }

  const toggleCollapse = function () {
    collapsed.value = !collapsed.value
  }

  const collapsedClass = computed(() => collapsed.value ? 'collapsed' : '')

  return {
    menuItems,
    selectedKey,
    collapsed,
    collapsedClass,
    addMenuItem,
    toggleCollapse
  }
}
