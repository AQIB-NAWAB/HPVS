import { useEffect, useState } from "react";
import "./components.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
  return (
    <>
 <nav
        className={`fixed flex flex-row justify-between items-center py-3 px-10  ${
          scrolling ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
  <div className="logo ">
    HPVS
  </div>
  <div className="links ">
    <ul className='flex flex-row gap-8  '>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/shipping">Shipping </Link>
      </li>
      <li>
        <Link to="/storage">Storage</Link>
      </li>
      <li>
        <Link to="/track">Track</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      
      
      
    </ul>
  </div>
  <button className="trackNowBtn ">
    Track Now
  </button>
</nav>

    </>
  )
}

export default Navbar