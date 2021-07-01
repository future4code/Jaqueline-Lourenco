import React, {useState , useEffect} from 'react';
import axios from 'axios'
import { AstromatchContainer, MatcheImg } from '../GlobalStyles/AstroStyles'

const AstroMatches = ()  => {
    const [likes, setLikes] = useState([])

    useEffect(() => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaqueline/matches`)
        .then(response => {
            setLikes(response.data.matches)
        })
        .catch(error => {
            alert(error)
        })
    }, [])

    return (
        <div>
            {likes.map(like => {
                return <AstromatchContainer>
                    <MatcheImg src={like.photo} />
                    <p>{like.name}</p>
                </AstromatchContainer>
            })}
        </div>
    )
}

export default AstroMatches