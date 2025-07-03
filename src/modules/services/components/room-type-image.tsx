import React from "react";

const RoomTypeImage = ({ src, colspan,price = 150, roomtype='Double Room' }) => {
  return (
    <div
      className={`w-full ${colspan === 2 ? "col-span-2" : "col-span-1"} relative h-[230px]`}
    >
      <img
        src={src}
        alt="room_type_image"
        className='w-full h-[230px]'
      />
      <div className="absolute text-white py-4 px-6 text-right bottom-0 right-0">
        <h3 className="font-Playfair">{roomtype}</h3>
        <p className="text-[10px] font-Poppins">{price}$/NIGHT</p>
      </div>
    </div>
  );
};

export default RoomTypeImage;
