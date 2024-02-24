import React from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import headerImg1 from "../Images/airpods-32431.png";
import headerImg2 from "../Images/airpods-32433.png";
import headerImg3 from "../Images/airpods-32448.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="  bg-[#000000]  h-[500px]   ">


      <div className=" relative">
        <div className=" text-white flex flex-col gap-4 absolute top-[100px] left-[200px]">
          <p className=" flex gap-2 items-center text-[28px]">
            {" "}
            <span className=" text-[45px]">
              <FaApple />
            </span>{" "}
            AirPods Pro Max{" "}
          </p>

          <p className="  text-white text-[80px] font-bold">
            Up to 10% <p className=" mt-[-35px]">off Voucher</p> 
          </p>

        <Link to={"/"} className=" group flex items-center   gap-2  text-[18px] underline-offset-8 underline">Shop Now <span className=" group-hover:translate-x-2 duration-500 text-[26px] pt-2"><FaArrowRightLong/></span> </Link>
        </div>
      </div>

      <div className="  relative">
        
        <img
          width={400}
          src={headerImg1}
          alt=""
          className="  duration-500 absolute top-[100px] left-[1000px] drop-shadow-2xl"
        />
        <img
          width={120}
          src={headerImg2}
          alt=""
          className=" hover:scale-110 duration-500 absolute top-[120px] left-[1230px] drop-shadow-2xl"
        />
        <img
          width={150}
          src={headerImg3}
          alt=""
          className=" hover:scale-110 duration-500 absolute top-[232px] left-[850px] drop-shadow-2xl "
        />
      </div>
    </div>
  );
};

export default Header;
