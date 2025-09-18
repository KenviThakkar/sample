import React from 'react';
function HairMore() {
  return (
    <div>
  
    <div className="min-h-screen bg-white px-10 md:px-[120px] py-14 text-black">
      <h1 className="text-4xl font-bold text-center italic mb-10">Why <span className="text-themeyellow">Choose Us</span> for Your Hair?</h1>
      
      <div className="bg-[#1a1a1a] border-[3px] border-[#a39446] rounded-2xl p-10 text-white shadow-lg">
        <p className="text-xl font-light leading-8">
          At <span className="text-themeyellow font-semibold">Beauty Salon</span>, we don't just style hair — we care for it like art. Our expert stylists understand your hair's personality and treat it with the love it deserves.
        </p>
        <ul className="mt-8 list-disc list-inside space-y-4 text-gray-300 text-lg">
          <li>We provide expert styling by certified professionals</li>
          <li>Only premium, chemical-free products are used</li>
          <li>Luxurious ambiance for a relaxing experience</li>
          <li>100% hygiene-focused tools & environment</li>
          <li>Personalized advice for your hair type</li>
          <li>Trusted by hundreds of happy, glowing clients</li>
        </ul>
        <p className="mt-6 text-xl text-themeyellow italic font-medium">
          "Let your hair do the talking — with our care behind it."
        </p>
      </div>
    </div>
    </div>
  );
}

export default HairMore;