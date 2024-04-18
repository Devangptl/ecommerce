import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubCategory from "../components/SubCategory";
import useFetch from "../hooks/useFetch";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { addToWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import Rating from "../components/Rating";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";

const Categories = () => {

  const { id , title } = useParams();


  // const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}&pagination[pageSize]=100`) 
  const {data , isLoading} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}&pagination[pageSize]=100`) 

 console.log(data);

// const {sub_data} = useFetch('/api/sub-categories')
// console.log(title);

const dispatch = useDispatch();

const tostCart = (title) => {
  toast.success(`${title} added to cart`);
};
const tostWishlist = (title ) => {
  
  toast.success(`${title} added to Wishlist `)
 
};

if(isLoading){
  return <Loading/>
}

  return (
   <div >

    <div className=" mt-20 md:my-[10%] px-5 md:px-[14%] ">

    <SubCategory title={title} dataC={data}  id={id} />
    <p className="text-[#6e6d6d] pb-3 ">
        {" "}
        <Link to={"/"} className=" pr-1 ">
          Home{" "}
        </Link>{" "}
        / <span className=" font-medium text-black pl-1 "> {title}</span>
      </p>
  
    <div>
        <div className=" grid md:grid-cols-5  grid-cols-2 pb-6  gap-3">
          {data?.map((item) => {
            return (
              <div key={item.id} className=" group  py-2  flex gap-2 flex-col  ">
                {/* <div className=" relative">
                  <p className=" absolute  bg-[#db4444] top-4 text-[12px] w-[50px]  z-10 font-semibold text-white px-2 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                    - {item.discountPercentage} %
                  </p>
                </div> */}

                <div className=" relative">
                  <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-3 -z-10 flex flex-col">
                    <Link onClick={() => dispatch(addToWishlist(item)) ? tostWishlist(item.attributes.title ) : "" } className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                      <GoHeart />
                    </Link>
                    <Link 
                    to={`/productdetail/${item.id}`}
                     className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                      <IoEyeOutline />
                    </Link>
                  </div>
                </div>

                <div className=" h-[100%] w-[100%] relative overflow-hidden bg-gray-100 rounded-[5px]  " >
                  <Link to={`/productdetail/${item.id}`}>
                  <img
                    
                    className=" w-[150px] md:w-[200px]  py-4 px-5 hover:scale-105 duration-300  "
                    src={
                      item.attributes.image.data[0].attributes.url
                    }
                    alt=""
                  />
                  </Link>
                  <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                  <button onClick={() => dispatch(addToCart(item)) ? tostCart(item.attributes.title) : "" } className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   ">
                     Add to cart
                  </button>
                </div>
                </div>

                <p className=" text-[13px] md:text-[18px] font-[1000]">{item.attributes.title.slice(0, 20)}{item.attributes.title.length > 20 ? "..." : ""}</p>
                <div className=" flex md:text-[16px] text-[12px] items-center gap-3">
                  <p className="text-[#db4444] font-bold">₹ {item.attributes.price}</p>
                  <p className="text-[#929292] font-semibold line-through  ">
                    ₹ {item.attributes.originalPrice}
                  </p>
                </div>
                <div className="">
                  <Rating rating={item.attributes.rating} />
                </div>
              </div>
            );
          })}
        </div>
      
      </div>
  </div>
  </div>)
};

export default Categories;
