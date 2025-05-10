import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Register() {
  const EndPoint="http://localhost:4000/api/users/new";

  const [formdate, setformdate] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const navigate=useNavigate("");
  const [loading, setloading] = useState(false);
  const HandleChange = (event) => {
    console.log(event.target.value)
    setformdate({
      ...formdate,
      [event.target.id]: event.target.value
    })
  };
 
  const HandleSubmit= async(event)=>{
    setloading(true)
    event.preventDefault();
    try {
      const response = await axios.post(EndPoint,formdate);
      console.log(response)
      toast.success("Succseafully Registerred")
      navigate("/login")
    } catch (error) {
      console.log(`error occur in ${error}`)
      toast.error(error?.response?.data?.message || "An error occuring");
    }finally{
      setloading(false)
    }
  }
  
  return (
    <div className='h-screen bg-gray-100 flex justify-center items-center'>
      <div className='bg-white rounded-md shadow-md w-88   flex flex-col py-8 items-center'>
        <form  onSubmit={HandleSubmit} action="">
          <h1 className='text-2xl font-regular italic mb-4'>Register here</h1>
          <div className='w-80 flex flex-col justify-center '>
            <label className='text-gray-400' >Email</label>
            <input onChange={HandleChange} type="text" id='Email' placeholder='Enter Email' className=' mb-4 placeholder-gray-400 w-full h-10 border border-gray-200 border-2 roundex-xl px-4 ' />
          </div>
          <div className='w-80 flex flex-col justify-center '>
            <label className='text-gray-400' >Username</label>
            <input onChange={HandleChange} type="text" id='Username' placeholder='Enter username' className=' mb-4 placeholder-gray-400 w-full h-10 border border-gray-200 border-2 roundex-xl px-4 ' />
          </div>
          <div className='w-80 flex flex-col justify-center '>
            <label className='text-gray-400' >Password</label>
            <input onChange={HandleChange} type="password" id='Password' placeholder='Enter Password' className=' mb-4 placeholder-gray-400 w-full h-10 border border-gray-200 border-2 roundex-xl px-4 ' />
          </div>
          <button className='w-80 h-10 flex justify-center items-center rounded-md shadow-md bg-green-500 mt-8 hover:bg-green-800 text-white'>{loading?"Registering":"Register"}</button>
        </form>
      </div>
    </div>
  )
}

export default Register