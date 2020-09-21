<template>
  <h2>Debounced text</h2>
  <input v-model="text" type="text"/>
  <input v-model="copy" disabled type="text"/>
</template>

<script>
import {vuseDebounce} from "@/lib-components";

export default {
  data () {
    return {
      text: 'text',
      copy: 'text',
      copyTextDebounce: null,
    }
  },

  watch: {
    text () {
      this.copyTextDebounce.executeFunction()
    }
  },

  created () {
    this.copyTextDebounce = vuseDebounce(() => {
      this.copy = this.text
    }, 500)
  }
}
</script>
