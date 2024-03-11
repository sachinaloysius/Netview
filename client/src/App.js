import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './app.css'
import Guest from './guest/app'
export default function App() {
  return (
  <Routes>
    <Route path='/*' element={<Guest/>}/>
  </Routes>
  )
}
