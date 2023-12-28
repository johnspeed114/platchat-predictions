'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import platChatLogo from '../public/images/platChatLogo.png';
import blackline from '../public/images/blackline.png';
import handler from './api/sheet';
import './globals.css';

export default function Home() {
  useEffect(() => {
    handler();
  }, []);
  return (
    <>
    <Head>
          <link rel="icon" href="/favicon.ico" />
    </Head>
      <header className='flex items-center justify-between p-4 text-xl font-semibold bg-gray-100 border-b border-gray-300 flex-col sm:flex-row'>
        <div className='flex justify-start sm:flex justify-center w-full sm:w-auto'>
          <Image
            src={platChatLogo}
            alt='PlatChat Logo'
            className='w-12 sm:w-16 md:w-24'
            width={80}
            height={80}
          />
         
        </div>
        <div className='flex justify-center w-full'>
          <h5 className='text-3xl sm:text-5xl  font-childshandwriting'>
            The Valorant Visionaries&apos; Predictions
          </h5>
        </div>
      </header>
      <main className='flex min-h-screen flex-col items-center justify-center p-4 bg-white'>
        <div className='z-10 max-w-7xl w-full font-mono text-sm lg:flex justify-center border-b-4 border-gray-600 rounded-full'>
          {/* Add the URL for the hand-drawn line image to the bars and x-axis line */}
         
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
        </div>
      </main>
    </>
  );
}
         
         
