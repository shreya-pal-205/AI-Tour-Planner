import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      <div className="background-container">
        <div className="floating-text">
          <h1 className='text-4xl font-bold text-white mb-4'>Welcome to Your <span className='text-orange-500'> Tranquil Travels </span></h1>
          <p className='text-sm text-slate-300'>From serene beaches to majestic mountains, travel offers the chance to witness nature's grandeur, connecting us to the beauty of our planet.</p>
        </div>
      </div>

      <div className='text-center mx-72 my-12'>
        <h3 className='text-lg font-bold text-orange-600'>Traveling immerses us in the vibrant tapestry of local customs, languages, and cuisines, fostering an appreciation for the world's diversity.For thrill-seekers, travel brings opportunities for adventures like hiking, diving, or paragliding, offering unforgettable adrenaline rushes.</h3>
      </div>
    </div>
  );
}

export default Hero
