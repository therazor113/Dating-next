import { useEffect, useState } from 'react'
import NameField from '../inputFields/NameField'
import Passwordfield from '../inputFields/PasswordField'
import RetypeField from '../inputFields/RetypeField'
import InputErrorText from '../utilities/InputErrorText'
import SubmitButton from '../inputFields/SubmitButton'
import FormValidation from '../utilities/FormValidation'
import useAPI from 'hooks/useAPI'

import classes from './styles.module.scss'

const HomeCards = ({ navSelect }) => {
  const [inputValue, setInputValue] = useState({ name: '', password: '', retype: '' })
  const [validCheck, setValidCheck] = useState({ name: true, password: true, retype: true })
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingState, setLoadingState] = useState(false)
  const [handleFetch] = useAPI()

  useEffect(() => {
    setErrorMessage('')
  }, [navSelect])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    const inputValidity = FormValidation(
      inputValue,
      setValidCheck,
      setErrorMessage,
      navSelect
    )
    if (!inputValidity) return

    setLoadingState(true)
    const path = `http://localhost:4015/${!navSelect ? 'signin' : 'register'}`
    const res = await handleFetch(
      path,
      'POST',
      { name: inputValue.name, password: inputValue.password }
    )

    if (!res) {
      setErrorMessage('Error')
    }
    console.log(res)
    setLoadingState(false)
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
          {!!navSelect &&
            <RetypeField
              inputValue={inputValue}
              handleChange={handleChange}
              error={validCheck.retype}
            />
          }
          <SubmitButton
            title={!navSelect ? 'Sign In' : 'Register'}
            loadingState={loadingState}
          />
        </div>
      </form>
      <InputErrorText errorMessage={errorMessage} />
    </div>
  )
}

export default HomeCards
