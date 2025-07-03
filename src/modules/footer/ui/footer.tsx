import React from 'react'
import About from '../components/About'
import ServiceLink from '../components/ServiceLink'
import NewsLetter from '../components/news-letters'
import Information from '../components/information'

const Footer = () => {
  return (
    <footer className='h-fit bg-stone950 text-white flex'>
      <div className="mx-auto gap-x-10 text-xs flex w-full justify-between py-16 max-w-[1000px]">
        <About />
        <ServiceLink />
        <Information />
        <NewsLetter />
      </div>
    </footer>
  )
}

export default Footer