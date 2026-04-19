import { createContext, useContext, useState, useEffect } from 'react'
import i18n from '../i18n'

const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('userProfile')
    return saved ? JSON.parse(saved) : {
      disabilityType: '',
      age: null,
      monthlyIncome: null,
      state: ''
    }
  })

  const [matchedSchemes, setMatchedSchemes] = useState(() => {
    const saved = localStorage.getItem('matchedSchemes')
    return saved ? JSON.parse(saved) : []
  })

  const [trackerData, setTrackerData] = useState(() => {
    const saved = localStorage.getItem('trackerData')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    i18n.changeLanguage(language)
    document.documentElement.lang = language === 'en' ? 'en' : language === 'hi' ? 'hi' : 'mr'
  }, [language])

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile))
  }, [userProfile])

  useEffect(() => {
    localStorage.setItem('matchedSchemes', JSON.stringify(matchedSchemes))
  }, [matchedSchemes])

  useEffect(() => {
    localStorage.setItem('trackerData', JSON.stringify(trackerData))
  }, [trackerData])

  const value = {
    language,
    setLanguage,
    userProfile,
    setUserProfile,
    matchedSchemes,
    setMatchedSchemes,
    trackerData,
    setTrackerData
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
