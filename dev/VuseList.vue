<template>
  <h2>List</h2>
  <ul>
    <li
        v-for="item in list.items"
        :key="item.key"
        :class="{ selected: item.selected }"
        @click="list.toggleSelection(item.key)"
        style="cursor: pointer"
    >
      {{ item.objectProperties.name.value }}
    </li>
  </ul>
</template>

<script>
import {vuseList} from "@/lib-components";

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
      name: planet => 'The planet ' + planet.name
    })
    this.list.sort('name')

    const vm = this
    setTimeout(() => {
      vm.planets.push({
        id: Math.random() * 1000,
        name: 'Jupiter',
        type: 'Gas'
      })
    }, 2000)
  }
}
</script>

<style scoped>
.selected {
  background-color: coral !important;
}
</style>

