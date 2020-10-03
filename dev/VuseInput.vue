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
import {vuseInput, vuseInputConfig} from "@/lib-components";

export default {
  inject: ['createPlanets'],

  data () {
    return {
      planet: this.createPlanets()[0],
      nameInput: null
    }
  },

  created () {
    const inputConfig = vuseInputConfig()
    inputConfig.rules = {
      required: {
        checkHandler: value => !!value,
        errorMessage: 'You should really fill in this field'
      },
      minLength3: {
        checkHandler: value => value.length >= 3,
        errorMessage: 'Should be at least 3 characters lang',
      }
    }

    this.nameInput = vuseInput(this.planet, 'name', 'Name', true)
    this.nameInput.rules = ['required', 'minLength3']
    this.nameInput.autoValidate = true
  }
}
</script>

<style scoped>
.error {
  background-color: coral !important;
}
</style>
