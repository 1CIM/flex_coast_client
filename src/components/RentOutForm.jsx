import React, { useState } from 'react'
import Header from './Header'
import TextField from '@material-ui/core/TextField'
import Inquiries from '../modules/Inquiries'
import { useTranslation } from 'react-i18next'

const RentOutForm = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const questions = [
    {
      text: 'Please tell us your name',
      type: 'text',
      required: true,
      multiline: false,
      dataKey: 'name'
    },
    {
      text: 'Can you leave your phone number?',
      type: 'number',
      required: true,
      multiline: false,
      dataKey: 'phone'
    },
    {
      text: 'Where can we reach you?',
      type: 'email',
      required: true,
      multiline: false,
      dataKey: 'email'
    },
    {
      text: 'Do you have anything else to say?',
      type: 'text',
      required: false,
      multiline: true,
      dataKey: 'notes'
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    Inquiries.sendToHubSpot(formData, setLoading)
  }

  const saveToState = (event, dataKey) => {
    let data = formData
    data[dataKey] = event.target.value
    setFormData(data)
  }

  const form = questions.map((question) => (
    <TextField
      className='form-input'
      onChange={(event) => saveToState(event, question.dataKey)}
      label={question.text}
      type={question.type}
      required={question.required}
      multiline={question.multiline}
      variant='outlined'
    />
  ))

  return (
    <>
      <Header />
      <div className='form-container'>
        <form onSubmit={(event) => handleSubmit(event)}>
          {form}
          <button className='custom-button' loading={loading} submit dataCy='submit-btn'>
            {t('submitButton')}
          </button>
        </form>
      </div>
    </>
  )
}

export default RentOutForm
