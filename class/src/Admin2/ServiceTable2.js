import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaUserPlus, FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

function ServiceTable2() {
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [err, setErr] = useState()
  const [updateId, setUpdateId] = useState();
  const [submit, setSubmit] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/Service/getServices')
      .then((res) => {
        setArr(res.data.service);
      })
      .catch((err) => console.log('Error...', err));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setData({});
    setUpdateId(null);
    setIsModalOpen(false);
    setErr('')
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    for(let i=0; i<arr.length; i++){
      if(arr[i].category.toLowerCase()===data.category.toLowerCase()){
        setErr('Category Already Exist')
        return;
      }
    }
    axios.post('http://localhost:9000/Service/addService', data)
      .then((res) => {
        setArr([...arr, data])
        setData({})
        closeModal()
      })
      .catch((err) => {
        console.log('Error...', err)
      })
      closeModal()
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/Service/deleteService/${id}`)
      .then(() => {
        setArr(arr.filter((val) => val._id !== id));
      })
      .catch((err) => console.log('Error...', err));
  };

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="text-xl font-semibold">Service Management</h2>
        <button
          onClick={() => {
            openModal()
            setSubmit(true)
          }}
          className="bg-blue-600 text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
          <FaUserPlus /> Add Service
        </button>
      </div>

      <div className="overflow-x-auto py-5">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
            <tr>
              {/* <th className="p-3 text-left">Id</th> */}
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Duration</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((val) => (
              <tr key={val._id} className="border-t hover:bg-gray-50 text-xs md:text-sm">
                {/* <td className="p-3">{val._id}</td> */}
                <td className="p-3">{val.name}</td>
                <td className="p-3">{val.category}</td>
                <td className="p-3">{val.price}</td>
                <td className="p-3">{val.duration}</td>
                <td className="p-3">{val.desc}</td>
                <td className="p-3 flex justify-center gap-2">
                  {/* <button className="text-blue-600 hover:text-blue-800"><FaEye /></button> */}
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
            {err && <p className="text-red-500 text-sm mb-3">{err}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Name</label>
                <input type="text" name="name" value={data.name || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Category</label>
                <input type="text" name="category" value={data.category || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Price</label>
                <input type="text" name="price" value={data.price || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Duration</label>
                <input type="text" name="duration" value={data.duration || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Description</label>
                <input type="text" name="desc" value={data.desc || ""} onChange={handleChange} required className="w-full p-2 border rounded text-sm" />
              </div>
              <div className="flex justify-end gap-2">
                {submit ? <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm" onClick={handleClick}>
                  Add
                </button> :
                  <button type="submit" className="bg-green-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm" onClick={() => {
                    let ans = arr.findIndex((val) => val._id == updateId)
                    if (ans >= 0) {
                      arr[ans] = { ...arr[ans], ...data }
                    }
                    axios.put(`http://localhost:9000/Service/updateService/${updateId}`, arr[ans])
                      .then(() => {
                        setArr([...arr]);
                        setData({});
                      })
                      .catch((err) => {
                        console.log("Error:", err)
                      })
                      closeModal()
                  }}>
                    Update
                  </button>}
                <button onClick={closeModal} className="bg-gray-400 text-white px-3 py-2 rounded hover:bg-gray-500 text-sm">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceTable2;
