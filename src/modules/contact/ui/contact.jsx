import { lazy, Suspense } from 'react'
import Loading from '../../loading'

const Contact = () => {
  const ContactHeader = lazy(() => import('../section/contact-header'))
  const GetTouch = lazy(() => import('../section/get-touch'))
  const IMap = lazy(() => import('../section/map'))
  return (
    <Suspense fallback={<Loading />}>
      <ContactHeader />
      <GetTouch />
      <IMap />
    </Suspense>
  )
}

export default Contact