import { useState } from 'react'
import NameField from '../inputFields/NameField'
import Passwordfield from '../inputFields/PasswordField'
import RetypeField from '../inputFields/RetypeField'
import InputErrorText from '../utilities/InputErrorText'
import FormValidation from '../utilities/FormValidation'
import useAPI from 'hooks/useAPI'

import classes from './styles.module.scss'

const RegisterCard = () => {
  const [inputValue, setInputValue] = useState({ name: '', password: '', retype: '' })
  const [validCheck, setValidCheck] = useState({ name: true, password: true, retype: true })
  const [errorMessage, setErrorMessage] = useState('')
  const [handleFetch] = useAPI()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const inputValidity = FormValidation(inputValue, setValidCheck, setErrorMessage)
    if (!inputValidity) return

    const path = 'http://localhost:4015/register'
    const res = await handleFetch(
      path,
      'POST',
      { name: inputValue.name, password: inputValue.password }
    )
    console.log(res)
  }

  const handleChange = (e) => {
    if (e.target.name === 'name' && e.target.value.length > 25) return
    if (/password|retype/.test(e.target.name) && e.target.value.length > 45) return
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className={classes.cardContainer}>
          <NameField
            inputValue={inputValue}
            handleChange={handleChange}
            error={validCheck.name}
          />
          <Passwordfield
            inputValue={inputValue}
            handleChange={handleChange}
            error={validCheck.password}
          />
          <RetypeField
            inputValue={inputValue}
            handleChange={handleChange}
            error={validCheck.retype}
          />
          <input
            type='submit'
            value={'Register'}
          />
        </div>
      </form>
      <InputErrorText errorMessage={errorMessage} />
    </div>
  )
}

export default RegisterCard
