import { IoEarthOutline } from "react-icons/io5";
import { FaHouseTsunami } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";


const BookingAccessibility = () => {
  return (
    <div className="flex max-lg:px-4 my-18 justify-center">
      <div className="w-[960px] max-lg:w-full flex gap-y-8 flex-col ">
        <h4 className="text-4xl font-Playfair text-stone950 max-sm:text-3xl max-lg:w-full max-w-[400px]">Our goal is Ensure Hotel Booking Accessibility</h4>
        <div className="flex gap-x-8 max-lg:flex-wrap max-lg:gap-y-4 justify-between">
          <div className="flex gap-6">
            <FaHouseTsunami size={50} className="text-stone900" />
            <div className="flex flex-col gap-y-2">
              <h5 className="font-Playfair">Pick up & Drop</h5>
              <p className="max-w-[300px] max-sm:max-w-[250px] text-justify text-xs text-stone950/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium dolore doloribus sit amet consectetur
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <FaWifi size={50} className="text-stone900" />
            <div className="flex flex-col gap-y-2">
              <h5 className="font-Playfair">Pick up & Drop</h5>
              <p className="max-w-[300px] max-sm:max-w-[250px] text-xs text-justify text-stone950/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium dolore doloribus vitae eveniet under.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <IoEarthOutline size={50} className="text-stone900" />
            <div className="flex flex-col gap-y-2">
              <h5 className="font-Playfair">Pick up & Drop</h5>
              <p className="max-w-[300px] max-sm:max-w-[250px] text-justify text-xs text-stone950/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium dolore doloribus vitae eveniet under.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAccessibility;
