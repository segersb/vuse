<template>
  <div :class="[themes.activeTheme.name]">
    <h1>Theme - {{ themes.activeTheme.name }}</h1>
    <ul>
      <li
          v-for="availableTheme in themes.availableThemes"
          :key="availableTheme.name"
          @click="themes.activateTheme(availableTheme.name)"
          class="item"
      >
        {{ availableTheme.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {vuseThemes} from "@/lib-components";

export default {
  data () {
    return {
      themes: null
    }
  },

  created () {
    this.themes = vuseThemes()
    this.themes.addTheme({
      name: 'aqua'
    })
    this.themes.addTheme({
      name: 'dark'
    })
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}
.dark .item {
  background-color: black;
  color: goldenrod;
}
.aqua .item {
  background-color: dodgerblue;
  color: whitesmoke;
}
</style>
