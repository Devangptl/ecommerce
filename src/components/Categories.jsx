import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { GiHeadphones } from "react-icons/gi";
import { MdSportsEsports } from "react-icons/md";
import { Link } from "react-router-dom";

const Categories = () => {

  

  return (
    <div>
      <div className=" mt-20 flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
          <p className=" text-[18px] font-extrabold text-[#db4444] ">
            Categories
          </p>
        </div>

        <div className=" flex items-center text-[45px] font-semibold gap-20 ">
          <p className=" ">Browes By Category</p>
        </div>

        <div className=" flex items-center gap-4 w-full  ">
          {category.map((item) => {
            return (
                <Link className=" font-normal hover:bg-[#db4444] hover:text-white cursor-pointer duration-500  rounded-[4px] border border-gray-300 w-full h-full  py-6" to={`${item.name}/${item.id}`}>
              <div key={item.id} className="flex flex-col gap-1 items-center justify-center">
                <p className="  text-[45px]">{item.icon} </p>
                <p className=" text-[15px]">{item.name} </p>
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
    id: 1,
    icon: <IoPhonePortraitOutline />,
    name: "Phones",
  },
  {
    id: 2,
    icon: <HiOutlineComputerDesktop />,
    name: "Computers",
  },
  {
    id: 3,
    icon: <BsSmartwatch />,
    name: "SmartWatch",
  },
  {
    id: 4,
    icon: <IoCameraOutline />,
    name: "Camera",
  },
  {
    id: 5,
    icon: <GiHeadphones />,
    name: "HeadPhones",
  },
  {
    id: 6,
    icon: <MdSportsEsports />,
    name: "Gaming",
  },
];

export default Categories;


