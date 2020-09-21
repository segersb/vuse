<script>
import DevButton from './DevButton'
import DevDagAndDrop from './DevDagAndDrop'
import DevItemList from './DevItemList'

export default {
  name: 'ServeDev',
  components: {
    DevButton,
    DevDagAndDrop,
    DevItemList,
  }
};
</script>

<template>
  <div id="app">
    <dev-button></dev-button>
    <dev-dag-and-drop></dev-dag-and-drop>
    <dev-item-list></dev-item-list>
  </div>
</template>
