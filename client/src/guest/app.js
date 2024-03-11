import React from 'react'
import LoginPage from './LoginPage'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './SignupPage'
export default function app() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/Signup' element={<SignupPage/>}/>
    </Routes>
    </>
  )
}
