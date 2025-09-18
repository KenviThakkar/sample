import React from 'react';
function SkinMore() {
  return (
    <div>
    
    <div className="min-h-screen bg-white px-10 md:px-[120px] py-14 text-black">
      <h1 className="text-4xl font-bold text-center italic mb-10">
        Why <span className="text-themeyellow">Choose Us</span> for Your Skin?
      </h1>

      <div className="bg-[#1a1a1a] border-[3px] border-[#a39446] rounded-2xl p-10 text-white shadow-lg">
        <p className="text-xl font-light leading-8">
          At <span className="text-themeyellow font-semibold">Beauty Salon</span>, we treat your skin with the care it deserves. Our expert aestheticians provide solutions that bring out your natural glow and make you feel confident in your skin.
        </p>

        <ul className="mt-8 list-disc list-inside space-y-4 text-gray-300 text-lg">
          <li>Customized skin treatments for every skin type</li>
          <li>Dermatologist-approved premium skincare products</li>
          <li>Deep cleansing, exfoliation & rejuvenation</li>
          <li>100% hygienic and sanitized tools & rooms</li>
          <li>Glow-boosting facials & skin repair therapy</li>
          <li>Loved and trusted by hundreds of happy clients</li>
        </ul>

        <p className="mt-6 text-xl text-themeyellow italic font-medium">
          "Glow naturally, feel beautiful — with care that’s truly skin-deep."
        </p>
      </div>
    </div>
    </div>
  );
}

export default SkinMore;