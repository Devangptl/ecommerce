import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiStreetLight } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../hooks/request";

const Checkout = () => {
  const { cart } = useSelector((state) => state.allCart);

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.attributes.price * item.attributes.quantity;
    });
    return { totalPrice };
  };

  const shipping = 0;

  const stripePromise = loadStripe(
    process.env.REACT_APP_PAYMENT_PUBLISHABLE_KEY
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await request.post("/api/orders", {
        products: cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-20 md:mt-[5%]">
      <p className="md:text-[16px] text-[14px] text-[#6e6d6d] px-5 md:px-[7%] py-[4%] ">
        <Link to={"/"} className=" pr-1 ">
          Home
        </Link>
        /{" "}
        <Link to={"/cart"} className=" pr-1 ">
          Cart
        </Link>
        /<span className=" font-medium text-black pl-1 "> Checkout</span>{" "}
      </p>

      <div className=" px-5 md:px-[13%]">
        <p className=" text-[18px] md:text-[30px] font-bold ">Shipping Details:</p>
        <div className=" my-5 md:my-10  md:grid grid-cols-2 gap-[100px] ">
          {/* Shipping Details */}
          <div className="   flex flex-col gap-8   rounded-md">
            <div className=" shadow-xl rounded-lg flex flex-col md:gap-8 gap-4 py-3 pb-10 px-5">
              <div className=" flex md:gap-4 gap-2 justify-between  items-center">
                <div className=" w-full  relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaUser className="md:w-4 w-3 md:h-4 h-3 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block  ps-10 p-2.5  "
                    placeholder="First Name"
                  />
                </div>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaUser className="md:w-4 w-3 h-3 md:h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5   "
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <GiStreetLight className="md:w-4 w-3 h-3 md:h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10  p-2.5   "
                  placeholder="Street Address"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdApartment className="md:w-4 w-3 h-3 md:h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10  p-2.5   "
                  placeholder="Apartment, floor, etc. (optional) "
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <BsBuildingsFill className="md:w-4 w-3 h-3 md:h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10  p-2.5   "
                  placeholder="Town/City"
                />
              </div>
              <div className=" flex gap-4 justify-between  items-center">
                <div className=" w-full relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <MdLocalPhone className="md:w-4 w-3 h-3 md:h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block  ps-10  p-2.5  "
                    placeholder="Phone Number"
                  />
                </div>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <MdEmail className="md:w-4 w-3 h-3 md:h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10  p-2.5   "
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className=" text-center">
                <button className=" px-5 md:text-[16px] text-[14px] md:px-10 py-2 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white ">
                  Save Shipping Details
                </button>
              </div>
            </div>
          </div>

          {/* cart details      */}
          <div className=" md:my-0 my-10 ">
            <div>
              <div className=" shadow-xl px-4 rounded-lg py-2 ">
                {cart.map((item) => {
                  return (
                    <div className=" py-1">
                      <div className=" flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-7 h-7 md:w-12 md:h-12">
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
                            <div className=" text-[12px] md:text-[16px] ">
                              {item.attributes.title.slice(0, 35)}{" "}
                              {item.attributes.title.length > 20 ? "..." : ""} ({" "}
                              {item.attributes.quantity} )
                            </div>
                          </div>
                        </div>

                        <div className="text-[12px] md:text-[16px]">
                          ₹{item.attributes.price * item.attributes.quantity}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* <div className=" border-b-2"></div> */}

              <div className=" flex items-center justify-between py-3">
                <p className=" md:text-[20px] font-bold">subtotal: </p>
                <p className="md:text-[20px] font-bold">
                  ₹{getTotal().totalPrice}
                </p>
              </div>

              <div className=" border-b-2"></div>

              <div className="  flex items-center justify-between py-3">
                <p className=" md:text-[20px] font-bold">Shipping: </p>
                <p className="md:text-[20px] text-[green] font-bold">Free</p>
              </div>

              <div className=" border-b-2"></div>

              <div className=" flex items-center justify-between py-3">
                <p className=" md:text-[20px] font-bold">Total: </p>
                <p className="md:text-[20px] font-bold">
                  ₹{getTotal().totalPrice + shipping}
                </p>
              </div>

             
            

              <div className=" mt-6 md:mt-0  text-center">
                <button
                  onClick={handlePayment}
                  className=" font-bold px-5 md:px-10 py-2 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white "
                >
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
