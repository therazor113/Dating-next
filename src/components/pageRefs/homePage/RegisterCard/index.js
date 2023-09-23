import { useState } from 'react'
import NameField from '../inputFields/NameField'
import Passwordfield from '../inputFields/PasswordField'
import RetypeField from '../inputFields/RetypeField'
import useAPI from 'hooks/useAPI'

import classes from './styles.module.scss'

const RegisterCard = () => {
  const [inputValue, setInputValue] = useState({ name: '', password: '', retype: '' })
  const [handleFetch] = useAPI()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const path = 'http://localhost:4015/register'
    if (inputValue.password !== inputValue.retype) {
      console.log('passwords must match')
      return
    }
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
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={classes.cardContainer}>
        <h2>Register</h2>
        <NameField
          inputValue={inputValue}
          handleChange={handleChange}
        />
        <Passwordfield
          inputValue={inputValue}
          handleChange={handleChange}
        />
        <RetypeField
          inputValue={inputValue}
          handleChange={handleChange}
        />
        <input
          type='submit'
          value={'Register'}
        />
      </div>
    </form>
  )
}

export default RegisterCard
