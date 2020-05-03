// components
import Form from '../Form'
// utils
import inRange from 'lodash.inrange'
// styles
import styles from './styles.module.sass'

const SIZES = new Map([[[1024, Infinity], 'lg'], [[768, 1024], 'md'], [[440, 768], 'sm'], [[0, 440], 'xs']])

export default function Widget({ parentWidth, widgetIdClass }) {
  const el = document.createElement('div')
  let widgetSize = 'lg'
  for (const [key, value] of SIZES) {
    if (inRange(parentWidth, ...key)) {
      widgetSize = value
      break
    }
  }

  el.classList.add(styles.wrapperForm, styles[`widget-${widgetSize}`], widgetIdClass)
  el.innerHTML = `
  <h2 class="${styles.formTitle} tp-widget-title">Where does it come from? Why do we use it?</h2>
  <p class="${styles.formDescription} tp-widget-description">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
  </p>
  ${Form({ customClass: styles.formGrid })}
`
  return el
}
