import classes from '../styles.module.scss'

const SubmitButton = ({ title }) => {
  return (
      <input
        className={classes.submitButton}
        type='submit'
        value={title}
      />
  )
}

export default SubmitButton
