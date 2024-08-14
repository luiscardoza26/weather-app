import React from 'react';

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="flex items-center justify-end mb-4">
      <span className={`mr-2 ${unit === 'metric' ? 'font-bold text-blue-300' : 'text-white'}`}>°C</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={unit === 'imperial'}
          onChange={() => onToggle(unit === 'metric' ? 'imperial' : 'metric')}
        />
        <span className="slider round"></span>
      </label>
      <span className={`ml-2 ${unit === 'imperial' ? 'font-bold text-blue-300' : 'text-white'}`}>°F</span>
    </div>
  );
};

export default UnitToggle;
