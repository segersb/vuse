import {reactive} from 'vue'

export default function vuseClick (clickHandler) {
  const click = reactive({
    clickRunning: false
  })

  click.onClick = async () => {
    if (click.clickRunning) {
      return
    }

    click.clickRunning = true
    try {
      clickHandler && await clickHandler()
    } finally {
      click.clickRunning = false
    }
  }

  return click
}
