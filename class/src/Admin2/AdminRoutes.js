// src/Admin2/AdminRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import UserTable2 from "./UserTable2";
import AdminDash2 from "./AdminDash2";
import AdminLayout from "../Admin2/AdminLayout"; 
import AppoTable2 from "./AppoTable2"
import GalleryTable2 from "./GalleryTable2";
import ServiceTable2 from "./ServiceTable2";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="AdminDash2" element={<AdminLayout><AdminDash2 /></AdminLayout>} />
      <Route path="UserTable2" element={<AdminLayout><UserTable2 /></AdminLayout>} />
      <Route path="AppoTable2" element={<AdminLayout><AppoTable2 /></AdminLayout>} />
      <Route path="ServiceTable2" element={<AdminLayout><ServiceTable2 /></AdminLayout>} />
      <Route path="GalleryTable2" element={<AdminLayout><GalleryTable2 /></AdminLayout>} />
    </Routes>
  );
};

export default AdminRoutes;
