import React, { useEffect, useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaLocationDot, FaScissors } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);

  useEffect(() => {
    if (userId) {
      // Fetch user data
      axios.get(`http://localhost:9000/User/getUserById/${userId}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data.user); // Assuming your API sends { user: {...} }
        })
        .catch((err) => console.log('Error fetching user:', err));

      // Fetch user's appointments
      axios.get(`http://localhost:9000/Appo/getAppoByUserId/${userId}`)
        .then((res) => {
          console.log('Appo:', res.data);
          setAppointments(res.data.appo);
        })
        .catch((err) => console.log('Error fetching appointments:', err));
    }
  }, [userId]);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < appointments.length; i++) {
      const price = parseFloat(appointments[i].price);
      // if (!isNaN(price)) {
        total += price;
      // }
    }
    setTotalPrice(total);
  };

  return (
    <div>

      <section className='w-full min-h-screen flex flex-col justify-start items-center bg-white px-6 py-16'>
        <div
          data-aos="zoom-in"
          className='bg-black rounded-2xl shadow-2xl w-full max-w-3xl p-10 flex flex-col gap-8'
        >
          <h1 className='text-themeyellow text-4xl font-bold text-center'>User Profile</h1>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='bg-themeyellow p-6 rounded-full'>
              <FaUser className='text-black size-24' />
            </div>

            <div className='flex flex-col gap-4 text-white text-xl font-medium'>
              <div className='flex items-center gap-3'>
                <FaUser className='text-themeyellow' />
                <p>Name: {user.fullname}</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaEnvelope className='text-themeyellow' />
                <p>Email: {user.email}</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaPhone className='text-themeyellow' />
                <p>Phone: {user.mob_no}</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaLocationDot className='text-themeyellow' />
                <p>Location: {user.location || 'N/A'}</p>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-themeyellow font-bold'>Member Since:</span>
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-6'>
            <button className='px-8 py-3 bg-themeyellow text-black text-lg font-semibold rounded-xl hover:bg-white hover:text-black border-2 border-themeyellow'>
              Edit Profile
            </button>
          </div>
        </div>

        {/* Appointments Section */}
        <div
          data-aos="fade-up"
          className='mt-12 w-full max-w-3xl bg-black rounded-2xl shadow-2xl p-10'
        >
          <h2 className='text-themeyellow text-3xl font-bold mb-6 text-center'>Past Appointments</h2>

          {appointments && appointments.length > 0 ? (
            <div className='flex flex-col gap-6'>
              {appointments.map((appointment) => (
                <div key={appointment._id} className='bg-white p-5 rounded-xl shadow-md'>
                  <div className='flex flex-col sm:flex-row justify-between gap-3 sm:items-center'>
                    <div className='flex items-center gap-3 text-black'>
                      <FaCalendarAlt className='text-themeyellow' />
                      <p className='font-semibold'>{new Date(appointment.date).toLocaleDateString()} at {appointment.time}</p>
                    </div>
                    <div className='flex items-center gap-3 text-black'>
                      <FaScissors className='text-themeyellow' />
                      <p>{appointment.service} — <span className='italic text-gray-600'>{appointment.price}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-white text-center text-lg'>No past appointments found.</p>
          )}
        </div>

        <div className='flex justify-center mt-6'>
          <button
            onClick={calculateTotal}
            className='px-6 py-2 bg-themeyellow text-black font-semibold rounded-lg hover:bg-white hover:text-black border-2 border-themeyellow'
          >
            Show Total Spent
          </button>
        </div>

        {totalPrice !== null && (
          <p className='text-black text-xl font-bold text-center mt-4'>
            Total Price: ₹{totalPrice}
          </p>
        )}

      </section>
    </div>
  );
}

export default UserProfile;
