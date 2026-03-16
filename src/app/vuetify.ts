import 'vuetify/styles'
import {
  mdiCheck,
  mdiChevronLeft,
  mdiChevronRight,
  mdiContentCopy,
  mdiDownload,
  mdiRestart,
  mdiThemeLightDark,
} from '@mdi/js'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

function getDefaultVuetifyTheme() {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  return 'light'
}

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      copy: mdiContentCopy,
      download: mdiDownload,
      restart: mdiRestart,
      previous: mdiChevronLeft,
      next: mdiChevronRight,
      theme: mdiThemeLightDark,
      check: mdiCheck,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: getDefaultVuetifyTheme(),
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#fafbfc',
          surface: '#ffffff',
          primary: '#2563eb',
          secondary: '#f1f3f5',
          error: '#dc2626',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#0f1419',
          surface: '#1a1f28',
          primary: '#3b82f6',
          secondary: '#1f2937',
          error: '#ef4444',
        },
      },
    },
  },
})
