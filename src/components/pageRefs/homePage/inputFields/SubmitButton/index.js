import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import classes from '../styles.module.scss'

const SubmitButton = ({ title, loadingState }) => {
  return (
    <div className={classes.submitContainer}>
      <input
        className={classes.submitButton}
        type='submit'
        value={loadingState ? '' : title}
        disabled={loadingState}
      />
      {loadingState &&
        <FontAwesomeIcon
          icon={faSync}
          className={classes.loadingIcon}
          spin
        />
      }
    </div>
  )
}

export default SubmitButton
