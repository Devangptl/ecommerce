import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className=" fixed top-0 z-20 w-full bg-white border border-b-2 py-5  flex flex-row justify-around items-center">
      <div className="  text-[24px] font-bold"> Gada Electronics</div>

      <div className=" tracking-wide text-[#3c3c3c] text-lg   flex flex-row items-center gap-9">
        <Link
          to={"/"}
          className=" duration-300 underline-offset-8 hover:underline  hover:text-orange-600"
        >
          Home
        </Link>
        <Link
          to={"/contact"}
          className="duration-300 underline-offset-8 hover:underline  hover:text-orange-600"
        >
          Contact
        </Link>
        <Link
          to={"/about"}
          className="duration-300 underline-offset-8 hover:underline  hover:text-orange-600"
        >
          About
        </Link>
        <Link
          to={"/signup"}
          className="duration-300 underline-offset-8 hover:underline  hover:text-orange-600"
        >
          Sign Up
        </Link>
      </div>

      <div className=" text-[#3c3c3c]  flex flex-row items-center gap-7">
        <div className=" flex flex-row items-center ">
          <input
            type="text"
            id="password"
            className=" text-[14px] outline-none pl-3 pr-10 py-2  bg-gray-100 rounded-[3px] hover:border-gray-300  "
            placeholder="What are you looking for?"
          />
          <button className="  font-bold text-center text-[20px]   ml-[-30px]  text-gray-400  hover:text-gray-900 transition-colors">
            <CiSearch />
          </button>
        </div>

        <Link to={"/wishlist"} className=" pl-3 text-[24px]">
          <GoHeart className=" hover:text-[#ac2121] " />
        </Link>

        <Link to={"/cart"} className=" text-[23px]">
          <BsCart3 />
        </Link>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" bg-[#db4444] rounded-full text-[25px] text-white m-1">
            <CgProfile />
          </div>
          <ul
            tabIndex={0}
            className=" bgblure backdrop-filter backdrop-blur-[80px]  dropdown-content ml-[-100px] z-[1] menu p-2 shadow text-[#30a692] bg-none  rounded-box w-52"
          >
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/profile"}>Manage My Account</Link>
            </li>
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/order"}>My Order</Link>
            </li>
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/signup"}>Login</Link>
            </li>
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/signup"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
