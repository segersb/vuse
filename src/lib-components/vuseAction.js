import {reactive} from 'vue'

export default function vuseAction (actionRunner) {
  const action = reactive({
    actionRunning: false
  })

  action.run = async () => {
    if (action.actionRunning) {
      return
    }

    action.actionRunning = true
    try {
      actionRunner && await actionRunner()
    } finally {
      action.actionRunning = false
    }
  }

  return action
}
