import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice';
import useFetch from '../hooks/useFetch';
import HomeLoader from './HomeLoader';

const ThisMonth = () => {

    //  console.log(data);
    const {data , isLoading} = useFetch('/api/products?populate=*&pagination[pageSize]=20')



  const dispatch = useDispatch();

  const tostCart = (title) => {
    toast.success(`${title} added to cart`);
  };
  const tostWishlist = (title) => {
    toast.success(`${title} added to Wishlist `);
  };

  return (
    <div>
      <div className=" mt-8 md:mt-20 flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
          <p className=" md:text-[18px] font-extrabold text-[#db4444] ">
            This Month
          </p>
        </div>

        <div className="  flex items-center justify-between md:text-[45px] font-semibold gap-20 ">
          <p className=" ">Best Selling Products</p>
          <Link to= {"/thismonths"} className=' hover:bg-white hover:text-[#db4444] hover:border border border-[#db4444] duration-300 md:text-[15px] text-[12px] bg-[#db4444] text-white md:px-7 px-3 md:py-2 py-1 rounded-[4px] ' >View All</Link>
        </div>

        {
    isLoading== true ? <div className="grid md:grid-cols-5 grid-cols-2   gap-3"><HomeLoader/><HomeLoader/><HomeLoader/><HomeLoader/><HomeLoader/><HomeLoader/></div> : 
        <div className=" grid md:grid-cols-5 grid-cols-2   gap-3 ">
          {data?.map((item ) => {
            if(item.attributes.thisMonth === true){
              
              return (
                <div key={item.id} className=" group flex gap-2 flex-col  ">
                  <div className=" relative">
                    <p className=" absolute  bg-[#db4444] top-4 text-[10px] md:text-[12px] w-[35px] md:w-[50px]  z-10 font-semibold text-white md:px-2 px-1 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                      - {item.attributes.discount} %
                    </p>
                  </div>
  
                  <div className=" relative">
                    <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-3 -z-10 flex flex-col">
                      <Link onClick={() => dispatch(addToWishlist(item)) ? tostWishlist(item.attributes.title) : "" } className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                        <GoHeart />
                      </Link>
                      <Link 
                      to={`/productdetail/${item.id}`}
                      className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                        <IoEyeOutline />
                      </Link>
                    </div>
                  </div>
  
                  <div className="  h-[100%] w-[100%] relative overflow-hidden bg-gray-100 rounded-[5px]  " >
                    
                  <Link to={`/productdetail/${item.id}`}> 
                    <img
                      // width={300}
                      className=" w-[150px] md:w-[300px]  py-4 px-5 hover:scale-105 duration-300  "
                      src={
                        item.attributes.image.data[0].attributes.url}
                      alt=""
                    />
                    </Link>
                    <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                    <button onClick={() => dispatch(addToCart(item)) ? tostCart(item.attributes.title) : "" } className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   ">
                       Add to cart
                    </button>
                  </div>
                  </div>
  
                  <p className=" text-[14px] md:text-[18px] font-[1000]">{item.attributes.title.slice(0, 20)}
                    {item.attributes.title.length > 20 ? "..." : ""}</p>
                  <div className=" flex items-center gap-3">
                    <p className="text-[#db4444] text-[14px] md:text-[16px] font-bold">₹ {item.attributes.price}</p>
                    <p className="text-[#929292] text-[14px] md:text-[16px] font-semibold line-through  ">
                      ₹ {item.attributes.originalPrice}
                    </p>
                  </div>
                  <div className="">
                    <Rating rating={item.attributes.rating} />
                  </div>
                </div>
              );
            }
          })}
        </div>
}

        {/* hr line */}
        <div className=" mt-10 border border-b-1  border-gray-400"></div>
      </div>
    </div>
  )
}





export default ThisMonth
