import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiSolidCheckShield } from "react-icons/bi";

const Support = () => {
  return (
    <div className=" flex items-center justify-around md:py-24 py-10">
      <div className=" flex flex-col  items-center ">
        <p className="  bg-gray-400 md:p-[8px] p-[6px]  rounded-full text-white md:text-[30px] ">
          <p className=" bg-black md:p-[10px] p-[6px] rounded-full  ">
            <FaTruckFast />
          </p>
        </p>

        <h1 className=" mt-3 font-bold text-[9px] md:text-[20px]">FREE AND FAST DELIVERY</h1>
        <p className=" md:flex hidden text-[12px]">Free devivery for all orders over ₹799</p>
      </div>

      <div className=" flex flex-col  items-center  ">
      <p className="  bg-gray-400 md:p-[8px] p-[6px]  rounded-full text-white md:text-[30px] ">
          <p className=" bg-black md:p-[10px] p-[6px] rounded-full  ">
            <TfiHeadphoneAlt />
          </p>
        </p>

        <h1 className="mt-3 font-bold text-[9px] md:text-[20px]">24/7 CUSTOMER SERVICE</h1>
        <p className=" md:flex hidden text-[12px]">Friendly 24/7 customer support</p>
      </div>

      <div className=" flex flex-col  items-center  ">
      <p className="  bg-gray-400 md:p-[8px] p-[6px]  rounded-full text-white md:text-[30px] ">
          <p className=" bg-black md:p-[10px] p-[6px] rounded-full  ">
            <BiSolidCheckShield />
          </p>
        </p>

        <h1 className="mt-3 font-bold text-[9px] md:text-[20px]">MONEY BACK GUARANTEE</h1>
        <p className="md:flex hidden text-[12px]">We return money within 20 days</p>
      </div>
    </div>
  );
};

export default Support;
