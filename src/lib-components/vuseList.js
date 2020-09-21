import {reactive, watchEffect} from 'vue'
import {vuseItem} from "@/lib-components";

export default function vuseList (values, key, text) {
  const list = reactive({
    items: null
  })

  watchEffect(() => {
    list.items = values.map(value => vuseItem(value, key, text))
  })

  return list
}
