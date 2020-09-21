<template>
  <ul>
    <li
        v-for="planet in dev.planets"
        :key="planet.id"
        :draggable="true"
        @dragover="dragAndDrop.dragOver($event)"
        @dragstart="dragAndDrop.startDrag($event, planet.id)"
        @drop="dragAndDrop.drop(handleDrop, planet.id)"
    >
      {{ planet.name }}
    </li>
  </ul>
</template>

<script>
import {vuseDragAndDrop} from "@/lib-components";
import vuseDev from "./vuseDev";

export default {
  setup (props) {
    const dragAndDrop = vuseDragAndDrop()
    const dev = vuseDev()

    return {
      dev,
      dragAndDrop,
      handleDrop (dragPlanetId, dropPlanetId) {
        const dragPlanet = dev.findPlanetById(dragPlanetId);
        const dropPlanet = dev.findPlanetById(dropPlanetId);
        console.log(`dropped ${dragPlanet.name} on ${dropPlanet.name}`)
      }
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: coral;
}
</style>
