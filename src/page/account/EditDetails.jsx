import React from 'react'
import { FaUser } from "react-icons/fa";
import { GiStreetLight } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";

const EditProfile = () => {
  return (
    <div className=' shadow-xl rounded-lg  '>
      <div className=" py-8 px-4 flex flex-col gap-8 mb-9 rounded-md">
            <div className=" flex gap-4 justify-between  items-center">
              <div className=" w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block  ps-10 p-2.5  "
                  placeholder="First Name"
                />
              </div>
              <div className="relative w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className=" flex gap-4 justify-between  items-center">
              <div className=" w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdEmail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block  ps-10 p-2.5  "
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiLockPasswordFill className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                  placeholder="Current Password"
                />
              </div>
            </div>
            <div className=" flex gap-4 justify-between  items-center">
              <div className=" w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiLockPasswordLine className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block  ps-10 p-2.5  "
                  placeholder="New Password"
                />
              </div>
              <div className="relative w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiLockPasswordLine className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                  placeholder="Comfirm New Password"
                />
              </div>
            </div>
        
            <div className=" text-center">
              <button className=" px-7 py-2 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white ">
                Save
              </button>
            </div>
          </div>
    </div>
  )
}

export default EditProfile
