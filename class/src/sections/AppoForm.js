import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AppoForm() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/Service/getServices')
      .then((res) => {
        setArr(res.data.service);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e) => {
    const selectedService = arr.find(service => service.category === e.target.value);
    if (selectedService) {
      setData({
        ...data,
        service: selectedService.category,
        price: selectedService.price
      });
    }
  };

  const handleClick = () => {
    const isLoggedIn = localStorage.getItem('userId');
    if (isLoggedIn) {
      const payload = { ...data, userId };
      axios.post('http://localhost:9000/Appo/addAppo', payload)
        .then((res) => {
          setArr([...arr, payload]);
          setData({});
          console.log("Appointment added:", res.data);
          // Optionally navigate after booking:
          navigate('/UserProfile');
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
    else{
      alert('You are not logged in')
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', data);
  };

  return (
    <div>
      <div className='flex justify-center items-center min-h-scree py-10'>
        <div className='bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-[38rem] border-[5px] border-[#a39446]'>
          <h2 className='text-white text-3xl font-bold text-center italic'>
            Glam<span className='text-themeyellow'>Forge</span>
          </h2>
          <p className='text-gray-400 text-center mt-2'>Book an Appointment</p>

          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Full Name</label>
              <input
                type='text'
                name='fullname'
                placeholder='Enter your name'
                onChange={handleChange}
                value={data.fullname || ''}
                className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Phone Number</label>
              <input
                type='tel'
                name='mob_no'
                placeholder='Enter your phone number'
                onChange={handleChange}
                value={data.mob_no || ''}
                className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Service</label>
              <select
                name='service'
                onChange={handleServiceChange}
                value={data.service || ''}
                className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow'
              >
                <option value=''>Select a service</option>
                {arr && arr.map((val) => (
                  <option key={val._id} value={val.category}>
                    {val.category} - ₹{val.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Show selected price (optional) */}
            {data.price && (
              <div className='mb-4'>
                <p className='text-green-400 font-semibold'>Selected Service Price: ₹{data.price}</p>
              </div>
            )}

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Date</label>
              <input
                type='date'
                name='date'
                onChange={handleChange}
                value={data.date || ''}
                className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Time</label>
              <input
                type='time'
                name='time'
                onChange={handleChange}
                value={data.time || ''}
                className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-themeyellow text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition duration-300'
              onClick={handleClick}
            >
              Book Appointment1
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppoForm;