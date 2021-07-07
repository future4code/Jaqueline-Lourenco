import React, { useState } from 'react';
import {GlobalStyled} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import axios from 'axios';
import {Input} from './styled'

export default function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTripsPage = () => {
    history.push("/list")
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onSubmitLogin = () => {
    console.log(email, password)
    const body = {
      email: email,
      password: password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaqueline-lourenco-Molina/login',body)
      .then((response) => {
        alert("login Successfully:", response.data)
      })
      .catch((error) => {
        alert("Error try again:", error.response)
      })
  }

  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Login
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTripsPage}>List</button>
        </div>  
      </GlobalStyled>
      <Input>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onSubmitLogin}>Login</button>
      </Input>
    </div>
  );
}

