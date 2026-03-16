import { computed, ref, watchEffect } from 'vue'
import { vuetify } from '../app/vuetify'

type ThemeMode = 'light' | 'dark' | 'system'
type ActualTheme = 'light' | 'dark'

const storedTheme = localStorage.getItem('ai-dev-template-configurator:theme')
const theme = ref<ThemeMode>(
  storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system'
    ? storedTheme
    : 'system',
)

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const actualTheme = computed<ActualTheme>(() =>
  theme.value === 'system'
    ? mediaQuery.matches
      ? 'dark'
      : 'light'
    : theme.value,
)

function applyTheme(nextTheme: ActualTheme) {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(nextTheme)
}

watchEffect(() => {
  applyTheme(actualTheme.value)
  vuetify.theme.global.name.value = actualTheme.value
  localStorage.setItem('ai-dev-template-configurator:theme', theme.value)
})

mediaQuery.addEventListener('change', () => {
  if (theme.value === 'system') {
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
