import React from "react";

const Footer = () => {
  return (
    <div className="px-[10%]  text-white bg-black">
      <div className=" py-10 grid grid-cols-5 ">
        <div className=" flex flex-col gap-2">
          <p className="text-[22px] font-bold ">Gada Electronics</p>
          <p className=" text-[19px] font-bold">Subscribe</p>
          <p className=" text-[14px]">Get 10% off your first order</p>
          <div className=" mt-[-3px] flex flex-row items-center ">
            <input
              type="text"
              id="password"
              className=" text-[14px] outline-none border w-[190px] border-white bg-black pl-3 pr-10 py-2   rounded-[3px] hover:border-gray-300  "
              placeholder="Enter your email"
            />
            <button className="  font-bold text-center text-[20px]   ml-[-30px]  text-gray-400  hover:text-gray-900 transition-colors">
              S
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="text-[22px] font-bold">Support</p>
          </div>

          <div className="pr-[30px] flex flex-col gap-2 text-[14px]">
            <p>Navrangpura, 10, Vithalbhai Patel Colony, Ahmedabad, Gujrat </p>
            <p>gadaelectronics@gmail.com </p>
            <p>+88015-88888-9999 </p>
          </div>

        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="text-[22px] font-bold">Account</p>
          </div>

          <div className=" flex flex-col gap-2 text-[14px]">
            <p>My Account </p>
            <p>Login / Register </p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>

        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="text-[22px] font-bold">Quick Link</p>
          </div>

          <div className=" flex flex-col gap-2 text-[14px]">
            <p>Terms Of Use </p>
            <p>FAQ </p>
            <p>Contact </p>
          </div>

        </div>

        <div className=" flex flex-col gap-3">

          <div>
            <p className="text-[22px] font-bold">Social</p>
          </div>

          <div className=" flex  gap-2 ">
            <p> Ins </p>
            <p> Twi </p>
            <p> Lin </p>
       
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
