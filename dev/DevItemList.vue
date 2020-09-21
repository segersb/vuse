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
import {vuseItem, vuseItemList} from "@/lib-components";
import vuseDev from "./vuseDev";

export default {
  setup (props) {
    const dev = vuseDev()

    const items = dev.planets.map(planet => vuseItem({
      value: planet,
      key: 'id',
      text: 'name'
    }))

    const list = vuseItemList({
      items,
      sortProperty: 'name',
      selectedKeys: [4]
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
