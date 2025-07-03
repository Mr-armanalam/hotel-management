import React from 'react'

const NavbarItems = () => {
  return (
    <nav className='flex z-50 absolute left-0 right-0 text-stone100 justify-center' >
      <div className="flex items-center font-Playfair py-1.5 border-b border-stone900 max-w-[1000px] justify-between flex-1">
        <div className="flex items-center space-x-16">
          <a href="/" className='text-2xl ' >HOTELIO</a>
          <ul className='flex text-sm space-x-8'>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <button disabled className=' px-4 py-1.5 h-full bg-stone900 font-bold rounded text-stone100 text-[10px] '>BOOK NOW</button>
      </div>
    </nav>
  )
}

export default NavbarItems