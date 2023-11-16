import React from 'react'
import Hero from '../../components/Hero'
import "./Home.css"
import { MdLocalShipping } from "react-icons/md";

const Home = () => {
  return (
    <div>
     <Hero/>
      {/* Tracking components */}
      <div className="home_page_tracker py-12 flex flex-row justify-center items-center text-white">
        <div className="content">
          <h2 className='text-xl '>Track Shipping </h2>
          <div className="custom_input flex   shadow-sm">
          <button >

          <MdLocalShipping className='text-xl'  />
          </button>
          <input type="text" placeholder='SGUxxxxxxxx'/>
          <button>Track</button>
          </div>
          <div className="message">
          Stay updated on your shipment!
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home