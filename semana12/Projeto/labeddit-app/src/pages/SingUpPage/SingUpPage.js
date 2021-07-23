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
      <h1>Seu App, Conecte-se!</h1>
      <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignUpPage