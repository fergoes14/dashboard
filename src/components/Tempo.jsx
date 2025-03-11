import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import CityInput from './CityInput';
import WeatherInfo from './WeatherInfo';

function Tempo() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!city) {
      setError('Por favor, insira o nome da cidade.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiKey = 'b12634503367b7c8602515cd007aca28'; // Sua chave da API
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Erro ao buscar dados do clima. Verifique a cidade ou tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div className="app-container">
      <div className="content">
        <h1>Previsão do Tempo</h1>

        {/* Componente de Input de Cidade */}
       <CityInput 
          city={city} 
          setCity={setCity} 
          fetchData={fetchData} 
          loading={loading} 
          handleKeyPress={handleKeyPress} /* Passando a função de keypress */
        />

        {error && <div className="error-message">{error}</div>}

        {/* Componente de Exibição de Clima */}
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </div>
    </div>
    
  );
}

export default Tempo;
