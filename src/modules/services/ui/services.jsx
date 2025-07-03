import { lazy, Suspense } from 'react'
import ServiceTypes from '../section/service-types'
import Loading from '../../loading'

const Services = () => {
  const ServicesHeader = lazy(() => import('../section/services-header'));
  const RoomTypes = lazy(() => import('../section/room-types'));
  
  return (
    <Suspense fallback={<Loading />}>
      <ServicesHeader />
      <ServiceTypes />
      <RoomTypes />
    </Suspense>
  )
}

export default Services