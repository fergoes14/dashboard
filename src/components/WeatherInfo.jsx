import React from 'react';

function WeatherInfo({ weatherData }) {
  return (
    <div className="weather-info">
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperatura: {weatherData.main.temp}°C</p>
      <p>Máxima: {weatherData.main.temp_max}°C</p>
      <p>Mínima: {weatherData.main.temp_min}°C</p>
      <p>Humidade: {weatherData.main.humidity}%</p>
    </div>
  );
}

export default WeatherInfo;
