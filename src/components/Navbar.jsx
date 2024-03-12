import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

const Navbar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const { wishlist } = useSelector(
    (state) => state.allWishlist
  );
  const dispatch = useDispatch();


  return (
    <div className=" fixed top-0 z-20 w-full bg-white border border-b-2 py-5  flex flex-row justify-around items-center">
      <Link to={"/"} className=" ">

      <img width={150} className="" src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1709988790/1709906423917_qjqayk.png" alt="" />
      </Link>
       
      

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

        <Link to={"/wishlist"} className=" relative pl-3 text-[24px]">
          <GoHeart className=" hover:text-[#ac2121] " />
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[11px]  font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {wishlist.length}
          </div>
        </Link>

        <Link to={"/cart"} className=" relative  text-[23px]">
          <BsCart3 />

          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[11px]  font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cart.length}
          </div>
        </Link>

        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className=" bg-[#db4444] rounded-full text-[25px] text-white m-1"
          >
            <CgProfile />
          </div>
          <ul
            tabIndex={0}
            className=" bgblure backdrop-filter backdrop-blur-[80px]  dropdown-content ml-[-100px] z-[1] menu p-2 shadow text-[#30a692] bg-none  rounded-box w-52"
          >
            <li>
              <Link to={"/myaccount"} className=" hover:bg-[#eaeaea]" >
                My Account
              </Link>
            </li>
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/order"}>
                My Order
              </Link>
            </li>
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/signup"}>
                Login
              </Link>
            </li>
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/signup"}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
