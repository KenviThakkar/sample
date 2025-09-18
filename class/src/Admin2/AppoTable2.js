import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaUserPlus, FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

function AppoTable2() {
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/Appo/getAppo')
      .then((res) => {
        setArr(res.data.appo);
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
      // Update service
      axios.put(`http://localhost:9000/Appo/updateAppo/${updateId}`, data)
        .then(() => {
          const updated = arr.map(item => item._id === updateId ? { ...item, ...data } : item);
          setArr(updated);
          closeModal();
        })
        .catch((err) => console.log('Error', err));
    } else {
      axios.post('http://localhost:9000/Appo/addAppo', data)
        .then((res) => {
          setArr([...arr, res.data]);
          closeModal();
        })
        .catch((err) => console.log('Error...', err));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/Appo/deleteAppo/${id}`)
      .then(() => {
        setArr(arr.filter((val) => val._id !== id));
      })
      .catch((err) => console.log('Error...', err));
  };

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="text-xl font-semibold">Appointement Management</h2>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
          <FaUserPlus /> Add Appointement
        </button>
      </div>

      <div className="overflow-x-auto py-5">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
            <tr>
              {/* <th className="p-3 text-left">Id</th> */}
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Mobile No</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((val) => (
              <tr key={val._id} className="border-t hover:bg-gray-50 text-xs md:text-sm">
                {/* <td className="p-3">{val._id}</td> */}
                <td className="p-3">{val.fullname}</td>
                <td className="p-3">{val.mob_no}</td>
                <td className="p-3">{val.service}</td>
                <td className="p-3">{val.date}</td>
                <td className="p-3">{val.time}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="text-blue-600 hover:text-blue-800"><FaEye /></button>
                  <button className="text-yellow-600 hover:text-yellow-800"
                    onClick={() => {
                      openModal();
                      setData(val);
                      setUpdateId(val._id);
                    }}>
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(val._id)}><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{updateId ? "Update Service" : "Add Service"}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700"><FaTimes /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Name</label>
                <input type="text" name="name" value={data.name || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Mobile No</label>
                <input type="text" name="mob_no" value={data.mob_no || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Service</label>
                <input type="text" name="service" value={data.service || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Date</label>
                <input type="date" name="date" value={data.date || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Time</label>
                <input type="time" name="time" value={data.time || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
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

export default AppoTable2;
