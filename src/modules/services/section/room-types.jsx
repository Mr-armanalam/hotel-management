import RoomTypeImage from "../components/room-type-image"


const RoomTypes = () => {
  return (
    <div className='bg-stone100 pb-28 pt-6 flex flex-col items-center justify-center'>
      <div className="text-center mb-12 mt-18">
        <p className="text-sm font-Playfair text-gray-900/80">HOTELIO LUXURY ROOMS</p>
        <h2 className="text-4xl mt-2 font-Playfair">Luxury Rooms & Lodges</h2>
      </div>
      <div className="flex-1 max-w-[1000px] grid gap-6 grid-rows-2">
        <div className='grid gap-6 grid-cols-2'>
          <RoomTypeImage src={'/images/junior_suite.jpg'} />
          <RoomTypeImage src={'/images/family_room.jpg'} />
        </div>
        <div className='grid gap-6 grid-cols-4'>
          <RoomTypeImage src={'/images/double_room1.jpg'} />
          <RoomTypeImage colspan={2} src={'/images/double_room2.jpg'} />
          <RoomTypeImage src={'/images/deluxe_room.jpg'} />
        </div>
      </div>
    </div>
  )
}

export default RoomTypes