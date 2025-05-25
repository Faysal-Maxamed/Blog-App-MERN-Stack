import React from 'react'
import Register from './pages/Register'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Outlet/>
    </div>
  )
}

export default App