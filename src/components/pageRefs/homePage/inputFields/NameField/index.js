import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import classes from '../styles.module.scss'

const NameField = ({ inputValue, handleChange, error }) => {
  return (
    <div className={classes.inputContainer}>
      <FontAwesomeIcon
        icon={faUser}
        className={classes.userIcon}
      />
      <input
        style={ error ? {} : { borderColor: 'red' }}
        autoFocus
        type='text'
        name='name'
        aria-label='Name'
        placeholder='Name'
        value={inputValue.name}
        onChange={handleChange}
      />
  </div>
  )
}

export default NameField
