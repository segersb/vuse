import {reactive} from 'vue'

export default function vuseDev (init = {}) {
  return reactive({
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

    asyncTimout() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  })
}


