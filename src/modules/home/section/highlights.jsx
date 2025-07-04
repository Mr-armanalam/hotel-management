import { MdOutlineLight } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";

const Highlights = () => {
  return (
    <section className="flex max-lg:flex-wrap text-stone950">
      <div className="flex mx-auto flex-1 p-8 md:gap-16 mb-12 h-fit max-sm:flex-wrap max-sm:gap-y-16 max-lg:w-full max-w-[1000px]">
        <div className="h-[400] relative w-[700px]">
          <img
            src="/images/bed.jpg"
            alt="Hotelio"
            className="w-full h-full rounded object-fill"
          />
          <img 
            src="/images/dinner.jpg"
            alt="Hotelio"
            className="absolute z-10 top-0 left-0 w-full h-full rounded object-fill opacity-0 hover:opacity-100 transition-opacity duration-600"
          />
          <img
            src="/images/amenities.jpg"
            alt="Hotelio"
            className="absolute z-20 -bottom-8 -right-2 w-[150px] h-[150px] rounded object-fill "
          />
        </div>

        <div className="h-fit w-fit flex flex-col gap-y-4 ">
          <p className=" font-bold font-Playfair text-stone950/80">Hotelio👋</p>
          <h1 className="text-4xl font-Playfair pr-8">
            Most Luxorius rooms and lodges in India
          </h1>
          <p className="font-Poppins text-stone950/70 my-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            voluptates, nostrum voluptatibus ipsam dolores odit minus dolor ad
            mollitia, dignissimos, quod dolorum unde aspernatur fugiat? Libero
            alias deleniti ex doloremque! Odit dolorem maxime vero laborum et.
          </p>

          <div className="flex gap-x-16 font-Playfair">
            <div className="flex items-center gap-x-4 max-w-[150px]">
              <MdOutlineLight size={70}/>
              <p>Best Lighting</p>
            </div>
            <div className="flex items-center gap-x-4 max-w-[200px]">
              <FaSwimmer size={70} />
              <p>The Best Swimming</p>
            </div>
          </div>
          <div className="flex mt-2 gap-x-20">
            <button className="text-white text-xs px-4 font-semibold py-2.5 rounded bg-stone900">DISCOVER MORE</button>
            <div className="flex items-center gap-x-4">
              <PiCallBellFill size={35} className="text-stone900/70" />
              <p className="text-sm text-stone-950/80">BOOKING NOW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
