'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import platChatLogo from '../public/images/platChatLogo.png';
import blackline from '../public/images/blackline.png';
import handler from './api/sheet';
import './globals.css';

export default function Home() {
  const [data, setData] = useState([
    { name: 'Group', value: 70 }, // Example data
    { name: 'Sideshow', value: 60 },
    { name: 'Sideshow', value: 20 },
  ]);
  useEffect(() => {
    handler();
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
        <section className='flex flex-col items-center z-10 max-w-7xl w-full font-mono text-sm lg:flex justify-center border-b-4 border-gray-600 rounded-sm'>
          <h2 className='text-3xl font-childshandwriting font-bold mb-14'>
            PlatChat Prediction Success Rating
          </h2>

          <div className='flex justify-center space-x-2'>
            {data.map((item, index) => (
              <div
                key={index}
                className={`relative bg-blue-500 border-2 border-b-blue-500 border-gray-600 rounded-t-md w-16`}
                // [FYI]works but but the animation is not working
                style={{
                  height: `${3 * item.value}px`,
                  animation: 'grow 3s ease-out 1',
                }}>
                {/* [TO DO] https://www.youtube.com/watch?v=nyuht1Mmyss add the rising bar */}
                <div className='absolute -bottom-8 left-0 right-0 flex justify-center'>
                  <span className='mt-2 text-2xl font-bold font-childshandwriting'>
                    Bob
                  </span>
                </div>
              </div>
            ))}
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
