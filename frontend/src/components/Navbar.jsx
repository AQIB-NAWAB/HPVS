import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; // Example icons from react-icons
import "./components.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolling = scrollY > 170; // Adjust the threshold as needed
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <nav
        className={`fixed flex flex-row justify-between items-center py-3 px-10  ${
          scrolling ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <Link to={"/"} className="logo">
          HPVS
        </Link>
        <div className={`links ${isMobile ? 'mobile' : ''}`}>
          <ul className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"onClick={()=>setIsMobile(false)}>About</Link>
            </li>
            <li>
              <Link to="/services"onClick={()=>setIsMobile(false)}>Services</Link>
            </li>
            <li>
              <Link to="/shipping" onClick={()=>setIsMobile(false)}>Shipping </Link>
            </li>
            <li>
              <Link to="/storage" onClick={()=>setIsMobile(false)}>Storage</Link>
            </li>
            <li>
              <Link to="/track" onClick={()=>setIsMobile(false)}>Track</Link>
            </li>
            <li>
              <Link to="/contact" onClick={()=>setIsMobile(false)}>Contact</Link>
            </li>
          </ul>
        </div>
        <button className="trackNowBtn"onClick={()=>setIsMobile(false)}>
          Track Now
        </button>
        <div className="mobile-menu-icon" onClick={handleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
