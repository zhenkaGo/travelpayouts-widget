// components
import Form from '../Form'
// styles
import styles from './styles.module.sass'

export default function Widget() {
  const el = document.createElement('div')
  el.classList.add(styles.wrapperForm)
  el.innerHTML = `
  <h2 class="${styles.formTitle}">Where does it come from? Why do we use it?</h2>
  <p class="${styles.formDescription}">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
  </p>
  ${Form({ customClass: styles.formGrid })}
`
  return el
}
