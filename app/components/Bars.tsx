import React from 'react';
import Image from 'next/image';
import { PredictionData, PredictionType } from '../types';
import ProfileImage from './ProfileImage';
import { predictionTypeMapping } from '../helper/constants';
import { Tooltip } from 'react-tooltip';

const backgroundColors = [
  'bg-blue-200', // Light blue
  'bg-red-200', // Light red
  'bg-green-200', // Light green
  'bg-yellow-200', // Light yellow
  'bg-purple-200', // Light purple
  'bg-pink-200', // Light pink
  'bg-indigo-200', // Light indigo
  'bg-orange-200', // Light orange
  'bg-teal-200', // Light teal
];
interface BarsProps {
  data: PredictionData[];
  type: PredictionType;
}

export default function Bars({ data, type = 'Total' }: BarsProps) {
  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const response = await fetch('/data.json');
  //     const result = await response.json();
  //     setData(result);
  //   };
  //   fetchingData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // [TO DO] add conditional for mobile when the percentage is in the deicmals hide the decimal and round up
  // [TO DO] make the bars for mobile all min-width so they dont get too small
  const values: string[] = predictionTypeMapping[type];
  return (
    <div className="flex items-end min-h-90  rounded-sm max-w-sm sm:max-w-fit overflow-x-auto">
      {data.map((item, index) => {
        if (!item[values[2]]) return null;
        return (
          <div className="flex flex-col" key={index}>
            <div
              className="flex justify-center mb-4"
              key={`image-${type}-${index}`}
            >
              <ProfileImage name={item['Name']} successRate={item[values[2]]} />
            </div>

            <div
              key={`${type}-${index}`}
              className={`anchor-element-${index} relative flex flex-col items-center px-2 md:px-33`}
            >
              <div
                className={`${backgroundColors[index]} cursor-pointer border-2 border-gray-600 border-b-gray-400 rounded-t-md w-12 md:w-16 xl:w-24 justify-center flex items-center text-center font-bold sm:text-lg md:text-xl font-childshandwriting hover:bg-opacity-70`}
                style={{
                  height: `${
                    6 * parseFloat(item[values[2]]?.toString() ?? '0')
                  }px`,
                  animation: 'grow 3s ease-out 1',
                  transformOrigin: 'bottom',
                }}
              >
                <span
                  className={`font-bold ${
                    item[values[2]] === '0.00%' && 'mb-6'
                  }`}
                  style={{
                    animation: 'fadeIn 0.5s 3s forwards',
                    opacity: 0,
                  }}
                >
                  {item[values[2]]}
                </span>
              </div>
              <div className="flex justify-center">
                <span className="mt-2 text-md sm:text-2xl font-bold font-childshandwriting">
                  {item['Name']}
                </span>
              </div>
            </div>
            <Tooltip
              key={`tooltip-${index}`}
              anchorSelect={`.anchor-element-${index}`}
              place="top"
              content={`Correct Guesses: ${item[values[0]]}/${item[values[1]]}`}
              className="z-10"
            />
          </div>
        );
      })}
    </div>
  );
}
