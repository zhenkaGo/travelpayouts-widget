import DatePicker from '../../components/DatePicker'
import styles from './styles.module.sass'

export default function Form({ customClass = '' }) {
  return `
    <form class="${styles.form} ${customClass}">
      ${DatePicker({ placeholder: 'Depart time', name: 'departDate', id: 'departDate' })}
      ${DatePicker({ placeholder: 'Return time', name: 'returnDate', id: 'returnDate' })}
      <button class="${styles.submitButton} form-button">search</button>
    </form>
  `
}
