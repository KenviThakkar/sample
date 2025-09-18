import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/Feedback/getFeedback')
      .then((res) => {
        setFeedback(res.data.feedback);
      })
      .catch((err) => console.log('Error...', err));
  }, []);

  return (
    <section
      id='testimonial'
      className='w-full md:px-20 px-10 py-24 bg-themeyellow overflow-hidden relative z-10'
    >
      <h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>
        Testimonial
      </h1>
      <p data-aos="zoom-in" className='text-xl text-white font-semibold text-center mb-12'>
        Hear from our happy clients who’ve experienced beauty, care, and confidence like never before.
      </p>

      <div
        id='clients'
        className='flex overflow-x-auto space-x-6 pb-4 px-2 md:px-4 no-scrollbar'
        style={{ scrollBehavior: 'smooth', minHeight: '320px' }}
      >
        {
          feedback && feedback.map((feedback, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-delay={100 * (index % 3)}
              className='min-w-[300px] md:min-w-[400px] bg-white p-8 flex flex-col justify-between items-center gap-6 rounded-3xl shadow-lg'
            >
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-4 relative'>
                  <BiSolidQuoteAltLeft className='size-20 text-[#1caf7e] absolute left-0 opacity-20' />
                  <h1 className='text-2xl text-black font-bold ml-8'>{feedback.fullname}</h1>
                </div>
              </div>
              <div className='w-full'>
                <p className='text-end text-lg text-gray-600 font-medium'>{feedback.feedback}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Testimonial;
