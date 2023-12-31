'use client';
import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Tooltip from './components/Tooltip';
import platChatLogo from '../public/images/platChatLogo.png';

import './globals.css';

const PlatChatMembers = ['Group', 'SideShow',]
const backgroundColors = [
  'bg-blue-200',  // Light blue
  'bg-red-200',   // Light red
  'bg-green-200', // Light green
  'bg-yellow-200', // Light yellow
  'bg-purple-200', // Light purple
  'bg-pink-200', // Light pink
  'bg-indigo-200', // Light indigo
];


export default function Home() {
  const [data, setData] = useState([]);
  //[NOTE] we will excclude 2023 events for now until i get the data from Kurt if not getting it from the podcast
  // useEffect(() => {
  //   // [NOTE] Really not sure how much people will view this web the first day and/or few hours
  //   // Using a free database might generate 429 errors https(exceed the quota like Google Sheets its 300 per minute)
  //   // Give up on the useeffect and fetching for now
  //   // Priority is smoothness and speed of the website in the beginning (MVP)
  //   let filteredData = [];
  //   handler().then(
  //     (res)=> {
  //       myData[0].GCEvents.totalValues = res[0][0]
  //       myData[0].GCEvents.totalCorrectValues = res[1][0]
  //       myData[0].Events2021.totalValues = res[2][0]
  //       myData[0].Events2021.totalCorrectValues = res[3][0]
  //       for (let i = 0; i < 8; i++) {
  //          myData[i].Events2022.totalValues = res[4][i+1]
  //          myData[i].Events2022.totalCorrectValues = res[5][i+1]
  //          myData[i].Total.totalValues = res[8][i+1]
  //          myData[i].Total.totalCorrectValues = res[9][i+1]
  //          myData[i].Events2022.successRate = res[12][i+1]
  //          myData[i].Total.successRate = res[14][i+1]

  //       }
  //       myData[0].GCEvents.successRate = res[10][0]
  //       myData[0].Events2021.successRate = res[11][0]

  //       console.log(myData)

  //     } 

  //   );
  // }, []);

  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch('/data.json');
      console.log(response, 'yoyo')
      const result = await response.json();
      console.log('result', result)
      setData(result)
    }
    fetchingData()
    console.log(data)
  }, []);

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex items-center justify-between p-4 text-xl font-semibold bg-gray-100 border-b border-gray-300 flex-col sm:flex-row'>
        <div className='flex justify-start sm:justify-center w-full sm:w-auto'>
          <Image
            src={platChatLogo}
            alt='PlatChat Logo'
            className='w-12 sm:w-16 md:w-24'
            width={80}
            height={80}
          />
        </div>
        <div className='flex justify-center w-full'>
          <h1 className='text-3xl sm:text-4xl xl:text-5xl  font-childshandwriting'>
            The Valorant Visionaries&apos; Predictions
          </h1>
        </div>
      </header>
      <main className='flex min-h-screen flex-col items-center justify-start p-4 bg-white'>
        <section className='flex flex-col items-center z-10 max-w-5xl w-full font-mono text-sm lg:flex justify-center border-b-4 border-gray-600 rounded-sm'>
          <h2 className='text-xl sm:text-3xl font-childshandwriting font-bold mb-14'>
            PlatChat Prediction Success Rating
          </h2>
          <div className='flex space-x-5 sm:space-x-10 items-end mt-10'>
            {data.map((item, index) => {
              if (!item['Total Success Rate']) return null;
              return <div key={index} className='relative flex flex-col items-center' >
                {/* [TO DO] put this into a component file later  */}
                <Tooltip message={`Correct Guesses: ${item['Total Correct Values']}/${item['Total Values']}`} >
                <div
                  className={`${backgroundColors[index]} cursor-pointer border-2 border-b-blue-500 border-gray-600 rounded-t-md md:w-16 lg:w-24 justify-center flex items-center text-center font-bold sm:text-lg md:text-xl font-childshandwriting`}
                  // [FYI]works but but the animation is not working
                  style={{
                    height: `${6 * parseFloat(item['Total Success Rate'])}px`,
                    animation: 'grow 3s ease-out 1',
                    transformOrigin: 'bottom'

                  }}>
                  <span className={`font-bold ${item['Total Success Rate'] === '0.00%' && 'mb-6'}`}
                    style={{
                      animation: `fadeIn 0.5s 3s forwards`,
                      opacity: 0
                    }}>
                    {item['Total Success Rate']}
                  </span>
                </div>
                </Tooltip>
                <div className='absolute -bottom-8 left-0 right-0 flex justify-center'>
                  <span className='mt-2 text-md sm:text-2xl font-bold font-childshandwriting'>
                    {item['Name']}
                  </span>
                </div>
              </div>
            })}
          </div>
          {/*

      {data.map((value, index) => (
        <div
          key={index}
          className="absolute bottom-0 bg-blue-500 border-2 border-black"
          style={{
            left: `${index * 40}px`, // Adjust based on your layout
            width: '30px', // Adjust bar width
            height: `${value}%`, // Dynamic height based on data
            borderImageSource: "url('/path/to/hand-drawn-border.png')",
            borderImageSlice: 1
          }}
        ></div>
      ))}
        */}
        </section>
      </main>
    </>
  );
}
