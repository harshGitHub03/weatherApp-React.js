import React from 'react'
import { useEffect } from 'react'

function GeoLocation({ setData, setGeoShow }) {

  //function to get weather on live location
  const liveApi = async (latitude, longitude) => {
    const liveApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9b4cab7f7479993a7ad61c4d8dda3f93&units=metric`)

    // check for "note found(404)" || "empty request(400)" errors
    if (liveApi.status === 404 || liveApi.status === 400)
      alert("kindly, search a relavent city/country!")
    else {
      const liveApiData = await liveApi.json()
      console.log(liveApiData)
      setData(liveApiData)
    }
    
    //hide geoLocation component
    setGeoShow(false)
  }

  //to ask for location in first render
  useEffect(() => {
    //get location
    navigator.geolocation.getCurrentPosition(
      //function on allow location
      (position) => liveApi(position.coords.latitude, position.coords.longitude),

      //function on reject location
      () => {
        //dummy value on reject location "connaught place, delhi"
        liveApi(28.644800, 77.216721)
      })
  }, [])

  return (
    <div className='absolute flex justify-center items-center h-screen w-screen text-white '>
      <div className='backdrop-blur-lg w-[70%] h-[60%] md:w-[50%] md:h-[70%] flex justify-center items-center flex-col gap-8 '>
        <i className="fa-solid fa-street-view text-[12vw]"></i>
        <p className='w-[70%] text-center'>Requesting Location access. To show real time weather information.</p>
      </div>
    </div>
  )
}

export default GeoLocation