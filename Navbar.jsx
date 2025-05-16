import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <>
    <div className="h-[13vh] w-full flex items-center justify-center px-2 sm:h-[11vh]">

        <div className="h-full w-1/2 flex items-center justify-start sm:w-1/3 gap-2 pl-29">
            <img src={logo} alt="" />
            <h1 className="text-[20px] font-semibold sm:text-4xl">Nexcents</h1>
        </div>

        <div className="hidden sm:flex items-center justify-end gap-7 pr-[60px] h-full w-2/3  text-xl">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Community</a>
            <a href="#">Blogs</a>
            <a href="#">Pricing</a>

            <button>Register Now</button>
        </div>

        <div className="h-full w-1/2 flex justify-end items-center sm:hidden">
            <AiOutlineMenu className="text-2xl"/>
        </div>
        .
    </div>
    </>
  )
}

export default Navbar