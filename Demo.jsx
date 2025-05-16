import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Demo = () => {
  return (
    <div className='w-full h-[35vh] bg-blue px-[70vh] flex flex-col justify-center items-center gap-9'>
            <h1 className='text-5xl font-semibold leading-12 text-center'>Pellentesque suscipit fringilla libero eu.</h1>

            <button className='bg-green-600 rounded text-xl'>Get Demo <IoIosArrowRoundForward className='text-2xl pt-0.5'/></button>
    </div>
  )
}

export default Demo