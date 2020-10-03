<template>
  <h1>Translate - {{ translateConfig.activeLanguage.name }}</h1>
  <ul>
    <li
        v-for="availableLanguage in translateConfig.availableLanguages"
        :key="availableLanguage.name"
        @click="translateConfig.activateLanguage(availableLanguage)"
        class="item"
    >
      {{ availableLanguage.name }}
    </li>
  </ul>
  <div>{{ translate.withProperties(translate.messages.greeting, { user: 'Jon Snow' }) }}</div>
  <div>{{ translate.label.welcome }}</div>
</template>

<script>
import {vuseTranslate, vuseTranslateConfig} from "@/lib-components";

export default {
  data () {
    return {
      translateConfig: null,
      translate: null
    }
  },

  created () {
    this.translateConfig = vuseTranslateConfig()
    this.translateConfig.addLanguage({
      name: 'English',
      translations: {
        label: {
          welcome: 'Welcome'
        },
        messages: {
          greeting: 'Hello, {user}!'
        }
      }
    })
    this.translateConfig.addLanguage({
      name: 'Español',
      translations: {
        label: {
          welcome: 'Bienvenido'
        },
        messages: {
          greeting: '¡Hola, {user}!'
        }
      }
    })

    this.translate = vuseTranslate()
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}
</style>
