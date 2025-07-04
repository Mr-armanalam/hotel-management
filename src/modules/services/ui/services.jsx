import { lazy, Suspense } from 'react'
import Loading from '../../loading'

const Services = () => {
  const ServicesHeader = lazy(() => import('../section/services-header'));
  const ServiceTypes = lazy(() => import('../section/service-types'))
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