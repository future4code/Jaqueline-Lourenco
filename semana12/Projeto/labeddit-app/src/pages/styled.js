import styled from 'styled-components'

//PostCard Page
export const ContainerComments = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top:3rem;
  margin-left: 4rem;
  color: white;
  
  :hover {
    cursor: pointer;
  }
`
export const CardPostContainer = styled.div`
  .CardPost {
    display: flex;
    flex-direction: column;
    width: 20rem;
    background-color: #8F0002;
    border-radius: 16px;
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
  margin-top: 3px;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: #2e2d2b;
` 
export const Welcome = styled.img`
  margin-top: 1rem;
  width: 50%;
  border-radius: 20px;
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
  margin: red;

  Button {
    background-color: #2e2d2b;
    color: white;

    :hover {
      background-color: #D64309;
        
    }
    
  }
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  
  Button {
    background-color: #2e2d2b;
    color: white;

    :hover {
      background-color: #D64309;
    }

  }
`
export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;

  Button {
    background-color: #8F0002;
    color: white;

    :hover {
      background-color: #D64309;
    }

  }
`
export const LogoImage = styled.img`
  width: 70vw;
  max-width: 350px;
  border-color: black;
  border-radius: 16px;
`
export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;

  Button {
    background-color: #2e2d2b;
    color: white;

    :hover {
      background-color: #D64309;
        
    }
  }
`

//ErrorPage
export const ErrorPageContainer = styled.div `
  height: 90vh;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 5px;
  background-color: black;

  iframe{
    border-radius: 20px;
  }
`

