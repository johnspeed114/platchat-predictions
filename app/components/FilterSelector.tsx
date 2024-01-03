import React, { useState } from 'react';

export default function FilterSelector() {
  const [selectedFilters, setSelectedFilters] = useState({
   
    '2023': false,
    '2022': false,
    '2021': false,
    "Total": false,
    'Game Changer': false,
  });

  const handleCheckboxChange = (event) => {
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.checked,
    });
    // Additional actions based on selection can be added here
  };

  return (
    <div className='flex flex-row items-center justify-center w-full mb-14 space-x-3'>
      {Object.keys(selectedFilters).map((filter) => (
        <label key={filter} className="flex items-center">
          <input
          className='mr-1'
            type="checkbox"
            name={filter}
            checked={selectedFilters[filter]}
            onChange={handleCheckboxChange}
          />
          <span>{filter}</span>
        </label>
      ))}
    </div>
  );
}