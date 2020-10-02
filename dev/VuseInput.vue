<template>
  <h2>Input - required - min length 3</h2>
  <div>{{ JSON.stringify(planet) }}</div>
  <input
      v-model="nameInput.value"
      :class="{ error: nameInput.error }"
      type="text"
  />
  <div>{{ nameInput.errorMessage }}</div>
</template>

<script>
import {vuseInput} from "@/lib-components";

export default {
  inject: ['createPlanets'],

  data () {
    return {
      planet: this.createPlanets()[0],
      nameInput: null
    }
  },

  created () {
    this.nameInput = vuseInput(this.planet, 'name')
    this.nameInput.label = 'Name'
    this.nameInput.rules = {
      required: value => !!value,
      minLength: value => value.length >= 3
    }
  }
}
</script>

<style scoped>
.error {
  background-color: coral !important;
}
</style>
