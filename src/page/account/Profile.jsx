import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "./EditDetails";
import MyProfile from "./MyProfile";
import axios from "axios";


const RenderCompo = ({index , user})=>{
    switch (index) {
      case 0: return <MyProfile user={user}  />
        break;
      case 1: return <EditProfile/>
        break;
    
      default:
        break;
    }
}

const Profile = ({token}) => {

  const [isSelect , setIsSelect] = useState(0)

  const [user, setUser] = useState({});
  const [isUserUpdated, setisUserUpdated] = useState(false);
 



  useEffect(() => {
    const getProfileData = async () => {
      try {
        // const { data } = await axios.get(`http://localhost:1337/api/users/me`, {
        //   headers: {
        //     Authorization: `bearer `,
        //   },
        // });

        const url = `http://localhost:1337/api/users/me`;
      
        const data = await fetch(url ,{
          method : "GET",
          headers : { 
            Authorization: `bearer ${token}`,
          }
        })

        const res = await data.json()

        setUser(res);
        setisUserUpdated(false);
      } catch (error) {
        console.log({ error });
      }
    };
    getProfileData();
  }, [token, isUserUpdated]);
 

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
            <RenderCompo user={user} index={isSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
