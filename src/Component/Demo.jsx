import React,{useState,useEffect} from 'react'
import "./Demo.scss"
import Card from "./card/Card"
 
export default function Weather() {
    const [searchValue, setSearchValue] = useState("noida")
    const [Tempinfo, setTempinfo] = useState("")
    const getWeatherInfo = async () => {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=04aff7e742150050492cfbf5733b8578`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp,pressure,humidity}=data.main;
            const{main:weatherMood} = data.weather;
            const{name} = data;
            const{speed} =data.wind;
            const{country,sunset}= data.sys;
            const myNewWeather ={
                temp,
                pressure,
                humidity,
                weatherMood,
                name,
                speed,
                country,
                sunset,
            }
            setTempinfo(myNewWeather)
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])

    return (
        <div>
            <div className="main-div">
                <div className="center-div">
                  <h1>Weather Report</h1>
                  <img src="assets/perfect-day.svg" alt="No " />
                  <p>Find the Weather of your city</p>
                  <input type="text" value={searchValue} placeholder="Location" onChange={(e)=>setSearchValue(e.target.value)}/>
                  <button onClick={()=>getWeatherInfo()}>Search</button><br />
                  <Card Info={Tempinfo}/>
            </div>
            </div>
        </div>
    )
}
