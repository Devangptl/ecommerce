import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCategory from "../components/SubCategory";
import useFetch from "../hooks/useFetch";

const Categories = () => {

  const { id , title } = useParams();


  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  
//  console.log(data);

// const {sub_data} = useFetch('/api/sub-categories')
// console.log(title);



  return <div >

    <div className=" mt-[100px] ">

    <SubCategory title={title} dataC={data}  id={id} />
  
  {
    data?.map((item)=>(

      // console.log(item.attributes.title);
      
      <p key={item.id}  className="  ">{item.attributes.title}</p>
    ))
  }
  </div>
  </div>;
};

export default Categories;
