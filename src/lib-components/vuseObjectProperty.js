import {reactive, watchEffect} from 'vue'

export default function vuseObjectProperty (object, property) {
  const objectProperty = reactive({
    value: null
  })

  watchEffect(() => {
    if (object && typeof property === 'string') {
      objectProperty.value = property.split('.').reduce((i, p) => i ? i[p] : null, object);
    } else if (object && typeof property === 'function') {
      objectProperty.value = property(object)
    } else {
      objectProperty.value = null
    }
  })

  return objectProperty
}
