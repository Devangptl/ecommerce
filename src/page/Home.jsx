import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Today from '../components/Today'
import Categories from '../components/Categories'
import ThisMonth from '../components/ThisMonth'
import Offer from '../components/Offer'
import OurProducts from '../components/OurProducts'
import NewArrival from '../components/NewArrival'
import Support from '../components/Support'

const Home = () => {


  return (
    <div className='  md:mt-[67px]'>
      <Header/>
      <div className=' px-5 md:px-[10%]'>
      <Today />
      <Categories/>
      <ThisMonth />
      <div className=' md:flex hidden'>

      <Offer/>
      </div>
      <OurProducts />
      <div className=' md:block hidden'>

      <NewArrival  />
      </div>
      <Support/>
      </div>
    </div>
  )
}

export default Home
