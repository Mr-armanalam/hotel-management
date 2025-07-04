import React, { Suspense } from 'react'
import Loading from '../../loading'

const Home = () => {
  const Welcome = React.lazy(() => import('../section/welcome'));
  const Highlights = React.lazy(() => import('../section/highlights'));
  const HotelBooking = React.lazy(() => import('../section/hotel-booking'));
  const BookingAccessibility = React.lazy(() => import('../section/booking-accessibility'));
  
  return (
    <Suspense fallback={<Loading />}>
      <Welcome />
      {/* <Highlights />
      <HotelBooking />
      <BookingAccessibility /> */}
    </Suspense>
  )
}

export default Home