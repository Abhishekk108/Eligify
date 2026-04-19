import { useTranslation } from 'react-i18next'
import EligibilityForm from '../components/eligibility/EligibilityForm'
import Card from '../components/ui/Card'
import './EligibilityPage.css'

const EligibilityPage = () => {
  const { t } = useTranslation()
  return (
    <div className="eligibility-page">
      <h1>{t('eligibility.pageTitle')}</h1>
      <p className="page-description">
        {t('eligibility.pageDescription')}
      </p>
      <Card>
        <EligibilityForm />
      </Card>
    </div>
  )
}

export default EligibilityPage
