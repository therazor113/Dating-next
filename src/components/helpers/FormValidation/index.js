const FormValidation = (inputValue, setValidCheck, setErrorMessage) => {
  if (!inputValue.name && !inputValue.password) {
    setValidCheck({ name: false, password: false, retype: false })
    setErrorMessage('Name and password required')
    return false
  } else if (!inputValue.name) {
    setValidCheck({ name: false, password: true, retype: true })
    setErrorMessage('Name required')
    return false
  } else if (!inputValue.password) {
    setValidCheck({ name: true, password: false, retype: false })
    setErrorMessage('Password required')
    return false
  } else if (inputValue.retype === undefined) {
    setValidCheck({ name: true, password: true, retype: true })
    setErrorMessage('')
    return true
  } else if (inputValue.password !== inputValue.retype) {
    setValidCheck({ name: true, password: false, retype: false })
    setErrorMessage('Passwords must match')
    return false
  } else {
    setValidCheck({ name: true, password: true, retype: true })
    setErrorMessage('')
    return true
  }
}

export default FormValidation
