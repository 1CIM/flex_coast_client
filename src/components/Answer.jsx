import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckIcon from '@material-ui/icons/Check'
import IconButton from '@material-ui/core/IconButton'
import store from '../state/store/configureStore'

const Answer = ({ text, type, placeholder, questionKey }) => {
  const [inputValue, setInputValue] = useState('')
  const [filled, setFilled] = useState('')

  const setAnswer = (event) => {
    event.preventDefault()
    setFilled('-filled')
    store.dispatch({
      type: 'SET_ANSWERS',
      payload: { key: questionKey, answer: inputValue },
    })
  }

  return (
    <div className='type-field-container'>
      <h3>{text}</h3>
      <div>
        <form onSubmit={(event) => setAnswer(event)}>
          <input
            className={filled ? 'input-filled' : 'input'}
            data-cy='input'
            type={type}
            value={inputValue}
            required
            onChange={(event) => {
              setInputValue(event.target.value)
            }}
            placeholder={placeholder}
          />

          <IconButton
            className={`done-btn${filled}`}
            type='submit'
            data-cy='done-btn'>
            {filled ? (
              <CheckIcon className={`icon${filled}`} />
            ) : (
              <ExpandMoreIcon className={`icon${filled}`} />
            )}
          </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Answer
