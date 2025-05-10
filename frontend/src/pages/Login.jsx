import React from 'react'

function Login() {
  return (
    <div className='h-screen bg-gray-100 flex justify-center items-center'>
     <div className='bg-white rounded-md shadow-md w-88   flex flex-col py-8 items-center'>
        <h1 className='text-2xl font-regular italic mb-4'>Register here</h1>
        <div className='w-80 flex flex-col justify-center '>
          <label className='text-gray-400' >Email</label>
          <input type="text" placeholder='Enter Email' className=' mb-4 placeholder-gray-400 w-full h-10 border border-gray-200 border-2 roundex-xl px-4 ' />
        </div>
        <div className='w-80 flex flex-col justify-center '>
          <label className='text-gray-400' >Password</label>
          <input type="password" placeholder='Enter Password' className=' mb-4 placeholder-gray-400 w-full h-10 border border-gray-200 border-2 roundex-xl px-4 ' />
        </div>
        <button  className='w-80 h-10 flex justify-center items-center rounded-md shadow-md bg-green-500 mt-8 hover:bg-green-800 text-white'>Login</button>
      </div>
    </div>
  )
}

export default Login