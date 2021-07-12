import React from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonContainer} from '../HomePage/styled';
import Logo from '../../assets/logo.jpg'

export default function AdmHomePage () {
  const history = useHistory()

  const goToListTrips = () => {
    history.push("/list")
  }
  const goToCreateList = () => {
    history.push("/create")
  }

  return (
    <div>
      <ButtonContainer>
          <img src={Logo}/>
          Admin Home Page
          <div>
            <button onClick={goToListTrips}>Trips</button>
            <button onClick={goToCreateList}>Create Trip</button>
          </div>
      </ButtonContainer>
    </div>
  );
}