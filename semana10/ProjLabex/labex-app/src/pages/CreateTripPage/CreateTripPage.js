import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {GlobalStyled, Container} from '../../styled';
import Logo from '../../assets/logo.jpg'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import axios from 'axios';
import {useForm} from '../../hooks/useForm'
import { TextField, Button } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers';

export default function CreateTrip () {
  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    duration: ''
  })

  useProtectedPage()

  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTrips = () => {
    history.push("/list")
  }
  const goToTripDetail = () => {
    history.push("/detail")
  }

  const [date, setDate] = useState(new Date())
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
    })
  }
  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Create Trip
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTrips}>List</button>
          <button onClick={goToTripDetail}>Detail Trip</button>
        </div>
      </GlobalStyled>
      <Container onSubmit={onSubmitForm}>
        <TextField
          label={'Nome'} 
          onChange={onChangeInput}
          name={'name'}
          value={form['name']}
        />
        <TextField
          label={'Planeta'}
          onChange={onChangeInput}
          name={'planet'}
          value={form['planet']}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Data"
          value={date}
          onChange={date => setDate(date)}
        />
        <TextField
          label={'Descrição'}
          onChange={onChangeInput}
          name={'description'}
          value={form['description']}
        />
        <TextField
          label={'Duração em dias'} type={'number'}
          onChange={onChangeInput}
          name={'duration'}
          value={form['duration']}
        />
        <Button type={'submit'}>Create</Button>
      </Container>
    </div>
  );
}