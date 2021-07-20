import React, { useEffect } from 'react';
import {GlobalStyled} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

export default function TripDetails () {
  useEffect(() => {
    const token =localStorage.getItem('token')
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaqueline-lourenco-Molina/trip/TwKk1Ct96IabkWr0EVm2", {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error.response)
      })
  })
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
        Trip Details
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTrips}>List</button>
        </div>  
      </GlobalStyled>
      <button><DeleteIcon /></button>
      </div>
 
  );
}

