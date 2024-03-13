import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className=" mb-10 shadow-xl rounded-lg ">
        <div className=" flex flex-col   justify-center overflow-hidden ">
          <div className=" flex items-center justify-center">
            <p className=" mt-5 rounded-full   text-center bg-[#bbbbbb] overflow-hidden h-[100px] w-[100px] ">
              <img
                src="https://res.cloudinary.com/dlmg58jtr/image/upload/v1703330303/so9v1plykb04sshqkllk.jpg"
                alt=""
              />{" "}
            </p>
          </div>

          <div className=" flex  items-center justify-between px-24 gap-4 ">
            <p className=" text-[24px] font-bold">Devang Patel</p>
            <p className=" text-[20px] w-[300px] text-end ">devang@gmail.com</p>
          </div>

          <div className=" flex  items-start justify-between py-5 px-24 gap-4 ">
            <p className=" text-[18px] font-bold">Address :</p>
            <p className=" text-[16px] w-[300px] text-end ">Damubhai Vidhyarthi Bhavan 10 Vithal Patel Colony, (Near Vardan Building Opposite Stadium Petrol Pump)Navrangpura, Ahmedabad, Gujarat 380009</p>
          </div>
          <div className=" flex  items-start justify-between py-5 px-24 gap-4 ">
            <p className=" text-[18px] font-bold">Total Order :</p>
            <p className=" text-[16px] w-[300px] text-end ">10</p>
          </div>
          <div className=" flex  items-start justify-between pb-5 px-24 gap-4 ">
            <p className=" text-[18px] font-bold">Item in Cart :</p>
            <p className=" text-[16px] w-[300px] text-end ">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
