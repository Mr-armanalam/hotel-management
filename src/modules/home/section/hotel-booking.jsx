import React from 'react'
import BookRoom from '../components/book-room'

const roomData = [
  {
    roomType: 'Deluxe Room',
    price: '$200/night',
    src: '/images/deluxe_room.jpg'
  },
   {
    roomType: 'Standard Room',
    price: '$150/night',
    src: '/images/family_room.jpg'
  },
  {
    roomType: 'Suite Room',
    price: '$350/night',
    src: '/images/double_room2.jpg'
  }
 
]

const HotelBooking = () => {
  return (
    <div className='flex flex-col items-center py-24 bg-stone100 mt-16 gap-4'>
      <p className='text-stone950/60 text-xs'>CUSTOMER SERVICES</p>
      <h2 className='text-4xl font-Playfair max-lg:w-full max-w-[300px] text-center mb-8'>Book your room & Enjoy the life</h2>
      <div className="flex max-lg:flex-wrap max-lg:justify-center max-lg:px-8 gap-4">
        {roomData.map((data, index) => (
          <BookRoom key={index} {...data} />
        ))}
      </div>
    </div>
  )
}

export default HotelBooking