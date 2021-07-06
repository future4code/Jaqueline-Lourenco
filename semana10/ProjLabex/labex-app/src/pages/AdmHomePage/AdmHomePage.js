import React from 'react';
import {useHistory} from 'react-router-dom';
import {GlobalStyled} from '../../styled';
import Logo from '../../assets/logo.jpg'

export default function AdmHomePage () {
  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTrips = () => {
    history.push("/list")
  }
  const goToCreateList = () => {
    history.push("/create")
  }

  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Admin Home Page
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTrips}>Trips</button>
          <button onClick={goToCreateList}>Create Trip</button>
        </div>
      </GlobalStyled>
    </div>
  );
}