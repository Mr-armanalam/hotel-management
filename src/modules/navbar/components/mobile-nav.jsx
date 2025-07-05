import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";


const MobileNav = ({ isActive }) => {
    const [isToggle, setisToggle] = useState(false);

  return (
    <div className="flex text-white relative items-center w-full justify-between sm:hidde">
      <a href="/" className={`text-2xl`}>
        HOTELIO
      </a>
      <FaBars onClick={() => setisToggle(!isToggle)} className={isToggle && 'hidden'} size={25} />
      <div onClick={() => setisToggle(!isToggle)} className={`absolute -right-2 -top-1.5 w-[70vw] h-screen bg-stone950/90  border-l px-8 py-6 border-stone100 ${!isToggle && 'hidden'}`}>
        <ImCross size={18} className="ml-auto" />
        <ul className="flex mt-8 flex-col text-sm space-y-4">
          <li className="hover:bg-stone100/20 rounded-sm py-1.5 hover:px-2">
            <a href="/" className={`${isActive("/")} `}>
              Home
            </a>
          </li>
          <li className="hover:bg-stone100/20 rounded-sm py-1.5 hover:px-2">
            <a href="/services" className={isActive("/services")}>
              Services
            </a>
          </li>
          <li className="hover:bg-stone100/20 rounded-sm py-1.5 hover:px-2">
            <a href="/contact" className={isActive("/contact")}>
              Contact
            </a>
          </li>
        </ul>

        <button
          disabled
          className="px-4 py-1.5 h-8 mt-6 bg-stone900 font-bold rounded text-stone100 text-[10px] sm:hidden"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
