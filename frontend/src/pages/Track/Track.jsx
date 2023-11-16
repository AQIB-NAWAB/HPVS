import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import  "./Track.css"
const Track = () => {
  return (
    <div className='tracking_page'>
    <div className="bg_overlay">
        <div className="content">
          
          <h1 className='text-4xl font-extrabold tracking-widest'>Track your order </h1>
        </div>
      </div>
        <div className="content">
          <h2 className='text-2xl '>Track Shipping </h2>
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
  )
}

export default Track