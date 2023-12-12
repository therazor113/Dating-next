import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faLock, faLockOpen, faUnlock } from '@fortawesome/free-solid-svg-icons'
import classes from '../styles.module.scss'

const Passwordfield = ({ inputValue, handleChange, error }) => {
  const [lockIcon, setLockIcon] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={classes.inputContainer}>
      <FontAwesomeIcon
        icon={showPassword ? faLockOpen : lockIcon ? faUnlock : faLock}
        className={classes.lockIcon}
      />
      <input
        style={error ? {} : { borderColor: 'red' }}
        type={showPassword ? 'text' : 'password'}
        name='password'
        aria-label='Password'
        placeholder='Password'
        value={inputValue.password}
        onChange={handleChange}
        onFocus={() => setLockIcon(true)}
        onBlur={() => setLockIcon(false)}
      />
      <FontAwesomeIcon
        icon={showPassword ? faEye : faEyeSlash}
        onMouseDown={() => setShowPassword(!showPassword)}
        className={classes.eyeIcon}
      />
    </div>
  )
}

export default Passwordfield
