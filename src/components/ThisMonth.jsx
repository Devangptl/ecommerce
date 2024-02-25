import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const ThisMonth = () => {
  return (
    <div>
      <div className=" mt-20 flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
          <p className=" text-[18px] font-extrabold text-[#db4444] ">
            This Month
          </p>
        </div>

        <div className="  flex items-center justify-between text-[45px] font-semibold gap-20 ">
          <p className=" ">Best Selling Products</p>
          <Link to= {"/"} className=' hover:bg-white hover:text-[#db4444] hover:border border border-[#db4444] duration-300 text-[15px] bg-[#db4444] text-white px-7 py-2 rounded-[4px] ' >View All</Link>
        </div>

        <div className=" flex    gap-2 ">
          {data?.map((item ) => {
            return (
              <div key={item.id} className=" group flex gap-2 flex-col  ">
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

                <Link className=" relative overflow-hidden bg-gray-100 rounded-[5px]  " to={"/"}>
                  <img
                    width={300}
                    className="  py-4 px-5 hover:scale-105 duration-300  "
                    src={item.thumbnail}
                    alt=""
                  />
                  <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                  <button className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   ">
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

        {/* hr line */}
        <div className=" mt-10 border border-b-1  border-gray-400"></div>
      </div>
    </div>
  )
}



const data = [
    {
      id: 1,
      title: "Airpods",
      price: 14999,
      discountPercentage: 12,
      rating: 4.6,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765151/airpods-32433_ok1ecz.png",
    },
    {
      id: 2,
      title: "Cannon EOS R5",
      price: 54999,
      discountPercentage: 20,
      rating: 4.01,
      stock: 94,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/136167791_cf95fa0a-16e8-4bad-9ec4-ed3086a9a70a_wmoolp.jpg",
    },
    {
      id: 3,
      title: "Apple Desktop",
      price: 59999,
      discountPercentage: 10,
      rating: 4.54,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/135017381_3d488c19-24ef-47d0-bb3f-38b913bc1751_tt52ww.jpg",
    },
    {
      id: 4,
      title: "Mouse Wireless",
      price: 699,
      discountPercentage: 40,
      rating: 3.99,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/89206201_A_computer_mouse_with_a_light_-10_wbp6bn.jpg",
    }

  ];

export default ThisMonth
