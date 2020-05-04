import DatePicker from '../DatePicker'
import styles from './styles.module.sass'

export default function Form({ customClass = '' }) {
  return `
    <form class="${styles.form} ${customClass}">
      ${DatePicker({ placeholder: i18n('departPlaceholder'), name: 'departDate', id: 'departDate' })}
      ${DatePicker({ placeholder: i18n('returnPlaceholder'), name: 'returnDate', id: 'returnDate' })}
      <button class="${styles.submitButton} tp-widget-button">${i18n('button')}</button>
    </form>
  `
}
