import React from "react";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import Rating from "./Rating";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import {  toast } from 'sonner'
import { FaMinus } from "react-icons/fa";

const Today = () => {


const tost = (title) => {
  toast.success( `${title} added to cart`);
}



  const items = useSelector((state) => state.allCart.item);

  const dispatch = useDispatch();

  const Completionist = () => <span>End of the Sale 😒</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className=" flex  items-center justify-center">
          {" "}
          <span className="  px-3 rounded-full flex-col flex items-center ">
            {" "}
            <p className="text-[9px]">Days</p> {days}
          </span>
          <span className=" mt-2 text-[#db4444]">:</span>{" "}
          <span className="  px-3 rounded-full flex-col flex items-center ">
            {" "}
            <p className="text-[9px]">Hours</p> {hours}
          </span>
          <span className="mt-2 text-[#db4444]">:</span>{" "}
          <span className="  px-3 rounded-full flex-col flex items-center ">
            {" "}
            <p className="text-[9px]">Minutes</p> {minutes}
          </span>
          <span className="mt-2 text-[#db4444]">:</span>{" "}
          <span className="  px-3 rounded-full flex-col flex items-center ">
            {" "}
            <p className="text-[9px]">Seconds</p> {seconds}
          </span>
        </span>
      );
    }
  };

  return (
    <div className=" mt-20 flex flex-col gap-4">
      <div className=" flex  items-center gap-2">
        <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
        <p className=" text-[18px] font-extrabold text-[#db4444] ">Today's</p>
      </div>

      <div className=" flex items-center text-[45px] font-semibold gap-20 ">
        <p className=" ">Flash Sales</p>
        <p className=" font-[600] text-[35px]">
          {" "}
          <Countdown date={Date.now() + 259200000} renderer={renderer} />
        </p>
      </div>

      <div>
        <div className="carousel flex   gap-2 ">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className=" group  carousel-item flex gap-2 flex-col  "
              >
                <div className=" relative">
                  <p className=" absolute  bg-[#db4444] top-4 text-[12px] w-[50px]  z-10 font-semibold text-white px-2 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                    - {item.discountPercentage} %
                  </p>
                </div>

                <div className=" relative">
                  <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-3 -z-10 flex flex-col">
                    <Link className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                      <GoHeart />
                    </Link>
                    <Link className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                      <IoEyeOutline />
                    </Link>
                  </div>
                </div>

                <Link
                  className="  relative overflow-hidden bg-gray-100 rounded-[5px]  "
                  to={"/"}
                >
                  <img
                    width={200}
                    className="  py-4 px-5 hover:scale-105 duration-300  "
                    src={item.thumbnail}
                    alt=""
                  />
                  <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                    <button
                      onClick={() => dispatch(addToCart(item)) ? tost(item.title) : "" }
                      className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   "
                    >
                      Add to cart
                    </button>
                  </div>
                </Link>

                <p className=" text-[18px] font-[1000]">{item.title}</p>
                <div className=" flex items-center gap-3">
                  <p className="text-[#db4444] font-bold">₹ {item.price}</p>
                  <p className="text-[#929292] font-semibold line-through  ">
                    ₹ {item.price}
                  </p>
                </div>
                <div className="">
                  <Rating rating={item.rating} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="  text-center my-[50px]">
        <Link
          to={"/"}
          className="  hover:bg-white hover:text-[#db4444] hover:border border border-[#db4444]  duration-300 bg-[#db4444] px-7 py-2 rounded-[4px] text-white  text-center "
        >
          View All Products
        </Link>
      </div>

      <div className=" border border-b-1  border-gray-400"></div>
    </div>
  );
};

export default Today;
