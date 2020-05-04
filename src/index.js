import TinyDatePicker from 'tiny-date-picker'
import Widget from './components/Widget'
import { createStyle, insertLinkToStyleSheet, formatDate } from './helpers'
import 'tiny-date-picker/tiny-date-picker.css'
import localizationService from './localizationService'

function renderApp() {
  localizationService()
  const { currentScript } = document
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
