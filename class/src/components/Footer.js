import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaArrowUp} from 'react-icons/fa6'
import {Link} from 'react-scroll'

function Footer() {
  return (
    <>
    <section className='bg-slate-200 md:px-20 px-10 md:py-20 py-10 flex flex-col
    justify-center items-center gap-6 border-[20px] border-themeyellow'>
      <h1 className='text-black font-bold text-5xl'>Beauty<span
      className='italic text-themeyellow'>Salon</span></h1>
      <p className='text-lg text-center font-semibold text-slate-600'>
      203, Silver Arc Plaza, C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009
      </p>
      <div id='icon' className='flex justify-center items-center gap-4'>
        <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer
        hover:bg-black hover:text-white transform hover:scale-11 transition-transform
        duration-300'>
          <FaFacebook className='size-7 fill-white'/>
        </div>
        <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer
        hover:bg-black hover:text-white transform hover:scale-11 transition-transform
        duration-300'>
          <FaYoutube className='size-7 fill-white'/>
        </div>
        <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer
        hover:bg-black hover:text-white transform hover:scale-11 transition-transform
        duration-300'>
          <FaInstagram className='size-7 fill-white'/>
        </div>
        <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer
        hover:bg-black hover:text-white transform hover:scale-11 transition-transform
        duration-300'>
          <FaTwitter className='size-7 fill-white'/>
        </div>
        
      </div>
    </section>

    <div data-aos="slide-right" data-aos-delay="200" id='icon-box' 
    className='bg-themeyellow p-4 rounded-full hover:bg-black hover:text-white
    cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6'>
      <Link to='hero' spy={true} offset={-100} smooth={true}>
      <FaArrowUp className='size-8'/>
      </Link>
    </div>
    </>
  )
}

export default Footer