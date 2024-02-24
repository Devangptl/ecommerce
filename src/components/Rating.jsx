import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({rating}) => {

    const ratingStar = Array.from({length : 5} , (elem , index)=>{
        let number = index + 0.5

        return(
            <span key={index}>
                {
                  rating >= index +1 ?(
                    <FaStar className=' '/>
                  ) : rating >= number ? (
                    <FaStarHalfAlt/>
                  ):(
                    <AiOutlineStar className=' text-[16px]'/>
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
