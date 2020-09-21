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
import {vuseList, vuseSelect, vuseSort} from "@/lib-components";

export default {
  inject: ['planets'],

  data () {
    return {
      items: null,
      sortedItems: null,
      selectionItems: null,
    }
  },

  created () {
    const {items} = vuseList(this.planets, 'id', 'name')
    const {sortedItems} = vuseSort(items, 'name')
    const {selectionItems} = vuseSelect(items, 2)

    this.items = items
    this.sortedItems = sortedItems
    this.selectionItems = selectionItems
  }
}
</script>

<style scoped>
.selected {
  background-color: coral;
}
</style>
