import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[10%]  text-white bg-black">
      <div className=" py-10 grid md:grid-cols-5 grid-cols-2 gap-6 ">
        <div className=" flex flex-col gap-2">
          <Link to={"/"} className="  text-[22px] font-bold ">
            <img  className=" w-[100px] md:w-[150px] " src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1709988987/1709906423917_bvbkbk.png" alt="" />
          </Link>
          <p className=" md:text-[19px] font-bold">Subscribe</p>
          <p className=" text-[11px] md:text-[14px]">Get 10% off your first order</p>
          <div className=" mt-[-3px] flex flex-row items-center ">
            <input
              type="text"
              id="password"
              className=" text-[11px] md:text-[14px] outline-none border md:w-[190px] w-[120px] border-white bg-black md:pl-3 pl-1 md:pr-10 pr-8 md:py-2 py-1   rounded-[3px] hover:border-gray-300  "
              placeholder="Enter your email"
            />
            <button className="  font-bold text-center md:text-[20px] text-[15px]  ml-[-20px]  md:ml-[-30px]">
            <AiOutlineSend />
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="md:text-[22px] font-bold">Support</p>
          </div>

          <div className="pr-[30px] flex flex-col gap-2 text-[11px] md:text-[14px]">
            <p className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">Navrangpura, 10, Vithalbhai Patel Colony, Ahmedabad, Gujrat </p>
            <p className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">gadaelectronics@gmail.com </p>
            <p className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">+88015-88888-9999 </p>
          </div>

        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="md:text-[22px] font-bold">Account</p>
          </div>

          <div className=" flex flex-col gap-2 text-[11px] md:text-[14px] md:w-[40%]">
            <p className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4 ">My Account </p>
            <p className=" "> <span className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">Login</span> <span>/</span> <span className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">Register</span>  </p>
            <p className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4 ">Cart</p>
            <p className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4 ">Wishlist</p>
            <p className="hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4 ">Shop</p>
          </div>

        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="md:text-[22px] font-bold">Quick Link</p>
          </div>

          <div className=" flex flex-col gap-2 text-[11px] md:text-[14px] md:w-[40%]">
            <p className=" hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">Terms Of Use </p>
            <p className=" hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">FAQ </p>
            <p className=" hover:text-[#db4444]  duration-300 cursor-pointer hover:underline underline-offset-4">Contact </p>
          </div>

        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="text-[22px] font-bold">Social</p>
          </div>

          <div className=" flex items-center  gap-4 text-[20px] ">
            <Link className=" hover:text-[#db4444] hover:scale-110 duration-500 cursor-pointer"> <FiLinkedin/> </Link>
            <Link className=" hover:text-[#db4444] hover:scale-110 duration-500 cursor-pointer"> <FiGithub/> </Link>
            <Link className=" hover:text-[#db4444] hover:scale-110 duration-500 cursor-pointer"> <IoLogoInstagram/> </Link>
            <Link className=" hover:text-[#db4444] hover:scale-110 duration-500 cursor-pointer"> <RiTwitterXFill/> </Link>
       
          </div>

        </div>
      </div>

      {/* <p className="text-center text-[15px]  pb-4 text-[#6a6a6a]"> <span className=" text-[20px]">©</span> Copyright Rimel 2024. All right reserved</p> */}

    </div>
  );
};

export default Footer;
