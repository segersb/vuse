<template>
  <h2>Sorted list</h2>
  <ul>
    <li v-for="item in items" :key="item.key">
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
import {vuseList, vuseSort} from "@/lib-components";

export default {
  inject: ['planets'],

  data () {
    return {
      items: null
    }
  },

  created () {
    const {items} = vuseList(this.planets, 'id', 'name')
    const {sortedItems} = vuseSort(items, 'name')

    this.items = sortedItems
  }
}
</script>
