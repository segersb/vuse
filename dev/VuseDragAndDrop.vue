<template>
  <h1>Drag and drop</h1>
  <div style="display: flex; flex-direction: row; justify-content: space-evenly">
    <div
        style="height: 150px; border: 1px solid black; padding: 8px"
        @dragover="dragAndDrop.dragOver($event, ['right-item'])"
        @drop="dragAndDrop.drop(handleLeftListDrop)"
    >
      <h3>Left planets</h3>
      <ul>
        <li
            v-for="item in leftList.items"
            :key="item.key"
            :draggable="true"
            @dragstart="dragAndDrop.startDrag($event, item.key, 'left-item')"
        >
          {{ item.objectProperties.name.value }}
        </li>
      </ul>
    </div>

    <div
        style="height: 150px; border: 1px solid black; padding: 8px"
        @dragover="dragAndDrop.dragOver($event, ['left-item'])"
        @drop="dragAndDrop.drop(handleRightListDrop)"
    >
      <h3>Right planets</h3>
      <ul>
        <li
            v-for="item in rightList.items"
            :key="item.key"
            :draggable="true"
            @dragstart="dragAndDrop.startDrag($event, item.key, 'right-item')"
        >
          {{ item.objectProperties.name.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {vuseDragAndDrop, vuseList} from "@/lib-components";

export default {
  inject: ['createPlanets'],

  data () {
    return {
      leftPlanets: null,
      rightPlanets: null,
      leftList: null,
      rightList: null,
      dragAndDrop: null
    }
  },

  created () {
    const planets = this.createPlanets()
    this.leftPlanets = [planets[0], planets[1]]
    this.rightPlanets = [planets[2]]

    this.leftList = vuseList(this.leftPlanets, 'id', {
      name: 'name',
      type: 'type',
    })

    this.rightList = vuseList(this.rightPlanets, 'id', {
      name: 'name',
      type: 'type',
    })

    this.dragAndDrop = vuseDragAndDrop()
  },

  methods: {
    handleLeftListDrop (dragPlanetId) {
      const dragPlanetIndex = this.rightPlanets.findIndex(planet => planet.id === dragPlanetId)
      if (dragPlanetIndex !== -1) {
        const dragPlanet = this.rightPlanets.splice(dragPlanetIndex, 1)[0]
        this.leftPlanets.push(dragPlanet)
      }
    },
    handleRightListDrop (dragPlanetId) {
      const dragPlanetIndex = this.leftPlanets.findIndex(planet => planet.id === dragPlanetId)
      if (dragPlanetIndex !== -1) {
        const dragPlanet = this.leftPlanets.splice(dragPlanetIndex, 1)[0]
        this.rightPlanets.push(dragPlanet)
      }
    }
  }
}
</script>
