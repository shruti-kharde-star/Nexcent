import React from 'react'
import icon1 from '../assets/icon1.svg';

const Community = () => {
  return (
    <div className="h-[75vh] w-full flex flex-col justify-center items-center pb-6">
        <div className="h-[40%] w-full flex flex-col justify-center items-center px-[27%] text-center gap-4"> 
        <h2 className="text-[6.5vh] font-semibold leading-14 text-black">Manage your entire community in a single system</h2>

        <p className='text-black'>Who is Nextcent suitable for?</p>
        
        </div>

        <div className="h-[60%] w-full flex justify-center items-center gap-16">
            <div className='h-[80%] w-[24%] flex flex-col justify-center items-center text-center gap-3'>
                <img src={icon1} alt="" />
                <h2 className='font-bold text-black'>Membership Organisations</h2>
                <p className='pt-3 leading-6 text-gray'>Our membership management software provides full automation of membership renewals and payments.</p>
            </div>

            <div className='h-[80%] w-[24%] flex flex-col justify-center items-center text-center gap-3'>
                <img src={icon1} alt="" />
                <h2 className='font-bold text-black'>National Associations</h2>
                <p className='pt-3 leading-6 text-gray'>Our membership management software provides full automation of membership renewals and payments.</p>
            </div>

            <div className='h-[80%] w-[24%] flex flex-col justify-center items-center text-center gap-3'>
                <img src={icon1} alt="" />
                <h2 className='font-bold text-black'>Clubs And Similar Groups</h2>
                <p className='pt-3 leading-6 text-gray'>Our membership management software provides full automation of membership renewals and payments.</p>
            </div>
        </div>
    </div>
  )
}

export default Community