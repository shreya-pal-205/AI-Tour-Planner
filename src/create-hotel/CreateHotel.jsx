import React, { useEffect, useState } from 'react'
import { AI_PROMPT_HOTEL, SelectBudgetList } from '../constants/Options';
import { useNavigate } from 'react-router-dom';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { chatSession } from '../AI/AiModel';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../AI/FirebaseConfig';
import "../App.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";




function CreateHotel() {


    const apiKey = import.meta.env.VITE_GOOGLE_APIKEY;

    const [place, setPlace] = useState();
    const [formData, setFormData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);



  const navigate = useNavigate();
  const handleInputChange = (name,value) =>{

    setFormData({
      ...formData,
      [name]:value
    })
  }
  useEffect(()=>{
    console.log(formData);
  },[formData])





  const onGenerateHotel = async () =>{
    if(!formData?.location){
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Please enter all the details please!!!</p>
        </div>
      </dialog>;

      setIsModalOpen(true);
      return;
    }

    setLoading(true)
    const FINAL_PROMPT = AI_PROMPT_HOTEL
        .replace('{location}', formData?.location?.label)
        .replace('{budget}', formData?.budget)


    console.log(FINAL_PROMPT)
    
    
    const result = await chatSession.sendMessage(FINAL_PROMPT)
    
    
    console.log(result?.response?.text());

    setLoading(false);
    saveAiHotelData(result?.response?.text())
        
  }


    const saveAiHotelData = async (hotelData) => {
      // Add a new document in collection "AiTripData"
      setLoading(true)
      const docId = Date.now().toString()
      await setDoc(doc(db, "AiHotelData", docId), {
        userSelection: formData,
        tripData: JSON.parse(hotelData),
        id: docId,
      });
      setLoading(false)
      navigate('/view-hotel/' + docId)
    };




  return (
    <div>
      <div className="hotel-background text-center">
        <h1 className="mt-48 text-4xl text-white font-bold">
          View the <span className='text-orange-600'> Best </span>Hotels
        </h1>
        <h4 className="text-sm text-stone-300 ">
        From budget-friendly to lavish  escapes, book your dream <br />hotel today...Make every trip memorable—choose  the perfect hotel for your perfect adventure!
        </h4>
      </div>





      
      <div className="sm:px-10 md:px-16 flex gap-5 my-48" >
        <div className=''>
          <img src="/hotel.jpg" alt="" className='w-[550px] h-[530px] rounded-2xl' />
        </div>
        <div>
        <div className="">
          <h3>What is your destination of choice?</h3>


          <GooglePlacesAutocomplete
            apiKey={apiKey}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        <div className="mt-16">
          <h3>How many days are you planning your trip?</h3>
          <div className="grid grid-cols-2 gap-5">
            {SelectBudgetList.map((item, i) => (
              <div
                key={i}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border rounded shadow-md  ${
                  formData?.budget == item.title && "shadow-lg border-black"
                } `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <button
          disabled={loading}
            className="btn btn-active btn-neutral"
            onClick={onGenerateHotel}>
            {loading? <AiOutlineLoading3Quarters className='h-[7] w-[50] animate-spin bg-black' />: "Generate Hotel"}
          </button>

          {isModalOpen && (
            <dialog id="my_modal_3" className="modal" open>
              <div className="modal-box">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setIsModalOpen(false)} // Close the modal
                >
                  ✕
                </button>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Please enter all the details!</p>
              </div>
            </dialog>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default CreateHotel
