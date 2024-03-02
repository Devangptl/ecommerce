import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartTotal,
  removerItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import { toast } from "sonner";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const tost = (title) => {
    toast.success(`${title} Remove to cart`);
  };

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className=" mt-[5%]">
      <p className="text-[#6e6d6d] px-[7%] py-[4%] ">
        {" "}
        <Link to={"/"} className=" pr-1 ">
          Home{" "}
        </Link>{" "}
        / <span className=" font-medium text-black pl-1 "> Cart</span>{" "}
      </p>

      <div className=" px-[10%] pb-[4%]">
        <div className="overflow-x-auto   ">
          <table className="table mb-9 ">
            {/* head */}
            <thead>
              <tr>
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
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.thumbnail} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="">{item.price}</p>
                    </td>
                    <td className="  font-bold">
                      <div className=" flex gap-2 items-center ">

                      
                      {" "}
                      <p
                        onClick={
                          item.quantity === 1
                            ? () => dispatch(removerItem(item.id))
                            : () => dispatch(decreaseItemQuantity(item.id))
                        }
                        className=" text-[15px] px-2 py-1 cursor-pointer rounded-md font-normal bg-slate-200 "
                      >
                        {" "}
                        <FaMinus />{" "}
                      </p>{" "}
                      {item.quantity}{" "}
                      <p
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                        className=" cursor-pointer px-2 py-1  font-normal rounded-md bg-slate-200"
                      >
                        <FaPlus />
                      </p>{" "}
                      </div>
                    </td>
                    <th>
                      <p className="btn btn-ghost btn-xs">
                        {item.price * item.quantity}
                      </p>
                    </th>
                    <th>
                      <button
                        onClick={() =>
                          dispatch(removerItem(item.id)) ? tost(item.title) : ""
                        }
                        className="btn btn-ghost btn-xs"
                      >
                        <MdDelete/>
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
            className=" px-10 py-3 text-[#db4444] font-semibold border-[#343434] border-2 rounded-sm  "
          >
            Return To Shop
          </Link>
          <div className=" flex items-center gap-2">
            <input
              type="text"
              placeholder=" Coupon Code"
              className=" px-3 py-3 outline-none border-[#343434] border-2 rounded-sm  "
            />
            <button
              to={"/"}
              className=" px-10 py-3 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white "
            >
              Apply Coupon
            </button>
          </div>
        </div>

        <div className=" my-[50px]   flex justify-end items-center ">
          <div className="border-2 border-black rounded-md py-5 px-8">
            <p>Cart Total</p>
            <div className="border-b-[2px] border-[#a4a4a4]  my-3 py-2 px-1">
              <tr className="   ">
                <td className=" ">
                  <div className="flex items-center   gap-52 ">
                    <div className="">Quantity:</div>
                    <div>
                      <div className="font-bold ml-[-2.9px]">
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
                  <div className="flex items-center   gap-52 ">
                    <div className="">Subtotal:</div>
                    <div>
                      <div className="font-bold">{totalPrice}</div>
                    </div>
                  </div>
                </td>
              </tr>
            </div>

            <div className=" border-b-[2px] border-[#a4a4a4]  my-3 py-2 px-1">
              <tr className="   ">
                <td className=" ">
                  <div className="flex items-center   gap-52 ">
                    <div className="">Shipping:</div>
                    <div>
                      <div className="font-bold">Free</div>
                    </div>
                  </div>
                </td>
              </tr>
            </div>
            <div className="   my-3 py-2 px-1">
              <tr className="   ">
                <td className=" ">
                  <div className="flex items-center   gap-52 ">
                    <div className="">Total:</div>
                    <div>
                      <div className="font-bold ml-[23px]">{totalPrice}</div>
                    </div>
                  </div>
                </td>
              </tr>
            </div>

            <div className=" text-center py-3">
              <Link
                to={"/"}
                className=" px-10 py-3  rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white "
              >
                Process to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
