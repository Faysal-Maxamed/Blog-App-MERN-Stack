import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useUser } from '../hooks/useUser';
function Login() {

  const EndPoint = "http://localhost:4000/api/users/login";
  const [formdate, setFormDate] = useState({
    Email: "",
    Password: ""
  });
   const navigate = useNavigate("");

  const {Logging,user,Logout}=useUser();
  
  useEffect(()=>{
    console.log("InfoUserhhh",user)
    if(user) 
      navigate('/about')
  },
[user])

  const HandleOnChange = (event) => {
    console.log(event.target.value)
    setFormDate({
      ...formdate,
      [event.target.id]: event.target.value
    })
  }
 
  
  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      var {data} = await axios.post(EndPoint, formdate);
      toast.success("Succsessfully login Welcome Mr" +formdate.Email)
      console.log(data);
      Logging(data,data.expireIn)
    } catch (error) {
      toast.error(error?.response?.data?.message   )
      console.log(error)
    }
  }
  return (
    <div className='h-screen bg-gray-100 flex justify-center items-center'>
      <div className='bg-white rounded-md shadow-md w-88   flex flex-col py-8 items-center'>
        <h1 className='text-2xl font-regular italic mb-4'>login here</h1>
        <form onSubmit={HandleSubmit} action="" >
          <div className='w-80 flex flex-col justify-center '>
            <label className='text-gray-400' >Email</label>
            <input onChange={HandleOnChange} type="text" id='Email' placeholder='Enter Email' className=' mb-4 placeholder-gray-400 w-full h-10 border border-gray-200 border-2 roundex-xl px-4 ' />
          </div>
          <div className='w-80 flex flex-col justify-center '>
            <label className='text-gray-400' >Password</label>
            <input onChange={HandleOnChange} type="password" id='Password' placeholder='Enter Password' className=' mb-4 placeholder-gray-400 w-full h-10 border border-gray-200 border-2 roundex-xl px-4 ' />
          </div>
          <button className='w-80 h-10 flex justify-center items-center rounded-md shadow-md bg-green-500 mt-8 hover:bg-green-800 text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login