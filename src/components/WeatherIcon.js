import React from 'react';
import { WiDaySunny, WiNightClear, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const WeatherIcon = ({ iconCode, size = 'text-4xl' }) => {
  const getIcon = () => {
    switch (iconCode) {
      case '01d': return <WiDaySunny className={size} />;
      case '01n': return <WiNightClear className={size} />;
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n': return <WiCloudy className={size} />;
      case '09d':
      case '09n':
      case '10d':
      case '10n': return <WiRain className={size} />;
      case '11d':
      case '11n': return <WiThunderstorm className={size} />;
      case '13d':
      case '13n': return <WiSnow className={size} />;
      case '50d':
      case '50n': return <WiFog className={size} />;
      default: return <WiDaySunny className={size} />;
    }
  };

  return getIcon();
};

export default WeatherIcon;
