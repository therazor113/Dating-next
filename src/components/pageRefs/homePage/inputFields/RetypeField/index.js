import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faLock, faUnlock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import classes from '../styles.module.scss'

const RetypeField = ({ inputValue, handleChange }) => {
  const [lockIcon, setLockIcon] = useState(false)
  const [showRetype, setShowRetype] = useState(false)

  return (
    <div className={classes.inputContainer}>
      <FontAwesomeIcon
        icon={showRetype ? faLockOpen : lockIcon ? faUnlock : faLock}
        className={classes.lockIcon}
      />
      <input
        type={showRetype ? 'text' : 'password'}
        name='retype'
        aria-label='Retype Password'
        placeholder='Retype Password'
        value={inputValue.retype}
        onChange={handleChange}
        onFocus={() => setLockIcon(true)}
        onBlur={() => setLockIcon(false)}
      />
      <FontAwesomeIcon
        icon={showRetype ? faEye : faEyeSlash}
        onMouseDown={() => setShowRetype(!showRetype)}
        className={classes.eyeIcon}
      />
    </div>
  )
}

export default RetypeField
