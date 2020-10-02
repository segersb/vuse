import {reactive, watchEffect} from 'vue'

const fetchConfig = reactive({
  authorization: null
})

export function vuseFetchConfig () {
  return fetchConfig
}

export default function vuseFetch (url) {
  const fetch = reactive({
    url: null,
    headers: {},
    data: null
  })

  fetch.getJsonList = async () => {
    fetch.data = []
    const response = await fetch.fetch()
    const responseList = await response.json()
    responseList.forEach(object => fetch.data.push(object))
    return fetch.data
  }

  fetch.getJson = async () => {
    const response = await fetch.fetch()
    fetch.data = await response.json()
    return fetch.data
  }

  fetch.getBlob = async () => {
    const response = await fetch.fetch()
    fetch.data = await response.blob()
    return fetch.data
  }

  fetch.getText = async () => {
    const response = await fetch.fetch()
    fetch.data = await response.text()
    return fetch.data
  }

  fetch.download = async () => {
    const response = await fetch.fetch()
    const filename = response.headers.get('Content-Disposition').split('filename=')[1].trim()
    fetch.data = await response.blob()

    const url = URL.createObjectURL(fetch.data)
    const a = document.createElement('a')
    a.href = url
    a.download = filename || 'download'

    // Click handler that releases the object URL after the element has been clicked
    // This is required for one-off downloads of the blob content
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url)
        window.removeEventListener('click', clickHandler)
      }, 150)
    }
    a.addEventListener('click', clickHandler, false)
    a.click()

    return fetch.data
  }

  fetch.fetch = async () => {
    let response
    let error

    let init = {
      headers: {
        ...fetch.headers
      }
    };

    if (!fetch.headers.Authorization && fetchConfig.authorization) {
      console.log('here')
      if (typeof fetchConfig.authorization === 'function') {
        init.headers.Authorization = await fetchConfig.authorization(fetch)
      } else {
        init.headers.Authorization = fetchConfig.authorization
      }
    }

    try {
      response = await window.fetch(fetch.url, init)

      if (!response.ok) {
        error = new Error(response.status.toString())
      }
    } catch (e) {
      error = e
    }

    if (error) {
      throw error
    }

    return response
  }

  watchEffect(() => {
    fetch.url = url
  })

  return fetch
}
