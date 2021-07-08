import React, { useEffect, useState } from 'react';
import {GlobalStyled} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg'
import axios from 'axios';
import TripDetails from '../TripDetailPage/TripDetailsPage';
import {MapTrip , CardTrip} from './styled'

export default function ListTrips () {
  const [trips, setTrips] = useState ([])
  
  useEffect(() => {
    getTrips()
  }, [])

  const getTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaqueline-lourenco-Molina/trips')
      .then(response => {
        console.log(response.data.trips)
        setTrips(response.data.trips)
      })
      .catch(error => {
        alert(error.message)
      })
  }
  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToLogin = () => {
    history.push("/login")
  }
  const goToApplicationForm = () => {
    history.push("/application")
  }

  const mapTrip = trips.map(trip => {
    return (
      <CardTrip key={trip.id}>
        <h3>{trip.name}</h3>
        <p><strong>Description: </strong>{trip.description}</p>
        <h4>Where are we going?: {trip.planet}</h4>
        <p>how many days?: {trip.durationInDays}</p>
        <p>When?: {trip.date}</p>
        <button onClick={() => goToApplicationForm(trip.id)}>Sign Up</button>
      </CardTrip>
    )
  })
  return (
    <div>
      <GlobalStyled>
        <img src={Logo}/>
        List Trips
        <div>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToLogin}>Login</button>
        </div>  
      </GlobalStyled>
      <MapTrip>
        {mapTrip}
      </MapTrip>
    </div>
  );
}

