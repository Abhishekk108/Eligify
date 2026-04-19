import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/AppContext'
import { languages } from '../../utils/languageHelper'
import './Header.css'

const Header = () => {
  const { t } = useTranslation()
  const { language, setLanguage } = useAppContext()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>{t('common.appName')}</h1>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">{t('nav.home')}</Link>
          <Link to="/eligibility" className="nav-link">{t('nav.eligibility')}</Link>
          <Link to="/tracker" className="nav-link">{t('nav.tracker')}</Link>
        </nav>

        <div className="language-switcher">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              className={`lang-btn ${language === code ? 'active' : ''}`}
              onClick={() => setLanguage(code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
