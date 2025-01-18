import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlaceDetails, PHOTO_URL } from "../../AI/GlobalApi";

function HotelCards({item}) {

    const [photoUrl, setPhotoUrl] = useState();
    
    
      useEffect(()=>{
        item && getPlacePhoto();
      },[item])
    
      const getPlacePhoto = async () => {
    
        const data = {
          textQuery: item?.hotelName
        }
    
        const result = await getPlaceDetails(data).then(resp=>{
          console.log(resp.data.places[0].photos[2].name)
    
          const PhotoUrl = PHOTO_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
          setPhotoUrl(PhotoUrl);
        })
      }





  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        item?.hotelName +
        "," +
        item?.hotelAddress
      }
      target="_blank"
    >
      <div>
        <img src={photoUrl} className="h-[150px] w-[200px] rounded-lg" />

        <div>
          <h2 className="font-bold text-lg">{item?.hotelName}</h2>
          <p className="text-xs text-slate-600 my-2">{item?.hotelAddress}</p>
          <h4 className="font-semibold text-md">Rating:{item?.rating}✨</h4>
        </div>
      </div>
    </Link>
  );
}

export default HotelCards;
