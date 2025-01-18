import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { AI_PROMPT, SelectBudgetList, SelectTripList } from '../constants/Options';
import { chatSession } from '../AI/AiModel';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../AI/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";





function CreateTrip() {

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






  const onGenerateTrip = async () =>{
    if (formData?.noOfDays > 20 || !formData?.location || !formData?.budget || !formData?.noOfPeople){

    
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
    const FINAL_PROMPT = AI_PROMPT
    .replace('{location}', formData?.location?.label)
    .replace('{noOfDays}', formData?.noOfDays)
    .replace('{noOfPeople}', formData?.noOfPeople)
    .replace('{budget}', formData?.budget)
    .replace('{noOfDays}', formData?.noOfDays)

    console.log(FINAL_PROMPT)


    const result = await chatSession.sendMessage(FINAL_PROMPT)


    console.log(result?.response?.text());

    setLoading(false);
    saveAiTripData(result?.response?.text())
  }

  const saveAiTripData = async (tripData) => {
    // Add a new document in collection "AiTripData"
    setLoading(true)
    const docId = Date.now().toString()
    await setDoc(doc(db, "AiTripData", docId), {
      userSelection: formData,
      tripData: JSON.parse(tripData),
      id: docId,
    });
 
    setLoading(false)
    navigate('/view-trip/' + docId)
  };

  return (
    <div>

      <div className="trip-background text-center">
        <h1 className="mt-48 text-4xl text-white font-bold">
          View the <span className='text-orange-600'>Best Hotels</span>  
        </h1>
        <h4 className="text-sm text-stone-300 ">
        From budget-friendly to lavish  escapes, book your dream <br />hotel today...Make every trip memorable—choose  the perfect hotel for your perfect adventure!
        </h4>
      </div>




      <div className="sm:px-10 md:px-32 mt-10 flex gap-28 mt-32">
        <div>
          <img src="/trip1.webp" alt="" className='h-[300px] w-[350px]' />
          <img src="/trip2.jpg" alt="" className='h-[250px] w-[400px] mt-24'/>
          <img src="/trip3.png" alt="" className='h-[250px] w-[400px] mt-24'/>
        </div>



        <div>
       <div className="">
          <h3>What is your destination of choice?</h3>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyAAzEP47wo3n1ydCp-WTdZ6_qAWWPfWrNA"
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        <div className="mt-8">
          <h3>How many days are you planning your trip?</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
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

        <div className="mt-16">
          <h3>Who do you plan on travelling with on your next adventure?</h3>
          <div className="grid grid-cols-2 gap-5">
            {SelectTripList.map((item, i) => (
              <div
                key={i}
                onClick={() => handleInputChange("noOfPeople", item.people)}
                className={`p-4 border rounded shadow-lg  ${
                  formData?.noOfPeople == item.people &&
                  "shadow-lg border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.people}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8">
          <button
            disabled={loading}
            className="btn btn-active btn-neutral"
            onClick={onGenerateTrip}>
              {loading? <AiOutlineLoading3Quarters className='h-[7] w-[50] animate-spin bg-black' />: "Generate Trip"}
            
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

export default CreateTrip
