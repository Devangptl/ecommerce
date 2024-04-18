import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removerItem,
  decreaseItemQuantity,
  addToCart,
} from "../features/cartSlice";
import { toast } from "sonner";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NoItemCart from "../components/NoItemCart";

const Cart = () => {

  // let [totalPrice , setTotalPrice] = useState(0)
  const [totalQuantity , setTotalQuantity] = useState(0)

  const tost = (title) => {
    toast.success(`${title} Remove to cart`);
  };

  const { cart } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  
  // const total =()=>{
  //   let totalprice = 0
    
  //   cart?.attributes?.map((item)=>{
  //     totalPrice = item.price * item.quantity  + totalprice
  //   })
   
  //   setTotalPrice(totalPrice)
  // }

  const getTotal = () => {
    let totalPrice = 0
    cart.forEach(item => {
      totalPrice += item.attributes.price * item.attributes.quantity
    })
    return {totalPrice}
  }

  // console.log(totalPrice);
  const totalQun =()=>{
    var totalQuantity = 0
    
    cart.map((item )=>{
      totalQuantity = item.attributes.quantity  + totalQuantity
    })
    
    setTotalQuantity(totalQuantity)
  }

  // useEffect(() => {
  //   total()
  // }, [total]);

  useEffect(() => {
    totalQun()
  }, [totalQun]);

  return (
    <div className=" mt-20 md:mt-[5%]">
      <p className="text-[#6e6d6d] px-[7%] py-[4%] ">
        {" "}
        <Link to={"/"} className=" pr-1 ">
          Home{" "}
        </Link>{" "}
        / <span className=" font-medium text-black pl-1 "> Cart</span>{" "}
      </p>
      {cart.length === 0 ? (
        <NoItemCart />
      ) : (
        <div className=" px-5 md:px-[10%] pb-[4%]">
          <div className="overflow-x-auto   ">
            <table className="table mb-9 ">
              {/* head */}
              <thead>
                <tr className=" text-[10px] md:text-[12px]">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="  mb-10 ">
                {/* row 1 */}
                {cart.map((item) => {
                  return (
                    <tr className=" shadow  ">
                      <td className=" ">
                        <div className="flex items-center md:gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-8 h-8 md:w-12 md:h-12">
                              <img className=" hover:scale-105 duration-300 " src={
                        item.attributes.image.data[0].attributes.url} alt="" />
                            </div>
                          </div>
                          <Link to={`/productdetail/${item.id}`}>
                            <div className=" md:flex hidden text-[14px] hover:underline underline-offset-2 duration-300 font-bold">{item.attributes.title.slice(0, 40)}{" "}
                    {item.attributes.title.length > 20 ? "..." : ""}</div>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <p className=" text-[10px] md:text-[14px]">₹{item.attributes.price}</p>
                      </td>
                      <td className="  font-bold">
                        <div className=" flex md:gap-2 items-center ">
                          {" "}
                          <p
                            onClick={
                              item.attributes.quantity <= 1
                                ? () => dispatch(removerItem(item.id))
                                : () => dispatch(decreaseItemQuantity(item.id))
                            }
                            className=" text-[12px] md:text-[15px]   cursor-pointer rounded-md font-normal "
                          >
                            {" "}
                            <FaMinus />{" "}
                          </p>
                          <p className=" border  text-[11px] md:text-[14px]  px-1 md:px-3 md:py-1 rounded-md font-bold  ">
                            {item.attributes.quantity}
                          </p>
                          <p
                            onClick={() =>
                              dispatch(addToCart(item))
                            }
                            className=" cursor-pointer text-[10px] md:text-[13px]  font-normal rounded-md"
                          >
                            <FaPlus />
                          </p>{" "}
                        </div>
                      </td>
                      <th>
                        <p className=" text-[10px] md:text-[14px] ">
                        ₹{item.attributes.price * item.attributes.quantity}
                        </p>
                      </th>
                      <th>
                        <button
                          onClick={() =>
                            dispatch(removerItem(item.id))
                              ? tost(item.attributes.title)
                              : ""
                          }
                          className=" text-red-600 text-[12px] md:btn-xs"
                        >
                          <MdDelete />
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className=" flex  justify-between items-center">
            <Link
              to={"/"}
              className=" md:text-[16px] text-[10px] px-2 md:px-10 py-1 md:py-3 text-[#db4444] font-semibold border-[#343434] border-2 rounded-sm  "
            >
              Return To Shop
            </Link>
            <div className=" flex items-center gap-2">
              <input
                type="text"
                placeholder=" Coupon Code"
                className=" px-1 md:px-3 py-1 md:py-3 w-[100px] md:w-[200px] text-[10px] md:text-[16px] outline-none border-[#343434] border-2 rounded-sm  "
              />
              <button
                to={"/"}
                className=" md:text-[16px] text-[10px] px-2 md:px-10 py-[4px] md:py-3 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white "
              >
                Apply Coupon
              </button>
            </div>
          </div>

          <div className=" my-[50px]   flex justify-end items-center ">
            <div className="border-2 border-black rounded-md py-5 px-6 md:px-8">
              <p className="font-bold md:text-[22px]">Cart Total</p>
              <div className="border-b-[2px] border-[#a4a4a4]  my-3 py-2 px-1">
                <tr className="   ">
                  <td className=" ">
                    <div className="flex items-center  gap-40  md:gap-52 ">
                      <div className=" text-[14px] md:text-[16px] ">Quantity:</div>
                      <div>
                        <div className="font-bold text-[14px] md:text-[16px] ml-[-2.9px]">
                          {totalQuantity}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </div>
              <div className="border-b-[2px] border-[#a4a4a4]  my-3 py-2 px-1">
                <tr className="   ">
                  <td className=" ">
                    <div className="flex items-center  gap-40 md:gap-52 ">
                      <div className=" text-[14px] md:text-[16px]">Subtotal:</div>
                      <div>
                        <div className="font-bold text-[14px] md:text-[16px]">{getTotal().totalPrice}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </div>

              <div className=" border-b-[2px] border-[#a4a4a4]  my-3 py-2 px-1">
                <tr className="   ">
                  <td className=" ">
                    <div className="flex items-center gap-40  md:gap-52 ">
                      <div className="text-[14px] md:text-[16px]">Shipping:</div>
                      <div>
                        <div className="font-bold text-[14px] md:text-[16px] text-[green] ">Free</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </div>
              <div className="   my-3 py-2 px-1">
                <tr className="   ">
                  <td className=" ">
                    <div className="flex items-center  gap-40 md:gap-52 ">
                      <div className=" text-[14px] md:text-[16px]">Total:</div>
                      <div>
                        <div className="font-bold text-[14px] md:text-[16px] ml-[23px]">{getTotal().totalPrice}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </div>

              <div className=" text-center py-3">
                <Link
                  to={"/checkout"}
                  className=" px-5 md:px-10 py-3 md:text-[16px] text-[12px]  rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white "
                >
                  Process to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
