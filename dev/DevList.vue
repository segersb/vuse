<template>
  <ul>
    <li
        v-for="item in list.items"
        :key="item.key"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
import vuseItemList from "@/lib-components/vuseItemList";

export default {
  props: ['items', 'itemKey', 'itemText'],

  setup (props) {
    const list = vuseItemList({
      items: props.items,
      itemKey: props.itemKey,
      itemText: props.itemText
    })

    return {
      list
    }
  }
}
</script>
