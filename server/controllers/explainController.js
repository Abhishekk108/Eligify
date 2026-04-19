import Groq from 'groq-sdk'

let groq = null
const getGroqClient = () => {
  if (!groq) {
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    })
  }
  return groq
}

const languageMap = {
  en: 'English',
  hi: 'Hindi',
  mr: 'Marathi'
}

export const explainSchemeChat = async (req, res, next) => {
  try {
    const { scheme, user, language, chat_history } = req.body

    if (!scheme || !user || !language) {
      return res.status(400).json({ 
        error: 'scheme, user, and language are required' 
      })
    }

    const languageName = languageMap[language] || 'English'
    
    // Build system prompt
    const systemPrompt = `You are SaarthiBot, a helpful government scheme assistant for persons with disabilities in India.

The user has the following profile:
- Disability: ${user.disability_type}
- Age: ${user.age}
- Monthly Income: ₹${user.income}
- State: ${user.state}

You are explaining this scheme to them:
- Scheme: ${scheme.scheme_name} by ${scheme.department}
- Benefit: ${scheme.benefit}
- Required Documents: ${scheme.documents.join(', ')}

Rules:
- Respond ONLY in ${languageName}
- Use simple, non-technical words
- Be warm and encouraging
- Keep responses under 120 words
- If asked something outside this scheme, politely redirect to the scheme topic`

    // Build messages array
    const messages = [
      { role: 'system', content: systemPrompt }
    ]

    // If no chat history, this is the first message
    if (!chat_history || chat_history.length === 0) {
      messages.push({
        role: 'user',
        content: 'Explain this scheme to me and tell me if I qualify.'
      })
    } else {
      // Add chat history
      chat_history.forEach(msg => {
        messages.push({
          role: msg.role,
          content: msg.content
        })
      })
    }

    const groqClient = getGroqClient()
    const completion = await groqClient.chat.completions.create({
      messages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 300
    })

    const response = completion.choices[0]?.message?.content || 'Unable to generate response'

    res.json({ 
      response,
      role: 'assistant'
    })
  } catch (error) {
    console.error('Explain chat error:', error)
    next(error)
  }
}
