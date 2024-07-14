import { useState } from "react"
import DateAndTimeDisplay from "./Components/DateAndTimeDisplay"
import SearchPanel from "./Components/SearchPanel"
import TemperatureDisplay from "./Components/TemperatureDisplay"
import LocationDisplay from "./Components/LocationDisplay"

import GeoLocation from "./Components/GeoLocation"

function App() {
  //data coming from inputApiCall || geoLocation(live location) 
  const [data, setData] = useState(null)

  //to show GeoLocation component while only getting location permission
  const [GeoShow, setGeoShow] = useState(true)


  return <>
    {/* to get live Location */}
    {GeoShow == true ? <GeoLocation setData={setData} setGeoShow={setGeoShow} /> : <></>}

    <div className='bg-[url(./assets/weatherBack.jpg)] bg-cover bg-center h-screen w-screen flex select-none justify-center overflow-hidden'>
      <div className="flex flex-wrap justify-between flex-col w-full items-end hidden md:flex">
        {data &&
          <LocationDisplay status={{ name: data.name, countryCode: data.sys.country }} />
        }
        <div className="flex w-full items-end justify-between flex-col lg:flex-row">

          {data && <DateAndTimeDisplay />}

          {data &&
            <TemperatureDisplay temperature={Math.floor(data.main.temp)} />
          }

        </div>
      </div>

      {/* get data after apiCall from input box */}
      {data &&
        <SearchPanel setData={setData} data={
          {
            weather: data.weather[0].main,
            cityName: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            visibility: data.visibility,
            windSpeed: data.wind.speed
          }
        } />
      }
    </div>
  </>
}

export default App
