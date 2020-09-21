<template>
  <h2>Click with async action</h2>
  <button :disabled="action.actionRunning" @click="action.run">Run action!</button>
  <div v-if="action.actionRunning">The action is running...</div>
</template>

<script>
import {vuseAction} from "@/lib-components";

export default {
  data () {
    return {
      action: null
    }
  },

  inject: ['asyncTimeout'],

  created () {
    this.action = vuseAction(this.asyncTimeout)
  }
}
</script>
