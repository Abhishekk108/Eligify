/**
 * Returns scheme with display* fields for the active UI language (en uses source data).
 */
export function localizeScheme(scheme, language, t) {
  if (!scheme) return null
  if (language === 'en') {
    return {
      ...scheme,
      displayName: scheme.name,
      displayCategory: scheme.category,
      displayDescription: scheme.description,
      displayDocuments: scheme.documents,
    }
  }
  const base = `schemes.${scheme.id}`
  const docs = t(`${base}.documents`, { returnObjects: true })
  const displayDocuments =
    Array.isArray(docs) && docs.length > 0 ? docs : scheme.documents
  return {
    ...scheme,
    displayName: t(`${base}.name`, { defaultValue: scheme.name }),
    displayCategory: t(`${base}.category`, { defaultValue: scheme.category }),
    displayDescription: t(`${base}.description`, { defaultValue: scheme.description }),
    displayDocuments,
  }
}
