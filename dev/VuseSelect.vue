<template>
  <h2>Selection</h2>

  <div
      v-for="item in items"
      :key="item.key"
  >
    <input
        :class="{
          selected: item.selected
        }"
        :name="item.key"
        type="checkbox"
        v-model="item.selected"
    />
    <label :for="item.key" v-text="item.text"/>
  </div>

  <br/>

  <div
      v-for="item in items"
      :key="item.key"
  >
    {{ item.text }} is {{ item.selected ? 'selected' : 'not selected' }}
  </div>

</template>

<script>
import {vuseList, vuseSelect} from "@/lib-components";

export default {
  inject: ['planets'],

  data () {
    return {
      items: null
    }
  },

  created () {
    const {items} = vuseList(this.planets, 'id', 'name')
    const {selectionItems} = vuseSelect(items, 2)
    this.items = selectionItems
  }
}
</script>

<style scoped>
.selected {
  background-color: coral !important;
}
</style>
