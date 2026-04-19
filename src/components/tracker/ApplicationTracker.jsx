import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/AppContext'
import { getSchemeById } from '../../services/schemeService'
import { localizeScheme } from '../../utils/localizeScheme'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import './ApplicationTracker.css'

const ApplicationTracker = () => {
  const { t } = useTranslation()
  const { language, trackerData, setTrackerData } = useAppContext()

  const trackedSchemes = useMemo(() => {
    return Object.entries(trackerData)
      .map(([schemeId, status]) => {
        const scheme = getSchemeById(schemeId)
        if (!scheme) return null
        const localized = localizeScheme(scheme, language, t)
        return { scheme, localized, status }
      })
      .filter(Boolean)
  }, [trackerData, language, t])

  const handleStatusChange = (schemeId, newStatus) => {
    setTrackerData({
      ...trackerData,
      [schemeId]: newStatus
    })
  }

  if (trackedSchemes.length === 0) {
    return (
      <Card>
        <p>{t('trackerPage.empty')}</p>
      </Card>
    )
  }

  return (
    <div className="application-tracker">
      {trackedSchemes.map(({ scheme, localized, status }) => (
        <Card key={scheme.id} className="tracker-item">
          <div className="tracker-header">
            <h3>{localized.displayName}</h3>
            <Badge status={status}>{t(`trackerPage.status.${status}`)}</Badge>
          </div>
          <p className="tracker-category">{localized.displayCategory}</p>
          <div className="tracker-actions">
            <select
              value={status}
              onChange={(e) => handleStatusChange(scheme.id, e.target.value)}
              className="status-select"
              aria-label={t('schemeCard.trackStatus')}
            >
              <option value="applied">{t('trackerPage.status.applied')}</option>
              <option value="pending">{t('trackerPage.status.pending')}</option>
              <option value="received">{t('trackerPage.status.received')}</option>
            </select>
            <a href={scheme.applyUrl} target="_blank" rel="noopener noreferrer">
              {t('trackerPage.viewApplication')}
            </a>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default ApplicationTracker
