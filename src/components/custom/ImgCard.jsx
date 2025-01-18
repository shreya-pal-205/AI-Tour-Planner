import React from 'react'
import { BiSolidBookmarkHeart } from "react-icons/bi";

function ImgCard() {
    const cardData = [
        { id: 1, title: "Card 1", description: "This is card 1", image: "https://nitsaholidays.in/uploads/blog/588661nitsa.jpg" },
        { id: 2, title: "Card 2", description: "This is card 2", image: "https://i0.wp.com/www.bad-ems.info/wp-content/uploads/2024/05/aim_19561_1.jpg?w=800&ssl=1"},
        { id: 3, title: "Card 3", description: "This is card 3", image: "https://hips.hearstapps.com/hmg-prod/images/sunset-la-conciergerie-paris-france-royalty-free-image-1575853945.jpg"  },
        { id: 4, title: "Card 4", description: "This is card 4", image: "https://www.thrillophilia.com/blog/wp-content/uploads/2014/11/golden-temple-amritsar.jpg"},
       ]



  return (
    <div className='my-24'>
        <div className=' bg-gray-900 px-4 pt-24 relative'>
            <h2 className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-orange-600'><BiSolidBookmarkHeart /></h2>
            <h1 className='text-4xl font-bold text-center text-white'><span className='text-orange-500'>Overview </span>of Tranquil Travels</h1>
            <p className='text-sm text-slate-400 text-center mt-2 mb-8'>Every journey reshapes our worldview, teaching valuable lessons about life, resilience, and the <br /> importance of cherishing each moment.</p>
            <div className='flex flex-row space-x-8'>
      {cardData.map((item, i) => (
        <div className='my-8'>
            <img src={item.image} className='h-[250px] w-[300px] rounded-xl'/>
            <h2 className='text-white text-center text-sm'>{item.title}</h2>
            <p className='text-white text-center text-sm'>{item.description}</p>
        </div>
        
      ))}
    </div>
    </div>
    </div>
  )
}

export default ImgCard
