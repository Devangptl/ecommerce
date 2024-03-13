import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "./EditDetails";
import MyProfile from "./MyProfile";


const RenderCompo = ({index})=>{
    switch (index) {
      case 0: return <MyProfile/>
        break;
      case 1: return <EditProfile/>
        break;
    
      default:
        break;
    }
}

const Profile = () => {

  const [isSelect , setIsSelect] = useState(0)


 

  return (
    <div>
      <div className="px-[7%] mt-[5%]">
        <div className=" flex items-center  py-[4%] justify-between">
          <p className="text-[#6e6d6d]  ">
            {" "}
            <Link to={"/"} className=" pr-1 ">
              Home{" "}
            </Link>{" "}
            / <span className=" font-medium text-black pl-1 "> My Account</span>{" "}
          </p>
          <p>
            Welcome!<span className=" text-[#db4444]">Devang Patel</span>{" "}
          </p>
        </div>

        <div className="  grid grid-cols-5">
          <div className=" flex flex-col justify-start items-center gap-3 text-[18px] col-span-2">
            <button onClick={()=>setIsSelect(0)}  className={`${isSelect == 1 ? "" : "text-[#db4444]"} text-[18.5px] `} >My Profile</button>
            <button onClick={()=>setIsSelect(1)}  className={`${isSelect == 0 ? "" : "text-[#db4444]"}`}>Edit Profile</button>
          </div>
          <div className=" col-span-3">
            <RenderCompo index={isSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
