import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../AI/FirebaseConfig';
import HotelListSection from '../hotelComponents/HotelListSection';

function ViewHotel() {


    const {hotelId} = useParams();
    const [hotel, setHotel] = useState([]);


    useEffect(()=>{
        hotelId && getTripData();
    },[hotelId])

    const getTripData = async () =>{
        const docRef = doc(db,"AiHotelData", hotelId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Documnet:", docSnap.data());
            setHotel(docSnap.data());
        }
        else{
            console.log("No such documnet");
        }
    }



  return (
    
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
    {/* Information Section */}
    <HotelListSection hotel={hotel} />

  </div>
  )
}

export default ViewHotel
