import Groq from 'groq-sdk'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const schemes = JSON.parse(
  readFileSync(join(__dirname, '../data/schemes.json'), 'utf-8')
)

// Initialize Groq client lazily to ensure env vars are loaded
let groq = null
const getGroqClient = () => {
  if (!groq) {
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    })
  }
  return groq
}

export const explainScheme = async (req, res, next) => {
  try {
    const { schemeId, language } = req.body

    if (!schemeId || !language) {
      return res.status(400).json({ error: 'schemeId and language are required' })
    }

    const scheme = schemes.find(s => s.id === schemeId)
    if (!scheme) {
      return res.status(404).json({ error: 'Scheme not found' })
    }

    const languagePrompts = {
      en: 'Explain in simple English',
      hi: 'सरल हिंदी में समझाएं',
      mr: 'सोप्या मराठीत समजावून सांगा'
    }

    const prompt = `${languagePrompts[language] || languagePrompts.en}: ${scheme.name}
    
Description: ${scheme.description}
Eligibility: Age ${scheme.eligibility.minAge}-${scheme.eligibility.maxAge}, Disability types: ${scheme.eligibility.disabilityTypes.join(', ')}
Documents needed: ${scheme.documents.join(', ')}

Explain this scheme in 3-4 sentences in a way that a person with disabilities can easily understand. Focus on benefits and how to apply.`

    const groqClient = getGroqClient()
    const completion = await groqClient.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 500
    })

    const explanation = completion.choices[0]?.message?.content || 'Unable to generate explanation'

    res.json({ explanation })
  } catch (error) {
    next(error)
  }
}

export const generateChecklist = async (req, res, next) => {
  try {
    const { schemeId, language } = req.body

    if (!schemeId || !language) {
      return res.status(400).json({ error: 'schemeId and language are required' })
    }

    const scheme = schemes.find(s => s.id === schemeId)
    if (!scheme) {
      return res.status(404).json({ error: 'Scheme not found' })
    }

    const languagePrompts = {
      en: 'Generate in English',
      hi: 'हिंदी में बनाएं',
      mr: 'मराठीत तयार करा'
    }

    const prompt = `${languagePrompts[language] || languagePrompts.en}: Create a step-by-step checklist for applying to ${scheme.name}. 
    
Required documents: ${scheme.documents.join(', ')}

Provide a numbered list of steps to gather documents and apply.`

    const groqClient = getGroqClient()
    const completion = await groqClient.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.5,
      max_tokens: 400
    })

    const checklist = completion.choices[0]?.message?.content || 'Unable to generate checklist'

    res.json({ checklist })
  } catch (error) {
    next(error)
  }
}
