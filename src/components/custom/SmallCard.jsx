import React from 'react'
import { FaHotel } from "react-icons/fa6";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { BiSolidBed } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

function SmallCard() {
   const cardData = [
    { id: 1, title: "Card 1", description: "This is card 1", image: <FaHotel /> },
    { id: 2, title: "Card 2", description: "This is card 2", image: <PiAirplaneInFlightFill />  },
    { id: 3, title: "Card 3", description: "This is card 3", image: <BiSolidBed />    },
    { id: 4, title: "Card 4", description: "This is card 4", image: <FaRegHeart />},
   ]



  return ( 
    <div className='sm:px-12 md:px-32 lg:px-52 my-28'>
        <h1 className='text-4xl font-bold text-center'>Travel Tour Guidance</h1>
    <div className='flex flex-row space-x-16'>
      {cardData.map((item,i) => (
        <div className='h-[140px] w-[300px] my-8 border-gray-300 border-4 rounded-xl'>
            <h2 className='text-8xl text-orange-600 m-6'>{item.image}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SmallCard
