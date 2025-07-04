import { lazy, Suspense } from 'react'
import IMap from '../section/map'
import Loading from '../../loading'

const Contact = () => {
  const ContactHeader = lazy(() => import('../section/contact-header'))
  const GetTouch = lazy(() => import('../section/get-touch'))
  return (
    <Suspense fallback={<Loading />}>
      <ContactHeader />
      <GetTouch />
      <IMap />
    </Suspense>
  )
}

export default Contact