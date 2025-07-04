import { LuPhoneCall } from "react-icons/lu";
import Form from '../components/form'
import ReachOut from '../components/reach-out'
import { TiMail } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";


const contactData = [
  {
    icon: LuPhoneCall,
    title: 'Have any question?',
    type: '+91 8322667763'
  },
  {
    icon: TiMail,
    title: 'Write email',
    type: 'needhelp@company.com'
  },
  {
    icon: FaTelegramPlane,
    title: 'Visit anytime',
    type: '07 pune maharashtra, India'
  }
]

const GetTouch = () => {
  return (
    <div className="flex my-20 justify-center">
      <div className='grid max-w-[980px] gap-x-8 flex-1 grid-cols-2'>
        <div>
          <div className='mb-8'>
            <p className='text-xs text-stone950/60'>SEND US EMAIL</p>
            <h1 className='text-4xl font-Playfair mt-2'>Feel free to write</h1>
          </div>
          <Form />
        </div>

        <div className="text-xs flex flex-col gap-y-2">
            <p className='text-xs text-stone950/60'>NEED ANY HELP</p>
            <h2 className='text-4xl font-Playfair'>Get in touch with us</h2>
            <p className="my-4 text-stone950/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa ipsum porro quam, illum asperiores suscipit voluptate iusto. istinctio ipsa ipsum porro quam, illum istinctio ipsa ipsum porro quam, illum</p>

            {
              contactData.map((data, index) => (
                <ReachOut key={index} {...data} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default GetTouch