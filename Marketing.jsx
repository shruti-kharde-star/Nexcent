import React from 'react'
import Img5 from '../assets/img5.svg';
import Img6 from '../assets/img6.svg';
import Img7 from '../assets/img7.svg';
import { IoIosArrowRoundForward } from "react-icons/io";

const Marketing = () => {

 const market =[
  {
    img:Img5,
    heading:"Creating Streamlined Safeguarding Processes with OneRen."
  },
  {
    img:Img6,
    heading:"What are your responsibilities and how can you manage them?"
  },
  {
    img:Img7,
    heading:"Revamping the Membership Model with Triathlon Australia."
  }
 ]

  return (
    <div className='w-full h-[90vh]'>
        <div className='w-full h-[35%] flex flex-col justify-center items-center px-100 gap-4'> 
                <h2 className='font-bold text-black'>Caring is the new marketing</h2>
                <p className='text-center text-gray leading-6'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who‘s joining the community, read about how our community areincreasing their membership income and lot‘s more.</p>
        </div>
                               
        <div className='w-full h-[65%] flex justify-center items-start flex-wrap gap-20'> 
            {market.map((value) => (
                <div className='relative h-[67%] w-[24%]'>
                <img src={value.img} alt=""/>
              <div className='h-[30vh] w-[40vh] bg-white rounded px-3 text-center text-black flex flex-col justify-center items-center gap-4 shadow-2xl absolute top-[50%] left-[10%]'>
                  <h3>{value.heading}</h3>                      
                  <button className='bg-white text-green-500 text-lg'>Read more <IoIosArrowRoundForward className='text-xl pt-0.5'/></button>
              </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Marketing