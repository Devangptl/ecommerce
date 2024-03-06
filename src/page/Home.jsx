import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Today from '../components/Today'
import Categories from '../components/Categories'
import ThisMonth from '../components/ThisMonth'
import Offer from '../components/Offer'
import OurProducts from '../components/OurProducts'
import NewArrival from '../components/NewArrival'
import Support from '../components/Support'
import { fetchDataFromApi } from '../utils/api'

const Home = () => {

  const [data, setData] = useState([])

  const [category , setCategory] = useState([])

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
        // setProducts(res);
        // console.log(res);
        setData(res.data)
    });
};

// console.log(data);

const getCategories = () =>{
  fetchDataFromApi('/api/categories').then((res)=>{
    console.log(res.data);
  })
}

  useEffect(()=>{
    getProducts()
    getCategories()
  },[])

  return (
    <div className=' mt-[67px]'>
      <Header/>
      <div className=' px-[10%]'>
      <Today data={data}/>
      <Categories/>
      <ThisMonth data={data}/>
      <Offer/>
      <OurProducts data={data} />
      <NewArrival data={data} />
      <Support/>
      </div>
    </div>
  )
}

export default Home
