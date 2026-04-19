import { useTranslation } from 'react-i18next'
import ApplicationTracker from '../components/tracker/ApplicationTracker'
import './TrackerPage.css'

const TrackerPage = () => {
  const { t } = useTranslation()
  return (
    <div className="tracker-page">
      <h1>{t('trackerPage.title')}</h1>
      <p className="page-description">
        {t('trackerPage.description')}
      </p>
      <ApplicationTracker />
    </div>
  )
}

export default TrackerPage
