import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const CreateFlight = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [originLocationCode, setOriginLocationCode] = useState("");
  const [destinationLocationCode, setDestinationLocationCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);

  // Replace these with your Amadeus API credentials
  const API_KEY = "j077OUqGgVxbmSFaAeTrVz2tMmk4lk67";
  const API_SECRET = "WJ3G3VDUllVDAWZT";

  const fetchFlights = async () => {
    try {
      setLoading(true);
      setError(null);

      // Step 1: Get Access Token
      const tokenResponse = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: API_KEY,
          client_secret: API_SECRET,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;

      // Step 2: Fetch Flight Offers
      const flightResponse = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            originLocationCode,
            destinationLocationCode,
            departureDate,
            adults,
          },
        }
      );

      setFlights(flightResponse.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!originLocationCode || !destinationLocationCode || !departureDate || adults < 1) {
      setError("Please fill all the fields correctly!");
      return;
    }
    fetchFlights();
  };

  return (
    <div>
      <div className="flight-background text-center">
        <h1 className="mt-48 text-4xl text-slate-100 font-bold">
          Flight <span className="text-orange-600"> Booking</span>
        </h1>
        <h4 className="text-md text-gray-300">
        Simply enter your departure and destination airport codes, travel date, and number of passengers. The system will instantly <br /> show a list of flights, complete with prices, departure and arrival times, number of stops, and airline <br />  details, making it easy to choose the best flight for your trip.
        </h4>

        {/* Input Fields */}
        <div className="sm:px-10 md:px-32 lg:px-48">
          <div className="mt-8 border shadow-gray-600">
            <input
              type="text"
              name="originLocationCode"
              placeholder="Starting Location Code"
              value={originLocationCode}
              onChange={(e) => setOriginLocationCode(e.target.value)}
              className="m-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="destinationLocationCode"
              placeholder="Destination Location Code"
              value={destinationLocationCode}
              onChange={(e) => setDestinationLocationCode(e.target.value)}
              className="m-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="date"
              name="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="m-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              placeholder="Number of Adults"
              className="m-2 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Generate Flights Button */}
        <button
          onClick={handleSearch}
          className="m-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Generate Flights
        </button>
      </div>

      {/* Loading, Error, and Flight Results */}
      {loading && <p>Loading flights...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="sm:px-10 md:px-32 px-5 mt-10 grid grid-cols-2 gap-5">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="p-4 border-black rounded-lg mb-8 shadow-gray-200 shadow-lg flex flex-row hover:shadow-gray-500 shadow-xl"
          >
            <div>
              <img
                src="/plane2.jpg"
                alt="Flight"
                className="h-[160px] w-[180px] rounded-2xl"
              />
              <p> <strong> Airline: </strong>  {flight.itineraries[0].segments[0].carrierCode}</p>
            </div>
            <div>
              <p> <strong> Price in INR:</strong> {Math.floor(flight.price.total * 90)}</p><br />
              <p> <strong>Departure:</strong>  {flight.itineraries[0].segments[0].departure.at}</p>
              <p> <strong>Arrival:</strong>  {flight.itineraries[0].segments[0].arrival.at}</p><br />
              <p>
               <strong>No of Stops:</strong>  {flight.itineraries[0].segments[0].numberOfStops}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateFlight;

