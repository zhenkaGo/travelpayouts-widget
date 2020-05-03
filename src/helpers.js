export function createStyle(currentScript, widgetIdClass) {
  const textColor = currentScript.getAttribute('data-text-color')
  const bgColor = currentScript.getAttribute('data-bg-color')
  const btnBgColor = currentScript.getAttribute('data-btn-bg-color')

  const style = document.createElement('style')
  let customCSS = ''

  if (textColor) {
    customCSS += `
    .${widgetIdClass} .tp-widget-title,
    .${widgetIdClass} .tp-widget-description,
    .${widgetIdClass} .tp-widget-button {
      color: ${textColor}!important;
    }`
  }
  if (bgColor) {
    customCSS += `.${widgetIdClass} {
      background: ${bgColor}!important;
    }`
  }

  if (btnBgColor) {
    customCSS += `.${widgetIdClass} .tp-widget-button {
      background: ${btnBgColor}!important;
    }`
  }
  style.appendChild(document.createTextNode(customCSS))
  return style
}

export function insertLinkToStyleSheet() {
  const isExistStyles = document.getElementById('tp-styles')
  if (!isExistStyles) {
    const link = document.createElement('link')
    link.id = 'tp-styles'
    link.rel = 'stylesheet'
    link.href = 'main.css'
    document.head.appendChild(link)
  }
}

export function formatDate(date) {
  const day = date.getDate()
  const month = date.getMonth()
  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${date.getFullYear()}`
}
