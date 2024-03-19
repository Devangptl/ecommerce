import React from 'react'
import { Link } from 'react-router-dom'

const NoItemCart = () => {
  return (
    <div className=' text-center  pb-[10%]   '>
      <p className=' text-[35px]  md:text-[70px]'>No Item In a Cart</p>
      <Link to={"/"} className=' md:text-[16px] text-[14px] bg-[#db4444] hover:text-[#db4444] border border-[#db4444] hover:border-[#db4444] hover:bg-white duration-300  px-5 py-2 text-white font-[600] rounded-sm' >Go Shopping</Link>
    </div>
  )
}

export default NoItemCart
