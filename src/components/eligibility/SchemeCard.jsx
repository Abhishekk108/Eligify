import { useState, useRef, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/AppContext'
import { explainSchemeChat } from '../../services/explainService'
import { generateDocumentChecklist } from '../../services/pdfService'
import { localizeScheme } from '../../utils/localizeScheme'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Loader from '../ui/Loader'
import './SchemeCard.css'

const SchemeCard = ({ scheme }) => {
  const { t } = useTranslation()
  const { language, userProfile, trackerData, setTrackerData } = useAppContext()
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [userInput, setUserInput] = useState('')

  // Ref for the chat messages container — scroll INSIDE it only
  const chatMessagesRef = useRef(null)
  // Ref for the card itself — scroll page back to card top when chat opens
  const cardRef = useRef(null)

  const localized = useMemo(
    () => localizeScheme(scheme, language, t),
    [scheme, language, t]
  )

  // Only scroll within the chat box, never the page
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, [chatHistory])

  const handleOpenChat = async () => {
    if (isChatOpen) {
      setIsChatOpen(false)
      return
    }

    setIsChatOpen(true)
    setIsLoading(true)
    setChatHistory([])

    // Scroll page back to this card so it stays in view
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    try {
      const response = await explainSchemeChat(scheme, userProfile, language, [])
      setChatHistory([{ role: 'assistant', content: response }])
    } catch (error) {
      setChatHistory([{ role: 'assistant', content: t('schemeCard.chatLoadError') }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return

    const newUserMessage = { role: 'user', content: userInput }
    const updatedHistory = [...chatHistory, newUserMessage]
    setChatHistory(updatedHistory)
    setUserInput('')
    setIsLoading(true)

    try {
      const response = await explainSchemeChat(scheme, userProfile, language, updatedHistory)
      setChatHistory([...updatedHistory, { role: 'assistant', content: response }])
    } catch (error) {
      setChatHistory([...updatedHistory, { role: 'assistant', content: t('schemeCard.chatSendError') }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleDownloadChecklist = async () => {
    try {
      await generateDocumentChecklist(localized)
    } catch (err) {
      console.error(err)
    }
  }

  const handleTrack = (status) => {
    setTrackerData({ ...trackerData, [scheme.id]: status })
  }

  const langLabel =
    language === 'hi' ? t('schemeCard.langHindi') :
    language === 'mr' ? t('schemeCard.langMarathi') :
    t('schemeCard.langEnglish')

  return (
    <Card className="scheme-card" ref={cardRef}>
      <div className="scheme-header">
        <div>
          <h3>{localized.displayName}</h3>
        </div>
        <div className="scheme-meta">
          <span className="scheme-category">{localized.displayCategory}</span>
          {scheme.score !== undefined && (
            <span className="scheme-score-badge" data-score={scheme.score}>
              {t('schemeCard.scoreBadge', { score: scheme.score })}
            </span>
          )}
        </div>
      </div>

      <p className="scheme-description">{localized.displayDescription}</p>

      <div className="scheme-details">
        <h4>{t('schemeCard.requiredDocuments')}</h4>
        <ul>
          {localized.displayDocuments.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>

      <div className="scheme-actions">
        <Button variant={isChatOpen ? 'secondary' : 'primary'} onClick={handleOpenChat}>
          {isChatOpen ? `✕ ${t('schemeCard.explainClose')}` : `💬 ${t('schemeCard.explainOpen')}`}
        </Button>
        <Button variant="outline" onClick={handleDownloadChecklist}>
          📄 {t('schemeCard.downloadChecklist')}
        </Button>
        <a href={scheme.applyUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">{t('schemeCard.applyNow')} →</Button>
        </a>
      </div>

      {isChatOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <span className="chat-bot-name">🤖 {t('schemeCard.chatBot')}</span>
            <span className="chat-language">{langLabel}</span>
          </div>

          {/* scrollTop on this div only — page never moves */}
          <div className="chat-messages" ref={chatMessagesRef}>
            {chatHistory.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                <div className="message-bubble">{msg.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message assistant">
                <div className="message-bubble"><Loader size="small" /></div>
              </div>
            )}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder={t('schemeCard.askPlaceholder')}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
            />
            <button
              type="button"
              className="chat-send-btn"
              onClick={handleSendMessage}
              disabled={!userInput.trim() || isLoading}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <div className="scheme-tracker">
        <label>{t('schemeCard.trackStatus')}</label>
        <div className="tracker-buttons">
          <button type="button"
            className={trackerData[scheme.id] === 'applied' ? 'active' : ''}
            onClick={() => handleTrack('applied')}>
            {t('trackerPage.status.applied')}
          </button>
          <button type="button"
            className={trackerData[scheme.id] === 'pending' ? 'active' : ''}
            onClick={() => handleTrack('pending')}>
            {t('trackerPage.status.pending')}
          </button>
          <button type="button"
            className={trackerData[scheme.id] === 'received' ? 'active' : ''}
            onClick={() => handleTrack('received')}>
            {t('trackerPage.status.received')}
          </button>
        </div>
      </div>
    </Card>
  )
}

export default SchemeCard
