import styles from './styles.module.sass'
import calendarIcon from './calendar.svg'

export default function DatePicker({ placeholder, name, id }) {
  return `
    <div class="${styles.datePicker} tp-widget-input">
      <input
        type="text"
        class="${styles.datePickerInput}"
        placeholder="${placeholder}"
        name=${name}
        id=${id}
        value=""
      >
      ${calendarIcon}
    </div>
  `
}
