

const NavbarItems = () => {
  const pathname = window.location.pathname;
  const isAbsolute = () => pathname !== '/services' ? 'absolute text-stone100 ' : 'relative text-stone950';
  const isActive = (path) => pathname === path && 'underline';
  return (
    <nav className={`flex z-50 ${isAbsolute()} left-0 right-0 justify-center `} >
      <div className="flex items-center font-Playfair py-1.5 border-b border-stone900 max-w-[1000px] justify-between flex-1">
        <div className="flex items-center space-x-16">
          <a href="/" className={`text-2xl`} >HOTELIO</a>
          <ul className='flex text-sm space-x-8'>
            <li><a href="/" className={isActive('/')}>Home</a></li>
            <li><a href="/services" className={isActive('/services')}>Services</a></li>
            <li><a href="/contact" className={isActive('/contact')}>Contact</a></li>
          </ul>
        </div>
        <button disabled className=' px-4 py-1.5 h-full bg-stone900 font-bold rounded text-stone100 text-[10px] '>BOOK NOW</button>
      </div>
    </nav>
  )
}

export default NavbarItems