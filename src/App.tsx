import React, { useState } from "react"
import reactLogo from "@/assets/react.svg"
import viteLogo from "/vite.svg"
import "./style/App.css"
import { Route, Routes } from "react-router-dom"
import NotFound from "@/pages/NotFound"
import { Button } from "@mui/material"
import ThemeToggleButton from "@/components/ThemeToggleButton"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import GetStarted from "./pages/GetStarted"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import Splash from "./pages/Splash"
import LoggedInUserHome from "./pages/LoggedInUserHome"

const Vite = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button variant='contained' onClick={() => setCount(count + 1)}>
          Count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <ThemeToggleButton />
    </>
  )
}

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='/loggedin-user-home' element={<LoggedInUserHome />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}
