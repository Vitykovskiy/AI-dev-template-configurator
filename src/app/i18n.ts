import { createI18n } from 'vue-i18n'
import { messages } from './messages'

const savedLocale = localStorage.getItem('ai-dev-template-configurator:locale')
const defaultLocale = savedLocale === 'ru' ? 'ru' : 'en'

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
})
