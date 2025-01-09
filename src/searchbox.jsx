import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./searchbox.css";


export default function SearchBox({ updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "96361d5ba9b8665bb256d5bfec119aaa";

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            };
            console.log(result)
            setError("")
            return result;
        } catch (err) {
            throw err
            setError("No such place in our API")
        }
       
    };


    let handleChange = (event) =>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo)
        } catch (err){
            setError(true)
        }
       
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField
             id="city" 
             label="City Name"
             variant="outlined"
             required
             value={city}
             onChange={handleChange}
             />
            <br></br>
            <br></br>
            <Button 
            variant="contained"
             type="submit" >
         Search
      </Button>
      {error && <p style = {{color: "red"}}> No such place exists!</p>}
      </form>
        </div>
    )
}

// https://api.openweathermap.org/data/2.5/weathe
// 96361d5ba9b8665bb256d5bfec119aaa

