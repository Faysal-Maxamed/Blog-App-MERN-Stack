import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-teal-600 flex justify-between text-white px-20 py-4'>
        <h1 className='text-2xl font-bold italic text-white'>BLO<span className='text-blue-700'>GS</span></h1> 
        <ul className='flex gap-4'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>
        <div className='flex gap-8'>
            <button><a href="/register">Register</a></button>
            <button><a href="/login">Login</a></button>
        </div>
    </div>
  )
}

export default Navbar