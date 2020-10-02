import {reactive, watchEffect} from 'vue'
import {vuseObjectProperty} from "@/lib-components";

export default function vuseList (objects, keyProperty, properties) {
  const list = reactive({
    items: null
  })

  watchEffect(() => {
    list.items = objects.map(object => {
      const key = vuseObjectProperty(object, keyProperty).value

      const objectProperties = {}
      const propertyKeys = Array.isArray(properties) ? properties : Object.keys(properties)
      propertyKeys.forEach(propertyKey => {
        objectProperties[propertyKey] = vuseObjectProperty(object, properties[propertyKey])
      })

      return {
        key,
        object,
        objectProperties
      }
    })
  })

  return list
}
