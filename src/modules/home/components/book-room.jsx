import { FaWifi } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";


const BookRoom = ({ roomType, price, src }) => {
  return (
    <a href="/"  className="bg-white rounded max-sm:w-full w-[300px]">
      <img src={src} alt="room" className="w-full h-[200px] rounded-t-md" />
      <div className="mx-6 py-2 border-b border-stone950/20">
        <h3 className="pt-2 font-Playfair">{roomType}</h3>
        <p className="text-xs text-stone950/70">{price}</p>
      </div>
      <div className="grid text-stone950/70 mx-6 pt-4 pb-6 text-xs grid-cols-2">
        <div className="flex items-center gap-2">
          <IoPersonCircleOutline size={17} />
          <p>1-2 Person</p>
        </div>
        <div className="flex items-center gap-2">
          <TbBath size={17} />
          <p>Bathtub</p>
        </div>
        <div className="flex items-center gap-2">
          <IoBedOutline size={17} />
          <p>King Size Bed</p>
        </div>
        <div className="flex items-center gap-2">
          <FaWifi size={17} />
          <p>Free Wifi</p>
        </div>
      </div>
    </a>
  );
};

export default BookRoom;
