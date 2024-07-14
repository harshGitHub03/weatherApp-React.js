import { useEffect, useState } from "react"
import GetDayMonth from "../assets/getDayMonth.js"
import getDayMonth from "../assets/getDayMonth.js"
const DateAndTimeDisplay = () => {
    const [date,setDate]=useState(new Date())

    //keep on updating new date() in 1 seconds to get updated time each seconds
    useEffect(()=>{
        setInterval(()=>{
            const obj=new Date()
            setDate(obj)
        },1000)
    })

    return <>
        <div className="text-white gap-1 flex flex-col m-10">
            {/* use ternary operators to get 0 between 1 to 9 in hours, minutes, seconds */}
            <h5 className="text-[2rem] lg:text-[3.5vw]  "> {(date.getHours()<10?"0":"")+date.getHours()} : {(date.getMinutes()<10?"0":"")+date.getMinutes()} : {(date.getSeconds()<10?"0":"")+date.getSeconds()}</h5>
            <h6 className="text-2xl">{getDayMonth.day[date.getDay()]}, {date.getDate()} {getDayMonth.month[date.getMonth()]} {date.getFullYear()}</h6>
        </div>
    </>
}

export default DateAndTimeDisplay