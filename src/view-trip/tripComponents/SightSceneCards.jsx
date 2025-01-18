import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlaceDetails, PHOTO_URL } from "../../AI/GlobalApi";

function SightSceneCards({place}) {


    const [photoUrl, setPhotoUrl] = useState();
        
        
          useEffect(()=>{
            place && getPlacePhoto();
          },[place])
        
          const getPlacePhoto = async () => {
        
            const data = {
              textQuery: place?.placeName
            }
        
            const result = await getPlaceDetails(data).then(resp=>{
              console.log(resp.data.places[0].photos[2].name)
        
              const PhotoUrl = PHOTO_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
              setPhotoUrl(PhotoUrl);
            })
          }





  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.placeName}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-6 flex flex-row gap-10 shadow-md">
        <img src={photoUrl} className="h-[150px] w-[200px] rounded-lg" />
        <div>
          <h2 className="font-bold text-xl">{place?.placeName}📍</h2>
          <h4 className="text-md">{place?.placeDetails}</h4>
          <h4 className="font-bold text-sm mt-4">
            Best time to visit ⌚:-{" "}
            <span className="font-normal">{place?.bestTimeToVisit}</span>
          </h4>
          <h4 className="font-bold text-sm">
            🎟️Ticket Pricing:-{" "}
            <span className="font-normal">{place?.ticketPricing}</span>
          </h4>
          <h4 className="font-bold text-sm">
            Time to travel ⌛:-{" "}
            <span className="font-normal">{place?.timeToTravel}</span>
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default SightSceneCards;
