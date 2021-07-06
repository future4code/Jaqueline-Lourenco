import React from 'react';
import {GlobalStyled} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg'

export default function ListTrips () {
  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToAdmHome = () => {
    history.push("/adm")
  }
  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        List Trips
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToAdmHome}>Login</button>
        </div>  
      </GlobalStyled>
    </div>
  );
}

