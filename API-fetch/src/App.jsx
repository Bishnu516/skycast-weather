import React from 'react'

export default function App() {


  const findApi=() =>{ 
    fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json)
            .then(data=>{console.log(data)})
  }
        




  return (
    <>
    <h1>Hello world Good mornig</h1>

    <button onClick={findApi}>fetch Api</button>
    
    
    </>
  )
}
