import React from 'react';
import {useHistory} from 'react-router-dom'
import {ButtonContainer} from "./styled"
import Logo from '../../assets/logo.jpg'

export default function Home () {
  const history = useHistory()

  const goToLogin = () => {
    history.push("/login")
  }
  const goToListTrips = () => {
    history.push("/list")
  }

  return (
    <div>
      <ButtonContainer>
        <img src={Logo}/>
        Labex
        <div>
          <button onClick={goToLogin}>Login</button>
          <button onClick={goToListTrips}>Trips</button>
        </div>
      </ButtonContainer>
    </div>
  );
}

