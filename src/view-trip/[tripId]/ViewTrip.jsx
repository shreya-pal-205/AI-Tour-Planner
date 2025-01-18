import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSection from '../tripComponents/InfoSection';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../AI/FirebaseConfig';
import HotelSection from '../tripComponents/HotelSection';
import SightScene from '../tripComponents/SightScene';

function ViewTrip() {

    const {tripId} = useParams();
    const [trip, setTrip] = useState([]);


    useEffect(()=>{
        tripId && getTripData();
    },[tripId])

    const getTripData = async () =>{
        const docRef = doc(db,"AiTripData", tripId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Documnet:", docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such documnet");
        }
    }


  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>

      {/* Information Section */}
      <InfoSection trip={trip} />

      {/* Recommended Section */}
      <HotelSection  trip = {trip}/>

      {/* Sightscene Plan */}
      <SightScene trip = {trip} />
    </div>
  )
}

export default ViewTrip
