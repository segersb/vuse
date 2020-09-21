<template>
  <h2>Simple list</h2>
  <ul>
    <li v-for="item in items" :key="item.key">
      {{ item.text }}
    </li>
  </ul>

  <h2>Sorted list</h2>
  <ul>
    <li v-for="item in sortedItems" :key="item.key">
      {{ item.text }}
    </li>
  </ul>

  <h2>Selection list</h2>
  <ul>
    <li
        v-for="item in selectionItems"
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
import {vuseList, vuseSort, vuseSelect} from "@/lib-components";
import vuseDev from "./vuseDev";

export default {
  setup (props) {
    const dev = vuseDev()

    const {items} = vuseList(dev.planets, 'id', 'name')
    const {sortedItems} = vuseSort(items, 'name')
    const {selectionItems} = vuseSelect(items, 2)

    return {
      items,
      sortedItems,
      selectionItems
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: coral;
}
</style>
