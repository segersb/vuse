<template>
  <h2>Fetch</h2>
  <ul>
    <li
        v-for="item in list.items"
        :key="item.key"
        :class="{ selected: item.selected }"
        @click="list.toggleSelection(item.key)"
        style="cursor: pointer"
    >
      {{ item.objectProperties.url.value }}
    </li>
  </ul>
</template>

<script>
import {vuseList, vuseFetch, vuseFetchConfig} from "@/lib-components";

export default {
  inject: ['createPlanets'],

  data () {
    return {
      charactersFetch: null,
      list: null
    }
  },

  created () {
    const fetchConfig = vuseFetchConfig()
    fetchConfig.authorization = () => 'Bearer_123465'

    this.charactersFetch = vuseFetch('https://anapioficeandfire.com/api/characters')
    this.charactersFetch.getJsonList()

    this.list = vuseList(this.charactersFetch.data, 'url', {
      url: 'url'
    })
  }
}
</script>

<style scoped>
.selected {
  background-color: coral !important;
}
</style>

