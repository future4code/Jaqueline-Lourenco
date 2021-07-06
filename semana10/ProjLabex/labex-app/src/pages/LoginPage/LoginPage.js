import React from 'react';
import {GlobalStyled} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg'

export default function Login () {
  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTrips = () => {
    history.push("/list")
  }
  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Login
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTrips}>Login</button>
        </div>  
      </GlobalStyled>
      <button>Login</button>
    </div>
  );
}

