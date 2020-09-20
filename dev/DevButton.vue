<template>
  <button :disabled="button.disabled" @click="button.click">{{ button.text }}</button>
</template>

<script>
import vuseButton from "@/lib-components/vuseButton";

export default {
  props: ['text', 'clickHandler'],

  setup (props) {
    const button = vuseButton({
      text: props.text,
      clickHandler: props.clickHandler
    })

    return {
      button
    }
  }
}
</script>
