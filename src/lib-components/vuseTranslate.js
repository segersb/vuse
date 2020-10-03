import {reactive, ref, watchEffect} from 'vue'

const translateConfig = reactive({
  availableLanguages: [],
  activeLanguage: null
})

translateConfig.addLanguage = language => {
  if (!translateConfig.availableLanguages.some(availableLanguage => availableLanguage.name === language.name)) {
    translateConfig.availableLanguages.push(language)
    if (!translateConfig.activeLanguage) {
      translateConfig.activeLanguage = language
    }
  }
}

translateConfig.activateLanguage = language => {
  translateConfig.activeLanguage = language
}

export function vuseTranslateConfig () {
  return translateConfig
}

export default function vuseTranslate () {
  let translateBuilder = {}
  Object.assign(translateBuilder, translateConfig.activeLanguage.translations)
  const translate = reactive(translateBuilder)

  translate.withProperties = (translation, properties = {}) => {
    for (const prop of Object.keys(properties)) {
      translation = translation.replace(new RegExp('{' + prop + '}', 'g'), properties[prop])
    }
    return translation
  }

  watchEffect(() => {
    Object.assign(translate, translateConfig.activeLanguage.translations)
  })

  return translate
}
