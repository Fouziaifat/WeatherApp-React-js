import React, { useEffect } from 'react'
import './WeatherApp.css'
import search_icon from '../assets/search-line.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const WeatherApp = () => {

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID} `

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

        } catch (error) {

        }
    }
    useEffect(() => {
        search('Sundergarh');
    }, [])
    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder="Enter city name" />
                <img src={search_icon} alt="search icons" />
            </div>
            <img src={clear_icon} alt="clear_icon" className='weather_icon' />
            <p className='tempreture'>16°C</p>
            <p className='location'>Sundergarh</p>
            <div className="weather_data">
                <div className="data">
                    <img src={humidity_icon} alt="humidity_icon" />
                    <div>
                        <p>91%</p>
                        <span>HUmidity</span>
                    </div>
                </div>
                <div className="data">
                    <img src={wind_icon} alt="wind_icon" />
                    <div>
                        <p>1.5 km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherApp
