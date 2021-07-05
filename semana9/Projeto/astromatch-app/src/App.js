import React, { useState , useEffect } from 'react';
import axios from 'axios';

import AstroProfiles from './components/AstroProfiles/AstroProfilePage'
import Matches from './components/MatchList/Matches'
import {HomeContainer , ButtonContainer , IconsApp , Logo} from './styled'

import matches from './assets/metchesicon.png'
import reset from './assets/reset.png'
import logo from './assets/astromatchelogo.png'

function App() {
  
  const  [ page, setPage ] = useState('profiles')

  const changePage = () => {
    if (page === 'profiles') {
      setPage('matches')
    } else {
      setPage('profiles')
    }
  }
  
  const [ profile, setProfile ] = useState()
    
  const getProfile = (props) => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaqueline/person`)
    .then(response => {
      setProfile(response.data.profile)
    })
    .catch (err => {
      alert(err)
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  const resetProfiles = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaqueline/clear`)
    .then(() =>
      getProfile(),
      alert("Lista resetada com sucesso"))
    .catch(err =>{
      alert(err)
    })
  }

  const actualPage = page === 'profiles' ? (<AstroProfiles profile={profile} getProfile={getProfile}  /> ) : (<Matches />)

  return (
      <HomeContainer>
        <ButtonContainer>
          <IconsApp src={reset} onClick={resetProfiles} />  
          <Logo src={logo} />
          <IconsApp src={matches} onClick={changePage} />
        </ButtonContainer>  
        {actualPage}
      </HomeContainer>
  );
}

export default App;
