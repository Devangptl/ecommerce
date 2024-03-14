import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiStreetLight } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cart } = useSelector((state) => state.allCart);

  const getTotal = () => {
    let totalPrice = 0
    cart.forEach(item => {
      totalPrice += item.attributes.price * item.attributes.quantity
    })
    return {totalPrice}
  }

  const  shipping = 0

  return (
    <div className="mt-[5%]">
      <p className="text-[#6e6d6d] px-[7%] py-[4%] ">
        <Link to={"/"} className=" pr-1 ">
          Home
        </Link>
        /{" "}
        <Link to={"/cart"} className=" pr-1 ">
          Cart
        </Link>
        /<span className=" font-medium text-black pl-1 "> Checkout</span>{" "}
      </p>

      <div className=" px-[13%]">
        <p className=" text-[30px] font-bold ">Shipping Details:</p>
        <div className=" my-10  grid grid-cols-2 gap-[100px] ">
          {/* Shipping Details */}
          <div className="   flex flex-col gap-8  rounded-md">
            <div className=" shadow-xl rounded-lg flex flex-col gap-8 py-3 pb-10 px-5">
            <div className=" flex gap-4 justify-between  items-center">
              <div className=" w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block  ps-10 p-2.5  "
                  placeholder="First Name"
                />
              </div>
              <div className="relative w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <GiStreetLight className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                placeholder="Street Address"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdApartment className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                placeholder="Apartment, floor, etc. (optional) "
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <BsBuildingsFill className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                placeholder="Town/City"
              />
            </div>
            <div className=" flex gap-4 justify-between  items-center">
              <div className=" w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdLocalPhone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block  ps-10 p-2.5  "
                  placeholder="Phone Number"
                />
              </div>
              <div className="relative w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdEmail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className=" text-center">
              <button className=" px-10 py-2 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white ">
                Save Shipping Details
              </button>
            </div>
            </div>
          </div>

          {/* cart details      */}
          <div className="">
            <div>
              <div className=" shadow-xl px-4 rounded-lg py-2 ">
                {cart.map((item) => {
                  return (
                    <div className=" py-1">
                      <div className=" flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={
                                  process.env.REACT_APP_STRIPE_UP_URL +
                                  item.attributes.image.data[0].attributes.url
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div>
                            <div className="">
                            {item.attributes.title.slice(0, 35)}{" "}
                    {item.attributes.title.length > 20 ? "..." : ""} ({" "}
                              {item.attributes.quantity} )
                            </div>
                          </div>
                        </div>

                        <div className="">
                          ₹{item.attributes.price * item.attributes.quantity}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* <div className=" border-b-2"></div> */}

              <div className=" flex items-center justify-between py-3">
                <p className=" text-[20px] font-bold">subtotal: </p>
                <p className="text-[20px] font-bold">₹{getTotal().totalPrice}</p>
              </div>

              <div className=" border-b-2"></div>

              <div className="  flex items-center justify-between py-3">
                <p className=" text-[20px] font-bold">Shipping: </p>
                <p className="text-[20px] text-[green] font-bold">Free</p>
              </div>

              <div className=" border-b-2"></div>

              <div className=" flex items-center justify-between py-3">
                <p className=" text-[20px] font-bold">Total: </p>
                <p className="text-[20px] font-bold">₹{getTotal().totalPrice + shipping}</p>
              </div>

              {/* card   */}
              <div className=" py-4 flex items-start justify-between ">
                <p className=" text-[18px] font-bold">
                  Fill the card Details:{" "}
                </p>
                <div class="flex flex-col justify-around bg-gray-800 p-4 border border-white border-opacity-30 rounded-lg shadow-md max-w-xs ">
                  <div class="flex flex-row items-center justify-between mb-3">
                    <input
                      class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2 mb-3 flex-grow"
                      type="text"
                      name="cardName"
                      id="cardName"
                      placeholder="Full Name"
                    />
                    <div class="flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md">
                      <svg
                        class="text-white fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#ff9800"
                          d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                        ></path>
                        <path
                          fill="#d50000"
                          d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                        ></path>
                        <path
                          fill="#ff3d00"
                          d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-3">
                    <input
                      class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      placeholder="0000 0000 0000 0000"
                    />
                    <div class="flex flex-row justify-between">
                      <input
                        class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                        type="text"
                        name="expiryDate"
                        id="expiryDate"
                        placeholder="MM/AA"
                      />
                      <input
                        class="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                        type="text"
                        name="cvv"
                        id="cvv"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-center">
                <button className=" font-bold px-10 py-2 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white ">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
