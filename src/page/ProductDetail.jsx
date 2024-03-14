import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseItemQuantity,
  removerItem,
} from "../features/cartSlice";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  // const [product , setProduct] = useState([])

  const dispatch = useDispatch();

  const { id } = useParams();

  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const product = data?.[0]?.attributes;
  console.log(data?.[0]);

  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="2xl:container mt-[3%] 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        {/* <!-- Description Div --> */}

        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          {/* <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Home / Furniture / Wooden Stool</p> */}
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
            {product?.title}
          </h2>

          <div className=" flex flex-row justify-between  mt-5">
            <Rating rating={product?.rating} />
            <p className=" font-normal text-base leading-4 text-gray-700 ">
              {product?.discount} reviews
            </p>
          </div>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {product?.description}
          </p>
          <div className=" flex items-center gap-3">

          <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
            ₹{product?.price}.00
          </p>
          <p className="text-[#929292] font-semibold lg:text-xl text-[18px] lg:leading-6 leading-5 mt-6 line-through  ">
            ₹ {product?.originalPrice}.00
          </p>
          </div>

          <button
            onClick={() => dispatch(addToCart(data?.[0]))}
            className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
          >
            Add to Cart
          </button>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=" w-full sm:w-96 md:w-7/12  lg:w-5/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className="   overflow-hidden w-full  bg-gray-100 flex justify-center items-center">
            <img
              className="hover:scale-110 duration-300 "
              src={
                process.env.REACT_APP_STRIPE_UP_URL +
                product?.image?.data?.[0].attributes?.url
              }
              alt="Wooden Chair Previw"
            />
          </div>
          <div className="   w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className="overflow-hidden bg-gray-100 flex justify-center items-center py-4">
              <img
                className="hover:scale-110 duration-300 "
                src={
                  process.env.REACT_APP_STRIPE_UP_URL +
                  (product?.image?.data?.[1].attributes?.url === undefined
                    ? product?.image?.data?.[0].attributes?.url
                    : product?.image?.data?.[1].attributes?.url)
                }
                alt="Wooden chair - preview 1"
              />
            </div>
            <div className="overflow-hidden bg-gray-100 flex justify-center items-center py-4">
              <img
                className="hover:scale-110 duration-300 "
                src={
                  process.env.REACT_APP_STRIPE_UP_URL +
                  (product?.image?.data?.[2].attributes?.url === undefined
                    ? product?.image?.data?.[0].attributes?.url
                    : product?.image?.data?.[2].attributes?.url)
                }
                alt="Wooden chair - preview 2"
              />
            </div>
            <div className="overflow-hidden bg-gray-100 flex justify-center items-center py-4">
              <img
                className="hover:scale-110 duration-300 "
                src={
                  process.env.REACT_APP_STRIPE_UP_URL +
                  (product?.image?.data?.[3].attributes?.url === undefined
                    ? product?.image?.data?.[0].attributes?.url
                    : product?.image?.data?.[3].attributes?.url)
                }
                alt="Wooden chair- preview 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const data = {
//   id: 1,
//   title: "Airpods",
//   price: 14999,
//   discountPercentage: 12,
//   rating: 4.6,
//   review: 25,
//   description:
//     "Spatial audio with dynamic head tracking places sound all around you Adaptive EQ automatically tunes music to your ears All-new contoured desig  Force sensor lets you easily control your entertainment, answer or end calls, and more Sweat and water resistant",
//   thisMonth: true,
//   quantity: 1,
//   thumbnail:
//     "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765151/airpods-32433_ok1ecz.png",
// };

export default ProductDetail;
