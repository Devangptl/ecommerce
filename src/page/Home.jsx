import React from 'react'
import Header from '../components/Header'
import Today from '../components/Today'
import Categories from '../components/Categories'
import ThisMonth from '../components/ThisMonth'
import Offer from '../components/Offer'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className=' px-[10%]'>
      <Today/>
      <Categories/>
      <ThisMonth/>
      <Offer/>
      </div>
    </div>
  )
}

export default Home
