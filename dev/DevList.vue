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
      devList.list = vuseItemList({
        items: props.values.map(value => vuseItem({
          value,
          key: props.itemKey,
          text: props.itemText
        })),
        sortProperty: props.sortProperty,
      })
    })

    return devList
  }
}
</script>
