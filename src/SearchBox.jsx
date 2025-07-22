import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.weatherapi.com/v1/current.json";
    const apiKey = import.meta.env.VITE_API_KEY;

    let getWeatherinfo = async () => {
        try{
            let response = await fetch(`${API_URL}?key=${apiKey}&q=${city},India`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp_c: jsonResponse.current.temp_c,
                temp_f: jsonResponse.current.temp_f,
                heatindex_c: jsonResponse.current.heatindex_c,
                humidity: jsonResponse.current.humidity,
                feelslike: jsonResponse.current.feelslike_c,
                weather: jsonResponse.current.condition.text,
            };
            console.log(result);
            return result;
        }catch(err) {
            throw err;
        }
    }

    
    let handleChange = (evt)=> {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherinfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br/><br/>
                <Button variant="contained" type='submit'  >
                    Search
                </Button>
                {error && <p style={{color: "red"}}>NO such place exists!</p>}
            </form>
        </div>
    )
}