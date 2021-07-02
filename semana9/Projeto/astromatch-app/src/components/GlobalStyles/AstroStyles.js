import  styled from 'styled-components'

//General styling

//App.js
export const AstroHomeContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 5px solid black;
  //background-color: red;
  //color: white;
  display: flex;
  flex-direction: column;
 
 
`
export const AstroAppIcons = styled.img`
  height: 33px;
  width: 45px;
  cursor: pointer;
  margin: 20px;
  
  :hover {
    transform: scale(1.5);
  }
  :active {
    transform: scale(3);
    transition: 0.5s;
  }
`
export const AstroButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
export const AstroMatcheLogo = styled.img`
  height: 41px; 
  width: 79px;
`
//ASTRO MATCHES
export const AstromatchContainer = styled.div`
  font-size: small;
  display: flex;
  align-items: center;
` 

export const MatcheImg = styled.img`
  height: 39px;
  width: 39px;
  border-radius: 25px;
  margin: 15px;
  border: 1px solid red;
`

//ASTRO PROFILECARD
export const PerfilImg = styled.img`
  display: block;
  border: 1px solid black;
  width: 120px;
  height: 139px;
  margin-top: 22px;
  margin: 20px auto 20px auto; 
`
export const AstroMainInfo = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AstroInfoContainer = styled.div`
  margin-top: 32px;
  height: 202px;
`
export const AstroIconsContainer = styled.div`
    height: 49px;
    margin-top: 47px;
    display: flex;
    justify-content: space-evenly;
`
export const AstroIcons = styled.img`
  height: 33px;
  width: 40px;
  cursor: pointer;

  :hover {
   transform: scale(1.5);
  }
  :active {
    transform: scale(3);
    transition: 0.5s;
  }
`

//ASTROMATCH PROFILES BIO 
export const AstroBio = styled.p`
  font-size: x-small;
  margin: 19px;
  text-align: center;
`