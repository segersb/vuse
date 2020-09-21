<template>
  <button :disabled="button.disabled" @click="button.click">{{ button.text }}</button>
</template>

<script>
import {vuseButton} from "@/lib-components";
import vuseDev from "./vuseDev";

export default {
  setup (props) {
    const dev = vuseDev()
    const button = vuseButton({
      text: 'Click me!',
      clickHandler: dev.asyncTimeout
    })

    return {
      button
    }
  }
}
</script>
