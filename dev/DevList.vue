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
import {vuseList} from "@/lib-components";
import vuseDev from "./vuseDev";

export default {
  setup (props) {
    const dev = vuseDev()

    const list = vuseList({
      values: dev.planets,
      itemKey: 'id',
      itemText: 'name',
      sortProperty: 'name',
      selectedKeys: [3]
    })

    return {
      list
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: coral;
}
</style>
