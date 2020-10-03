<template>
  <h1>Dialog - {{ dialog.open ? 'open' : 'closed'}}</h1>
  <button @click="dialog.openDialog">OPEN</button>

  <div class="modal" v-if="dialog.open">
    <div class="modal-content">
      <h1>Are you sure?</h1>
      <button @click="dialog.closeDialog">CLOSE</button>
    </div>
  </div>
</template>

<script>
import {vuseDialog} from "@/lib-components";

export default {
  data () {
    return {
      dialog: null
    }
  },

  created () {
    this.dialog = vuseDialog('dialog-id')
    this.dialog.closeHandler = () => {
      console.log('dialog closed')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
</style>
