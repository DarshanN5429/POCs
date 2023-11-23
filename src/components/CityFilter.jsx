import React from "react";

const CityFilter = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div>
      <label
        htmlFor="city-select"
        className="block text-lg font-medium text-gray-700"
      >
        Choose a city:
      </label>
      <select
        id="city-select"
        onChange={handleCityChange}
        className="mt-1 block w-full pl-4 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-sm"
        value={selectedCity}
      >
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
