import React from 'react';
import Header from './Header';
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Registration() {
  let navigate = useNavigate()
  const [data, setData] = React.useState({});
  const [arr, setArr] = React.useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const userData = { ...data, user_type: 'User' }; // add user_type before sending
  
    axios.post('http://localhost:9000/User/createUser', userData)
      .then((res) => {
        setArr([...arr, userData]);
        setData({});
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Appointment Data:', data);
  // };
  return (
    <div>
      <div className='flex justify-center items-center min-h-scree py-10'>

        <div className='bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-[30%] border-[5px] border-[#a39446]'>
          <h2 className='text-white text-3xl font-bold text-center italic'>Glam<span className='text-themeyellow'>Forge</span></h2>
          <p className='text-gray-400 text-center mt-2'>Create a new Account</p>

          <form className='mt-6'>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Full Name</label>
              <input type='text' name='fullname' placeholder='Enter your fullname' className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow' onChange={handleChange} />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Mobile Number</label>
              <input type='text' name='mob_no' placeholder='Enter your mobile number' className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow' onChange={handleChange} />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Email</label>
              <input type='email' name='email' placeholder='Enter your email' className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow' onChange={handleChange} />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Username</label>
              <input type='text' name='username' placeholder='Enter your username' className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow' onChange={handleChange} />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-300 font-semibold mb-2'>Password</label>
              <input type='password' name='password' placeholder='Enter your password' className='w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow' onChange={handleChange} />
            </div>

            <button className='w-full bg-themeyellow text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition duration-300' onClick={handleClick}>Sign Up</button>
          </form>

          <p className='text-gray-400 text-center mt-4'>Already have an account? <a href='#' className='text-themeyellow hover:underline' 
          onClick={()=>{
            navigate('/Login')
          }}>Login</a></p>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Registration;