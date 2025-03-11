import axios from "axios";

const API_KEY = "b12634503367b7c8602515cd007aca28";  

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
// Função para pegar os dados do clima de uma cidade
export const getWeatherData = async (city) => {
  try {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: "Sorocaba",  // Cidade que você quer buscar
          appid: "db9ecb8bf7c33cf5961801a6dc8f7731",  // Sua chave da API
          units: "metric",  // Temperatura em Celsius
        }
      });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do clima:", error);
    return null;
  }
};