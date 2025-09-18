import React, {useEffect} from 'react'
import serviceimg from '../assets/servicimg.jpg'
import service1 from '../assets/ser1.png'
import service2 from '../assets/ser2.png'
import service3 from '../assets/ser3.png'
import service4 from '../assets/ser4.png'


import Hair from '../assets/Hair.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'

function Services() {
  let navigate = useNavigate()
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100
      })
    }, [])
  return (
    <section id='servicing' className='w-full flex flex-col md:px-20 px-10  md:py-20 py-10
    justify-center items-center gap-16 bg-gray-900'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>
          Services
        </h1>
        <p data-aos="zoom-in" className='text-xl text-slate-200 text-center'>
        Indulge in premium hair and skin services crafted to make you look and feel fabulous.
        </p>
      </div>

      <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center
      gap-6'>
        <div id='image-box'>
          <img data-aos="zoom-in" data-aos-delay="200" src={Hair} alt=''/>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center
        gap-8'>
          <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
          py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service1} alt='' className='size-16 transform hover:scale-110
            transition-transform duration-300 cursor-pointer'/>
            <h1 className='text-black text-[25px] font-bold'>Hair Care</h1>
            <button className='px-10 py-3 bg-black text-white text-md font-semibold
            rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer' onClick={()=>{
                navigate('/HairCare')
            }}>MORE</button>
          </div>
          <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
          py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service4} alt='' className='size-16 transform hover:scale-110
            transition-transform duration-300 cursor-pointer'/>
            <h1 className='text-black text-[25px] font-bold'>Skin Care</h1>
            <button className='px-10 py-3 bg-black text-white text-md font-semibold
            rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer' onClick={()=>{
                navigate('/SkinCare')
            }}>MORE</button>
          </div>
         
          {/* <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
          py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service3} alt='' className='size-16 transform hover:scale-110
            transition-transform duration-300 cursor-pointer'/>
            <h1 className='text-black text-[25px] font-bold'>Hair Care</h1>
          </div>
          <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
          py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service4} alt='' className='size-16 transform hover:scale-110
            transition-transform duration-300 cursor-pointer'/>
            <h1 className='text-black text-[25px] font-bold'>Hair Care</h1>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Services