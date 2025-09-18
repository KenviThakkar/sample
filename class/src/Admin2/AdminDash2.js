import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaBars, FaUserPlus, FaPlus, FaTimes, FaHome, FaUsers, FaCalendarCheck, FaServicestack, FaImages, FaSignOutAlt, FaEye, FaEdit, FaTrash } from "react-icons/fa";

function AdminDash2() {
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [appo, setAppo] = useState([])
  const [feedback, setFeedback] = useState([])
  const [updateId, setUpdateId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch Services
    axios.get('http://localhost:9000/Service/getServices')
      .then((res) => {
        console.log('Services:', res.data.service);
        setArr(res.data.service);
      })
      .catch((err) => {
        console.log('Error fetching services...', err);
      });
      
      // Fetch Appointments
    axios.get('http://localhost:9000/Appo/getAppo')
    .then((res) => {
      console.log('Appo:', res.data.appo);
      setAppo(res.data.appo);
    })
    .catch((err) => {
      console.log('Error fetching appointmets...', err);
    });

    // Fetch Feedbacks
    axios.get('http://localhost:9000/Feedback/getFeedback')
    .then((res) => {
      console.log('Feedbacks:', res.data.feedback);
      setFeedback(res.data.feedback);
    })
    .catch((err) => {
      console.log('Error fetching feedbacks...', err);
    });

    // Fetch User Count
    axios.get('http://localhost:9000/User/countUser')
      .then((res) => {
        console.log('User Count:', res.data.count);
        setUserCount(res.data.count);
      })
      .catch((err) => {
        console.log('Error fetching user count...', err);
      });

  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleClick = () => {
    axios.post('http://localhost:9000/Service/addService', data)
      .then((res) => {
        setArr([...arr, res.data.service]); // Correct way: use returned service
        setData({});
      })
      .catch((err) => {
        console.log('Error adding service...', err);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/Service/deleteService/${id}`)
      .then((res) => {
        setArr(arr.filter((val) => val._id !== id));
      })
      .catch((err) => {
        console.log('Error deleting service...', err);
      });
  };

  const stats = [
    { id: 1, title: "Total Users", count: userCount, icon: <FaUsers size={30} />, bg: "bg-[#D97706]" },
    { id: 2, title: "Total Appointments", count: appo.length, icon: <FaCalendarCheck size={30} />, bg: "bg-[#166534]" },
    { id: 3, title: "Total Services", count: arr.length, icon: <FaServicestack size={30} />, bg: "bg-[#7C3AED]" },
    { id: 4, title: "Total Feedbacks", count: feedback.length, icon: <FaImages size={30} />, bg: "bg-[#1E293B]" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.id} className={`p-6 text-white rounded-lg shadow-lg flex items-center justify-between ${item.bg}`}>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-3xl font-bold">{item.count}</p>
              </div>
              {item.icon}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AdminDash2;