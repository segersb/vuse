<script>
import DevButton from './DevButton'
import DevList from './DevList'

export default {
  name: 'ServeDev',
  components: {
    DevButton,
    DevList,
  },

  data() {
    return {
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
      ]
    }
  },

  methods: {
    asyncTimout() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  },

  created () {
    setTimeout(() => {
      this.planets.push({
        id: 4,
        name: 'Mars'
      })
    }, 1000)
  }
};
</script>

<template>
  <div id="app">
    <dev-button text="Click Me!" :click-handler="asyncTimout"/>
    <dev-list :items="planets" item-key="id" item-text="name"/>
  </div>
</template>
