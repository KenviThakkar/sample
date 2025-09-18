import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const seasons = [
  {
    name: 'Spring',
    bg: 'bg-pink-100',
    offer: 'Get 20% Off on Hair Spa + Glow Facial Combo!',
    hair: ['Hair Spa Treatment', 'Trim & Nourish', 'Frizz Control Serum'],
    skin: ['Glow Boost Facial', 'Detan Cleanup', 'Vitamin C Serum Therapy']
  },
  {
    name: 'Summer',
    bg: 'bg-yellow-100',
    offer: 'Free Sunscreen with Every Skin Service!',
    hair: ['Scalp Detox', 'Summer Smoothening', 'Oil Control Wash'],
    skin: ['Cooling Aloe Facial', 'Sun Tan Removal', 'Hydrating Gel Mask']
  },
  {
    name: 'Autumn',
    bg: 'bg-orange-100',
    offer: 'Buy 1 Hair Treatment, Get 50% Off on 2nd!',
    hair: ['Hair Repair & Oil Infusion', 'Layered Haircut', 'Autumn Balayage'],
    skin: ['Pumpkin Peel Facial', 'Skin Renewal Therapy', 'Under-Eye Detox']
  },
  {
    name: 'Winter',
    bg: 'bg-blue-100',
    offer: 'Moisturizing Facial + Hair Mask at Just ₹999!',
    hair: ['Deep Conditioning Mask', 'Keratin Infusion', 'Split-End Repair'],
    skin: ['Ultra-Hydrating Facial', 'Lip & Hand Care', 'Dry Skin Rescue Pack']
  }
];

function SeasonalBliss() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold text-center text-black mb-12"
      >
        Glow with the Seasons   
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {seasons.map((season, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`rounded-3xl shadow-lg p-8 ${season.bg}`}
          >
            <h3 className="text-3xl font-semibold text-black mb-4">
              {season.name} Specials
            </h3>

            <p className="text-lg font-medium text-[#1caf7e] mb-4">
              🎁 {season.offer}
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Hair Services</h4>
                <ul className="list-disc ml-6 text-gray-700">
                  {season.hair.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Skin Services</h4>
                <ul className="list-disc ml-6 text-gray-700">
                  {season.skin.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeasonalBliss;