import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NameField = ({ classes, inputValue, handleChange }) => {
  return (
    <div style={{ width: '100%' }}>
      <FontAwesomeIcon icon={faUser} />
      <input
        autoFocus
        type='text'
        name='name'
        aria-label='Name'
        placeholder='Name'
        value={inputValue.name}
        onChange={handleChange}
      />
  </div>
  )
}

export default NameField
