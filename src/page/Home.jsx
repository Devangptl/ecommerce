import React from 'react'
import Header from '../components/Header'
import Today from '../components/Today'
import Categories from '../components/Categories'
import ThisMonth from '../components/ThisMonth'
import Offer from '../components/Offer'
import OurProducts from '../components/OurProducts'
import NewArrival from '../components/NewArrival'

const Home = () => {
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
      </div>
    </div>
  )
}

export default Home
