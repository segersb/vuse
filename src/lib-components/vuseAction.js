import {reactive} from 'vue'

export default function vuseAction (actionHandler) {
  const action = reactive({
    actionRunning: false
  })

  action.run = async () => {
    if (action.actionRunning) {
      return
    }

    action.actionRunning = true
    try {
      actionHandler && await actionHandler()
    } finally {
      action.actionRunning = false
    }
  }

  return action
}
