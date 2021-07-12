import React, { useState } from 'react';
import {GlobalStyled , Container} from '../../styled';
import {useHistory} from 'react-router-dom';
import {useForm} from '../../hooks/useForm'
import Logo from '../../assets/logo.jpg';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

export default function Login () {
  const history = useHistory()
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })

  const goToHome = () => {
    history.push("/")
  }

  const onSubmitLogin = (event) => {
    event.preventDefault()
    //console.log(form)
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaqueline-lourenco-Molina/login',body)
      .then((response) => {
        alert("login Successfully!")
        //console.log(response.data.token)
        window.localStorage.setItem('token', response.data.token )
        history.push("/adm")
      })
      .catch((error) => {
        alert("Error try again")
        console.log(error.response)
      })
  }

  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Login
        <div>
          <button onClick={goToHome}>Home</button>
        </div>  
      </GlobalStyled>
      <Container>
        <TextField
        label={'Email'}
        type={'email'}
        onChange={onChangeInput}
        value={form['email']}
        name={'email'}
        />
        <TextField
        label={'Password'}
        type={'password'}
        onChange={onChangeInput}
        value={form['password']}
        name={'password'}
        />
        <button onClick={onSubmitLogin}>Login</button>
      </Container>
    </div>
  );
}

