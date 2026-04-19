import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Eye, Accessibility, Ear, Brain } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import './DisabilityTypeSelector.css'

const TYPE_IDS = [
  { id: 'visual', Icon: Eye },
  { id: 'locomotor', Icon: Accessibility },
  { id: 'hearing', Icon: Ear },
  { id: 'intellectual', Icon: Brain },
]

const ICON_PROPS = {
  size: 24,
  strokeWidth: 2,
  color: '#2563eb',
  'aria-hidden': true,
}

const DisabilityTypeSelector = () => {
  const { t } = useTranslation()
  const { userProfile, setUserProfile } = useAppContext()
  const [selectedId, setSelectedId] = useState(() => userProfile.disabilityType || '')

  useEffect(() => {
    setSelectedId(userProfile.disabilityType || '')
  }, [userProfile.disabilityType])

  const handleSelect = (id) => {
    const next = selectedId === id ? '' : id
    setSelectedId(next)
    setUserProfile((prev) => ({ ...prev, disabilityType: next }))
  }

  return (
    <div className="disability-selector">
      <p className="disability-selector__heading">{t('home.disability.heading')}</p>
      <div className="disability-selector__row" role="group" aria-label={t('home.disability.heading')}>
        {TYPE_IDS.map(({ id, Icon }) => {
          const selected = selectedId === id
          return (
            <button
              key={id}
              type="button"
              className={`disability-card${selected ? ' disability-card--selected' : ''}`}
              onClick={() => handleSelect(id)}
              aria-pressed={selected}
            >
              <span className="disability-card__icon-wrap">
                <Icon {...ICON_PROPS} />
              </span>
              <span className="disability-card__label">{t(`home.disability.${id}`)}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DisabilityTypeSelector
