import { schemes } from '../data/schemes'

export const getAllSchemes = () => {
  return schemes
}

export const getSchemeById = (id) => {
  return schemes.find(scheme => scheme.id === id)
}

export const getSchemesByCategory = (category) => {
  return schemes.filter(scheme => scheme.category === category)
}
