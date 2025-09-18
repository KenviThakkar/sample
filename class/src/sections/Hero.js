import React, { useEffect } from 'react'
import heroimg from '../assets/hero.jpg'
import {FaLocationDot} from 'react-icons/fa6'
import {MdOutlinePhoneAndroid} from 'react-icons/md'
import { FaHeadphones } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import sissor from '../assets/sissor.png'
import womenhair from '../assets/womenhair.png'
import Hair from '../assets/Hair.jpg'
import HairS1 from '../assets/HairS1.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Hair_Service2 from '../assets/Hair_Service2.jpg'
import Hair_Service from '../assets/Hair_Service.jpg'
import { useNavigate } from 'react-router-dom'

function Hero() {
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
    <>
    <section id='hero' className='w-full md:px-[120px] px-10 flex flex-col 
    justify-center items-center gap-20 md:flex-row'>
        <div id='content-hero' className='flex flex-col justify-center items-start
        gap-10'>
            <h1 data-aos="zoom-in" className='text-2xl text-black font-semibold'>
                Welcome To
            </h1>
            <h1 data-aos="zoom-in" className='text-6xl text-black font-bold'>
                Beauty Salon <br/> in Ahmedabad <br/> India
            </h1>
            <div data-aos="slide-up" id="icon-list" className='flex flex-col
            justify-center items-start gap-6'>
                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <FaLocationDot className='text-black size-6'/>
                    <h1 className='text-xl text-gray-800 font-semibold'>
                    203, Silver Arc Plaza, C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009
                    </h1>
                </div>
                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <MdOutlinePhoneAndroid className='text-black size-6'/>
                    <h1 className='text-xl text-gray-800 font-semibold'> 
                    +91 987 785 5433 / +91 968 645 7453</h1>
                </div>
                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <MdEmail className='text-black size-6'/>
                    <h1 className='text-xl text-gray-800 font-semibold'> 
                    company@gmail.com / spasalon@gmail.com</h1>
                </div>
                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <FaHeadphones className='text-black size-6'/>
                    <h1 className='text-xl text-gray-800 font-semibold'>
                    customer@gmail.com</h1>
                </div>
            </div>
            <div className='flex gap-4'>
            <button data-aos="zoom-in" className='px-10 py-4 
            rounded-xl border-2 border-black text-black 
            font-semibold text-lg hover:bg-black  hover:text-white'
            onClick={()=>{navigate('/SeasonalBliss')}}>SEASONAL BLISS</button>
            <button data-aos="zoom-in" className='px-10 py-4 
            rounded-xl border-2 border-black text-black 
            font-semibold text-lg hover:bg-black  hover:text-white'
            onClick={()=>{navigate('/RecommendationForm')}}>TAKE SUGGESTION</button>
            </div>
        </div>

        <div data-aos="zoom-in" id='image-box' className='md:w-[50%] w-full'>
            <img src={Hair_Service} alt='heroimg' className='rounded-xl w-full  px-5 py-10
            md:h-[700px] h-300px'/>
        </div>
    </section>

    <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start
    w-full md:px-[120px] px-10 py-10 gap-10'>
        <div data-aos="zoom-in" data-delay="200" className='flex flex-col justify-center
        items-center gap-4'>
            <img src={sissor} alt='sissor' className='size-16 transform hover:scale-110
            transition-transform duration-30 cursor-pointer'/>
            <h1 className='text-2xl text-black font-semibold'>Hair</h1>
            <button className='px-10 py-3 bg-black text-white text-md font-semibold
            rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer' onClick={()=>{
                navigate('/HairMore')
            }}>MORE</button>
        </div>
        <div data-aos="zoom-in" data-delay="200" className='flex flex-col justify-center
        items-center gap-4'>
            <img src={womenhair} alt='sissor' className='size-16 transform hover:scale-110
            transition-transform duration-30 cursor-pointer'/>
            <h1 className='text-2xl text-black font-semibold'>Skin</h1>
            <button className='px-10 py-3 bg-black text-white text-md font-semibold
            rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer' onClick={()=>{
                navigate('/SkinMore')
            }}>MORE</button>
        </div>

    </section>
    </>
  )
}

export default Hero