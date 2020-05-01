import Widget from './components/Widget'
import TinyDatePicker from 'tiny-date-picker'
import 'tiny-date-picker/tiny-date-picker.css'

function renderApp() {
  document.currentScript.parentNode.append(Widget())
  TinyDatePicker('#departDate', { mode: 'dp-below' })
  TinyDatePicker('#returnDate', { mode: 'dp-below' })
}

renderApp()
