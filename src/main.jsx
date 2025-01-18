import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/custom/Header.jsx'
import CreateTrip from './create-trip/CreateTrip.jsx'
import ViewTrip from './view-trip/[tripId]/ViewTrip.jsx'
import CreateHotel from './create-hotel/CreateHotel.jsx'
import ViewHotel from './view-trip/[hotelId]/ViewHotel.jsx'
import CreateFlight from './create-flight/CreateFlight.jsx'
import CreateAbout from './create-about/CreateAbout.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/create-trip',
    element: <CreateTrip />
  },
  {
    path: '/view-trip/:tripId',
    element: <ViewTrip />
  },
  {
    path: '/create-hotel',
    element: <CreateHotel />
  },
  {
    path: '/view-hotel/:hotelId',
    element: <ViewHotel />
  },
  {
    path: '/create-flight',
    element: <CreateFlight />
  },
  {
    path: '/create-about',
    element: <CreateAbout />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
