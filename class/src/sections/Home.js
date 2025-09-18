import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaHeadphones } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import sissor from '../assets/sissor.png'
import menshair from '../assets/menshair.png'
import trimmer from '../assets/trimmer.png'
import womenhair from '../assets/womenhair.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hair_Service2 from '../assets/Hair_Service2.jpg'
import whyimg from '../assets/why3.webp'
import { FaAngleDoubleRight } from 'react-icons/fa'
import service1 from '../assets/ser1.png'
import service2 from '../assets/ser2.png'
import service3 from '../assets/ser3.png'
import service4 from '../assets/ser4.png'
import Hair from '../assets/Hair.jpg'
import Hair_Service from '../assets/Hair_Service.jpg'
import HairS1 from '../assets/HairS1.jpg'
import HairS2 from '../assets/HairS2.jpg'
import Skin_Service from '../assets/Skin_Service.jpg'
import SkinS1 from '../assets/SkinS1.jpg'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

function Home() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100
        })
    }, [])
    const clients = [
      {
        image: client1,
        title: 'Andrew Dew',
        para: 'lorem gfoewihjr fwyqdigu wfdyqg wfydgqu'
      },
      {
        image: client2,
        title: 'Andrew Dew',
        para: 'lorem gfoewihjr fwyqdigu wfdyqg wfydgqu'
      },
      {
        image: client3,
        title: 'Andrew Dew',
        para: 'lorem gfoewihjr fwyqdigu wfdyqg wfydgqu'
      },
    ]
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Pricing', path: 'pricing' },
        { link: 'Services', path: 'services' },
        { link: 'Testimonials', path: 'testimonial' },
        { link: 'Contact', path: 'contact' },
    ]
    return (
        <div>
            {/* Header */}
            <nav className='flex justify-between items-center gap-4 bg-black lg:px-10 px-4
        py-6 sticky top-0 z-30 border-[8px] border-[#a39446]'>
                <div id='logo'>
                    <h1 className='text-white font-bold text-5xl italic'>Glam<span
                        className='italic text-themeyellow'>Forge</span></h1>
                </div>

                <ul className='lg:flex justify-center items-center gap-6 hidden'>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} className='text-white uppercase font-semibold cursor-pointer
              p-3 rounded-lg hover:bg-themeyellow hover:text-black' to={path} spy={true}
                            offset={-100} smooth={true}>{link}</Link>
                    ))}
                </ul>
            </nav>

            {/* Hero */}
            <section id='hero' className='w-full md:px-[120px] px-10 flex flex-col 
                justify-center items-center gap-20 md:flex-row'>
                <div id='content-hero' className='flex flex-col justify-center items-start
                    gap-10'>
                    <h1 data-aos="zoom-in" className='text-2xl text-black font-semibold'>
                        Welcome To
                    </h1>
                    <h1 data-aos="zoom-in" className='text-6xl text-black font-bold'>
                        Beauty Salon <br /> in Ahmedabad <br /> India
                    </h1>
                    <div data-aos="slide-up" id="icon-list" className='flex flex-col
                        justify-center items-start gap-6'>
                        <div id='icon-box' className='flex justify-center items-center gap-3'>
                            <FaLocationDot className='text-black size-6' />
                            <h1 className='text-xl text-gray-800 font-semibold'>lorem dbow
                                oigfbpqigwefp oqeigfqpofwq woegvuqopewfi</h1>
                        </div>
                        <div id='icon-box' className='flex justify-center items-center gap-3'>
                            <MdOutlinePhoneAndroid className='text-black size-6' />
                            <h1 className='text-xl text-gray-800 font-semibold'>
                                +91 987 785 5433 / +91 968 645 7453</h1>
                        </div>
                        <div id='icon-box' className='flex justify-center items-center gap-3'>
                            <MdEmail className='text-black size-6' />
                            <h1 className='text-xl text-gray-800 font-semibold'>
                                company@gmail.com / spasalon@gmail.com</h1>
                        </div>
                        <div id='icon-box' className='flex justify-center items-center gap-3'>
                            <FaHeadphones className='text-black size-6' />
                            <h1 className='text-xl text-gray-800 font-semibold'>
                                customer@gmail.com</h1>
                        </div>
                    </div>
                    <button data-aos="zoom-in" className='px-10 py-4 
                        rounded-xl border-2 border-black text-black 
                        font-semibold text-lg hover:bg-black  hover:text-white'>BOOK ONLINE</button>
                </div>

                <div data-aos="zoom-in" id='image-box' className='md:w-[50%] w-full'>
                    <img src={Hair_Service2} alt='heroimg' className='rounded-xl w-full 
                        md:h-[700px] h-300px'/>
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start
                w-full md:px-[120px] px-10 py-10 gap-10'>
                <div data-aos="zoom-in" data-delay="200" className='flex flex-col justify-center
                    items-center gap-4'>
                    <img src={sissor} alt='sissor' className='size-16 transform hover:scale-110
                        transition-transform duration-30 cursor-pointer'/>
                    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold
                        rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer'>MORE</button>
                </div>
                <div data-aos="zoom-in" data-delay="200" className='flex flex-col justify-center
                    items-center gap-4'>
                    <img src={menshair} alt='sissor' className='size-16 transform hover:scale-110
                        transition-transform duration-30 cursor-pointer'/>
                    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold
                        rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer'>MORE</button>
                </div>
                <div data-aos="zoom-in" data-delay="200" className='flex flex-col justify-center
                    items-center gap-4'>
                    <img src={trimmer} alt='sissor' className='size-16 transform hover:scale-110
                        transition-transform duration-30 cursor-pointer'/>
                    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold
                        rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer'>MORE</button>
                </div>
                <div data-aos="zoom-in" data-delay="200" className='flex flex-col justify-center
                    items-center gap-4'>
                    <img src={womenhair} alt='sissor' className='size-16 transform hover:scale-110
                        transition-transform duration-30 cursor-pointer'/>
                    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold
                        rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer'>MORE</button>
                </div>

            </section>

            {/* WhyChoose */}
            <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col
                    md:flex-row justify-center items-center gap-20 bg-cover bg-center' style={{
                    backgroundImage: `url(${whyimg})`
                }}>
                <div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-10
                        bg-white p-10 rounded-xl md:w-[40%] w-full'>
                    <h1 className='text-themeyellow text-4xl font-bold'>WORKING HOURS</h1>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <p className='text-xl text-black font-lg'>SUNDAY 10AM - 8PM</p>
                        <p className='text-xl text-black font-lg'>MONDAY 10AM - 8PM</p>
                        <p className='text-xl text-black font-lg'>TUESDAY 10AM - 8PM</p>
                        <p className='text-xl text-black font-lg'>WEDNESDAY 10AM - 8PM</p>
                        <p className='text-xl text-black font-lg'>THURSDAY 10AM - 8PM</p>
                        <p className='text-xl text-black font-lg'>FRIDAY 10AM - 8PM</p>
                        <p className='text-xl text-black font-lg'>SATURDAY 10AM - 8PM</p>
                    </div>
                    <button className='px-10 py-4 rounded-xl border-2 border-black
                          text-black font-semibold text-lg hover:bg-black hover:text-white mt-6'>BOOK ONLINE</button>
                </div>

                <div data-aos="slide-up" className='md:w-[40%] w-full flex flex-col 
                        justify-center items-center gap-6 h-fit'>
                    <h1 className='text-6xl text-white font-bold text-center'>Why Choose Us</h1>
                    <p className='text-white text-2xl font-semibold md:text-start text-center
                          '>lorem rsh sdnfy srhdtr gsrdhtu fesgtu dawfes dafes drerthf</p>
                    <div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
                        <div id='icon-box' className='flex justify-center item-center gap-3'>
                            <FaAngleDoubleRight className='text-white size-6' />
                            <h1 className='text-xl text-white font-semibold'>
                                Always Welcoming environment
                            </h1>
                        </div>
                        <div id='icon-box' className='flex justify-center item-center gap-3'>
                            <FaAngleDoubleRight className='text-white size-6' />
                            <h1 className='text-xl text-white font-semibold'>
                                Always Welcoming environment
                            </h1>
                        </div>
                        <div id='icon-box' className='flex justify-center item-center gap-3'>
                            <FaAngleDoubleRight className='text-white size-6' />
                            <h1 className='text-xl text-white font-semibold'>
                                Always Welcoming environment
                            </h1>
                        </div>
                        <div id='icon-box' className='flex justify-center item-center gap-3'>
                            <FaAngleDoubleRight className='text-white size-6' />
                            <h1 className='text-xl text-white font-semibold'>
                                Always Welcoming environment
                            </h1>
                        </div>
                        <div id='icon-box' className='flex justify-center item-center gap-3'>
                            <FaAngleDoubleRight className='text-white size-6' />
                            <h1 className='text-xl text-white font-semibold'>
                                Always Welcoming environment
                            </h1>
                        </div>

                        <button className='text-black px-10 py-4 bg-white 
                            hover:bg-themeyellow hover:text-black rounded-xl font-semibold'>BOOK NOW</button>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id='pricing' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col
    justify-center items-center gap-24'>
                <h1 data-aos="zoom-in" className='text-6xl font-bold text-black text-center'>
                    Our Pricing
                </h1>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center
      gap-20 w-[85%]'>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        item-center gap-6 border-b-2 border-themeyellow pb-10'>
                        <h1 className='text-3xl text-gray-900 font-bold'>Regular Haircut</h1>
                        <h1 className='text-themeyellow text-4xl font-bold'>$34</h1>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id='servicing' className='w-full flex flex-col md:px-20 px-10  md:py-20 py-10
                justify-center items-center gap-16 bg-gray-900'>
                  <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>
                      Services
                    </h1>
                    <p data-aos="zoom-in" className='text-xl text-slate-200 text-center'>
                      lorem vcwui eiwugfvb voeguw fehojvl 
                    </p>
                  </div>
            
                  <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center
                  gap-6'>
                    <div id='image-box'>
                      <img data-aos="zoom-in" data-aos-delay="200" src={Hair} alt=''/>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center
                    gap-8'>
                      <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
                      py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
                        <img src={service1} alt='' className='size-16 transform hover:scale-110
                        transition-transform duration-300 cursor-pointer'/>
                        <h1 className='text-black text-[25px] font-bold'>Hair Care</h1>
                      </div>
                      <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
                      py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
                        <img src={service2} alt='' className='size-16 transform hover:scale-110
                        transition-transform duration-300 cursor-pointer'/>
                        <h1 className='text-black text-[25px] font-bold'>Hair Care</h1>
                      </div>
                      <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
                      py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
                        <img src={service3} alt='' className='size-16 transform hover:scale-110
                        transition-transform duration-300 cursor-pointer'/>
                        <h1 className='text-black text-[25px] font-bold'>Hair Care</h1>
                      </div>
                      <div data-aos="zoom-out" data-aos-delay="200" className='bg-white px-8 
                      py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
                        <img src={service4} alt='' className='size-16 transform hover:scale-110
                        transition-transform duration-300 cursor-pointer'/>
                        <h1 className='text-black text-[25px] font-bold'>Hair Care</h1>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Gallery */}
                <section className='w-full flex flex-col md:px-20 px-10 h-fit pb-[300px]
                    py-20 justify-center items-center gap-16 bg-gray-900 -mb-[200px]'>
                      <h1 className='text-6xl text-white font-bold text-center'>Experience the Best Haircut &
                        <br/> Shaving Services</h1>
                    </section>
                
                    <div className='w-full flex flex-col justify-center items-center'>
                      <div className='lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1
                      justify-center justify-items-center items-center gap-10 md:-mb-[540px]'>
                        <img data-aos="zoom-out" data-aos-delay="200" src={Hair_Service} alt=''
                        className='rounded-xl w-[400px] h-[350px]'/>
                        <img data-aos="zoom-out" data-aos-delay="200" src={Skin_Service} alt=''
                        className='rounded-xl w-[400px] h-[350px]'/>
                        <img data-aos="zoom-out" data-aos-delay="200" src={HairS1} alt=''
                        className='rounded-xl w-[400px] h-[350px]'/>
                        <img data-aos="zoom-out" data-aos-delay="200" src={HairS2} alt=''
                        className='rounded-xl w-[400px] h-[350px]'/>
                        <img data-aos="zoom-out" data-aos-delay="200" src={SkinS1} alt=''
                        className='rounded-xl w-[400px] h-[350px]'/>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <section id='testimonial' className='w-full md:px-20 md:h-[165vh] h-fit px-10 py-20
                        flex flex-col justify-end items-center gap-6 bg-themeyellow'>
                          <h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>
                            Testimonial
                          </h1>
                          <p data-aos="zoom-in" className='text-xl text-white font-semibold text-center'>
                            lorem cfoh egfr efuw wefvwy
                          </p>
                          <div id='clients' className='grid grid-cols-1 md:grid-cols-3 justify-center
                          items-center gap-6'>
                            {
                              clients.map((items, index) => (
                                <div data-aos="slid-up" data-aos-delay="200" id='main-box' key={index}
                                 className='w-full bg-white p-14 flex flex-col justify-between
                                 items-center gap-6 rounded-3xl'>
                                  <div id='top' className='flex justify-between items-center gap-8
                                  w-full'>
                                    <div className='flex justify-center items-center gap-4 relative'>
                                      <BiSolidQuoteAltLeft className='size-20 text-[#1caf7e] absolute
                                      left-0 opacity-20'/>
                                      <h1 className='text-2xl text-black font-bold'>{items.title}</h1>
                                    </div>
                                    <img src={items.image} alt='' className='w-[100px] hb-[100px] transform
                                    hover:scale-110 transition duration-300 cursor-pointer'/>
                                  </div>
                                  <div id='bottom' className='w-full'>
                                    <p className='text-end text-lg text-gray-600 font-medium'>{items.para}</p>
                                  </div>
                                 </div>
                              ))
                            }
                          </div>
                        </section>
        </div>
    )
}

export default Home