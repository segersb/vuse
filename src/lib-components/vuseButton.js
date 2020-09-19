import { ref, computed } from 'vue'

export default function vuseButton(options = {}) {
  const text = ref(options.text || '')

  const clickRunning = ref(false)
  const click = async () => {
    if (clickRunning.value) {
      return
    }

    clickRunning.value = true
    options.clickHandler && await options.clickHandler()
    clickRunning.value = false
  }

  const disabled = computed(() => {
    return !!options.disabled || clickRunning.value
  })

  return {
    text,
    click,
    clickRunning,
    disabled
  }
}
