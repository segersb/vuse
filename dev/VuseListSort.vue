<template>
  <h2>Sorted list</h2>
  <ul>
    <li
        v-for="item in list.items"
        :key="item.key"
    >
      {{ `${item.objectProperties.name.value} (${item.objectProperties.type.value})` }}
    </li>
  </ul>
</template>

<script>
import {vuseList, vuseListSort} from "@/lib-components";

export default {
  inject: ['createPlanets'],

  data () {
    return {
      planets: this.createPlanets(),
      list: null
    }
  },

  created () {
    this.list = vuseList(this.planets, 'id', {
      name: 'name',
      type: 'type',
    })
    vuseListSort(this.list)
    this.list.sort('name')
  }
}
</script>
