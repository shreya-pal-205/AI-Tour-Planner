import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getPlaceDetails, PHOTO_URL } from '../../AI/GlobalApi';
import HotelCards from './HotelCards';

function HotelSection({trip}) {


  return (
    <div>
      <h1>Hotel Section</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((item, i) => (
          <HotelCards item={item} />
        ))}
      </div>
    </div>
  );
}

export default HotelSection
