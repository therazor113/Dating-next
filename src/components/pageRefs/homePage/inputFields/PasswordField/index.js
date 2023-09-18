import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faLock, faLockOpen, faUnlock } from '@fortawesome/free-solid-svg-icons'

const Passwordfield = ({ classes, inputValue, handleChange }) => {
  const [lockIcon, setLockIcon] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <FontAwesomeIcon
        icon={showPassword ? faLockOpen : lockIcon ? faUnlock : faLock}
      />
      <input
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
      />
    </div>
  )
}

export default Passwordfield
