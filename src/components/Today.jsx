import React from "react";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "sonner";
import { addToWishlist } from "../features/wishlistSlice";
import useFetch from "../hooks/useFetch";

const Today = () => {
  // console.log(data);

  const { data } = useFetch("/api/products?populate=*&pagination[pageSize]=7");

  const tostCart = (title) => {
    toast.success(`${title} added to cart`);
  };
  const tostWishlist = (title) => {
    toast.success(`${title} added to Wishlist `);
  };
  

  // const items = useSelector((state) => state.allCart.item);

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
    <div className=" mt-8 md:mt-20 flex flex-col gap-4">
      <div className=" flex  items-center gap-2">
        <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
        <p className=" text-[14px] md:text-[18px] font-extrabold text-[#db4444] ">Today's</p>
      </div>

      <div className=" flex items-center md:text-[45px] font-semibold md:justify-normal justify-between md:gap-20 ">
        <p className=" ">Flash Sales</p>
        <p className=" font-[600] md:text-[35px]">
          {" "}
          <Countdown date={Date.now() + 259200000} renderer={renderer} />
        </p>
      </div>

      <div>
        <div className="carousel flex   gap-2 ">
          {data?.map((item) => {
            if (item.attributes.isNew === true) {
              return (
                <div
                  key={item.id}
                  className=" group  carousel-item flex gap-2 flex-col  "
                >
                  <div className=" relative">
                    <p className=" absolute  bg-[#db4444] top-4 text-[12px] w-[50px]  z-10 font-semibold text-white px-2 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                      - {item.attributes.discount} %
                    </p>
                  </div>

                  <div className=" relative">
                    <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-3 -z-10 flex flex-col">
                      <Link
                        onClick={() =>
                          dispatch(addToWishlist(item))
                            ? tostWishlist(item.attributes.title)
                            : ""
                        }
                        className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2"
                      >
                        <GoHeart />
                      </Link>
                      <Link
                        to={`/productdetail/${item.id}`}
                        className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2"
                      >
                        <IoEyeOutline />
                      </Link>
                    </div>
                  </div>

                  <div
                    className=" h-[215px] w-[250px]  relative overflow-hidden bg-gray-100 rounded-[5px]  "
                    
                  >
                    <Link to={`/productdetail/${item.id}`}>

                    <img
                      className="h-[200px] w-[200px] m-auto p-3  hover:scale-105 duration-300  "
                      src={
                        process.env.REACT_APP_STRIPE_UP_URL +
                        item.attributes.image.data[0].attributes.url
                      }
                      alt=""
                      />
                      </Link>
                    <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                      <button
                        onClick={() =>
                          dispatch(addToCart(item))
                            ? tostCart(item.attributes.title)
                            : ""
                        }
                        className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

                  <p className="  text-[18px] font-[1000]">
                    {item.attributes.title.slice(0, 20)}{" "}
                    {item.attributes.title.length > 20 ? "..." : ""}
                  </p>
                  <div className=" flex items-center gap-3">
                    <p className="text-[#db4444] font-bold">
                      ₹ {item.attributes.price}
                    </p>
                    <p className="text-[#929292] font-semibold line-through  ">
                      ₹ {item.attributes.originalPrice}
                    </p>
                  </div>
                  <div className="">
                    <Rating rating={item.attributes.rating} />
                  </div>
                </div>

                //           <div className="relative bg-[#b0b0b0]  carousel-item h-[250px] w-[250px] rounded-md">
                //   <img

                //     src={process.env.REACT_APP_STRIPE_UP_URL + item.attributes.image.data[0].attributes.url}
                //     alt="AirMax Pro"
                //     className="z-0 h-[200px] w-[200px] m-auto rounded-md "
                //   />
                //   <div className="absolute inset-0 bg-gradient-to-t rounded-md duration-700 hover:from-gray-900 to-transparent">
                //   <div className="absolute bottom-4 left-4 text-left">
                //     <h1 className="text-lg font-semibold text-white">Delba</h1>
                //     <p className="mt-2 text-sm text-gray-300">
                //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                //     </p>
                //     <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                //       View Profile &rarr;
                //     </button>
                //   </div>
                //   </div>
                // </div>
              );
            }
          })}
        </div>
      </div>

      <div className="  text-center my-[20px] md:my-[50px]">
        <Link
          to={"/today"}
          className="  hover:bg-white hover:text-[#db4444] hover:border border border-[#db4444]  duration-300 bg-[#db4444] md:px-7 px-4 md:text-[16px] text-[14px] py-2 rounded-[4px] text-white  text-center "
        >
          View All Products
        </Link>
      </div>

      <div className=" border border-b-1  border-gray-400"></div>
    </div>
  );
};

export default Today;
