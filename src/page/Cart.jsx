import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {





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
              {data.map((item) => {
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
                    <td className=" font-bold"> <span className=" px-3 mx-1 rounded-md font-normal bg-slate-200 "> - </span> {item.quantity} <span className=" px-3 mx-1 font-normal rounded-md bg-slate-200">+</span> </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">
                        {item.price * item.quantity}
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
                    <div className="">Subtotal:</div>
                    <div>
                      <div className="font-bold">120000</div>
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
                      <div className="font-bold ml-[23px]">120000</div>
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

const data = [
  {
    id: 1,
    title: "Airpods",
    price: 14999,
    discountPercentage: 12,
    rating: 4.6,
    quantity: 2,
    thumbnail:
      "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765151/airpods-32433_ok1ecz.png",
  },
  {
    id: 2,
    title: "Cannon EOS R5",
    price: 54999,
    discountPercentage: 20,
    rating: 4.01,
    quantity: 1,
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
    quantity: 1,
    thumbnail:
      "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/135017381_3d488c19-24ef-47d0-bb3f-38b913bc1751_tt52ww.jpg",
  },
  {
    id: 4,
    title: "Mouse Wireless",
    price: 699,
    discountPercentage: 40,
    rating: 3.99,
    quantity: 3,
    thumbnail:
      "https://res.cloudinary.com/dlmg58jtr/image/upload/v1708765152/89206201_A_computer_mouse_with_a_light_-10_wbp6bn.jpg",
  },
];

export default Cart;
