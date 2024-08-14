import React from 'react';
import { motion } from 'framer-motion';
import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ weather, unit }) => {
  if (!weather) return null;

  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="weather-gradient rounded-lg p-6 text-white shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4">{weather.name}, {weather.sys.country}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-6xl font-bold">{Math.round(weather.main.temp)}{tempUnit}</p>
          <p className="text-xl capitalize">{weather.weather[0].description}</p>
        </div>
        <WeatherIcon iconCode={weather.weather[0].icon} size="text-7xl" />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm opacity-75">Feels like</p>
          <p className="text-lg font-semibold">{Math.round(weather.main.feels_like)}{tempUnit}</p>
        </div>
        <div>
          <p className="text-sm opacity-75">Humidity</p>
          <p className="text-lg font-semibold">{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="text-sm opacity-75">Wind</p>
          <p className="text-lg font-semibold">{weather.wind.speed} {windUnit}</p>
        </div>
        <div>
          <p className="text-sm opacity-75">Pressure</p>
          <p className="text-lg font-semibold">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
