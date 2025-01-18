import React from 'react'
import { Link } from 'react-router-dom';
import SightSceneCards from './SightSceneCards';

function SightScene({trip}) {
  return (
    <div>
      <h1>Sightscene</h1>

      {trip?.tripData?.itinerary?.map((item, i) => (
        <div className="mt-8">
          <h2 className='font-bold text-xl'>🎗️Day {item?.day}</h2>
          {item?.plan?.map((place, i) => (
            <SightSceneCards place={place} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SightScene
