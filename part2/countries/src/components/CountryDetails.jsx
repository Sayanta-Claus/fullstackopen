import axios from 'axios';
import { useEffect, useState } from 'react';

const CountryDetails=({country})=>{

  const [weather,setWeather]=useState(null);
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&APPID=f365f366885c7a817c4b9babdde0c99f`).then((res)=>{
      // console.log(res.data)
          setWeather(res.data)

    })

  },[country.name])
  if(weather !=null){
    return (
      <>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
  
        <h3>languages</h3>
        <ul>
            {
              Object.keys(country.languages).map((lang)=>{
                return (
                  <li key={lang}>{country.languages[lang]}</li>
                )
              })
            }
        </ul>
  
        <div>
          {country.flag}
        </div>
        <h2>Weather in {country.name.common}</h2>
        <div>Temperature : {weather.main.temp-273.15} Celsius</div>
        <div>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width="100px"/>
        </div>
        <div>
          Wind: {weather.wind.speed} m/s
        </div>
  
      </>
    )

  }
    return (
      <>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
  
        <h3>languages</h3>
        <ul>
            {
              Object.keys(country.languages).map((lang)=>{
                return (
                  <li key={lang}>{country.languages[lang]}</li>
                )
              })
            }
        </ul>
  
        <div>
          {country.flag}
        </div>
        <div>
          <h2>
          Weather Information Loading for {country.name.common}
          </h2>
        </div>
  
      </>
    )
  
  }

  export default CountryDetails;