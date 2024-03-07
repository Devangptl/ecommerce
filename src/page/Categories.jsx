import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCategory from "../components/SubCategory";

const Categories = ({data}) => {

  const [categoryItem, setCategoryItem] = useState([]);

  const { title } = useParams();

//   console.log(data);

useEffect(()=>{

  const items =  data.filter((itemss) =>  itemss.attributes.categories.data.find((i)=> i.attributes.title === title ));
  
  
  setCategoryItem(items)
  
},[])



  return <div >

    <div className=" mt-[100px] ">

    <SubCategory data={data} title={title} />
  
  {
    categoryItem.map((item)=>(

      // console.log(item.attributes.title);
      
      <p className="  ">{item.attributes.title}</p>
    ))
  }
  </div>
  </div>;
};

export default Categories;
