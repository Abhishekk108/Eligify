const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'

export const explainScheme = async (schemeId, language) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/groq/explain`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ schemeId, language })
    })

    if (!response.ok) {
      throw new Error('Failed to get explanation')
    }

    const data = await response.json()
    return data.explanation
  } catch (error) {
    console.error('Error explaining scheme:', error)
    throw error
  }
}

export const generateChecklist = async (schemeId, language) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/groq/checklist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ schemeId, language })
    })

    if (!response.ok) {
      throw new Error('Failed to generate checklist')
    }

    const data = await response.json()
    return data.checklist
  } catch (error) {
    console.error('Error generating checklist:', error)
    throw error
  }
}
