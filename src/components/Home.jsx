import React from 'react'
import HomePage from './Homepage/HomePage'
import OurServices from './Homepage/OurServices'
import Technology from './Homepage/Technology'
import IndustryServe from './Homepage/IndustryServe'


const Home = () => {
  return (
    <>
      <div>
        <HomePage/>
        <OurServices/>
        <Technology/> 
        <IndustryServe/>
      </div>
    </>
  )
}

export default Home
