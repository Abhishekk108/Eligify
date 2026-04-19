import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>{t('footer.copyright')}</p>
        <p className="footer-team">{t('footer.team')}</p>
      </div>
    </footer>
  )
}

export default Footer
