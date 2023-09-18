import { useState } from 'react'
import NameField from '../inputFields/NameField'
import Passwordfield from '../inputFields/PasswordField'

import classes from './styles.module.scss'

const SignInCard = () => {
  const [inputValue, setInputValue] = useState({ name: '', password: '', keepToken: false })

  const handleChange = (e) => {
    if (e.target.name === 'name' && e.target.value.length > 25) return
    if (/password|retype/.test(e.target.name) && e.target.value.length > 45) return
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  return (
    <div className={classes.cardContainer}>
      <h2>Sign in</h2>
      <NameField
        classes={classes}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <Passwordfield
        classes={classes}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    </div>
  )
}

export default SignInCard
