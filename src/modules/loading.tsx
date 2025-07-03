import { ImSpinner6 } from "react-icons/im";


const Loading = () => {
  return (
    <div className='w-screen bg-stone900/50 flex items-center justify-center h-[500px]'>
      <ImSpinner6 size={40} className='animate-spin text-white' />
      <p className='text-white text-lg ml-2'>Loading...</p>
    </div>
  )
}

export default Loading