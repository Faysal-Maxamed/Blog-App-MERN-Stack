import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

function Navbar() {
  const { Logout, user } = useUser();
  // useEffect(() => { }, [user])
  return (
    <div className='w-full bg-teal-600 flex items-center justify-between text-white px-20 py-4'>
      <h1 className='text-2xl font-bold italic text-white'>BLO<span className='text-blue-700'>GS</span></h1>
      {
        user ?
          <>
            <ul className='flex gap-4'>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul></> :
          <>
            <div className='flex gap-8'>
              <button><a href="/register">Register</a></button>
              <button><a href="/login">Login</a></button>
            </div>
          </>
      }


      <div className='flex gap-8 items-center justify-center'>
        <button onClick={Logout}>LogOut</button>
        {user ? <h1>{user.Email}</h1> : <h1>Guest</h1>}
      </div>
    </div>
  )
}

export default Navbar