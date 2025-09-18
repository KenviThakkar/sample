import React, { useEffect, useState } from "react";
import axios from "axios";
// const skinServices = [
//   { title: "Facial Glow Treatment", description: "Rejuvenate your skin with deep cleansing & glow.", price: "₹799", duration: "60 mins" },
//   { title: "Anti-Acne Facial", description: "Special treatment to reduce acne and prevent breakouts.", price: "₹899", duration: "45 mins" },
//   { title: "Skin Brightening", description: "Improve skin tone and remove dullness naturally.", price: "₹1299", duration: "75 mins" },
//   { title: "Hydra Facial", description: "Advanced hydration therapy for radiant skin.", price: "₹1999", duration: "90 mins" },
// ];

function SkinCare() {
  const [service, setService] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/Service/getSkinServices')
      .then((res) => {
        setService(res.data.service)
      })
      .catch((err) => {
        console.log('Error', err)
      })
  })
  return (
    <div>
    
    <div className="min-h-screen bg-white text-black py-10 px-6 md:px-[120px]">
      <h1 className="text-4xl font-bold text-center mb-10 italic">Skin <span className="text-themeyellow">Care</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {service && service.map((service) => (
          <div className="bg-[#1a1a1a] border-[3px] border-[#a39446] rounded-xl p-6 text-white shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-2 text-themeyellow">{service.category}</h2>
            <p className="text-gray-300 mb-4">{service.desc}</p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Price: <span className="text-white font-medium">{service.price}</span></span>
              <span>Duration: <span className="text-white font-medium">{service.duration}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default SkinCare;