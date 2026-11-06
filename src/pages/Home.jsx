import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Neighborhood from '../sections/Neighborhood'
import LocalShopping from '../sections/LocalShopping'
import ShopManagement from '../sections/ShopManagement'
import DeliverySection from '../sections/DeliverySection'
import DailyLocal from '../sections/DailyLocal'
import CTASection from '../sections/CTASection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Neighborhood/>
      <LocalShopping/>
      <ShopManagement/>
      <DeliverySection/>
      <DailyLocal/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default Home
