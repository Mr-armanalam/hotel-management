import React from 'react'

const ContactHeader = () => {
  return (
    <div className='relative flex items-center justify-center w-full max-sm:h-[300px] h-[400px]'>
      <img src='/images/bed.jpg' className='w-full max-sm:h-[300px] h-[400px]' />
      <div className='absolute top-0 left-0 w-full h-full opacity-80 bg-black right-0 z-10' />
      <div className="absolute mt-20 text-center text-white z-20">
        <h1 className=' text-4xl font-Playfair'>Contact Us</h1>
        <p className="text-xs font-semibold mt-4">YOUR HOTELIO</p>
      </div>
    </div>
  )
}

export default ContactHeader