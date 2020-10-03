import {reactive} from 'vue'

const themes = reactive({
  availableThemes: [],
  activeTheme: null
})

themes.addTheme = theme => {
  themes.availableThemes.push(theme)
  if (!themes.activeTheme) {
    themes.activeTheme = theme
  }
}

themes.activateTheme = name => {
  const theme = themes.availableThemes.find(theme => theme.name === name);
  if (theme) {
    themes.activeTheme = theme
  }
}

export default function vuseThemes () {
  return themes
}
