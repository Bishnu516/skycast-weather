import React, { useState } from 'react'
import './counter.css'

function counter() {
    const [count,setcount]=useState(0)
  return (
    <>
    <div className='container'>
        <p className='para'>You have Cliked {count} times</p>
        <button className='btn' onClick={()=>{  setcount(count+1)}}>Click me</button>
    </div>
    </>
  )
}

export default counter
