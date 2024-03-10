import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

const SubCategory = ({title , dataC,  id}) => {

  // const {data} = useFetch(`/api/products?filters\[authors\][hobby][$contains]=dance`)
// const {data} = useFetch(`/api/categories?filters[title][$eq]=${title}`)
const {data} = useFetch(`/api/sub-categories`)
console.log(data);

  return (
    <div>
      {
    data?.map((item)=>(
      


      // console.log(item.attributes.title);
      
      <p key={item.id}  className="  ">{item.attributes.title === title ? item.attributes.title : "" }</p>
    ))
  }
    </div>
  )
}

export default SubCategory
