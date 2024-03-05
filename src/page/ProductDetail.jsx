import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import { data } from "../components/productData";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductDetail = () => {

  const dispatch = useDispatch()

  // const [oneData , setOneData] = useState([])

  // const [num , setNum] = useState([])

  const {id} = useParams()
  
// const  getProductDetails = async (id) =>{
//   data.map((item)=>{
//     if(item.id == id){
//       setOneData(item);
//     }
//   })
// }

const allData = data.find((item) => item.id == id)




// console.log(oneData)

// useEffect(()=>{
//   getProductDetails(id)
//   // allData
// },[])

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
            {allData.title}
          </h2>

          <div className=" flex flex-row justify-between  mt-5">
            <Rating rating={allData.rating} />
            <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
              {allData.review} reviews
            </p>
          </div>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {allData.description}
          </p>
          <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
            ₹{allData.price}
          </p>

          <div className="lg:mt-11 mt-10">
            <div className="flex flex-row justify-between">
              <p className=" font-medium text-base leading-4 text-gray-600">
                Select quantity
              </p>
              <div className="flex">
                <span
                  onClick={minusCount}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                >
                  -
                </span>
                <input
                  id="counter"
                  aria-label="input"
                  className="border border-gray-300 h-full text-center w-14 "
                  type="text"
                  value={count}
                  onChange={(e) => e.target.value}
                />
                <span
                  onClick={addCount}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                >
                  +
                </span>
              </div>
            </div>
          </div>

          <button onClick={()=>dispatch(addToCart(allData))} className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
            Add to Cart
          </button>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className="   overflow-hidden w-full  bg-gray-100 flex justify-center items-center">
            <img
            
              className="hover:scale-110 duration-300 "
              src={allData.thumbnail}
              alt="Wooden Chair Previw"
            />
          </div>
          <div className="   w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
            <div className="overflow-hidden bg-gray-100 flex justify-center items-center py-4">
              <img
                className="hover:scale-110 duration-300 "
                src={allData.thumbnail}
                alt="Wooden chair - preview 1"
              />
            </div>
            <div className="overflow-hidden bg-gray-100 flex justify-center items-center py-4">
              <img
                className="hover:scale-110 duration-300 "
                src={allData.thumbnail}
                alt="Wooden chair - preview 2"
              />
            </div>
            <div className="overflow-hidden bg-gray-100 flex justify-center items-center py-4">
              <img
                className="hover:scale-110 duration-300 "
                src={allData.thumbnail}
                alt="Wooden chair- preview 3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center w-full">
        <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.667 43.75H33.3337"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 31.25V43.75"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.4167 6.25L37.5 20.8333C37.5 27.1083 31.9042 31.25 25 31.25C18.0958 31.25 12.5 27.1083 12.5 20.8333L14.5833 6.25H35.4167Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 20.8333C14.3032 19.4813 16.4962 18.7505 18.75 18.7505C21.0038 18.7505 23.1968 19.4813 25 20.8333C26.8032 22.1853 28.9962 22.9161 31.25 22.9161C33.5038 22.9161 35.6968 22.1853 37.5 20.8333"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">
              Great for drinks
            </p>
            <p className="text-normal text-base leading-6 text-gray-600 mt-4">
              Here are all the great cocktail recipes you should know how to
              make, from the margarita to the whiskey sour. Cheers!{" "}
            </p>
          </div>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.833 6.66659C17.574 7.42209 14.5766 9.03575 12.1515 11.3402C9.72641 13.6447 7.96204 16.556 7.04139 19.7722C6.12073 22.9884 6.07733 26.3923 6.91568 29.6309C7.75403 32.8696 9.44359 35.8249 11.8091 38.1905C14.1747 40.556 17.13 42.2456 20.3686 43.0839C23.6073 43.9223 27.0112 43.8789 30.2274 42.9582C33.4436 42.0375 36.3549 40.2732 38.6594 37.8481C40.9638 35.423 42.5775 32.4255 43.333 29.1666C43.333 28.6141 43.1135 28.0842 42.7228 27.6935C42.3321 27.3028 41.8022 27.0833 41.2497 27.0833H33.333C32.9542 28.5395 32.1975 29.8699 31.1394 30.9397C30.0813 32.0095 28.7594 32.7809 27.3074 33.1757C25.8554 33.5705 24.3249 33.5747 22.8708 33.1879C21.4166 32.8011 20.0905 32.0371 19.0265 30.9731C17.9625 29.9091 17.1984 28.583 16.8117 27.1288C16.4249 25.6747 16.4291 24.1442 16.8239 22.6922C17.2187 21.2402 17.99 19.9183 19.0599 18.8602C20.1297 17.8021 21.4601 17.0453 22.9163 16.6666V8.33326C22.8904 8.08643 22.8158 7.84721 22.6968 7.62944C22.5777 7.41168 22.4166 7.21971 22.2229 7.06468C22.0291 6.90964 21.8064 6.79463 21.5678 6.72629C21.3293 6.65795 21.0795 6.63766 20.833 6.66659Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.25 7.29163C33.8953 8.22305 36.2979 9.736 38.2809 11.719C40.264 13.7021 41.7769 16.1047 42.7083 18.75H33.3333C32.6946 18.0019 31.998 17.3054 31.25 16.6666V7.29163Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">
              Durable hardware
            </p>
            <p className="text-normal text-base leading-6 text-gray-600 mt-4">
              Product durability is a key aspect of achieving a circular
              economy. ... Moreover, enhancing the durability of individual
              hardware components{" "}
            </p>
          </div>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.583 14.5834H35.4164V27.0834C35.4164 28.741 34.7579 30.3307 33.5858 31.5028C32.4137 32.6749 30.824 33.3334 29.1663 33.3334H20.833C19.1754 33.3334 17.5857 32.6749 16.4136 31.5028C15.2415 30.3307 14.583 28.741 14.583 27.0834V14.5834Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.75 6.25V14.5833"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.25 6.25V14.5833"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 33.3334V37.5C25 38.6051 25.439 39.6649 26.2204 40.4463C27.0018 41.2277 28.0616 41.6667 29.1667 41.6667H35.4167"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">
              Eco-friendly
            </p>
            <p className="text-normal text-base leading-6 text-gray-600 mt-4">
              {" "}
              They re-use, recycle and reduce waste disposal in their lives.
              They conserve energy and natural resources
            </p>
          </div>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.667 16.6666H33.3337V33.3333H16.667V16.6666Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.4997 8.33337H12.4997C10.1985 8.33337 8.33301 10.1989 8.33301 12.5V37.5C8.33301 39.8012 10.1985 41.6667 12.4997 41.6667H37.4997C39.8009 41.6667 41.6663 39.8012 41.6663 37.5V12.5C41.6663 10.1989 39.8009 8.33337 37.4997 8.33337Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.333 33.3334L40.208 40.2084"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.333 16.6666L40.208 9.79163"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.667 16.6666L9.79199 9.79163"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.667 33.3334L9.79199 40.2084"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">
              Minimal Design
            </p>
            <p className="text-normal text-base leading-6 text-gray-600 mt-4">
              Minimalist interior design is very similar to modern interior
              design and involves using the bare essentials{" "}
            </p>
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
