import React from 'react'
import logo from '../../assets/logo.jpeg'
import { ScreenContainer , LogoImage } from '../styled'
import SignUpForm from './SingUpForms'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <h1>Solte-se, sua voz em palavras!</h1>
      <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignUpPage