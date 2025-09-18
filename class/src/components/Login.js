import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
// import Footer from './Footer'; // Optional

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:9000/User/loginUser', {
        username,
        password
      });

      if (res.data.userId) {
        // Save userId and userType in localStorage
        localStorage.setItem('userId', res.data.userId);
        localStorage.setItem('userType', res.data.user_type);
        setIsLogin(true);

        // Navigate based on userType
        if (res.data.user_type === 'User') {
          navigate('/');
        } else {
          navigate('/admin/AdminDash2');
        }
      } else {
        setErrorMsg(res.data.msg);
      }
    } catch (error) {
      console.error('Login Error:', error);
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen py-10">
        <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-96 border-[5px] border-[#a39446]">
          <h2 className="text-white text-3xl font-bold text-center italic">
            Glam<span className="text-themeyellow">Forge</span>
          </h2>
          <p className="text-gray-400 text-center mt-2">Login to your account</p>

          {errorMsg && (
            <p className="text-red-500 text-center mt-3">{errorMsg}</p>
          )}

          <form className="mt-6" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-300 font-semibold mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-semibold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-themeyellow"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-themeyellow text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-center mt-4">
            Don't have an account?{' '}
            <span
              className="text-themeyellow hover:underline cursor-pointer"
              onClick={() => navigate('/Registration')}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;