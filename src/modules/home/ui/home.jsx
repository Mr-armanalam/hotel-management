import Highlights from '../section/highlights'
import React, { Suspense } from 'react'
import Loading from '../../loading'

const Home = () => {
  const Welcome = React.lazy(() => import('../section/welcome'));
  
  return (
    <Suspense fallback={<Loading />}>
      <Welcome />
      <Highlights />
    </Suspense>
  )
}

export default Home