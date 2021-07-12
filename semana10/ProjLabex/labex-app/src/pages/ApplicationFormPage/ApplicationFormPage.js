import React, {useState} from 'react';
import {GlobalStyled, Container } from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { useTripsList } from '../../hooks/useTripsList';
import {TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';

export default function ApplicationForm () {
  const trips = useTripsList()
  const [form, onChangeInput] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTrips = () => {
    history.push("/list")
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaqueline-lourenco-Molina/trips/${form.trip.id}/apply`,body)
      .then((response) => {
        alert("Successfully Enrolled!")
        console.log(response.data)
        history.push("/")
      })
      .catch((error) => {
        alert("Error try again!")
        console.log(error.response)
      })
  }
  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Application Form
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTrips}>List</button>
        </div>
      </GlobalStyled>
      <Container onSubmit={onSubmitForm}>
        <TextField
          placeholder={"Name user"}
          value={form['name']}
          onChange={onChangeInput}
          name={"name"}
        />
        <TextField
          label= {"Age"}
          type={"number"}
          value={form ["age"]}
          onChange={onChangeInput}
          name={"age"}
        />
        <TextField
          label={"Text application"}
          helper= "Describe Interest?"
          value={form["applicationText"]}
          onChange={onChangeInput}
          name={"applicaionText"}
        />
        <TextField
          label={"Profession"}
          value={form ["profession"]}
          onChange={onChangeInput}
          name={"profession"}
        />
        <FormControl>
          <InputLabel>Countries</InputLabel>
          <Select
            labelId="select-countries"
            value={form["country"]}
            onChange={onChangeInput}
            name={"country"}
          >
            <MenuItem value={"brasil"}>Brasil</MenuItem>
            <MenuItem value={"africa"}>Africa</MenuItem>
            <MenuItem value={"eua"}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Trips</InputLabel>
          <Select
            labelId="select-trips"
            onChange={onChangeInput}
            value={form["trip"]}
            name={"trip"}
          >
            {trips.map((trip) => {
            return <MenuItem value={trip}>{trip.name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <button onClick={onSubmitForm}>Sign Up</button>
        </Container>
    </div>
  );
}

