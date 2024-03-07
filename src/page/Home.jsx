import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Today from '../components/Today'
import Categories from '../components/Categories'
import ThisMonth from '../components/ThisMonth'
import Offer from '../components/Offer'
import OurProducts from '../components/OurProducts'
import NewArrival from '../components/NewArrival'
import Support from '../components/Support'

const Home = ({data}) => {


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
