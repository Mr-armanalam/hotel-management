import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './modules/home/ui/home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  )
}

export default AllRoutes