<template>
  <ul>
    <li
        v-for="planet in planets"
        :key="planet.id"
        :draggable="true"
        @dragover="dragAndDrop.dragOver($event)"
        @dragstart="dragAndDrop.startDrag($event, planet.id)"
        @drop="dragAndDrop.drop(handleDrop, planet.id)"
    >
      {{ planet.name }}
    </li>
  </ul>
  <div v-text="dropMessage"/>
</template>

<script>
import {vuseDragAndDrop} from "@/lib-components";

export default {
  data () {
    return {
      dragAndDrop: null,
      dropMessage: null
    }
  },

  inject: ['planets', 'findPlanetById'],

  created () {
    this.dragAndDrop = vuseDragAndDrop()
  },

  methods: {
    handleDrop (dragPlanetId, dropPlanetId) {
      const dragPlanet = this.findPlanetById(dragPlanetId);
      const dropPlanet = this.findPlanetById(dropPlanetId);
      this.dropMessage = `dropped ${dragPlanet.name} on ${dropPlanet.name}`
    }
  }
}
</script>
