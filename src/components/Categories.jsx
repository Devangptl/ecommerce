import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { GiHeadphones } from "react-icons/gi";
import { MdSportsEsports } from "react-icons/md";
import { SiHomeassistant } from "react-icons/si";
import { Link } from "react-router-dom";

const Categories = () => {

  

  return (
    <div>
      <div className=" md:mt-20 mt-8 flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px]  md:w-[20px] h-[35px]"></p>
          <p className=" md:text-[18px] font-extrabold text-[#db4444] ">
            Categories
          </p>
        </div>

        <div className=" flex items-center md:text-[45px] font-semibold gap-20 ">
          <p className=" ">Browes By Category</p>
        </div>

        <div className=" md:flex grid grid-cols-4 items-center md:gap-4 gap-1 w-full  ">
          {category.map((item) => {
            return (
                <Link className=" font-normal hover:bg-[#db4444] hover:text-white cursor-pointer duration-500  rounded-[4px] border border-gray-300 w-full h-full py-2  md:py-6" to={`${item.name}/${item.id}`}>
              <div key={item.id} className="flex flex-col gap-1 items-center justify-center">
                <p className="  md:text-[45px]">{item.icon} </p>
                <p className=" text-[10px] md:text-[15px]">{item.name} </p>
              </div>
              </Link>
            );
          })}
        </div>

        {/* hr line */}
        <div className=" mt-10 border border-b-1  border-gray-400"></div>
      </div>
    </div>
  );
};

const category = [
  {
    id: 29,
    icon: <IoPhonePortraitOutline />,
    name: "Phones",
  },
  {
    id: 30,
    icon: <HiOutlineComputerDesktop />,
    name: "Computers",
  },
  {
    id: 31,
    icon: <BsSmartwatch />,
    name: "SmartWatch",
  },
  {
    id: 32,
    icon: <IoCameraOutline />,
    name: "Camera",
  },
  {
    id: 33,
    icon: <GiHeadphones />,
    name: "HeadPhones",
  },
  {
    id: 34,
    icon: <MdSportsEsports />,
    name: "Gaming",
  },
  {
    id: 35,
    icon: <SiHomeassistant  />,
    name: "Home Appliances",
  },
];

export default Categories;


