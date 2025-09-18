import React, { useEffect, useState } from 'react'
import img1 from '../assets/img1.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

function FeedbackForm() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  }, [])

  const [data, setData] = useState({})
  const [arr, setArr] = useState([])

  const handleChange = (e) => {
    setData({
      ...data, [e.target.name] : e.target.value
    })
  }

  const handleClick = () => {
    axios.post('http://localhost:9000/Feedback/addFeedback', data)
    .then((res)=>{
      setArr([...arr, data])
      setData({})
    })
    .catch((err)=>{
      console.log('Error...', err)
    })
  }

  return (
    <section id='feedback' className='w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start'>
      <div data-aos="zoom-in" id='img-box' className='w-full bg-cover bg-center h-[700px]'
        style={{ backgroundImage: `url(${img1})` }}></div>

      <div id='form-box' className='bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]'>
        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-white text-6xl font-bold text-center'>Give Feedback</h1>
        
        <div data-aos="zoom-out" data-aos-delay="400" id='form' className='w-full flex flex-col justify-center items-center gap-4'>
          <input type='text' placeholder='Your Name' name='fullname' value={data.fullname || ''} className='w-full p-3 text-black font-semibold' onChange={handleChange}/>
          <input type='email' placeholder='Your Email' name='email' value={data.email || ''}  className='w-full p-3 text-black font-semibold' onChange={handleChange}/>
          
          <select className='w-full p-3 text-black font-semibold' name='rate' onChange={handleChange} value={data.rate || ''} >
            <option value="">Rate our service</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>

          <textarea placeholder='Your Feedback' name='feedback'  value={data.feedback || ''}  cols="30" rows="5" className='w-full p-3 text-black font-semibold' onChange={handleChange}></textarea>
          
          {/* <input type='submit' value='SUBMIT FEEDBACK' name='feedback' className='bg-themeyellow hover:bg-[#92843b] cursor-pointer w-full font-semibold text-lg text-black p-3' 
          onClick={handleClick}/> */}
          <button className='bg-themeyellow hover:bg-[#92843b] cursor-pointer w-full font-semibold text-lg text-black p-3'
          onClick={handleClick}>SUBMIT</button>
        </div>
      </div>
    </section>
  )
}

export default FeedbackForm
