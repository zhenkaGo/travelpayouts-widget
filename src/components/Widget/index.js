// utils
import inRange from 'lodash.inrange'
// components
import Form from '../Form'
// styles
import styles from './styles.module.sass'

const SIZES = [[[1024, Infinity], 'lg'], [[768, 1024], 'md'], [[440, 768], 'sm'], [[0, 440], 'xs']]

export default function Widget({ parentWidth, widgetIdClass }) {
  const el = document.createElement('div')
  const widgetSize = SIZES.find(([key]) => inRange(parentWidth, ...key)) || SIZES[0]
  el.classList.add(styles.wrapperForm, styles[`widget-${widgetSize[1]}`], widgetIdClass)
  el.innerHTML = `
  <h2 class="${styles.formTitle} tp-widget-title">${window.i18n('title')}</h2>
  <p class="${styles.formDescription} tp-widget-description">${window.i18n('description')}</p>
  ${Form({ customClass: styles.formGrid })}
`
  return el
}
