import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Signup = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 
  const navigate = useNavigate();



  const signUp = async () => {
    try {

      const registerInfo = {
        username : username,
        email : email,
        password : password
      }

      const url = `http://localhost:1337/api/auth/local/register`;
      
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
      if(registerRes){
        navigate('/login')
      }
    } catch (error) {
      toast.error(error.message);
    }
  };



  return (
    <div className="my-[8%]">
      <div class="flex items-center justify-center ">
        <div class=" w-96 flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <div >
            <div class="mb-8 flex flex-col items-center justify-center">
              <p className=" text-[24px] font-bold">Gada Electronics</p>
              <p className=" text-[18px]">Sign Up</p>
            </div>
            <div class="flex flex-col text-sm rounded-md">
              <input
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#db4444] "
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Name"
              />
              <input
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#db4444] "
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email id"
              />
              <input
                class="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#db4444]"
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#db4444]"
                type="password"
              
                placeholder="Confirm Password"
              />
            </div>
            <button
            // type="submit"
            onClick={()=>signUp()}
            class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            
            >
              Sign Up
            </button>
              </div>
            <div class="mt-5 flex justify-center gap-1 text-sm text-gray-600">
              <p>You already have an account?</p>
              <Link to={"/login"} className=" hover:text-[#db4444]">
                {" "}
                Login
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
