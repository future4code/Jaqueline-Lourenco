import React, { useState } from 'react';
import {GlobalStyled , Input} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import axios from 'axios';

export default function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
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
        alert("login Successfully!")
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token )
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
      <Input>
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onSubmitLogin}>Login</button>
      </Input>
    </div>
  );
}

