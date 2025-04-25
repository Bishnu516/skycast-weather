import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[city,setCity]=useState('')
  const[weather ,setWeather]=useState([])
  const[temp,setTemp]=useState(false)

  useEffect(()=>{
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=063f662b259a45fd9ca151025252304&q=Bhubaneswar`)
    .then(response=> response.json())
    .then(data =>{
     setWeather(data)
     setTemp(true)
     
     })

  },[])


 const searchWeather=()=>{

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=063f662b259a45fd9ca151025252304&q=${city}`)
    .then(response=>{
      if(!response.ok){
        alert("Location not found")
      }
      else{
        response.json()
        .then(data=>setWeather(data))
        setCity('')
      }
      })
   
  } 

  return (
   <>
<div className="container">
    <div className="nav">
      <img id='logo' src="/logo2.png" width={80} alt=" logo" />
      <h1 id='heading'>Sky-Cast</h1>
     {/*<div className="btn">
        <button className='s-l-btn'>Sign-up</button>
        <button className='s-l-btn'>Login</button>
      </div> */ } 
    </div>

    <div className="main">



    <div className="child1">
      <input placeholder='Enter your city Name...'  id='inp'
      value={city}
      type="text"
      onChange={(e)=>{setCity(e.target.value) }}
       />
      <button onClick={searchWeather} id='search-btn'>Search</button>
    </div>

    { temp && <>

      <div className="child2">
          <div className="box1">
             <img src={weather.current.condition.icon} height={50}/>
            <h1 id="tempc">{weather.current.temp_c}°C</h1>
          </div>
       <div className="box2">
          <h1 id="place">{weather.location.name}</h1>
          <h1 id='region'>{weather.location.region}</h1>
          <h3 id='region'>{weather.location.country}</h3> 
       </div>
    
      </div>

      <div className="child3">
        <div className="box3">
        <h1 className='headline'>SunInfo:</h1>

        <div className="day">
          
          <h2>Sunrise:{weather.forecast.forecastday[0].astro.sunrise}</h2>
          <h2>Sunset:{weather.forecast.forecastday[0].astro.sunset}</h2>
        </div>

        </div>
       <div className="box4">
        <h1 className='headline'>Condition:</h1>
       <div className="condition">
         <h2> Humidity:{weather.current.humidity}</h2>
          <h2> Max-Temp:{weather.forecast.forecastday[0].day.maxtemp_c}°C</h2>
          <h2> Min-Temp:{weather.forecast.forecastday[0].day.mintemp_c}°C</h2>
        </div>
       </div>


      </div>
    
    </>}



    </div>

        



     
    


   


  

   
   
    
   



</div>
   
   
   </>
  )
}

export default App
