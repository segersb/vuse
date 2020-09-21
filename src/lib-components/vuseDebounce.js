import {reactive, watchEffect} from 'vue'

export default function vuseDebounce (init = {}) {
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
    debounce.function = init.function
    debounce.wait = init.wait
    debounce.immediate = init.immediate
  })

  return debounce
}


