<template>
  <h2>Object properties</h2>
  <div>{{ JSON.stringify(planet) }}</div>
  <div>{{ planetName.value }}</div>
  <div>{{ planetType.value }}</div>
</template>

<script>
import {vuseObjectProperty} from "@/lib-components";

export default {
  data () {
    return {
      planet: {
        name: 'Mars',
        type: 'Rocky'
      },
      planetName: null,
      planetType: null
    }
  },


  created () {
    this.planetName = vuseObjectProperty(this.planet, 'name')
    this.planetType = vuseObjectProperty(this.planet, planet => planet && planet.type)

    const vm = this
    setTimeout(() => {
      vm.planet.name = 'Jupiter'
      vm.planet.type = 'Gas'
    }, 2000)
  }
}
</script>
