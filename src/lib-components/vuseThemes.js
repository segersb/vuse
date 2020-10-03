import {reactive} from 'vue'

const themes = reactive({
  availableThemes: [],
  activeTheme: null
})

themes.addTheme = theme => {
  if (!themes.availableThemes.some(availableLanguage => availableLanguage.name === theme.name)) {
    themes.availableThemes.push(theme)
    if (!themes.activeTheme) {
      themes.activeTheme = theme
    }
  }
}

themes.activateTheme = theme => {
  themes.activeTheme = theme
}

export default function vuseThemes () {
  return themes
}
