import React from 'react'
import Logo from '../assets/logo.svg';
import { GrInstagram } from "react-icons/gr";
import { IoMdBasketball } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='h-[45vh] w-full flex bg-darkBlue'>
        <div className='h-full w-1/2 flex flex-col justify-start items-start px-40 gap-5 py-8'>
            <h1 className='flex text-4xl font-semibold text-white gap-2'><img src={Logo} alt="" />Nexcent</h1>
            <p className='text-white'>Copyright © 2020 Nexcent ltd.</p>
            <p className='text-white'>All rights reserved</p>

            <div className='flex text-white text-3xl gap-7 pt-10'>
              <GrInstagram />
              <IoMdBasketball />
              <FaTwitter />
              <FaYoutube />
            </div>
        </div>

        <div className='h-full w-1/2 flex gap-8 py-8 px-10'>
            <div className='text-white flex flex-col gap-1'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <a href="#" className='text-[2.4vh]'>About Us</a>
                <a href="#" className='text-[2.4vh]'>Blog</a>
                <a href="#" className='text-[2.4vh]'>Contact Us</a>
                <a href="#" className='text-[2.4vh]'>Pricing</a>
                <a href="#" className='text-[2.4vh]'>Testimonials</a>
            </div>

            <div className='text-white flex flex-col gap-1'>
                <h1 className='text-xl font-semibold'>Support</h1>
                <a href="#" className='text-[2.4vh]'>Help Center</a>
                <a href="#" className='text-[2.4vh]'>Terms of services</a>
                <a href="#" className='text-[2.4vh]'>Ligal</a>
                <a href="#" className='text-[2.4vh]'>Privacy policy</a>
                <a href="#" className='text-[2.4vh]'>Status</a>
            </div>

            <div className='text-gray flex flex-col'>
                <h1 className='text-xl font-semibold'>Stay up to date</h1>
                <input type="text" placeholder='Your email address' className='bg-[#4D4D4D] px-2 py-1 text-gray-50 rounded text-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Footer