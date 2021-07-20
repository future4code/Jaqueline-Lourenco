import React, { useState } from 'react'
import {GlobalStyled, Container} from '../../styled';
import Logo from '../../assets/logo.jpg'
import { TextField, Button } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useForm } from '../../hooks/useForm';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';

export default function CreateTrip () {
  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    duration: ''
  })

  useProtectedPage()

  const history = useHistory()

  const [date, setDate] = useState(new Date())

  const goToHome = () => {
    history.push("/")
  }
  const goToTripDetail = () => {
    history.push("/detail")
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.duration
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaqueline-lourenco-Molina/trips', body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      history.push('/list')
    })
  }
  return (
  <div>
    <GlobalStyled>
      <img src={Logo}/>
      Create Trip
      <div>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToTripDetail}>Detail Trip</button>
      </div>
    </GlobalStyled>
    <Container onSubmit={onSubmitForm}>
      <TextField
        label={'Name'} 
        onChange={onChangeInput}
        name={'name'}
        value={form['name']}
      />
      <TextField
        label={'Planet'}
        onChange={onChangeInput}
        name={'planet'}
        value={form['planet']}
      />
      <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Date"
          value={date}
          onChange={date => setDate(date)}
        />
      <TextField
        label={'Description'}
        onChange={onChangeInput}
        name={'description'}
        value={form['description']}
      />
      <TextField
        label={'Duration in days'} type={'number'}
        onChange={onChangeInput}
        name={'duration'}
        value={form['duration']}
      />
      <Button variant={'contained'} color={'primary'} type={'submit'}>Create</Button>
    </Container>
  </div>
  )
}
