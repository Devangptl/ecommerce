import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const OurProducts = () => {
  return (
    <div>
      <div className=" mt-20 flex flex-col gap-4">
      <div className=" flex  items-center gap-2">
        <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
        <p className=" text-[18px] font-extrabold text-[#db4444] ">Our Products</p>
      </div>

      <div className=" flex items-center text-[45px] font-semibold gap-20 ">
        <p className=" ">Explore Our Products</p>
       
      </div>

      <div>
        <div className="carousel flex   gap-2 ">
          {data.map((item) => {
            return (
              <div key={item.id} className=" group  carousel-item flex gap-2 flex-col  ">
                {/* <div className=" relative">
                  <p className=" absolute  bg-[#db4444] top-4 text-[12px] w-[50px]  z-10 font-semibold text-white px-2 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                    - {item.discountPercentage} %
                  </p>
                </div> */}

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
                    width={200}
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
        <div className="carousel mt-[50px] flex   gap-2 ">
          {data.map((item) => {
            return (
              <div key={item.id} className=" group  carousel-item flex gap-2 flex-col  ">
                  <div className=" relative">
            {
                item.arrival ? 
                <p className=" absolute  bg-[#00ff66] top-4 text-[12px] w-[40px]  z-10 font-semibold text-[#db4444] px-2 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                { item.arrival}
                </p>
            : " "}
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
                    width={200}
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
      </div>

      <div className="  text-center my-[50px]">
        <Link to={"/"} className="  hover:bg-white hover:text-[#db4444] hover:border border border-[#db4444]  duration-300 bg-[#db4444] px-7 py-2 rounded-[4px] text-white  text-center ">View All Products</Link>
      </div>

      <div className=" border border-b-1  border-gray-400"></div>

    </div>
    </div>
  )
}


const data = [
    {
      id: 1,
      title: "Airpods",
      price: 14999,
      arrival: "New",
      rating: 4.6,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765151/airpods-32433_ok1ecz.png",
    },
    {
      id: 2,
      title: "Cannon EOS R5",
      price: 54999,
      rating: 4.01,
      stock: 94,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/136167791_cf95fa0a-16e8-4bad-9ec4-ed3086a9a70a_wmoolp.jpg",
    },
    {
      id: 3,
      title: "Apple Desktop",
      price: 59999,
      rating: 4.54,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/135017381_3d488c19-24ef-47d0-bb3f-38b913bc1751_tt52ww.jpg",
    },
    {
      id: 4,
      title: "Mouse Wireless",
      price: 699,
      rating: 3.99,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/89206201_A_computer_mouse_with_a_light_-10_wbp6bn.jpg",
    },
    {
      id: 5,
      title: "Game Controller",
      price: 4999,
      arrival: "New",
      rating: 4.23,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/29814582_03june22_game_controller_icon_02_fy9ghg.jpg",
    },
    {
      id: 6,
      title: "Desktop",
      price: 15999,
      rating: 4.86,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765153/135017980_5383d811-3e38-4990-9a44-5e588aa78d4b_hrymsj.jpg",
    },
    {
      id: 7,
      title: "Earpods",
      price: 2549,
      arrival: "New",
      rating: 4.66,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765153/30112867_m506t0002_11june22_earpods4_wrykev.jpg",
    },
    {
      id: 8,
      title: "Table Fan",
      price: 3549,
      rating: 4.99,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765153/136167044_aa7482c0-6afb-49bc-ba7f-3bc33b7a9539_yd8mjh.jpg",
    },
    {
      id: 10,
      title: "Computer Mouse",
      price: 549,
      arrival: "New",
      rating: 4.06,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765154/91629060_Computer_Mouse_-8_zzbhoy.jpg",
    },
    {
      id: 11,
      title: "Gaming Headphone",
      price: 2699,
      rating: 4.77,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765154/83005392_Beautiful_gaming_headphone_-8_1_pss9j8.jpg",
    },
    {
      id: 12,
      title: "Gaming Headphone Z2",
      price: 3599,
      arrival: "New",
      rating: 4.89,
      thumbnail:
        "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765154/83005373_Beautiful_gaming_headphone_-5_ftj40l.jpg",
    },
  ];

export default OurProducts
