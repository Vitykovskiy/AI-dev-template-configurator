import { computed, ref, watchEffect } from 'vue'
import { vuetify } from '../app/vuetify'
import { ActualTheme, ThemeMode } from '../types/app'

const storedTheme = localStorage.getItem('ai-dev-template-configurator:theme')
const theme = ref<ThemeMode>(
  storedTheme === ThemeMode.Light ||
    storedTheme === ThemeMode.Dark ||
    storedTheme === ThemeMode.System
    ? storedTheme
    : ThemeMode.System,
)

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const actualTheme = computed<ActualTheme>(() =>
  theme.value === ThemeMode.System
    ? mediaQuery.matches
      ? ActualTheme.Dark
      : ActualTheme.Light
    : theme.value === ThemeMode.Light
      ? ActualTheme.Light
      : ActualTheme.Dark,
)

function applyTheme(nextTheme: ActualTheme) {
  document.documentElement.classList.remove(ActualTheme.Light, ActualTheme.Dark)
  document.documentElement.classList.add(nextTheme)
}

watchEffect(() => {
  applyTheme(actualTheme.value)
  vuetify.theme.global.name.value = actualTheme.value
  localStorage.setItem('ai-dev-template-configurator:theme', theme.value)
})

mediaQuery.addEventListener('change', () => {
  if (theme.value === ThemeMode.System) {
    applyTheme(actualTheme.value)
  }
})

export function useTheme() {
  function setTheme(nextTheme: ThemeMode) {
    theme.value = nextTheme
  }

  return {
    theme,
    actualTheme,
    setTheme,
  }
}
