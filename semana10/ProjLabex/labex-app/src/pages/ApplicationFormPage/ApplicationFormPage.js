import React from 'react';
import {GlobalStyled} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg'

export default function ApplicationForm () {
  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTrips = () => {
    history.push("/list")
  }
  const goToApplicationForm = () => {
    history.push("/application")
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
      <button onClick={goToApplicationForm}>Sign Up</button>
    </div>
  );
}

