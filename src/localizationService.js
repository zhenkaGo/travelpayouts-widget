import en from './i18n/en'

export default function localizationService() {
  const languages = { en }
  if (!window.i18nData) {
    let defaultLanguage = document.documentElement.lang || 'en'
    window.i18nData = languages[defaultLanguage]

    window.i18n = key => window.i18nData[key]
  }
}

