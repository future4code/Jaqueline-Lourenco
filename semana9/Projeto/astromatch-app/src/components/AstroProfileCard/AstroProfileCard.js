import React from 'react';
import LikeIcon from '../assets/likeicon.png'
import DesLikeIcon from '../assets/deslikeicon.png'

import { PerfilImg, AstroInfoContainer, AstroMainInfo, AstroBio, AstroIconsContainer, AstroIcons } from '../GlobalStyles/AstroStyles'

const AstroProfileCard = (props) => {
    return (
        <div>
            <AstroInfoContainer>
                <PerfilImg src={props.photo}></PerfilImg>
                <AstroMainInfo>
                    <p><strong>{props.name}</strong>{props.age}</p>
                </AstroMainInfo>
                <AstroBio>{props.bio}</AstroBio>
            </AstroInfoContainer>
            <AstroIconsContainer>
                <AstroIcons src={LikeIcon} onClick={props.DesLikeProfile} />
                <AstroIcons src={DesLikeIcon} onClick={props.likeProfile} />
            </AstroIconsContainer>
        </div>
    )
}

export default AstroProfileCard