import React from "react"
import "./style/App.css"
import { Route, Routes } from "react-router-dom"
import NotFound from "@/pages/NotFound"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import GetStarted from "./pages/GetStarted"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import Splash from "./pages/Splash"
import LoggedInUserHome from "./pages/LoggedInUserHome"

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
