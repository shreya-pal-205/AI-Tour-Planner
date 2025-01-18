import React from 'react'

function TajMahal() {
  return (
    <div className='sm:px-10 md:px-28 my-48'>
    <div className='flex flex-row'>
      <div> 
        <img src="https://img.freepik.com/premium-photo/3d-render-taj-mahal-isolated-transparent-background_1165404-62924.jpg" alt="" className='h-[500px] w-full' />
      </div>
      <div className='text-center ml-12'>
        <h1 className='text-4xl font-bold text-center mb-8'><span className='text-orange-500'>Overview </span>of Website</h1>
        <p className='text-lg font-medium'>Tranquil Travels simplifies your travel planning with AI-driven features. <br /> It generates personalized hotel recommendations <br />based on your location and budget. You can also create customized trip plans <br />by specifying the destination, number of travelers, and budget, with <br />the system suggesting the best itinerary. For flights, enter your<br /> start and end airport codes to check real-time flight <br />availability and prices via an integrated API, ensuring you get<br /> accurate options. Whether for leisure or business, <br />Tranquil Travels makes planning your journey effortless and efficient.</p>
        <button className='btn bg-orange-600 text-white mt-8 text-lg'>Click to View</button>
      </div>
    </div>
    </div>
  )
}

export default TajMahal
