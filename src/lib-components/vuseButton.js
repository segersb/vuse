import {reactive, watchEffect} from 'vue'

export default function vuseButton (init = {}) {
  const button = reactive({
    text: null,
    clickRunning: false
  })

  watchEffect(() => {
    button.text = init.text || ''
  })

  watchEffect(() => {
    button.disabled = !!init.disabled || button.clickRunning
  })

  button.click = async () => {
    if (button.clickRunning) {
      return
    }

    button.clickRunning = true
    init.clickHandler && await init.clickHandler()
    button.clickRunning = false
  }

  return button
}
