import styled from 'styled-components'

//PostCard Page
export const ContainerComments = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:3rem;
    margin-left: 4rem;
`
export const CardPostContainer = styled.div`
    CardPost {
        width:50rem;
    }
`
export const ContainerTotalVotes = styled.div`
    padding-top:3rem;
    display: flex;
    flex-direction: row;
`
export const TargetContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
`
export const ContainerVotes2 = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    bottom:0 ;
`
export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 3px;
  gap:2rem;
  justify-content: center;
  align-items: center;
  background-color:#d694b4;
` 
export const Welcome = styled.img`
    margin-top: 1rem;
    width:30%;
`

//LoginForm Page SingUpForms
export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 6vh;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`
export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`
export const LogoImage = styled.img`
  width: 10vw;
  max-width: 350px;
`
export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

//ErrorPage
export const ErrorPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#EFE0FF;
`

export const ErrorGif = styled.img `
    width: 60vw;
    height: 100vh;
`