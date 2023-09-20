import { useState } from 'react'
import NameField from '../inputFields/NameField'
import Passwordfield from '../inputFields/PasswordField'
import RetypeField from '../inputFields/RetypeField'

import classes from './styles.module.scss'

const RegisterCard = () => {
  const [inputValue, setInputValue] = useState({ name: '', password: '', retype: '' })

  const handleChange = (e) => {
    if (e.target.name === 'name' && e.target.value.length > 25) return
    if (/password|retype/.test(e.target.name) && e.target.value.length > 45) return
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  return (
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
    </div>
  )
}

export default RegisterCard
