import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 42.5,
        heatindex_c: 42.5,
        humidity: 43,
        temp_c: 36.7,
        temp_f: 98.1,
        weather: "Partly Cloudy",
    });

    let updateInfo = (newInfo)=> {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Sumrita</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}