import Widget from './components/Widget'
import TinyDatePicker from 'tiny-date-picker'
import { createStyle, insertLinkToStyleSheet, formatDate } from './helpers'
import 'tiny-date-picker/tiny-date-picker.css'

function renderApp() {
  const currentScript = document.currentScript
  const parentWidth = currentScript.parentNode.offsetWidth
  const widgetIdClass = `tp-${(Date.now()).toString(16)}`
  const renderWidget = Widget({ parentWidth, widgetIdClass })
  const renderCustomStyle = createStyle(currentScript, widgetIdClass)
  insertLinkToStyleSheet()
  document.currentScript.parentNode.append(renderCustomStyle, renderWidget)
  TinyDatePicker('#departDate', { mode: 'dp-below', format: formatDate })
  TinyDatePicker('#returnDate', { mode: 'dp-below', format: formatDate })
}

renderApp()
