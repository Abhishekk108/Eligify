export const languages = {
  en: { name: 'English', code: 'en' },
  hi: { name: 'हिंदी', code: 'hi' },
  mr: { name: 'मराठी', code: 'mr' }
}

export const getLanguageName = (code) => {
  return languages[code]?.name || 'English'
}

export const getPromptPrefix = (language) => {
  const prefixes = {
    en: 'Explain in simple English:',
    hi: 'सरल हिंदी में समझाएं:',
    mr: 'सोप्या मराठीत समजावून सांगा:'
  }
  return prefixes[language] || prefixes.en
}
