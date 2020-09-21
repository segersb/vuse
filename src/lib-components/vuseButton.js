import {reactive, watchEffect} from 'vue'

export default function vuseButton (init = {}) {
  const button = reactive({
    text: null,
    clickRunning: false
  })

  button.click = async () => {
    if (button.clickRunning) {
      return
    }

    button.clickRunning = true
    init.clickHandler && await init.clickHandler()
    button.clickRunning = false
  }

  watchEffect(() => {
    button.text = init.text || ''
    button.disabled = !!init.disabled || button.clickRunning
  })

  return button
}
