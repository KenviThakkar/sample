import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { MdLogin } from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('userId'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/WhyChoose' },
    { link: 'Pricing', path: '/Pricing' },
    { link: 'Services', path: '/Services' },
    { link: 'Testimonials', path: '/Testimonial' },
    { link: 'Contact', path: '/Contact' },
    {link: 'Feedback', path:'/FeedbackForm'}
  ];

  React.useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/Login');
    window.location.reload();         
  };

  return (
    <nav className='flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-6 sticky top-0 z-30 border-[5px] border-[#a39446]'>
      <div id='logo'>
        <h1 className='text-white font-bold text-5xl italic'>
          Glam<span className='italic text-themeyellow'>Forge</span>
        </h1>
      </div>

      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black'
            to={path}
            smooth="true"
            offset={-100}
          >
            {link}
          </Link>
        ))}

        {isLoggedIn ? (
          <>
            <li className='text-white text-2xl cursor-pointer hover:text-themeyellow'>
              <FaUser onClick={() => navigate('/UserProfile')} />
            </li>
            <li className='text-white text-2xl cursor-pointer hover:text-themeyellow' onClick={handleLogout}>
              <FiLogOut/>
            </li>
          </>
        ):<li className='text-white text-2xl cursor-pointer hover:text-themeyellow' onClick={()=>{navigate('/Login')
        }}>
        <MdLogin/>
      </li>}
      </ul>
    </nav>
  );
}

export default Header;