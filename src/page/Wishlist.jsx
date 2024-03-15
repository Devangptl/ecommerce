import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addToCart } from "../features/cartSlice";
import { addToWishlist, removerItem } from "../features/wishlistSlice";
import { IoHeartDislikeOutline } from "react-icons/io5";
import useFetch from "../hooks/useFetch";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.allWishlist);

  const { data } = useFetch("/api/products?populate=*&pagination[pageSize]=4");

  const tostCart = (title) => {
    toast.success(`${title} added to cart`);
  };
  const tostRemove = (title) => {
    toast.success(`${title} Remove from Wishlist `);
  };
 
  const tostWishlist = (title) => {
    toast.success(`${title} added to Wishlist `);
  };

  const dispatch = useDispatch();

  return (
    <div className="px-[10%]  mt-[130px]">
      <div className="  flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
          <p className=" text-[18px] font-extrabold text-[#db4444] ">
            Wishlist ( {wishlist.length} )
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center">
            <h1 className=" mb-2 text-[24px] "> No item in wishlist </h1>
            <Link to={"/"} className=" bg-[#db4444] text-[14px] hover:text-[#db4444] border border-[#db4444] hover:border-[#db4444] hover:bg-white duration-300   px-7 py-2 text-white font-[600] rounded-sm " >Add to wishlist </Link>
          </div>
        ) : (
          <div className=" grid grid-cols-5     gap-3 ">
            {wishlist?.map((item) => {
              return (
                <div key={item.id} className=" group flex gap-2 flex-col  ">
                  <div className=" relative">
                    <p className=" absolute  bg-[#db4444] top-4 text-[12px] w-[50px]  z-10 font-semibold text-white px-2 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                      - {item.attributes.discount} %
                    </p>
                  </div>

                  <div className=" relative">
                    <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-3 -z-10 flex flex-col">
                      <Link
                        onClick={() =>
                          dispatch(removerItem(item.id))
                            ? tostRemove(item.attributes.title)
                            : ""
                        }
                        className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2"
                      >
                        <IoHeartDislikeOutline />
                      </Link>
                      <Link to={`/productdetail/${item.id}`} className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                        <IoEyeOutline />
                      </Link>
                    </div>
                  </div>

                  <div  className=" relative overflow-hidden bg-gray-100 rounded-[5px]  ">
                  <Link to={`/productdetail/${item.id}`}>
                    <img
                      width={300}
                      className="  py-4 px-5 hover:scale-105 duration-300  "
                      src={process.env.REACT_APP_STRIPE_UP_URL +
                        item.attributes.image.data[0].attributes.url}
                      alt=""
                    />
                    </Link>
                    <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                      <button
                        onClick={() =>
                          dispatch(addToCart(item)) ? tostCart(item.attributes.title) : ""
                        }
                        className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

                  <p className=" text-[18px] font-[1000]">{item.attributes.title.slice(0, 20)}{" "}
                    {item.attributes.title.length > 20 ? "..." : ""}</p>
                  <div className=" flex items-center gap-3">
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
        )}
      </div>

      <div className=" mt-20  flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
          <p className=" text-[18px] font-extrabold text-[#db4444] ">
            Just for you
          </p>
        </div>

        <div className=" grid grid-cols-4 mb-24   gap-2 ">
          {data?.map((item) => {
            if (item.attributes.isNew === true) {
            return (
              
              <div key={item.id} className=" group flex gap-2 flex-col  ">
                <div className=" relative">
                  <p className=" absolute  bg-[#db4444] top-4 text-[12px] w-[50px]  z-10 font-semibold text-white px-2 py-1  rounded-[3px] rounded-bl-none  rounded-tr-none  ">
                    - {item.attributes.discount} %
                  </p>
                </div>

                <div className=" relative">
                  <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-3 -z-10 flex flex-col">
                    <Link onClick={() =>
                          dispatch(addToWishlist(item))
                            ? tostWishlist(item.attributes.title)
                            : ""
                        } className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                      <GoHeart />
                    </Link>
                    <Link to={`/productdetail/${item.id}`} className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                      <IoEyeOutline />
                    </Link>
                  </div>
                </div>

                <Link
                  className=" relative overflow-hidden bg-gray-100 rounded-[5px]  "
                  to={`/productdetail/${item.id}`}
                >
                  <img
                    width={300}
                    className="  py-4 px-5 hover:scale-105 duration-300  "
                    src={
                      process.env.REACT_APP_STRIPE_UP_URL +
                      item.attributes.image.data[0].attributes.url
                    }
                    alt=""
                  />
                  <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                    <button onClick={() =>
                          dispatch(addToCart(item))
                            ? tostCart(item.attributes.title)
                            : ""
                        } className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   ">
                      Add to cart
                    </button>
                  </div>
                </Link>

                <p className=" text-[18px] font-[1000]">{item.attributes.title.slice(0, 20)}{" "}
                    {item.attributes.title.length > 20 ? "..." : ""}</p>
                <div className=" flex items-center gap-3">
                  <p className="text-[#db4444] font-bold"> ₹ {item.attributes.price}</p>
                  <p className="text-[#929292] font-semibold line-through  ">
                    ₹ {item.attributes.originalPrice}
                  </p>
                </div>
                <div className="">
                  <Rating rating={item.attributes.rating}/>
                </div>
              </div>
            )};
          })}
        </div>

      </div>
    </div>
  );
};



export default Wishlist;
