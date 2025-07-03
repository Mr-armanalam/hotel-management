import { HiHomeModern } from "react-icons/hi2";

const Welcome = () => {
  return (
    <section className=" h-screen">
      <div className="flex items-center relative justify-center">
        <img
          src="/images/welcomeImage.jpg"
          alt="Welcome"
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute text-stone100 flex gap-4 flex-col items-center">
          <HiHomeModern className="text-3xl text-stone900 " />
          <p className="font-Poppins text-sm font-semibold shadow-lg">
            WELCOME TO HOTELIO
          </p>
          <h1 className="text-5xl font-Playfair max-w-[500px] text-center ">
            Comfort. Luxury. Experience Redefined
          </h1>
          <button
            disabled
            className="border font-Poppins text-stone-200 rounded font-semibold px-4 py-2 mt-3 text-xs"
          >
            Rooms & Lodge
          </button>
        </div>
      </div>
      <p className="bg-white px-8 mx-auto relative -top-3 text-stone900 rounded border shadow-2xl py-1 text-sm font-bold border-stone900 max-w-fit  flex-0 ">
        Reserve Your Dreame and Stay Now
      </p>
    </section>
  );
};

export default Welcome;
