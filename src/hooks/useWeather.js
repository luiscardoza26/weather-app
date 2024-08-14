import { useState, useEffect } from 'react';
import { getWeather, getForecast } from '../services/weatherService';

const useWeather = () => {
  const [city, setCity] = useState(() => localStorage.getItem('lastCity') || 'London');
  const [unit, setUnit] = useState(() => localStorage.getItem('unit') || 'metric');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weatherData = await getWeather(city, unit);
        const forecastData = await getForecast(city, unit);
        setWeather(weatherData);
        setForecast(forecastData);
        setError(null);
        localStorage.setItem('lastCity', city);
        localStorage.setItem('unit', unit);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, unit]);

  return { city, setCity, unit, setUnit, weather, forecast, loading, error };
};

export default useWeather;
