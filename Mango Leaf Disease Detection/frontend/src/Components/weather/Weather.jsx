import React from 'react';
import './weather.css';

function Weather({ weatherData }) {

    const renderForecastCards = () => {
        return weatherData.forecast.forecastday.map((day, index) => (
            <div key={index} className="forecast-card">
                <h3>Forecast for {day.date}</h3>
                <div className="forecast-details">
                    <div className="weather-icon">
                        <img src={day.day.condition.icon} alt={day.day.condition.text} />
                    </div>
                    <div className="temperature-details">
                        <p>Max Temperature: {day.day.maxtemp_c}°C / {day.day.maxtemp_f}°F</p>
                        <p>Min Temperature: {day.day.mintemp_c}°C / {day.day.mintemp_f}°F</p>
                        <p>Condition: {day.day.condition.text}</p>
                        <p>Chance of Rain: {day.day.daily_chance_of_rain}%</p>
                        <p>Chance of Snow: {day.day.daily_chance_of_snow}%</p>
                        {/* Add more forecast details as needed */}
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="weather-container">
            <h2>Weather Details for {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
            <div className="current-weather">
                <h3>Current Weather</h3>
                <div className="weather-details">
                    <div className="weather-icon">
                        <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
                    </div>
                    <div className="temperature-details">
                        <p>Temperature: {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
                        <p>Condition: {weatherData.current.condition.text}</p>
                        <p>Feels Like: {weatherData.current.feelslike_c}°C / {weatherData.current.feelslike_f}°F</p>
                        <p>Wind: {weatherData.current.wind_kph} km/h</p>
                        <p>Humidity: {weatherData.current.humidity}%</p>
                        {/* Add more current weather details as needed */}
                    </div>
                </div>
            </div>
            <div className="forecast-cards-container">
                {renderForecastCards()}
            </div>
        </div>
    );
}

export default Weather;
