import React, {useState} from 'react';
import {GlobalStyled , Input} from '../../styled';
import {useHistory} from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import axios from 'axios';

export default function ApplicationForm () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCoutry] = useState("");

  const history = useHistory()
  
  const goToHome = () => {
    history.push("/")
  }
  const goToListTrips = () => {
    history.push("/list")
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeAge = (event) => {
    setAge(event.target.value)
  }
  const onChangeApplicationText = (event) => {
    setApplicationText(event.target.value)
  }
  const onChangeProfession = (event) => {
    setProfession(event.target.value)
  }
  const onChangeCountry = (event) => {
    setCoutry(event.target.value)
  }

  const onSubmitForm = () => {
    console.log(name, age, applicationText, profession, country)
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jaqueline-lourenco-Molina/trips/id/apply`,body)
      .then((response) => {
        alert("Successfully Enrolled!")
        console.log(response.data)
        history.push("/")
      })
      .catch((error) => {
        alert("Error try again!")
        console.log(error.response)
      })
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
      <Input>
        <input
          placeholder="Name"
          type="name"
          value={name}
          onChange={onChangeName}
        />
        <input
          placeholder="Age"
          type="age"
          value={age}
          onChange={onChangeAge}
        />
        <input
          placeholder="Describe Interest?"
          type="describe"
          value={applicationText}
          onChange={onChangeApplicationText}
        />
        <input
          placeholder="Profession"
          type="profession"
          value={profession}
          onChange={onChangeProfession}
        />
        <input
          placeholder="Country"
          type="country"
          value={country}
          onChange={onChangeCountry}
        />
        <button onClick={onSubmitForm}>Sign Up</button>
      </Input>
    </div>
  );
}

