import React from 'react'
import Register from './pages/Register'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar/>
      {/* <Register/> */}
      <Outlet/>
    </div>
  )
}

export default App