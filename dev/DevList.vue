<template>
  <ul>
    <li
        v-for="item in list.items"
        :key="item.key"
        :class="{
          selected: item.selected
        }"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
import {reactive, watchEffect} from 'vue'
import vuseItemList from "@/lib-components/vuseItemList";
import vuseItem from "@/lib-components/vuseItem";

export default {
  props: ['values', 'itemKey', 'itemText', 'sortProperty'],

  setup (props) {
    const devList = reactive({
      list: null
    })

    watchEffect(() => {
      const items = props.values.map(value => vuseItem({
        value,
        key: props.itemKey,
        text: props.itemText
      }))

      devList.list = vuseItemList({
        items,
        sortProperty: props.sortProperty,
        selectedKeys: [4]
      })
    })

    return devList
  }
}
</script>

<style scoped>
.selected {
  background-color: coral;
}
</style>
