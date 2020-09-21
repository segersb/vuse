<template>
  <h2>Click with async action</h2>
  <button :disabled="click.clickRunning" @click="click.onClick">Click me!</button>
</template>

<script>
import {vuseClick} from "@/lib-components";
import vuseDev from "./vuseDev";

export default {
  setup (props) {
    const dev = vuseDev()
    const click = vuseClick(dev.asyncTimeout)

    return {
      click
    }
  }
}
</script>
