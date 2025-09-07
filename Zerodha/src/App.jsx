import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './components/LogIn'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'


function App() {
  

  return (
   <Routes>
    <Route path="/" element={<LogIn/>}>
    
      <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Route>
   
    
   
   </Routes>
  
  )
}

export default App
