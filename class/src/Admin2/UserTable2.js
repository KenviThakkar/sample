import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaUserPlus, FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

function UserTable2() {
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/User/getUsers')
      .then((res) => {
        setArr(res.data.user);
      })
      .catch((err) => console.log('Error...', err));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setData({});
    setUpdateId(null);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateId) {
      axios.put(`http://localhost:9000/User/updateUser/${updateId}`, data)
        .then(() => {
          const updated = arr.map(item => item._id === updateId ? { ...item, ...data } : item);
          setArr(updated);
          closeModal();
        })
        .catch((err) => console.log('Error', err));
    } else {
      axios.post('http://localhost:9000/User/createUser', data)
        .then((res) => {
          setArr([...arr, res.data]);
          closeModal();
        })
        .catch((err) => console.log('Error...', err));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/User/deleteUser/${id}`)
      .then(() => {
        setArr(arr.filter((val) => val._id !== id));
      })
      .catch((err) => console.log('Error...', err));
  };

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="text-xl font-semibold">User Management</h2>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
          <FaUserPlus /> Add User
        </button>
      </div>

      <div className="overflow-x-auto py-5">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
            <tr>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Mobile No</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">User Type</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((val) => (
              <tr key={val._id} className="border-t hover:bg-gray-50 text-xs md:text-sm">
                <td className="p-3">{val.username}</td>
                <td className="p-3">{val.fullname}</td>
                <td className="p-3">{val.mob_no}</td>
                <td className="p-3">{val.email}</td>
                <td className="p-3">{val.user_type}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      axios.get(`http://localhost:9000/Appo/getAppoByUserId/${val._id}`)
                        .then((res) => {
                          setAppointments(res.data.appo);
                          setIsViewOpen(true);
                        })
                        .catch((err) => console.log('Error fetching appointments:', err));
                    }}
                  >
                    <FaEye />
                  </button>

                  <button className="text-yellow-600 hover:text-yellow-800"
                    onClick={() => {
                      openModal();
                      setData(val);
                      setUpdateId(val._id);
                    }}>
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(val._id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Appointments Modal */}
      {isViewOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 overflow-y-auto z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">User Appointments</h3>
              <button onClick={() => setIsViewOpen(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>

            {appointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {appointments.map((item) => (
                  <div key={item._id} className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
                    <p><span className="font-semibold">Full Name:</span> {item.fullname}</p>
                    <p><span className="font-semibold">Mobile:</span> {item.mob_no}</p>
                    <p><span className="font-semibold">Service:</span> {item.service}</p>
                    <p><span className="font-semibold">Price:</span> {item.price}</p>
                    <p><span className="font-semibold">Date:</span> {item.date}</p>
                    <p><span className="font-semibold">Time:</span> {item.time}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No appointments found for this user.</p>
            )}
          </div>
        </div>
      )}

      {/* Add/Edit User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{updateId ? "Update User" : "Add User"}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700"><FaTimes /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Name</label>
                <input type="text" name="fullname" value={data.fullname || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Mobile No</label>
                <input type="text" name="mob_no" value={data.mob_no || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Email</label>
                <input type="email" name="email" value={data.email || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Username</label>
                <input type="text" name="username" value={data.username || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Password</label>
                <input type="password" name="password" value={data.password || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>111``
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">User Type</label>
                <input type="text" name="user_type" value={data.user_type || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="flex justify-end gap-2">
                <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm">
                  {updateId ? "Update" : "Add"}
                </button>
                <button onClick={closeModal} className="bg-gray-400 text-white px-3 py-2 rounded hover:bg-gray-500 text-sm">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTable2;
