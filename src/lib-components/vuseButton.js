import { ref, computed } from 'vue'
import { vuseOption} from '@/entry'

export default function vuseButton(options) {
  const { getOptionValueRef, runOption } = vuseOption(options)

  const text = ref(getOptionValueRef('text'))

  const clickRunning = ref(false)
  const click = async () => {
    if (clickRunning.value) {
      return
    }

    clickRunning.value = true
    await runOption('clickHandler')
    clickRunning.value = false
  }

  const disabled = computed(() => {
    return !!options.disabled || clickRunning.value
  })

  return {
    text,
    click,
    clickRunning,
    disabled
  }
}
