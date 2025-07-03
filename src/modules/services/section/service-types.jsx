import React from 'react'
import { FaCar } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdLunchDining } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";


const icons = [
  {
    icon: IoBedOutline,
    title: 'Room Service',
  },
  {
    icon: IoEarthOutline,
    title: 'Travel Assistance',
  },
  {
    icon: FaWifi,
    title: 'Free Wi-Fi',
  },
  {
    icon: MdLunchDining,
    title: 'Restaurant',
  },
  {
    icon: LiaSwimmingPoolSolid,
    title: 'Swimming Pool',
  },
  {
    icon: FaCar,
    title: 'Car Rental',
  }
]


const ServiceTypes = () => {
  return (
    <section  className='mb-20 flex flex-col items-center justify-center'>
      <div className="text-center mb-12 mt-8">
        <p className="text-sm font-Playfair text-gray-900/80">HOTELIO SERVICES </p>
        <h2 className="text-4xl mt-2 font-Playfair">Hotel Facilities</h2>
      </div>
      <div className="grid gap-4 grid-cols-3 w-full max-w-[1000px]">
        {Array.from({ length: 6 }).map((_, index) => {
          const IconComponent = icons[index].icon;
          return (
            <div key={index} className='border text-center px-8 gap-y-4 border-stone100 flex flex-col items-center h-[190px]'>
              <div className='h-3 w-28 bg-stone100' />
              <IconComponent className='text-4xl text-stone900' />
              <h1 className='text-xl font-Playfair'> {icons[index].title}</h1>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default ServiceTypes