import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaUserPlus, FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

function GalleryTable2() {
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/Feedback/getFeedback')
      .then((res) => {
        setArr(res.data.feedback);
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
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/Feedback/deleteFeedback/${id}`)
      .then(() => {
        setArr(arr.filter((val) => val._id !== id));
      })
      .catch((err) => console.log('Error...', err));
  };

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="text-xl font-semibold">Feedback</h2>
      </div>

      <div className="overflow-x-auto py-5">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
            <tr>
              {/* <th className="p-3 text-left">Id</th> */}
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Rate</th>
              <th className="p-3 text-left">Feedback</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((val) => (
              <tr key={val._id} className="border-t hover:bg-gray-50 text-xs md:text-sm">
                {/* <td className="p-3">{val._id}</td> */}
                <td className="p-3">{val.fullname}</td>
                <td className="p-3">{val.email}</td>
                <td className="p-3">{val.rate}</td>
                <td className="p-3">{val.feedback}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(val._id)}><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GalleryTable2;
