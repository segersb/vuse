<template>
  <div
      :class="{
        disabled: action.actionRunning
      }"
      :disabled="action.actionRunning"
      class="btn"
      @click="action.run"
  >
    <div class="side">
      <i
          :class="{ 'loading-active' : action.actionRunning}"
          class="material-icons loading"
          style="max-width: 24px; max-height: 24px;"
      >autorenew</i>
    </div>

    <div>{{ label }}</div>

    <div class="side">
    </div>
  </div>
</template>

<script>
import {vuseAction} from "@/lib-components";

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    clickHandler: {
      type: Function,
      default: () => {
      }
    }
  },

  data () {
    return {
      action: null
    }
  },

  created () {
    this.action = vuseAction(this.clickHandler)
  }
}
</script>

<style scoped>
@import "theme.css";

.btn {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  color: var(--color-primary);
  border-radius: 2px;
  padding: 1px 0;
  transition: all 0.2s;
  border: 2px solid var(--color-primary);
  user-select: none;
}

.btn.disabled {
  background-color: var(--color-primary-transparent-2);
  border: 2px solid var(--color-primary-transparent-2);
  color: var(--color-grey-darken-4);
}

.btn:hover:not(.disabled) {
  background-color: var(--color-primary);
  color: var(--color-grey-darken-4);
}

.btn:focus {
  outline: 0;
}

.btn .side {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-height: 30px;
  min-width: 30px;
}

.btn .loading {
  display: none;
}

.btn .loading.loading-active {
  display: initial;
  animation: loading 0.5s alternate-reverse infinite;
}

@keyframes loading {
  100% {
    transform: rotate(1turn);
  }
}
</style>
