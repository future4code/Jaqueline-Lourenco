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
                <AstroIcons src={LikeIcon} onClick={() => likeAstroProfile(profile.id, true)} />
                <AstroIcons src={DesLikeIcon} onClick={() => deslikeAstroProfile(profile.id, false)} />
            </AstroIconsContainer>
        </div>
    )
}

export default AstroProfileCard