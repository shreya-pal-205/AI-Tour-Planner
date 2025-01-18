import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/custom/Hero'
import SmallCard from './components/custom/SmallCard'
import TajMahal from './components/custom/TajMahal'
import ImgCard from './components/custom/ImgCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <SmallCard />
      <TajMahal />
      <ImgCard />
    </>
  )
}

export default App
