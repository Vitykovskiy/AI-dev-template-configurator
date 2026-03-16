import { createI18n } from 'vue-i18n'
import { messages } from './messages'
import { LocaleCode } from '../types/app'

const savedLocale = localStorage.getItem('ai-dev-template-configurator:locale')
const defaultLocale =
  savedLocale === LocaleCode.Ru ? LocaleCode.Ru : LocaleCode.En

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
})
