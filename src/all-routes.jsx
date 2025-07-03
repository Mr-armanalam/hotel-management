import { Route, Routes } from 'react-router-dom'
import Home from './modules/home/ui/home'
import Services from './modules/services/ui/services'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  )
}

export default AllRoutes