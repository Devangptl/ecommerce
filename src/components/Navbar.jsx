import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const { cart } = useSelector((state) => state.allCart);
  const { wishlist } = useSelector(
    (state) => state.allWishlist
  );

  const [open, setOpen] = useState(false);

  const handlemenu = () => {
    setOpen(!open);
  };


  return (
    <div className=" fixed top-0 z-20 w-full bg-white border border-b-2 md:py-5 py-2  flex flex-row justify-around items-center">
      <Link to={"/"} className=" ">

      <img className=" md:w-36 w-20 " src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1709988790/1709906423917_qjqayk.png" alt="" />
      </Link>


      {
          <div
            className={
              open
                ? "fixed   bg-opacity-75 bg-[#0a192f] md:hidden right-0 top-[50px] w-full  order-r border-r-[#0a192f] ease-in-out duration-700"
                : "ease-in-out w-[100%]  h-[29%]  border-r-[#0a192f]  duration-700 fixed top-[-30%] bottom-0  right-[-100%]"
            }
          >
             <div className=" flex tracking-wide text-white text-lg  py-7   flex-col items-center gap-2">
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

        <Link to={"/wishlist"} className=" flex relative pl-3 ">
          <p>WishList <span>({wishlist.length})</span> </p>
          {/* <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[11px]  font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {wishlist.length}
          </div> */}
        </Link>
      </div>
          </div>
        }
       
      

      <div className=" hidden md:flex tracking-wide text-[#3c3c3c] text-lg    flex-row items-center gap-9">
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

      <div className=" text-[#3c3c3c]   flex flex-row items-center md:gap-7 gap-4 ">
       
       <Search/>

      

        <Link to={"/wishlist"} className=" hidden md:flex relative pl-3 text-[24px]">
          <GoHeart className=" hover:text-[#ac2121] " />
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[11px]  font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {wishlist.length}
          </div>
        </Link>

        <Link to={"/cart"} className=" relative  md:text-[23px]">
          <BsCart3 />

          <div className="absolute inline-flex items-center justify-center md:w-5 md:h-5 w-4 h-4 text-[9px]  font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cart.length}
          </div>
        </Link>

        <label class="  right-0  md:hidden hamburger">
          {/* <input  type="checkbox" /> */}
          {
            open ? <VscChromeClose onClick={handlemenu}/> :  <RxHamburgerMenu onClick={handlemenu}/>
          }
        </label>

        <div className="hidden md:flex dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className=" bg-[#db4444] rounded-full md:text-[25px] text-white m-1"
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
              <Link className=" hover:bg-[#eaeaea]" to={"/myorder"}>
                My Order
              </Link>
            </li>
            <li>
              <Link className=" hover:bg-[#eaeaea]" to={"/login"}>
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
