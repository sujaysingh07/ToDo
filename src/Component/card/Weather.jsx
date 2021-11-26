import "./weather.css"
import React, { useEffect, useState } from 'react'
import Card from "./Card";

function Weather() {
    const [searchValue, setSearchValue] = useState("Renukoot");
    const [tempInfo, setTempInfo] = useState("")
    const getWeatherInfo = async()=>{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=04aff7e742150050492cfbf5733b8578`;
            const res = await fetch(url)
            const data = await res.json()
            const {temp,humidity,pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country ,sunset} =data.sys;
            
            const myNewWeatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,sunset
            }
            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        getWeatherInfo();
    }, [])
    return (
        <>
          <div className="wrap">
              <div className="search">
                  <input type="search" placeholder='location...' autoFocus id="search" className="searchTerm" 
                      value={searchValue}
                      onChange={(e)=>setSearchValue(e.target.value)}
                  />

                  <button className="searchButton" type="button" onClick={getWeatherInfo} >Search</button>
              </div>
          </div>
          <Card Info={tempInfo}/>
        </>
    )
}

export default Weather
