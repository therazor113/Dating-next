import classes from './styles.module.scss'

const InputErrorText = ({ errorMessage }) => {
  return (
    <p className={classes.errorText}>
      {errorMessage}
    </p>
  )
}

export default InputErrorText
