import { useState, useEffect } from 'react'
import { matchSchemes, scoreScheme } from '../utils/eligibilityMatcher'
import { schemes } from '../data/schemes'

export const useEligibility = (userProfile) => {
  const [matches, setMatches] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!userProfile.disabilityType) {
      setMatches([])
      return
    }

    setIsLoading(true)
    const matched = matchSchemes(userProfile, schemes)
      .map(scheme => {
        const score = scoreScheme(userProfile, scheme)
        console.log('Scoring scheme:', scheme.name, '→', score)
        return { ...scheme, score }
      })
      .sort((a, b) => b.score - a.score) // highest score first
    console.log('Total matched schemes with scores:', matched.length)
    setMatches(matched)
    setIsLoading(false)
  }, [userProfile])

  return { matches, isLoading }
}
