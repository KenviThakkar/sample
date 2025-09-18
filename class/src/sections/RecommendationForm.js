import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function RecommendationForm() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  }, [])

  const [problem, setProblem] = useState('')
  const [suggestion, setSuggestion] = useState('')

  const serviceSuggestions = {
    "frizzy hair": "Hair Smoothening , Hair starightning",
    "dry hair": "Hair Spa",
    "dull skin": "Hydra Facial",
    "acne": "Acne Treatment Facial",
    "damaged hair": "Keratin Treatment",
    "tan": "Detan Facial",
    "split ends": "Hair Trimming",
    "hair fall": "Anti-Hairfall Therapy"
  }

  const handleRecommend = () => {
    if (problem && serviceSuggestions[problem]) {
      setSuggestion(serviceSuggestions[problem])
    } else {
      setSuggestion("Please consult our expert for a personalized recommendation.")
    }
  }

  return (
    <section id='recommendation' className='w-full py-10 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center'>
      <div
        id='form-box'
        className='bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-[90%] md:w-[60%] lg:w-[40%] flex flex-col items-center gap-8'
        data-aos="fade-up"
      >
        <h1 className='text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-themeyellow to-yellow-300'>
        Glow Guide
        </h1>

        <p className='text-gray-300 text-center text-lg'>Select your concern, and we'll suggest the perfect service for you.</p>

        <select
          className='w-full p-3 rounded-lg bg-white text-black font-medium shadow-md focus:outline-none'
          onChange={(e) => setProblem(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Select your problem</option>
          {Object.keys(serviceSuggestions).map((key, index) => (
            <option value={key} key={index}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </option>
          ))}
        </select>

        <button
          className='bg-themeyellow hover:bg-[#92843b] transition duration-300 ease-in-out text-black font-semibold w-full p-3 rounded-lg shadow-lg'
          onClick={handleRecommend}
        >
          GET SUGGESTION
        </button>

        {suggestion && (
          <div className='bg-white/10 text-white p-6 mt-4 rounded-xl w-full text-center shadow-inner border border-white/20'>
            <p className='text-lg'>Suggested Service:</p>
            <p className='text-2xl font-bold mt-2 text-themeyellow'>{suggestion}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default RecommendationForm
