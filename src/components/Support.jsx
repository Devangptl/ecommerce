import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiSolidCheckShield } from "react-icons/bi";

const Support = () => {
  return (
    <div className=" flex items-center justify-around py-24">
      <div className=" flex flex-col  items-center ">
        <p className="  bg-gray-400 p-[8px]  rounded-full text-white text-[30px] ">
          <p className=" bg-black p-[10px] rounded-full  ">
            <FaTruckFast />
          </p>
        </p>

        <h1 className=" mt-3 font-bold text-[20px]">FREE AND FAST DELIVERY</h1>
        <p className=" text-[12px]">Free devivery for all orders over ₹799</p>
      </div>

      <div className=" flex flex-col  items-center  ">
      <p className="  bg-gray-400 p-[8px]  rounded-full text-white text-[30px] ">
          <p className=" bg-black p-[10px] rounded-full  ">
            <TfiHeadphoneAlt />
          </p>
        </p>

        <h1 className="mt-3 font-bold text-[20px]">24/7 CUSTOMER SERVICE</h1>
        <p className=" text-[12px]">Friendly 24/7 customer support</p>
      </div>

      <div className=" flex flex-col  items-center  ">
      <p className="  bg-gray-400 p-[8px]  rounded-full text-white text-[30px] ">
          <p className=" bg-black p-[10px] rounded-full  ">
            <BiSolidCheckShield />
          </p>
        </p>

        <h1 className="mt-3 font-bold text-[20px]">MONEY BACK GUARANTEE</h1>
        <p className=" text-[12px]">We return money within 20 days</p>
      </div>
    </div>
  );
};

export default Support;
