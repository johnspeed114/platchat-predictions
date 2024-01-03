import React, { useState } from 'react';

interface FilterSelectorProps {
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  type: string;
}

export default function FilterSelector({handleFilterChange, type}: FilterSelectorProps) {
  return (
    <div className='flex flex-col items-center justify-center w-full mb-6 sm:mb-10'>
      <select 
        value={type} 
        onChange={handleFilterChange} 
        className="p-2 border border-gray-300 rounded"
      >
        <option value="Total">Total</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="Game Changers">Game Changers</option>
      </select>
    </div>
  );
}
