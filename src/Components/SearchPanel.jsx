import { useState } from "react"
import clear from "../assets/images/clear.png"
import weatherImage from "../assets/images/weatherImage.js"
const SearchPanel = ({ data, setData }) => {

    const [inputValue, setInputValue] = useState("")


    //function to get weather on input
    const inputApiCall = async (city) => {
        const key = "9b4cab7f7479993a7ad61c4d8dda3f93"
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${key}&q=${city}`)

        // check for "note found(404)" || "empty request(400)" errors
        if (api.status === 404 || api.status === 400)
            alert("kindly, search a relavent city/country!")
        else {
            const data = await api.json()
            console.log(data)
            setData(data)
        }
    }



    return <>
        <div className=" flex flex-col justify-center px-14 w-3/6 min-w-[400px] h-screen backdrop-blur backdrop-brightness-75 ">
            <div className="flex flex-col w-full items-center">
                <div className=" flex flex-col items-center border-b-[1.5px]  pb-6 w-full ">
                    <img src={weatherImage[data.weather]} className="w-40" />
                    <h3 className="text-white text-5xl ">{data.weather}</h3>
                </div>
                <div className=" w-full  flex items-center justify-center  ">
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" ? inputApiCall(inputValue) : ""} className="my-4 mr-2 px-3 pb-3 w-4/6 outline-none bg-transparent text-white border-b-[2px]" placeholder="Search any city" />
                    <i onClick={() => inputApiCall(inputValue)} className="fa-solid fa-magnifying-glass text-white text-2xl px-2 py-1 rounded-full bg-gray-700 hover:bg-gray-900 active:bg-slate-600"></i>
                </div>
                <div className="text-white flex items-center gap-3 text-xl mb-3">
                    <p>{data.cityName}</p>
                    <i className="fa-solid fa-location-dot"></i>
                </div>

                <div className="text-white w-full">
                    <div className="flex justify-between py-3 border-t-[2px] border-gray-500 ">
                        <p>Temperature</p>
                        <p>{data.temperature}°C ({data.weather})</p>
                    </div>
                    <div className="flex justify-between py-3 border-t-[1.5px] border-gray-500">
                        <p>Humidity</p>
                        <p>{data.humidity}%</p>
                    </div>
                    <div className="flex justify-between py-3 border-t-[1.5px] border-gray-500">
                        <p>Visibility</p>
                        <p>{data.visibility} m</p>
                    </div>
                    <div className="flex justify-between py-3 border-t-[1.5px] border-gray-500">
                        <p>Wind speed</p>
                        <p>{data.windSpeed} Km/h</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SearchPanel