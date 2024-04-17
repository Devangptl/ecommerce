import React from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";

const Contact = () => {
  return (
    <div className=" mb-[100px] ">
      <div className="  md:mt-[5%] mt-[18%] px-[7%]">
        <p className="text-[#6e6d6d]  py-[4%] ">
          {" "}
          <Link to={"/"} className=" pr-1 ">
            Home{" "}
          </Link>{" "}
          / <span className=" font-medium text-black pl-1 "> Contact</span>{" "}
        </p>

        <div className=" md:grid grid-cols-3 gap-16 ">
          <div className=" shadow-lg rounded-lg px-7 py-5  col-span-1">
            <div className=" py-6 flex flex-col gap-4">
              <div className=" flex gap-3 items-center ">
                <p className=" bg-[#db4444] text-[25px] text-white p-[10px] rounded-full  ">
                  <FiPhone />
                </p>

                <p className=" font-bold text-[23px]">Call To Us</p>
              </div>
              <div className="  flex flex-col gap-3 px-10 ">
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +111111111111</p>
              </div>
            </div>

            <div className=" border-b-2"></div>

            <div className=" py-6 flex flex-col gap-4">
              <div className=" flex gap-3 items-center ">
                <p className=" bg-[#db4444] text-[25px] text-white p-[10px] rounded-full  ">
                  <MdEmail />
                </p>

                <p className=" font-bold text-[23px]">Write To US</p>
              </div>
              <div className=" mb-6 flex flex-col gap-3 px-10 ">
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
          <div className=" shadow-xl md:mt-0 mt-7 rounded-lg px-7 py-4 col-span-2">
            <div className=" flex flex-col gap-8  rounded-md">
              <div className=" md:flex-row flex flex-col gap-4 justify-between items-center">
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
                    <MdEmail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                    placeholder="Email"
                  />
                </div>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FiPhone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-10 p-2.5  "
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="relative w-full ">
                <textarea
                rows="10"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full ps-5 p-2.5  "
                  placeholder="Your Message"
                />
              </div>
              <div className=" text-center">
                <button className=" px-10 py-2 rounded-sm bg-[#db4444] border-[#db4444] border-2  text-white ">
                  Send Massage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
