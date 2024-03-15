import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  const navigate = useNavigate();

  if (!query.length) {
    data = null;
  }

  return (
    <div>
      <div className=" flex flex-row items-center ">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          id="password"
          className=" text-[14px] outline-none pl-3 pr-10 py-2  bg-gray-100 rounded-[3px] hover:border-gray-300  "
          placeholder="What are you looking for?"
        />
        <button className="  font-bold text-center text-[20px]   ml-[-30px]  text-gray-400  hover:text-gray-900 transition-colors">
          <CiSearch />
        </button>
      </div>

      <div className="absolute z-10 w-[400px]  rounded-lg  divide-y max-h-72 overflow-y-auto bg-white mt-1">
        {data?.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`/productdetail/${item.id}`);
                setQuery("");
              }}
              className="  flex items-center justify-between   p-2 cursor-pointer hover:bg-indigo-50"
            >
              <div className=" flex items-center gap-3 ">

              <p>
                {" "}
                <img
                  width={25}
                  src={
                    process.env.REACT_APP_STRIPE_UP_URL +
                    item.attributes.image.data[0].attributes.url
                  }
                  alt=""
                  />{" "}
              </p>
              <p>
                {item.attributes.title.slice(0, 35)}{" "}
                {item.attributes.title.length > 35 ? "..." : ""}
              </p>
                  </div>
              <p>₹{item.attributes.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
