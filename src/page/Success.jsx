import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className=" mt-[5%] py-[4%] pb-[8%]">
      
      <p className="text-[#6e6d6d] px-[7%]  ">
        {" "}
        <Link to={"/"} className=" pr-1 ">
          Home{" "}
        </Link>{" "}
        / <span className=" font-medium text-black pl-1 "> Success</span>{" "}
      </p>
      <div className='flex flex-col  items-center justify-center '>
          <img src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1710581783/KysY2CXF8Y_tgnlxk.gif" alt="" />
          <p className=' text-black mt-[-50px]  text-center text-[70px] '>Successfully Order</p>
      </div>
    </div>
  )
}

export default Success
