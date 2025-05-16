import React from 'react'
import Img3 from '../assets/img3.svg';

const Design = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start sm:flex-row sm:justify-center sm:items-center sm:h-[65vh]">
    <div className="sm:h-full sm:w-1/4 sm:flex justify-center items-center">
        <img
          className=""
          src={Img3}
          alt=""
        />
   </div>

    <div className=" w-full h-3/4 px-8 py-8 sm:h-full sm:w-1/2 flex flex-col justify-center items-start sm:pl-30">

        <h3 className=" text-4xl font-semibold sm:text-[6vh] leading-[55px] text-black">
        How to design your site footer like<span className="text-green-500"> we did ?</span>
        </h3>

        <p className="text-[16px] text-gray py-3 leading-6">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>

        <button className="rounded mt-8 text-2xl text bg-green-600">
          Learn More
        </button>

    </div>
</div>
  )
}

export default Design