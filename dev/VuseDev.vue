<script>
import VuseClick from './VuseClick'
import VuseDebounce from './VuseDebounce'
import VuseDragAndDrop from './VuseDragAndDrop'
import VuseList from './VuseList'
import VuseSelect from './VuseSelect'

const components = {
  VuseClick,
  VuseDebounce,
  VuseDragAndDrop,
  VuseList,
  VuseSelect,
};

export default {
  name: 'ServeDev',
  components: components,
  data () {
    return {
      componentList: Object.keys(components),
      selectedComponent: Object.keys(components)[0]
    }
  },
  provide: {
    planets: [
      {
        id: 1,
        name: 'Mercury'
      },
      {
        id: 2,
        name: 'Venus'
      },
      {
        id: 3,
        name: 'Earth'
      }
    ],

    findPlanetById(id) {
      return this.planets.find(planet => planet.id === id)
    },

    asyncTimeout() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  }
};
</script>

<template>
  <div id="app">
    <nav>
      <div
          v-for="component in componentList"
          :key="component"
      >
        <a href="" @click.prevent="selectedComponent = component">{{ component.charAt(0).toLowerCase() + component.slice(1) }}</a>
      </div>
    </nav>
    <div
        v-for="component in componentList"
        :key="component"
    >
      <component
          :is="component"
          v-if="component === selectedComponent"
      />
    </div>
  </div>
</template>
