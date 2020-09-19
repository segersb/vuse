<template>
  <button :disabled="disabled" @click="click">{{ text }}</button>
</template>

<script>
import vuseButton from "@/lib-components/vuseButton";

export default {
  setup (props) {
    const { text, click, disabled } = vuseButton({
      text: 'Click me!',
      clickHandler() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
      }
    })

    return {
      text,
      click,
      disabled
    }
  }
}
</script>
