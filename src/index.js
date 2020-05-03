import Widget from './components/Widget'
import TinyDatePicker from 'tiny-date-picker'
import 'tiny-date-picker/tiny-date-picker.css'

function renderApp() {
  const parentWidth = document.currentScript.parentNode.offsetWidth
  const renderWidget = Widget({ parentWidth })
  document.currentScript.parentNode.append(renderWidget)
  TinyDatePicker('#departDate', { mode: 'dp-below' })
  TinyDatePicker('#returnDate', { mode: 'dp-below' })
}

renderApp()
