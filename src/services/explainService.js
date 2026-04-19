const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'

export const explainSchemeChat = async (scheme, user, language, chatHistory = []) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/explain`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        scheme: {
          scheme_name: scheme.name,
          benefit: scheme.description,
          documents: scheme.documents,
          department: scheme.ministry
        },
        user: {
          disability_type: user.disabilityType,
          age: user.age,
          income: user.monthlyIncome,
          state: user.state
        },
        language,
        chat_history: chatHistory
      })
    })

    if (!response.ok) {
      throw new Error('Failed to get explanation')
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error('Error in explain chat:', error)
    throw error
  }
}
