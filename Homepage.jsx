import React from 'react';
import homepageImg from '../assets/img1.svg';

const Homepage = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start sm:flex-row sm:justify-center sm:items-center sm:h-[65vh]">

      <div className=" w-full h-1/2 px-8 py-8 sm:h-full sm:w-1/2 flex flex-col justify-center items-start sm:px-32">

        <h3 className=" text-4xl font-semibold sm:text-5xl leading-[55px] text-black">
          Lessons and insights <span className="text-green-500">from 8 years</span>
        </h3>

        <p className="text-[16px] text-black py-3">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button className="rounded mt-8 text-2xl">
          Register
        </button>

      </div>

     
      <div className="sm:h-full sm:w-1/2 sm:flex justify-center items-center">
        <img
          className=""
          src={homepageImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Homepage;


