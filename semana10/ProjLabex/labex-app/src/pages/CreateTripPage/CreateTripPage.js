import React from 'react';
import {useHistory} from 'react-router-dom';
import {GlobalStyled} from '../../styled';
import Logo from '../../assets/logo.jpg'

export default function CreateTrip () {
  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTrips = () => {
    history.push("/list")
  }
  const goToTripDetail = () => {
    history.push("/detail")
  }
  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        Create Trip
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTrips}>List</button>
          <button onClick={goToTripDetail}>Detail Trip</button>
        </div>
      </GlobalStyled>
    </div>
  );
}