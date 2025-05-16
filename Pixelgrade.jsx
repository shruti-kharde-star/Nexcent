import React from 'react'
import img2 from '../assets/img2.svg';

const Pixelgrade = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start sm:flex-row sm:justify-center sm:items-center sm:h-[65vh]">
        <div className="sm:h-full sm:w-1/4 sm:flex justify-center items-center">
            <img
              className=""
              src={img2}
              alt=""
            />
       </div>
    
        <div className=" w-full h-3/4 px-8 py-8 sm:h-full sm:w-1/2 flex flex-col justify-center items-start sm:pl-30">
    
            <h3 className=" text-4xl font-semibold sm:text-[6vh] leading-[55px] text-black">
            The unseen of spending three years at<span className="text-green-500"> Pixelgrade</span>
            </h3>
    
            <p className="text-[16px] text-gray py-3 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
    
            <button className="rounded mt-8 text-2xl text bg-green-600">
              Learn More
            </button>
    
        </div>
    </div>
  )
}

export default Pixelgrade