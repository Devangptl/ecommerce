import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addToCart } from "../features/cartSlice";
import { removerItem } from "../features/wishlistSlice";
import { IoHeartDislikeOutline } from "react-icons/io5";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.allWishlist);

  const tostCart = (title) => {
    toast.success(`${title} added to cart`);
  };
  const tostRemove = (title) => {
    toast.success(`${title} Remove from Wishlist `);
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
                      - {item.discountPercentage} %
                    </p>
                  </div>

                  <div className=" relative">
                    <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-3 -z-10 flex flex-col">
                      <Link
                        onClick={() =>
                          dispatch(removerItem(item.id))
                            ? tostRemove(item.title)
                            : ""
                        }
                        className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2"
                      >
                        <IoHeartDislikeOutline />
                      </Link>
                      <Link className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                        <IoEyeOutline />
                      </Link>
                    </div>
                  </div>

                  <div className=" relative overflow-hidden bg-gray-100 rounded-[5px]  ">
                    <img
                      width={300}
                      className="  py-4 px-5 hover:scale-105 duration-300  "
                      src={item.thumbnail}
                      alt=""
                    />
                    <div className="absolute w-full  group-hover:bottom-0 bottom-[-30px] duration-300    ">
                      <button
                        onClick={() =>
                          dispatch(addToCart(item)) ? tostCart(item.title) : ""
                        }
                        className="   bg-[black]  duration-700  text-[12px] w-full  font-semibold text-white px-2 py-1  rounded-[6px] rounded-t-none   "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

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
        )}
      </div>

      <div className=" mt-20  flex flex-col gap-4">
        <div className=" flex  items-center gap-2">
          <p className="  border-[#db4444] rounded-sm border-l-[15px] w-[20px] h-[35px]"></p>
          <p className=" text-[18px] font-extrabold text-[#db4444] ">
            Just for you
          </p>
        </div>

        <div className=" mt-[-54px]   flex items-center justify-end text-[45px] font-semibold gap-20 ">
          <Link
            to={"/"}
            className="hover:bg-white hover:text-[#db4444] hover:border border border-[#db4444] duration-300 text-[15px] bg-[#db4444] text-white px-7 py-2 rounded-[4px] "
          >
            See All
          </Link>
        </div>

        <div className=" flex    gap-2 ">
          {data?.map((item) => {
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

                <Link
                  className=" relative overflow-hidden bg-gray-100 rounded-[5px]  "
                  to={"/"}
                >
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
  );
};

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
  },
];

export default Wishlist;
