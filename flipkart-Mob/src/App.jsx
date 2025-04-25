import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mobile from './components/Mobile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='heading'>Gaming Mobiles</h1>
  <div className="mobile">
  <Mobile></Mobile>
  <Mobile></Mobile>
  <Mobile></Mobile>
  <Mobile></Mobile>
  <Mobile></Mobile><Mobile></Mobile><Mobile></Mobile>
    
  </div>
  </>
  )
}

export default App
