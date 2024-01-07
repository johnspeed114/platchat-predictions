'use client';
import React from 'react';
import { PredictionType } from '../types';

interface FilterSelectorProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<PredictionType>>;
}

export default function FilterSelector({ type, setType }: FilterSelectorProps) {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //[Note] Type assertion used here because the possible values of event.target.value
    // are controlled and known to always match the PredictionType.
    // [WARNING] Be cautious if modifying the data flow or the values in the dropdown,
    // as this bypasses TypeScript's type checking.
    setType(event.target.value as PredictionType);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-6 sm:mb-10">
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
