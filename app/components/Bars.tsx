import React from 'react';
import Image from 'next/image';
import { PredictionData } from '../types';
import groupHappy from '../../public/images/platchatmembers/group/group_happy.png';
import { Tooltip } from 'react-tooltip';

const backgroundColors = [
  'bg-blue-200', // Light blue
  'bg-red-200', // Light red
  'bg-green-200', // Light green
  'bg-yellow-200', // Light yellow
  'bg-purple-200', // Light purple
  'bg-pink-200', // Light pink
  'bg-indigo-200', // Light indigo
];

const predictionType = {
  'Total': ['Total Correct Values', 'Total Values', 'Total Success Rate'],
  '2023': [
    'Total Correct Values 2023',
    'Total Values 2023',
    'Total 2023 Success Rate',
  ],
  '2022': [
    'Total Correct Values 2022',
    'Total Values 2022',
    'Total 2022 Success Rate',
  ],
  '2021': [
    'Total Correct Values 2021',
    'Total Values 2021',
    'Total 2021 Success Rate',
  ],
  'Game Changers': [
    'Total GC Correct Values',
    'Total GC Values',
    'Total GC Success Rate',
  ],
};

interface BarsProps {
  data: PredictionData[];
  type: keyof typeof predictionType;
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
  const values: string[] = predictionType[type];
  return (
    <div className='flex items-end min-h-90'>
      {data.map((item, index) => {
        if (!item[values[2]]) return null;
        return (
          <div className='flex flex-col' key={index}>
            <div className='flex justify-center mb-4'>
              <Image
                src={groupHappy}
                alt='Bar Profile'
                className='rounded-2xl w-12'
                style={{ animation: 'fadeIn 0.5s 3s forwards', opacity: 0 }}
                key={`image-${type}-${index}`}
              />
            </div>
            <div
              key={`${type}-${index}`}
              className={`anchor-element-${index} relative flex flex-col items-center px-2 sm:px-3`}>
              <div
                className={`${backgroundColors[index]} cursor-pointer border-2 border-t-gray-600 border-l-gray-600 border-r-gray-600 rounded-t-md md:w-16 lg:w-24 justify-center flex items-center text-center font-bold sm:text-lg md:text-xl font-childshandwriting hover:bg-opacity-70`}
                //[TO DO] when the bar is shown whenever selector is changed the growth animation doesnt work !!!FIX IT!!!
                style={{
                  height: `${
                    6 * parseFloat(item[values[2]]?.toString() ?? '0')
                  }px`,
                  animation: 'grow 3s ease-out 1',
                  transformOrigin: 'bottom',
                }}>
                <span
                  className={`font-bold ${
                    item[values[2]] === '0.00%' && 'mb-6'
                  }`}
                  style={{
                    animation: 'fadeIn 0.5s 3s forwards',
                    opacity: 0,
                  }}>
                  {item[values[2]]}
                </span>
              </div>

              <div className='absolute -bottom-8 left-0 right-0 flex justify-center'>
                <span className='mt-2 text-md sm:text-2xl font-bold font-childshandwriting'>
                  {item['Name']}
                </span>
              </div>
            </div>
            <Tooltip
              key={`tooltip-${index}`}
              anchorSelect={`.anchor-element-${index}`}
              place='top'
              content={`Correct Guesses: ${item[values[0]]}/${item[values[1]]}`}
              className='z-10'
            />
          </div>
        );
      })}
    </div>
  );
}
