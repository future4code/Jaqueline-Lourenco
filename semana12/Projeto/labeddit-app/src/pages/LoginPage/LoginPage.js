import React from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "../styled"
import logo from "../../assets/logo.jpeg"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from 'react-router-dom'
import {goToSignUp} from "../../Router/coordinator"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h1>Seu App, Conecte-se!</h1>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                  onClick={() => goToSignUp(history)}
                  type={"submit"}
                  fullWidth
                  variant={"text"}
                >
                  Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage