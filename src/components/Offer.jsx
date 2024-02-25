import React from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Offer = () => {

  const Completionist = () => <span>End of the Sale 😒</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      
      return <Completionist />;
    } else {

      return (
        <span className=" flex  items-center justify-center">
          
          <span className=" hover:bg-opacity-0  hover:border-[white] border-white border hover:text-[white] duration-300   rounded-full bg-white px-[18px] py-2 flex-col flex items-center ">
            
             {days} <p className="text-[9px] mt-[-8px]">Days</p>
          </span>
          <span className="  px-1 text-[28px] text-[#db4444]">:</span>
          <span className=" hover:bg-opacity-0  hover:border-[white] border-white border hover:text-[white] duration-300   rounded-full bg-white px-[15px] py-2 flex-col flex items-center ">
            
          {hours}<p className="text-[9px] mt-[-8px]">Hours</p> 
          </span>
          <span className=" px-1 text-[28px] text-[#db4444]">:</span>
          <span className=" hover:bg-opacity-0  hover:border-[white] border-white border hover:text-[white] duration-300  bg-white px-[11px] py-2 rounded-full flex-col flex items-center ">
            
          {minutes}<p className="text-[9px] mt-[-8px]">Minutes</p> 
          </span>
          <span className=" px-1 text-[28px] text-[#db4444]">:</span>
          <span className=" hover:bg-opacity-0  hover:border-[white] border-white border hover:text-[white] duration-300  bg-white px-[11px] py-2 rounded-full flex-col flex items-center ">
            
          {seconds}<p className="text-[9px] mt-[-8px]">Seconds</p> 
          </span>
        </span>
      );
    }
  };

  return (
    <div className=" relative">
      <div className="absolute flex flex-col gap-3 items-start justify-start top-32 left-16">
        <h1 className="  text-[50px] text-white font-bold">
          Enhance Your <br /> Dron Experience
        </h1>
        <p className="  font-[600] text-[20px]">
          <Countdown date={Date.now() + 259200000} renderer={renderer} />
        </p>
      

          <Link to={"/"} className=" mt-5 rounded-[3px] text-white px-5 py-2 hover:bg-opacity-0 duration-300 hover:border border font-bold border-[#db4444] bg-[#db4444] text-[22px]" >By Now</Link>
        
      </div>
      <img
        src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1708782481/Untitled_design_3_ar8xlp.png"
        alt=""
      />
    </div>
  );
};

export default Offer;
