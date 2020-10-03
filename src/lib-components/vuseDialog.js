import {reactive, watchEffect} from 'vue'

const dialogs = reactive({
  openDialogIds: [],
  dialogData: {},
})

export default function vuseDialog (id) {
  const dialog = reactive({
    id: null,
    closeHandler: null,
    open: false,
    onTop: true
  })

  dialog.openDialog = (dialogData = null) => {
    if (!dialogs.openDialogIds.includes(dialog.id)) {
      dialogs.openDialogIds.push(dialog.id)
      if (dialogData) {
        dialogs.dialogData[dialog.id] = dialogData
      }
    }
  }

  dialog.closeDialog = () => {
    dialogs.openDialogIds.splice(dialogs.openDialogIds.findIndex(openDialogId => openDialogId === dialog.id), 1)
    dialog.closeHandler && dialog.closeHandler()
    delete dialogs.dialogData[dialog.id]
  }

  watchEffect(() => {
    dialog.id = id
    dialog.open = dialogs.openDialogIds.length && dialogs.openDialogIds.includes(dialog.id)
    dialog.onTop = dialogs.openDialogIds.length && dialogs.openDialogIds[dialogs.openDialogIds.length - 1] === dialog.id
  })

  return dialog
}
