import React from 'react'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Header from '../components/Header'
import Hero from './Hero'
import Services from './Services'
import Gallery from './Gallery'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Footer from '../components/Footer'

function Home2() {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <WhyChoose/>
        <Pricing/>
        <Services/>
        <Gallery/>
        <Testimonial/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home2