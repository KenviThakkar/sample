import React, {useEffect} from 'react'
import gal1 from '../assets/gal1.jpg'
import gal2 from '../assets/gal2.jpg'
import gal3 from '../assets/gal3.jpg'
import gal4 from '../assets/gal4.jpg'
import gal5 from '../assets/gal5.jpg'
import gal6 from '../assets/gal6.jpg'


import Hair from '../assets/Hair.jpg'
import HairS1 from '../assets/HairS1.jpg'


import HairSer1 from '../assets/HairSer1.jpeg'
import HairSer2 from '../assets/HairSer2.jpeg'
import HairSer3 from '../assets/HairSer3.jpeg'

import Hair_Service from '../assets/Hair_Service.jpg'
import HairS2 from '../assets/HairS2.jpg'
import Skin_Service from '../assets/Skin_Service.jpg'
import SkinS1 from '../assets/SkinS1.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Gallery() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);

  return (
    <>
      <section className="w-full flex flex-col md:px-20 px-10 py-20 justify-center items-center gap-16 bg-gray-900">
        <h1 className="text-4xl text-white font-bold text-center">
          Elevate Your Look - Expert Care for Glowing Skin & Healthy Hair
        </h1>
      </section>

      <div className="w-full flex flex-col justify-center items-center px-10 py-10">
        <div className="lg:w-[80%] w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
          <img
            data-aos="zoom-out"
            data-aos-delay="200"
            src={Hair_Service}
            alt=""
            className="rounded-xl w-[400px] h-[350px]"
          />
          <img
            data-aos="zoom-out"
            data-aos-delay="200"
            src={Hair}
            alt=""
            className="rounded-xl w-[400px] h-[350px]"
          />
          <img
            data-aos="zoom-out"
            data-aos-delay="200"
            src={HairSer2}
            alt=""
            className="rounded-xl w-[400px] h-[350px]"
          />
          <img
            data-aos="zoom-out"
            data-aos-delay="200"
            src={HairS2}
            alt=""
            className="rounded-xl w-[400px] h-[350px]"
          />
          <img
            data-aos="zoom-out"
            data-aos-delay="200"
            src={HairS1}
            alt=""
            className="rounded-xl w-[400px] h-[350px]"
          />
          <img
            data-aos="zoom-out"
            data-aos-delay="200"
            src={HairSer1}
            alt=""
            className="rounded-xl w-[400px] h-[350px]"
          />
        </div>
      </div>
    </>
  );
}


export default Gallery