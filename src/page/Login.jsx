import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { toast } from 'sonner';
import { storeUser } from '../helpers';

const Login = () => {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");


 
  const navigate = useNavigate();

  const logIn = async () => {
    
    try {

      const registerInfo = {
        
        identifier : username,
        password : password
      }


      const url = `${process.env.REACT_APP_STRIPE_APP_URL}/api/auth/local`;
      
      const register = await fetch(url ,{
        method : "POST",
        headers : { 
          'Accept' : "application/json",
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(registerInfo)
      })


      const registerRes = await register.json() ;
      console.log(registerRes);
     
      if(registerRes.jwt){
        storeUser(registerRes);
        toast.success("Logged in successfully!")
      }
      
      if(registerRes){
        navigate('/')
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <div className='my-[8%]'>
      <div class="flex items-center justify-center   ">
        <div class=" w-96 flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <div >
            <div class="mb-8 flex flex-col items-center justify-center">
             <p className=' text-[24px] font-bold'>Gada Electronics</p>
             <p className=' text-[18px]'>Login</p>
            </div>
            <p></p>
            <div class="flex flex-col text-sm rounded-md">
              <input
                
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#db4444] "
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Email id"
              />
              <input
                
                class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#db4444]"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button
              class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
              onClick={()=>logIn()}
            >
              Login
            </button>
            <div class="mt-5 flex justify-between text-sm text-gray-600">
              <Link to={"/"}>Forgot password?</Link>
              <Link className=' hover:text-[#db4444]' to={"/signup"}> Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
