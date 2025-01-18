import React, { useEffect, useState } from 'react'
import { getPlaceDetails, PHOTO_URL } from '../../AI/GlobalApi'





function InfoSection({trip}) {

  const [photoUrl, setPhotoUrl] = useState();


  useEffect(()=>{
    trip && getPlacePhoto();
  },[trip])

  const getPlacePhoto = async () => {

    const data = {
      textQuery: trip?.userSelection?.location?.label
    }

    const result = await getPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[2].name)

      const PhotoUrl = PHOTO_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }




  return (
    <div>
        <img src={photoUrl} alt="" className='w-full h-[400px] rounded-xl'/>

        <div>
            <h2 className='font-bold text-2xl mt-4 mb-4'>{trip?.userSelection?.location?.label}</h2>
        </div>

        <div className='flex flex-row gap-5'>
            <div className='bg-orange-200 p-4 rounded-lg'>📅{trip?.userSelection?.noOfDays} Days</div>
            <div className='bg-orange-200 p-4 rounded-lg'>💸{trip?.userSelection?.budget} Budget</div>
            <div className='bg-orange-200 p-4 rounded-lg'>🧑‍🤝‍🧑No of people travelling: {trip?.userSelection?.noOfPeople}</div>
        </div>
      </div>

  )
}

export default InfoSection
