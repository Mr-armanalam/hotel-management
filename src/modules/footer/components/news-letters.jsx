import { FaTelegramPlane } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='lg:flex-1/4 md:flex-1/3 md:pl-6 lg:pl-0'>
      <h1 className='text-2xl text-stone100 font-Playfair'>NewsLetter</h1>

      <p className='text-xs text-white/90 mt-6'>
        Subscribe to our newsletter to get the latest updates and offers.
      </p>
      <form className='mt-4 flex '>
        <input
          type='email'
          placeholder='Enter your email'
          className='px-4 py-2 text-xs rounded-l-md  bg-white/10 text-white placeholder:text-white/50 focus:outline-none  '
          required
        />
        <button
          type='submit'
          className=' px-4 py-2 bg-stone900 rounded-r-md text-white hover:bg-blue-700  transition-colors'
        >
          <FaTelegramPlane size={15} />
        </button>
      </form>
      <p className='text-xs text-white/70 mt-4'>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}

export default NewsLetter