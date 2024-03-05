import React, { useEffect } from 'react'
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

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
        // setProducts(res);
        console.log(res);
    });
};

  useEffect(()=>{
    getProducts()
  })

  return (
    <div className=' mt-[67px]'>
      <Header/>
      <div className=' px-[10%]'>
      <Today/>
      <Categories/>
      <ThisMonth/>
      <Offer/>
      <OurProducts/>
      <NewArrival/>
      <Support/>
      </div>
    </div>
  )
}

export default Home
