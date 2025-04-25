import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Btn></Btn>
 
       <h1>Wel come to Zerodha Account</h1>
       <Btn></Btn>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod voluptates, sequi soluta corrupti facere laborum totam? Natus, exercitationem nobis minima adipisci dolor, pariatur corrupti cum eum sint praesentium optio? In!</p>
       <Btn></Btn>
    </>
  )
}

export default App
