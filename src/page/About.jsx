import React from "react";
import { Link } from "react-router-dom";
import { IoStorefront } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { GiProgression } from "react-icons/gi";
import Support from "../components/Support";

const About = () => {
  return (
    <div>
      <div className=" mt-[5%] px-[7%]">
        <p className="text-[#6e6d6d]  pt-[4%] ">
          {" "}
          <Link to={"/"} className=" pr-1 ">
            Home{" "}
          </Link>{" "}
          / <span className=" font-medium text-black pl-1 "> About</span>{" "}
        </p>

        <div className=" grid grid-cols-2 gap-4">
          <div className=" w-[500px] gap-4 flex flex-col items-start justify-center">
            <h1 className=" text-[50px] font-bold  ">Our Story <span className="text-[40px]">...</span></h1>
            <p className=" text-[18px] text-justify ">
              Launced in 2024, Exclusive is India premier online shopping
              makterplace with an active presense in Gujrat. Supported by wide
              range of tailored marketing, data and service solutions, Exclusive
              has 30 brands and serves 30k customers across the region.
            </p>
            <p className="text-[18px] text-justify">
              Exclusive offers a diverse assotment in categories ranging from
              consumer.
            </p>
          </div>

          <div>
            <img
            width={500}
              src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1710308738/fun-3d-illustration-cartoon-kid-with-rain-gear_b4ffjd.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <div>
            <div className=" mt-20 px-9 flex flex-col gap-4">
              <div className=" flex items-center gap-4 w-full  ">
                {category.map((item) => {
                  return (
                    <div
                      className=" group  font-normal hover:bg-[#db4444] hover:text-white cursor-pointer duration-500  rounded-[4px] border  border-gray-300 w-full h-full  py-6"
                      
                    >
                      <div
                        key={item.id}
                        className="flex flex-col gap-1 items-center justify-center"
                      >
                        <p className=" group-hover:bg-white duration-500 bg-gray-400 p-[8px]  rounded-full text-white text-[30px] ">
                          <p className=" bg-black p-[10px] rounded-full  ">
                            {item.icon}
                          </p>
                        </p>
                        <p className=" text-[30px] pt-2 font-bold">{item.number} </p>
                        <p className=" text-[20px]  ">{item.name} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

<div>
    <Support/>
</div>

      </div>
    </div>
  );
};

const category = [
  {
    id: 1,
    icon: <IoStorefront />,
    number: "10.5k",
    name: "Active our site",
  },
  {
    id: 2,
    icon: <FaIndianRupeeSign />,
    number: "33k",
    name: "Monthly Produduct Sale",
  },
  {
    id: 3,
    icon: <LuBaggageClaim />,
    number: "4.5k",
    name: "Customer active in our site",
  },
  {
    id: 4,
    icon: <GiProgression />,
    number: "25k",
    name: "Anual gross sale in our site",
  },
];

export default About;
