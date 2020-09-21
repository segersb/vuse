<script>
import DevButton from './DevButton'
import DevDagAndDrop from './DevDagAndDrop'
import DevList from './DevList'

export default {
  name: 'ServeDev',
  components: {
    DevButton,
    DevDagAndDrop,
    DevList,
  }
};
</script>

<template>
  <div id="app">
    <dev-button/>
    <dev-dag-and-drop/>
    <dev-list/>
  </div>
</template>
