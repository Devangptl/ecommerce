import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../Images/71ghbks6o1L._SL1500_.jpg"
import img2 from "../Images/OIP.jpg"
import img3 from "../Images/OIP (1).jpg"
import img from "../Images/headerImg.png"



const NewArrival = () => {
  return (
    <div>
      <div className=" mt-20 flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
          <p className=" text-[18px] font-extrabold text-[#db4444] ">
            Featured
          </p>
        </div>

        <div className="  flex items-center justify-between text-[45px] font-semibold gap-20 ">
          <p className=" ">New Arrival</p>
        </div>

        <div className=' w-full items-center flex gap-6  '>
            <div className=' flex items-center justify-center bg-[#eeeeee] h-[600px] w-[2700px] '>
                <img width={300} src={img1} alt="" />
            </div>
            <div className=' flex justify-center flex-col gap-6   '>
                <div className='    '>
                    <img className=''  src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1708782481/Untitled_design_3_ar8xlp.png" alt="" />
                </div>
                <div className=' flex items-center gap-6 '>
                    <div className=' h-[285px] flex items-center  bg-[#eeeeee] '><img src={img} alt="" /></div>
                    <div className='h-[285px] flex items-center bg-[#eeeeee] '><img src={img} alt="" /></div>
                </div>
            </div>
        </div>

        

        {/* hr line */}
        <div className=" mt-10 border border-b-1  border-gray-400"></div>
      </div>
    </div>
  )
}

export default NewArrival
