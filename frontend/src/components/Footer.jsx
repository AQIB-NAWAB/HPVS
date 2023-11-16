import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col font-pop'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between pl-6 pr-6 pt-[50px] pb-12 bg-[#f9f9fa]'>
            <div className='flex flex-col gap-4 pl-4'>
                <p className='text-[#3c4043ff] font-semibold text-[16px]'>OURIERGE SHIPPING & SECURITY CO.</p>
                <p className='text-[14px] text-[#5b5959]'>Global leader in Safekeeping & security solutions</p>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
                <p className='text-[#3c4043ff] font-semibold text-[16px]' >RESOURCES</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                    <li className='hover:text-[#2250fcff]'><Link>Track Asset</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Track Shipping</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
            <p className='text-[#3c4043ff] font-semibold text-[16px]'>LOCATIONS</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/about/location">Dubai</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/about/location">Hongkong</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/about/location">Italy</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/about/location">London</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/about/location">Singapore</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/about/location">Turkey</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
            <p className='text-[#3c4043ff] font-semibold text-[16px]'>SERVICES</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                    <li className='hover:text-[#2250fcff]'><Link>Secure Vault</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Safe Keeping</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Jewellery Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Document Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Bullion Storage</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Fine Art Storage</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 pl-4'>
            <p className='text-[#3c4043ff] font-semibold text-[16px]'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-[15px] text-[#5b5959]'>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/contact">Contact Us</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link to="http://localhost:5173/about">About Us</Link></li>
                    <li className='hover:text-[#2250fcff]'><Link>Terms of Service</Link></li>
                </ul>
            </div>
        </div>
        <div className='bg-[#f1f1f3ff] flex justify-center items-center pt-9 pb-9 text-[14px] text-[#3c4043ff]'>
            <p>© 2023 OURIERGE - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer