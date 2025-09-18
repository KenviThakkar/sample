import React ,{useEffect} from 'react'
import aboutimg from '../assets/aboutimg.jpg'
import {FaAngleDoubleRight} from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function WhyChoose() {
  let navigate = useNavigate()
  useEffect(()=>{
          AOS.init({
              offset:200,
              duration:800,
              easing:'ease-in-sine',
              delay:100
          })
      },[])
  return (
    <div>
      {/* <Header/> */}
    <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col
    md:flex-row justify-center items-center gap-20 bg-cover bg-center' style={{
      backgroundImage:`url(${aboutimg})` }}>
        <div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-10
        bg-white p-10 rounded-xl md:w-[40%] w-full'>
          <h1 className='text-themeyellow text-4xl font-bold'>WORKING HOURS</h1>
          <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-xl text-black font-lg'>SUNDAY 10AM - 8PM</p>
            <p className='text-xl text-black font-lg'>MONDAY 10AM - 8PM</p>
            <p className='text-xl text-black font-lg'>TUESDAY 10AM - 8PM</p>
            <p className='text-xl text-black font-lg'>WEDNESDAY 10AM - 8PM</p>
            <p className='text-xl text-black font-lg'>THURSDAY 10AM - 8PM</p>
            <p className='text-xl text-black font-lg'>FRIDAY 10AM - 8PM</p>
            <p className='text-xl text-black font-lg'>SATURDAY 10AM - 8PM</p>
          </div>
          <button className='px-10 py-4 rounded-xl border-2 border-black
          text-black font-semibold text-lg hover:bg-black hover:text-white mt-6'
          onClick={()=>{navigate('/AppoForm')}}>BOOK ONLINE</button>
        </div>

        <div data-aos="slide-up" className='md:w-[40%] w-full flex flex-col 
        justify-center items-center gap-6 h-fit'>
          <h1 className='text-6xl text-white font-bold text-center'>Why Choose Us</h1>
          <p className='text-white text-2xl font-semibold md:text-start text-center
          '>Where style meets expertise – experience premium salon care tailored just for you.</p>
          <div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
            <div id='icon-box' className='flex justify-center item-center gap-3'>
              <FaAngleDoubleRight className='text-white size-6'/>
              <h1 className='text-xl text-white font-semibold'>
              Expert Stylists
              </h1>
            </div>
            <div id='icon-box' className='flex justify-center item-center gap-3'>
              <FaAngleDoubleRight className='text-white size-6'/>
              <h1 className='text-xl text-white font-semibold'>
              Luxurious Experience
              </h1>
            </div>
            <div id='icon-box' className='flex justify-center item-center gap-3'>
              <FaAngleDoubleRight className='text-white size-6'/>
              <h1 className='text-xl text-white font-semibold'>
              Premium Products
              </h1>
            </div>
            <div id='icon-box' className='flex justify-center item-center gap-3'>
              <FaAngleDoubleRight className='text-white size-6'/>
              <h1 className='text-xl text-white font-semibold'>
              Flexible Appointments 
              </h1>
            </div>
            <div id='icon-box' className='flex justify-center item-center gap-3'>
              <FaAngleDoubleRight className='text-white size-6'/>
              <h1 className='text-xl text-white font-semibold'>
              Hygiene First
              </h1>
            </div>

            {/* <button className='text-black px-10 py-4 bg-white 
            hover:bg-themeyellow hover:text-black rounded-xl font-semibold'
            onClick={()=>{navigate('/RecommendationForm')}}>TAKE SUGGESTION</button> */}
          </div>
        </div>
    </section>
    {/* <Footer/> */}
    </div>
  )
}

export default WhyChoose