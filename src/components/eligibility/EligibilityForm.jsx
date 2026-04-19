import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/AppContext'
import Button from '../ui/Button'
import './EligibilityForm.css'

const DISABILITY_VALUES = [
  'visual',
  'hearing',
  'locomotor',
  'intellectual',
  'autism',
  'cerebral_palsy',
  'multiple',
]

const STATE_VALUES = [
  'Maharashtra',
  'Karnataka',
  'Delhi',
  'Tamil Nadu',
  'Gujarat',
]

const EligibilityForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { userProfile, setUserProfile } = useAppContext()

  const [formData, setFormData] = useState({
    disabilityType: userProfile.disabilityType || '',
    age: '',
    monthlyIncome: '',
    state: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserProfile({
      disabilityType: formData.disabilityType,
      age: formData.age ? parseInt(formData.age) : null,
      monthlyIncome: formData.monthlyIncome ? parseInt(formData.monthlyIncome) : null,
      state: formData.state,
    })
    navigate('/schemes')
  }

  return (
    <form className="eligibility-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="disabilityType">{t('eligibility.disabilityType')}</label>
        <select
          id="disabilityType"
          name="disabilityType"
          value={formData.disabilityType}
          onChange={handleChange}
          required
        >
          <option value="">{t('eligibility.disabilityPlaceholder')}</option>
          {DISABILITY_VALUES.map((value) => (
            <option key={value} value={value}>
              {t(`eligibility.disability.${value}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="age">{t('eligibility.age')}</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="0"
          max="120"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="monthlyIncome">{t('eligibility.monthlyIncome')}</label>
        <input
          type="number"
          id="monthlyIncome"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="state">{t('eligibility.state')}</label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">{t('eligibility.statePlaceholder')}</option>
          {STATE_VALUES.map((value) => (
            <option key={value} value={value}>
              {t(`eligibility.states.${value.replace(/ /g, '_')}`)}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" variant="primary">
        {t('eligibility.submit')}
      </Button>
    </form>
  )
}

export default EligibilityForm
