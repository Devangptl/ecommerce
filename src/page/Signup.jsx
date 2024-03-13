import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="my-[8%]">
      <div class="flex items-center justify-center ">
        <div class=" w-96 flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <form>
            <div class="mb-8 flex flex-col items-center justify-center">
              <p className=" text-[24px] font-bold">Gada Electronics</p>
              <p className=" text-[18px]">Sign Up</p>
            </div>
            <div class="flex flex-col text-sm rounded-md">
              <input
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#db4444] "
                type="text"
                placeholder="Name"
              />
              <input
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#db4444] "
                type="email"
                placeholder="Email id"
              />
              <input
                class="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#db4444]"
                type="password"
                placeholder="Password"
              />
              <input
                class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#db4444]"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button
              class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
              type="submit"
            >
              Sign Up
            </button>
            <div class="mt-5 flex justify-center gap-1 text-sm text-gray-600">
              <p>You already have an account?</p>
              <Link to={"/login"} className=" hover:text-[#db4444]">
                {" "}
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
