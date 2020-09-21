<template>
  <h2>Click with async action</h2>
  <button :disabled="click.clickRunning" @click="click.onClick">Click me!</button>
</template>

<script>
import {vuseClick} from "@/lib-components";

export default {
  data() {
    return {
      click: null
    }
  },

  inject: ['asyncTimeout'],

  created () {
    this.click = vuseClick(this.asyncTimeout)
  }
}
</script>
