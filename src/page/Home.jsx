import React from 'react'
import Header from '../components/Header'
import Today from '../components/Today'
import Categories from '../components/Categories'
import ThisMonth from '../components/ThisMonth'
import Offer from '../components/Offer'
import OurProducts from '../components/OurProducts'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className=' px-[10%]'>
      <Today/>
      <Categories/>
      <ThisMonth/>
      <Offer/>
      <OurProducts/>
      </div>
    </div>
  )
}

export default Home
