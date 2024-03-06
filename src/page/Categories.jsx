import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";

const Categories = ({data}) => {

  const [categoryItem, setCategoryItem] = useState([]);

  const { title } = useParams();

//   console.log(data);


  const items =(title) =>  data.find((itemss) =>  itemss.attributes.categories.data.map((i)=> i.attributes.title == title )=== true ? setCategoryItem(itemss) : " " );

  console.log(categoryItem);


 

  useEffect(() => {
    items(title)
  }, []);



  return <div></div>;
};

export default Categories;
