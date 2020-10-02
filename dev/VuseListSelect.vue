<template>
  <h2>List selection</h2>
  <ul>
    <li
        v-for="item in list.items"
        :key="item.key"
        :class="{ selected: item.selected }"
        @click="list.toggleSelection(item.key)"
    >
      {{ `${item.objectProperties.name.value} (${item.objectProperties.type.value})` }}
    </li>
  </ul>
</template>

<script>
import {vuseList, vuseListSelect} from "@/lib-components";

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
    vuseListSelect(this.list)

    this.list.toggleSelection(2)

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
