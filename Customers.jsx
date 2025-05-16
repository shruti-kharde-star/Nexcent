import React from 'react'
import Img4 from '../assets/img4.svg';
import Client1 from '../assets/client1.svg';
import Client2 from '../assets/client2.svg';
import Client3 from '../assets/client3.svg';
import Client4 from '../assets/client4.svg';
import Client5 from '../assets/client5.svg';
import Client6 from '../assets/client6.svg';
import Client7 from '../assets/client7.svg';
import { IoIosArrowRoundForward } from "react-icons/io";

const Customers = () => {
  return (
    <div className='h-[60vh] w-full bg-blue flex '>
        <div className='h-full w-[30%] flex justify-end items-center pr-3'>
            <img src={Img4} alt="" />
        </div>

        <div className='h-full w-[70%] flex flex-col justify-center items-start pr-37 gap-3'>
          <p className='text-black  text-[17px] leading-6'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

          <h3 className='text-[23px] font-bold text-green-600'>Tim Smith</h3>
          
          <p className='text-black text-[17px]'>British Dragon Boat Racing Association</p>

          <div className='flex gap-11 h-13'>
              <img src={Client1} alt="" />
              <img src={Client2} alt="" />
              <img src={Client3} alt="" />
              <img src={Client4} alt="" />
              <img src={Client5} alt="" />
              <img src={Client6} alt="" />
              <img src={Client7} alt="" />
              <h2 className='text-[3vh] text-green-500 font-bold flex justify-center items-center'>Meet All Customers <IoIosArrowRoundForward className='pt-2 text-3xl'/></h2>
          </div>
        </div>
    </div>
  )
}

export default Customers