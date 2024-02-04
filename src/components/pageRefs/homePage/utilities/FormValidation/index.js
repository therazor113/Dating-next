const FormValidation = (inputValue, setValidCheck, setErrorMessage, navSelect) => {
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
  } else if (!!navSelect && inputValue.password !== inputValue.retype) {
    setValidCheck({ name: true, password: false, retype: false })
    setErrorMessage('Passwords must match')
    return false
  } else {
    setValidCheck({ name: true, password: true, retype: true })
    return true
  }
}

export default FormValidation
