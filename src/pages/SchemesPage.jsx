import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../context/AppContext'
import { useEligibility } from '../hooks/useEligibility'
import SchemeCard from '../components/eligibility/SchemeCard'
import Loader from '../components/ui/Loader'
import './SchemesPage.css'

const SchemesPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { userProfile, setMatchedSchemes } = useAppContext()
  const { matches, isLoading } = useEligibility(userProfile)

  useEffect(() => {
    if (!userProfile.disabilityType) {
      navigate('/eligibility')
      return
    }
    setMatchedSchemes(matches)
  }, [matches, userProfile, navigate, setMatchedSchemes])

  if (isLoading) {
    return <Loader size="large" />
  }

  if (matches.length === 0) {
    return (
      <div className="schemes-page">
        <h1>{t('schemesPage.emptyTitle')}</h1>
        <p>{t('schemesPage.emptyDescription')}</p>
      </div>
    )
  }

  const count = matches.length
  const foundText =
    count === 1 ? t('schemesPage.found', { count }) : t('schemesPage.foundPlural', { count })

  return (
    <div className="schemes-page">
      <h1>{t('schemesPage.matchedTitle')}</h1>
      <p className="page-description">{foundText}</p>
      <div className="schemes-list">
        {matches.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>
    </div>
  )
}

export default SchemesPage
