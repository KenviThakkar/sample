import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./sections/Home";
import Home2 from "./sections/Home2";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import AppoForm from "./sections/AppoForm";
import HairMore from "./sections/HairMore";
import SkinMore from "./sections/SkinMore";
import UserProfile from "./sections/UserProfile";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AdminRoutes from "./Admin2/AdminRoutes";
import HairCare from "./sections/HairCare";
import SkinCare from "./sections/SkinCare";
import FeedbackForm from "./sections/FeedbackForm";
import RecommendationForm from "./sections/RecommendationForm";
import SeasonalBliss from "./sections/SeasonalBliss";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}

      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/' element={<Home2 />} />
        <Route path='/Hero' element={<Hero />} />
        <Route path='/WhyChoose' element={<WhyChoose />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/AppoForm' element={<AppoForm />} />
        <Route path='/FeedbackForm' element={<FeedbackForm />} />
        <Route path='/RecommendationForm' element={<RecommendationForm/>} />
        <Route path='/SeasonalBliss' element={<SeasonalBliss/>} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/HairMore' element={<HairMore />} />
        <Route path='/SkinMore' element={<SkinMore />} />
        <Route path='/HairCare' element={<HairCare />} />
        <Route path='/SkinCare' element={<SkinCare />} />
        <Route path='/UserProfile' element={<UserProfile />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
