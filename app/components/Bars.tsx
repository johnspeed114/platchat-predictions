import React from 'react';
import { PredictionData } from '../types';
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

interface BarsProps {

  data: PredictionData[];}

export default function Bars(data: BarsProps) {
  

  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const response = await fetch('/data.json');
  //     const result = await response.json();
  //     setData(result);
  //   };
  //   fetchingData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
 console.log(data.data)
  return (
    <div className='flex items-end mt-1'>
      {data.data.map((item, index) => {
        if (!item['Total Success Rate']) return null;
        return (
          <React.Fragment key={index}>
            <div
              className={`anchor-element-${index} relative flex flex-col items-center px-2 sm:px-3`}>
              {/* [TO DO] put this into a component file later  */}
              <div
                className={`${backgroundColors[index]} cursor-pointer border-2 border-t-gray-600 border-l-gray-600 border-r-gray-600 rounded-t-md md:w-16 lg:w-24 justify-center flex items-center text-center font-bold sm:text-lg md:text-xl font-childshandwriting hover:bg-opacity-70`}
                // [FYI]works but when loading the bottom line is not in the right place, starts at the top
                style={{
                  height: `${6 * parseFloat(item['Total Success Rate'])}px`,
                  animation: 'grow 3s ease-out 1',
                  transformOrigin: 'bottom',
                }}>
                <span
                  className={`font-bold ${
                    item['Total Success Rate'] === '0.00%' && 'mb-6'
                  }`}
                  style={{
                    animation: `fadeIn 0.5s 3s forwards`,
                    opacity: 0,
                  }}>
                  {item['Total Success Rate']}
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
              content={`Correct Guesses: ${item['Total Correct Values']}/${item['Total Values']}`}
              className='z-10'
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
