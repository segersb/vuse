import {reactive, watchEffect} from 'vue'

export default function vuseDebounce (debounceFunction, wait = 200, immediate = false) {
  const debounce = reactive({
    function: null,
    wait: null,
    immediate: null,
    timeout: null
  })

  debounce.executeFunction = (...args) => {
    const later = function () {
      debounce.timeout = null;
      if (!debounce.immediate) debounce.function(...args)
    };

    const callNow = debounce.immediate && !debounce.timeout
    clearTimeout(debounce.timeout)
    debounce.timeout = setTimeout(later, debounce.wait)
    if (callNow) debounce.function(...args)
  }

  watchEffect(() => {
    debounce.function = debounceFunction
    debounce.wait = wait
    debounce.immediate = immediate
  })

  return debounce
}


