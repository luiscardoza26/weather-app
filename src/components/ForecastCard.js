import React from 'react';
import { motion } from 'framer-motion';
import WeatherIcon from './WeatherIcon';

const ForecastCard = ({ forecast, unit }) => {
  if (!forecast) return null;

  const dailyForecast = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="forecast-gradient rounded-lg p-6 text-white shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-4">
        {dailyForecast.map((day, index) => (
          <div key={index} className="text-center">
            <p className="font-semibold">{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <WeatherIcon iconCode={day.weather[0].icon} size="text-4xl" />
            <p className="text-lg font-bold">{Math.round(day.main.temp)}{tempUnit}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ForecastCard;
