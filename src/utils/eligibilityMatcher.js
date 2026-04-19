export const matchSchemes = (userProfile, schemes) => {
  if (!userProfile.disabilityType || !userProfile.age || !userProfile.state) {
    return []
  }

  return schemes.filter(scheme => {
    const { disabilityTypes, minAge, maxAge, maxMonthlyIncome, states } = scheme.eligibility

    const disabilityMatch = disabilityTypes.includes('all') || 
                           disabilityTypes.includes(userProfile.disabilityType)
    if (!disabilityMatch) return false

    if (userProfile.age < minAge || userProfile.age > maxAge) return false

    if (maxMonthlyIncome !== null && userProfile.monthlyIncome > maxMonthlyIncome) {
      return false
    }

    const stateMatch = states.includes('all') || states.includes(userProfile.state)
    if (!stateMatch) return false

    return true
  })
}

// Score 0-100 based on how well the scheme fits the user profile
export const scoreScheme = (userProfile, scheme) => {
  try {
    const { disabilityTypes, minAge, maxAge, maxMonthlyIncome, states } = scheme.eligibility
    let score = 0

    // Disability match — exact match scores higher than "all"
    if (disabilityTypes.includes(userProfile.disabilityType)) {
      score += 40 // exact disability match
    } else if (disabilityTypes.includes('all')) {
      score += 25 // generic scheme
    }

    // Age — closer to middle of range scores higher
    const ageMid = (minAge + maxAge) / 2
    const ageRange = maxAge - minAge || 1
    const ageDist = Math.abs(userProfile.age - ageMid) / (ageRange / 2)
    score += Math.round((1 - Math.min(ageDist, 1)) * 25)

    // Income — lower income relative to limit scores higher (more benefit)
    if (maxMonthlyIncome === null) {
      score += 20 // no income restriction = universally accessible
    } else if (userProfile.monthlyIncome) {
      const ratio = userProfile.monthlyIncome / maxMonthlyIncome
      score += Math.round((1 - Math.min(ratio, 1)) * 20)
    } else {
      score += 10
    }

    // State — exact state match scores higher than "all"
    if (states.includes(userProfile.state)) {
      score += 15
    } else if (states.includes('all')) {
      score += 10
    }

    return Math.min(score, 100)
  } catch (error) {
    console.error('Error scoring scheme:', scheme.name, error)
    return 50 // default score on error
  }
}
