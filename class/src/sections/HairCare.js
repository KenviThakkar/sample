import axios from "axios";
import React, { useEffect, useState } from "react";

// const hairServices = [
//   { title: "Haircut & Styling", description: "Trendy cuts and styling for every look.", price: "₹699", duration: "45 mins" },
//   { title: "Hair Spa", description: "Nourishing treatments for soft and healthy hair.", price: "₹999", duration: "60 mins" },
//   { title: "Hair Coloring", description: "Rich colors with safe, lasting products.", price: "₹1499", duration: "90 mins" },
//   { title: "Hair Smoothening", description: "Get frizz-free, smooth finish that shines.", price: "₹2999", duration: "2 hrs" },
// ];

function HairCare() {
  const [service, setService] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/Service/getHairServices')
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

        <h1 className="text-4xl font-bold text-center mb-10 italic">Hair <span className="text-themeyellow">Services</span></h1>

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

export default HairCare;