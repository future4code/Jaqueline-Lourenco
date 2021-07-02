import React, {useState , useEffect} from 'react';
import axios from 'axios'
import AstroProfiles from './components/AstroProfiles/AstroProfiles'
import AstroMatches from './components/AstroMatches/AstroMatches'
import { AstroHomeContainer , AstroButton , AstroAppIcons , AstroMatcheLogo } from './components/GlobalStyles/AstroStyles';
import matchesIcon from './components/assets/metchesicon.png'
import resetIcon from './components/assets/reset.png'
import AstrometcheLogo from './components/assets/astromatchelogo.png'

const App = () => {
  const [page, setPage] = useState('profiles')
  const [profile, setProfile] = useState()
  
  //change page to match
  const changePage = () => {
    if (page === "profiles"){
      setPage("matches")
    }
    else {
      setPage("profiles")
    }
  } 

  const getProfile = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaqueline/person`)
    .then(response => {
      setProfile(response.data.profile)
    })
    .catch (error => {
      alert(error)
    })
  }

  useEffect(() => {
    getProfile()
  }, [])
  
  //To reset the metches list
  const resetMatches = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaqueline/clear`)
    .then(() =>
    getProfile(),
    alert("Metches list reset successfully!"))
    .catch(err => {
      alert(err)
    })
  }

  //Makes the conditional rendering of profiels to metches
  const currentPage = page === 'profiles' ? (<AstroProfiles profile={profile} getProfiles={getProfile} />) : (<AstroMatches />)

  return (
    <AstroHomeContainer>
      <AstroButton>
        <AstroAppIcons src={resetIcon} onClick={resetMatches} />
        <AstroMatcheLogo src={AstrometcheLogo} />
        <AstroAppIcons src={matchesIcon} onClick={changePage} />
        </AstroButton>
        {currentPage}
    </AstroHomeContainer>
  );
}

export default App;
