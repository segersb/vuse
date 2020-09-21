import {reactive} from 'vue'
import {vuseDebounce} from "@/lib-components";

const dragScrollHandler = (event) => {
  if (event && event.y && event.y < 50) {
    window.scrollBy({top: -160, behavior: 'smooth'})
  } else if (event && event.y && event.y < 50) {
    window.scrollBy({top: -80, behavior: 'smooth'})
  } else if (event && event.y && event.y < 100) {
    window.scrollBy({top: -40, behavior: 'smooth'})
  } else if (event && event.y && event.y < 150) {
    window.scrollBy({top: -20, behavior: 'smooth'})
  }
  if (event && event.y && event.view.innerHeight - event.y < 50) {
    window.scrollBy({top: 160, behavior: 'smooth'})
  } else if (event && event.y && event.view.innerHeight - event.y < 50) {
    window.scrollBy({top: 80, behavior: 'smooth'})
  } else if (event && event.y && event.view.innerHeight - event.y < 100) {
    window.scrollBy({top: 40, behavior: 'smooth'})
  } else if (event && event.y && event.view.innerHeight - event.y < 150) {
    window.scrollBy({top: 20, behavior: 'smooth'})
  }
}

const dragScrollHandlerDebounce = vuseDebounce(dragScrollHandler)
const dragScrollHandlerDebounced = (event) => {
  dragScrollHandlerDebounce.executeFunction(event)
}

const dragAndDrop = reactive({
  dragData: null,
  dragDataType: null,
  dragImage: null,
  dragImageWidth: null,
  dragImageHeight: null,
})

dragAndDrop.startDrag = (dragEvent, dragData, dragDataType) => {
  dragAndDrop.dragData = dragData
  dragAndDrop.dragDataType = dragDataType
  if (dragAndDrop.dragImage && dragAndDrop.dragImageWidth && dragAndDrop.dragImageHeight) {
    dragEvent.dataTransfer.setDragImage(dragAndDrop.dragImage, dragAndDrop.dragImageWidth, dragAndDrop.dragImageHeight)
  }
  dragEvent.target.addEventListener('drag', dragScrollHandlerDebounced)
}

dragAndDrop.dragOver = (dragOverEvent, dropDataTypes) => {
  if (!dropDataTypes || dropDataTypes.includes(dragAndDrop.dataType)) {
    dragOverEvent.preventDefault()
  }
}

dragAndDrop.drop = (dropHandler, dropData) => {
  dropHandler(dragAndDrop.dragData, dropData)
}

export default function vuseDragAndDrop () {
  return dragAndDrop
}
