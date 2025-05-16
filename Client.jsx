import React from 'react'
import Client1 from '../assets/client1.svg';
import Client2 from '../assets/client2.svg';
import Client3 from '../assets/client3.svg';
import Client4 from '../assets/client4.svg';
import Client5 from '../assets/client5.svg';
import Client6 from '../assets/client6.svg';
import Client7 from '../assets/client7.svg';

const Client = () => {
  return (
    <div className=" w-full h-[60vh] flex justify-center items-center px-2 sm:w-full sm:h-[50vh] sm:flex flex-col">
        <h1 className=" text-3xl sm:text-5xl font-semibold text-black">Our Clients</h1>
        <p className="text-center leading-6 text-[17px] sm:text-black">We have been working with some Fortune 500+ clients</p>

        <div className="flex gap-0 mt-7 sm:flex justify-center items-center sm:gap-40 sm:mt-15">
            <img src={Client1} alt="" />
            <img src={Client2} alt="" />
            <img src={Client3} alt="" />
            <img src={Client4} alt="" />
            <img src={Client5} alt="" />
            <img src={Client6} alt="" />
            <img src={Client7} alt="" />
        </div>
    </div>
  )
}

export default Client