import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import i18n from '../i18n'

/**
 * Build off-screen DOM using Noto Sans / Noto Sans Devanagari (same as index.html)
 * so Hindi & Marathi render correctly when captured for the PDF.
 */
function buildChecklistElement(scheme, t) {
  const schemeTitle = scheme.displayName ?? scheme.name
  const displayCategory = scheme.displayCategory ?? scheme.category
  const documents = scheme.displayDocuments ?? scheme.documents

  const wrap = document.createElement('div')
  wrap.setAttribute('data-saarthi-pdf-root', 'true')
  wrap.style.cssText = [
    'position:fixed',
    'left:-12000px',
    'top:0',
    'width:720px',
    'max-width:720px',
    'padding:20px 24px',
    'background:#ffffff',
    'box-sizing:border-box',
    'font-family:"Noto Sans","Noto Sans Devanagari",system-ui,sans-serif',
    'font-size:12px',
    'line-height:1.5',
    'color:#111827',
    'word-wrap:break-word',
  ].join(';')

  const title = document.createElement('h1')
  title.style.cssText = 'font-size:18px;font-weight:700;margin:0 0 10px 0;'
  title.textContent = t('banner')
  wrap.appendChild(title)

  const rule1 = document.createElement('div')
  rule1.style.cssText = 'border-top:1px solid #374151;margin:0 0 12px 0'
  wrap.appendChild(rule1)

  const p1 = document.createElement('p')
  p1.style.margin = '6px 0'
  p1.textContent = `${t('schemeLabel')} ${schemeTitle}`
  wrap.appendChild(p1)

  const p2 = document.createElement('p')
  p2.style.margin = '6px 0'
  p2.textContent = `${t('ministryLabel')} ${scheme.ministry}`
  wrap.appendChild(p2)

  const p3 = document.createElement('p')
  p3.style.margin = '6px 0 14px 0'
  p3.textContent = `${t('categoryLabel')} ${displayCategory}`
  wrap.appendChild(p3)

  const rule2 = document.createElement('div')
  rule2.style.cssText = 'border-top:1px solid #374151;margin:0 0 8px 0'
  wrap.appendChild(rule2)

  const h2 = document.createElement('h2')
  h2.style.cssText = 'font-size:13px;font-weight:700;margin:0 0 8px 0;'
  h2.textContent = t('documentsHeading')
  wrap.appendChild(h2)

  const rule3 = document.createElement('div')
  rule3.style.cssText = 'border-top:1px solid #374151;margin:0 0 12px 0'
  wrap.appendChild(rule3)

  const ol = document.createElement('ol')
  ol.style.cssText = 'margin:8px 0 0 22px;padding:0'
  documents.forEach((item) => {
    const li = document.createElement('li')
    li.style.marginBottom = '6px'
    li.textContent = item
    ol.appendChild(li)
  })
  wrap.appendChild(ol)

  const rule4 = document.createElement('div')
  rule4.style.cssText = 'margin-top:18px;border-top:1px solid #374151;padding-top:10px'
  wrap.appendChild(rule4)

  const pUrl = document.createElement('p')
  pUrl.style.cssText = 'margin:0;word-break:break-all'
  pUrl.textContent = `${t('applyOnline')} ${scheme.applyUrl}`
  wrap.appendChild(pUrl)

  const foot = document.createElement('div')
  foot.style.cssText =
    'margin-top:16px;border-top:1px solid #374151;padding-top:8px;font-size:10px;font-style:italic;color:#4b5563'
  foot.textContent = t('footer')
  wrap.appendChild(foot)

  return wrap
}

function canvasToPdfPages(pdf, canvas, marginMm) {
  const imgData = canvas.toDataURL('image/png', 1.0)
  const props = pdf.getImageProperties(imgData)
  const pageW = pdf.internal.pageSize.getWidth()
  const pageH = pdf.internal.pageSize.getHeight()
  const imgW = pageW - 2 * marginMm
  const imgH = (props.height * imgW) / props.width
  const effectivePageH = pageH - 2 * marginMm

  let heightLeft = imgH
  let y = marginMm
  pdf.addImage(imgData, 'PNG', marginMm, y, imgW, imgH)
  heightLeft -= effectivePageH

  while (heightLeft >= 0) {
    y = marginMm + (heightLeft - imgH)
    pdf.addPage()
    pdf.addImage(imgData, 'PNG', marginMm, y, imgW, imgH)
    heightLeft -= effectivePageH
  }
}

/**
 * @returns {Promise<void>}
 */
export async function generateDocumentChecklist(scheme) {
  if (typeof document === 'undefined') return

  const t = (key) => i18n.t(`pdf.${key}`)
  const el = buildChecklistElement(scheme, t)
  document.body.appendChild(el)

  try {
    await document.fonts.ready
    await document.fonts.load('700 18px "Noto Sans Devanagari"')
    await document.fonts.load('400 12px "Noto Sans Devanagari"')

    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
    })

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const margin = 12
    canvasToPdfPages(pdf, canvas, margin)
    pdf.save(`${scheme.id}_checklist.pdf`)
  } finally {
    el.remove()
  }
}
