import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import hi from './locales/hi.json'
import mr from './locales/mr.json'
import schemesHi from './locales/schemes-hi.json'
import schemesMr from './locales/schemes-mr.json'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null
const lng = ['en', 'hi', 'mr'].includes(stored) ? stored : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: { ...hi, schemes: schemesHi } },
    mr: { translation: { ...mr, schemes: schemesMr } },
  },
  lng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
