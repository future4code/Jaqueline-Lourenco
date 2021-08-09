import React, {useState} from "react"
import Router from './Router/Router'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"
import GlobalState from './Global/GlobalState'

export default function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider>
      <BrowserRouter>    
        <GlobalState>
          <Header rightButtonText={rightButtonText} 
            setRightButtonText={setRightButtonText} 
          /> 
          <Router setRightButtonText={setRightButtonText} />
        </GlobalState>
      </BrowserRouter> 
    </ThemeProvider>
  )
}