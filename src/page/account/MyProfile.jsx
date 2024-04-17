import React from "react";
import { useDispatch, useSelector } from "react-redux";


const MyProfile = ({user}) => {
  const { cart } = useSelector((state) => state.allCart);
  // console.log(user);
  return (
    <div>
      <div className=" mb-10 shadow-xl rounded-lg ">
        <div className=" flex flex-col   justify-center overflow-hidden ">
          <div className=" flex items-center justify-center">
            <p className=" mt-5 flex items-center justify-center text-[70px] font-bold  rounded-full text-white   text-center bg-[#db4444] overflow-hidden h-[100px] w-[100px] ">
              {
                user?.username?.[0]
              }
              {/* <img
                src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1703330303/so9v1plykb04sshqkllk.jpg"
                alt=""
              />{" "} */}
            </p>
          </div>

          <div className=" flex  items-center justify-between md:px-24 gap-4 ">
            <p className=" text-[24px] font-bold">{user.username}</p>
            <p className=" text-[20px] w-[300px] text-end ">{user.email}</p>
          </div>

          <div className=" flex  items-start justify-between py-5 px-8 md:px-24 gap-4 ">
            <p className="text-[14px] md:text-[16px] font-bold">Address:</p>
            <p className=" text-[14px] md:text-[16px] w-[300px] text-end ">Damubhai Vidhyarthi Bhavan 10 Vithal Patel Colony, (Near Vardan Building Opposite Stadium Petrol Pump)Navrangpura, Ahmedabad, Gujarat 380009</p>
          </div>
          <div className=" flex  items-start justify-between py-5 px-8 md:px-24 gap-4 ">
            <p className=" text-[14px] md:text-[16px] font-bold">Total Order :</p>
            <p className=" text-[14px] md:text-[16px] text-end ">10</p>
          </div>
          <div className=" flex  items-start justify-between pb-5 px-8 md:px-24 gap-4 ">
            <p className=" text-[14px] md:text-[16px] font-bold">Item in Cart :</p>
            <p className=" text-[14px] md:text-[16px]  md:w-[300px] text-end ">{cart.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
