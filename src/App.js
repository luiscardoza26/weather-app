import React from 'react';
import { motion } from 'framer-motion';
import useWeather from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import UnitToggle from './components/UnitToggle';
import WeatherChart from './components/WeatherChart';

function App() {
  const { city, setCity, unit, setUnit, weather, forecast, loading, error } = useWeather();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2">Weather App</h1>
          <p className="text-xl text-blue-200">Check the weather anywhere, anytime</p>
        </div>
        <div className="glass-card p-6 space-y-6">
          <h2 className="text-xl font-bold mb-4">Current weather in {city}</h2>
          <SearchBar onSearch={setCity} />
          <UnitToggle unit={unit} onToggle={setUnit} />
          {loading && <p className="text-center text-white">Loading...</p>}
          {error && <p className="text-center text-red-400">{error}</p>}
          {!loading && !error && (
            <>
              <WeatherCard weather={weather} unit={unit} />
              <ForecastCard forecast={forecast} unit={unit} />
              <div className="mt-6 bg-white rounded-lg p-4">
                <WeatherChart forecast={forecast} unit={unit} />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default App;