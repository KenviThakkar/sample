import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUsers, FaCalendarCheck, FaServicestack, FaImages, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-black text-white h-full p-5 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"} flex flex-col items-center lg:items-start`}>
        <h1 className={`text-2xl font-bold italic mb-6 text-center transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"}`}>
          Glam<span className="text-yellow-400">Forge</span>
        </h1>

        <ul className="space-y-4 w-full">
          {[
            { icon: <FaHome />, text: "Dashboard", path: "/admin/AdminDash2" },
            { icon: <FaUsers />, text: "Users", path: "/admin/UserTable2" },
            { icon: <FaCalendarCheck />, text: "Appointments", path: "/admin/AppoTable2" },
            { icon: <FaServicestack />, text: "Services", path: "/admin/ServiceTable2" },
            { icon: <FaImages />, text: "Gallery", path: "/admin/GalleryTable2" },
            { icon: <FaSignOutAlt />, text: "Logout", path: "/logout", color: "text-red-400" },
          ].map((item, index) => (
            <li key={index} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:text-yellow-400 ${item.color || ""}`}>
              <Link to={item.path} className="flex items-center gap-3 w-full">
                <span className="text-lg">{item.icon}</span>
                <span className={`${isSidebarOpen ? "block" : "hidden"} transition-all duration-300`}>
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <nav className="flex justify-between items-center bg-black text-white px-5 py-4 sticky top-0 z-30 border-b-4 border-yellow-400">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <h1 className="text-3xl font-bold italic">
            Glam<span className="text-yellow-400">Forge</span>
          </h1>
        </nav>

        {/* Dynamic Content */}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
