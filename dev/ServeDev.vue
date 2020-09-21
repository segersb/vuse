<script>
import DevClick from './DevClick'
import DevDagAndDrop from './DevDagAndDrop'
import DevList from './DevList'

const components = {
  DevClick,
  DevDagAndDrop,
  DevList,
};

export default {
  name: 'ServeDev',
  components: components,
  data () {
    return {
      componentList: Object.keys(components),
      selectedComponent: Object.keys(components)[0]
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
        <a href="" @click.prevent="selectedComponent = component">{{ component.substr(3) }}</a>
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
