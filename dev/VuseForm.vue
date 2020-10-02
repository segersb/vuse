<template>
  <h2>Form - {{ form.error ? 'Error' : 'Valid' }}</h2>
  <div>{{ JSON.stringify(planet) }}</div>
  <div
      v-for="input in form.inputs"
      :key="input.key"
      style="margin-bottom: 8px"
  >
    <div
        v-text="input.label"
        style="margin-bottom: 2px"
    />
    <input
        v-model="input.value"
        type="text"
    />
  </div>
</template>

<script>
import {vuseForm} from "@/lib-components";

export default {
  inject: ['createPlanets'],

  data () {
    return {
      planet: this.createPlanets()[0],
      form: null
    }
  },

  created () {
    this.form = vuseForm(this.planet, {
      name: {
        label: 'Name',
        rules: {
          required: value => !!value
        }
      },
      type: {
        label: 'Type',
        rules: {
          required: value => !!value
        }
      }
    })
  }
}
</script>

<style scoped>
.error {
  background-color: coral !important;
}
</style>
