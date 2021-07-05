import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from '../ProfileCard/Card'

import { SecondText } from './styled';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';

const AstroProfilePage = props => {
    const [ profile, setProfile ] = useState(props.profile)

    useEffect(() => {
        setProfile(props.profile)
    }, [props.profile])

    const likeProfile = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaqueline-lourenco/choose-person`, body)
        .then(() => {
            {props.getProfile()}
            setProfile()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deslikeProfile = () => {
        const body = {
            id: profile.id,
            choice: false
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaqueline-lourenco/choose-person`, body)
        .then(() => {
            {props.getProfile()}
            setProfile()
        })
        .catch(err =>{ 
            console.log(err)
        })
    }

    return (
        profile ? ( <Card 
            photo={profile.photo}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            deslikeProfile={deslikeProfile}
            likeProfile={likeProfile}
         />) :
        (<SecondText><HourglassFullTwoToneIcon /> <HourglassFullTwoToneIcon /></SecondText>)
  );
}

export default AstroProfilePage;
