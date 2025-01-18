export const SelectTripList = [
    {
        id: 1,
        title: "Just Me",
        description: "A solo travels in exploration",
        people: '1',
        icon: '✈️'
    },
    {
        id: 2,
        title: "Couple",
        description: "Two travels in tandem",
        people: '2 people',
        icon: '🏖️'
    },
    {
        id: 3,
        title: "Family",
        description: "A group of fun loving adventure",
        people: '3 to 5 people',
        icon:'🏡'
    },
    {
        id: 4,
        title: "Friends",
        description: "A bunch of thrill seekers",
        people: '5 to 10 people',
        icon: '🏄‍♂️'
    },
]




export const SelectBudgetList = [
    {
        id: 1,
        title: "Cheap",
        description: "Stay conscious of costs",
        icon: '🍻'
    },
    {
        id: 2,
        title: "Moderate",
        description: "Keep cost on average side",
        icon:'🏝️'
    },
    {
        id: 3,
        title: "Luxury",
        description: "Dont't worry about cost and expenses",
        icon: '🍹'
    },
]




export const AI_PROMPT = 'generate travel plan for location: {location}, for {noOfDays} days for {noOfPeople} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image url, Geo coordinates, ticket Pricing, Time t travel each of the location for {noOfDays} days, with each day plan with best time to visit in JSON format where all the values  should be in different arrays'

export const AI_PROMPT_HOTEL = 'Generate a list of 20 hotels in location:{location}, in a {budget} budget, Give me 20 list of hotels along with Hotel Name, Hotel Description, Hotel Address, Hotel image URL, Hotel Price in INR, Hotel Rating, Hotel Facilities in an array named as hotels in JSON format'