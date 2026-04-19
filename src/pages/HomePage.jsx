import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBullseye,
  faLanguage,
  faListCheck,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'
import Button from '../components/ui/Button'
import DisabilityTypeSelector from '../components/home/DisabilityTypeSelector'
import './HomePage.css'

const iconBlue = { color: 'rgb(37, 99, 235)' }

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">{t('home.heroTitle')}</h1>
        <p className="hero-subtitle">
          {t('home.heroSubtitle')}
        </p>
        <DisabilityTypeSelector />
        <p className="hero-description">
          {t('home.heroDescription')}
        </p>
        <Link to="/eligibility">
          <Button variant="primary">{t('home.checkEligibility')}</Button>
        </Link>
      </section>

      <section className="features">
        <div className="feature-card feature-card--teal">
          <div className="feature-icon-wrap feature-icon-wrap--teal">
            <FontAwesomeIcon icon={faBullseye} className="feature-fa-icon" />
          </div>
          <h3>{t('home.features.personalized.title')}</h3>
          <p>{t('home.features.personalized.desc')}</p>
          <Link to="/eligibility" className="feature-card-link feature-card-link--teal">
            {t('home.learnMore')} <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="feature-card feature-card--purple">
          <div className="feature-icon-wrap feature-icon-wrap--blue">
            <FontAwesomeIcon icon={faLanguage} className="feature-fa-icon" style={iconBlue} />
          </div>
          <h3>{t('home.features.language.title')}</h3>
          <p>{t('home.features.language.desc')}</p>
          <Link to="/schemes" className="feature-card-link feature-card-link--purple">
            {t('home.learnMore')} <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="feature-card feature-card--orange">
          <div className="feature-icon-wrap feature-icon-wrap--blue">
            <FontAwesomeIcon icon={faListCheck} className="feature-fa-icon" style={iconBlue} />
          </div>
          <h3>{t('home.features.documents.title')}</h3>
          <p>{t('home.features.documents.desc')}</p>
          <Link to="/schemes" className="feature-card-link feature-card-link--orange">
            {t('home.learnMore')} <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="feature-card feature-card--blue">
          <div className="feature-icon-wrap feature-icon-wrap--blue">
            <FontAwesomeIcon icon={faChartLine} className="feature-fa-icon" />
          </div>
          <h3>{t('home.features.track.title')}</h3>
          <p>{t('home.features.track.desc')}</p>
          <Link to="/tracker" className="feature-card-link feature-card-link--blue">
            {t('home.learnMore')} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h2>2.68 Cr+</h2>
          <p>{t('home.stats.pwd')}</p>
        </div>
        <div className="stat-item">
          <h2>100+</h2>
          <p>{t('home.stats.schemes')}</p>
        </div>
        <div className="stat-item">
          <h2>3</h2>
          <p>{t('home.stats.languages')}</p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
