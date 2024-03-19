import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({rating}) => {

    const ratingStar = Array.from({length : 5} , (elem , index)=>{
        let number = index + 0.5

        return(
            <span className='md:text-[14px] text-[11px] ' key={index}>
                {
                  rating >= index +1 ?(
                    <FaStar className=' '/>
                  ) : rating >= number ? (
                    <FaStarHalfAlt className='text-[10.7px] md:text-[13.8px]' />
                  ):(
                    <AiOutlineStar className=' text-[12.3px] md:text-[15.7px]'/>
                  )
                }
            </span>
          )
    
    })

  return (
    <div className='text-[#ffad33] text-[14px] flex'>
      {ratingStar}
    </div>
  )
}

export default Rating
