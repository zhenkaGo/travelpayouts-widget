import DatePicker from '../../components/DatePicker'
import styles from './styles.module.sass'

export default function Form({ customClass = '' }) {
  return `
    <form class="${styles.form} ${customClass}">
      ${DatePicker({ placeholder: window.i18n('departPlaceholder'), name: 'departDate', id: 'departDate' })}
      ${DatePicker({ placeholder: window.i18n('returnPlaceholder'), name: 'returnDate', id: 'returnDate' })}
      <button class="${styles.submitButton} tp-widget-button">${window.i18n('button')}</button>
    </form>
  `
}
