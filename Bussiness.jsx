import React from 'react'
import member from'../assets/member.svg';
import club from'../assets/clubs.svg';
import event from'../assets/event.svg';
import payment from'../assets/payment.svg';

const Bussiness = () => {
  return (
    <div className='h-[40vh] w-full flex bg-blue]'>
        <div className='h-full w-1/2 flex  flex-col justify-center items-start gap-5'>
            <h2 className='text-5xl px-30 leading-12 font-semibold text-black'>Helping a local <span className='text-green'>business reinvent itself</span></h2>
            <p className='pl-30 text-gray'>We reached here with our hardwork and dedication.</p>

        </div>

        <div className='h-full w-1/2 flex justify-center items-center gap-20'>
            <div className='flex flex-col gap-11'>
            <div className='flex gap-5'>
                <img src={member} alt="" />

                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-black'>2,245,341</h2>
                    <p className='text-gray'>Members</p>
                </div>
            </div>

            <div className='flex gap-5'>
                <img src={club} alt="" className='h-12'/>

                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-black'>46,328</h2>
                    <p className='text-gray'>Clubs</p>
                </div>
            </div>

            </div>

            <div className='flex flex-col gap-11'>
            <div className='flex gap-5'>
                <img src={event} alt="" />

                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-black'>828,267</h2>
                    <p className='text-gray'>Event Booking</p>
                </div>
            </div>

            <div className='flex gap-5'>
                <img src={payment} alt="" />

                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-black'> 1,926,436</h2>
                    <p className='text-gray'>Payments</p>
                </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Bussiness