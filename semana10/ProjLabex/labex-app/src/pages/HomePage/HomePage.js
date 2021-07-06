import React from 'react';
import {useHistory} from 'react-router-dom'
import {GlobalStyled} from "../../styled"
import Logo from '../../assets/logo.jpg'

export default function Home () {
  const history = useHistory()

  const goToAdmHome = () => {
    history.push("/adm")
  }
  const goToListTrips = () => {
    history.push("/list")
  }

  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Home
        <div>
          <button onClick={goToAdmHome}>Login</button>
          <button onClick={goToListTrips}>Trips</button>
        </div>
      </GlobalStyled>
    </div>
  );
}

