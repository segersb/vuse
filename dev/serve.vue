<script>
import Vue from 'vue';
import { VuseSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VuseSample,
  }
});
</script>

<template>
  <div id="app">
    <vuse-sample />
  </div>
</template>
