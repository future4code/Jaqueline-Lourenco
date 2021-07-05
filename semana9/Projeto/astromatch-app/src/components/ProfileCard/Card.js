import React from 'react';

import like from '../../assets/likeicon.png';
import deslike from '../../assets/deslikeicon.png';

import { Image, Container, Info, IconsContainer, Icons } from './styled';

const Card = (props) => {
    return (
        <div>
            <Container>
                <Image src={props.photo}></Image>
                <Info>
                    <p><b>{props.name}</b>, {props.age}</p>
                    <p>{props.bio}</p>
                </Info>
            </Container>    
            <IconsContainer>
                <Icons src={like} onClick={props.deslikeProfile} />
                <Icons src={deslike} onClick={props.likeProfile} />
            </IconsContainer>
        </div>
    )
}
export default Card