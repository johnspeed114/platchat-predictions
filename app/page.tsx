'use client';
import React, { useState } from 'react';
import './globals.css';
import jsonData from '../public/data.json';
import Bars from './components/Bars';
import FilterSelector from './components/FilterSelector';
import { PredictionType } from './types';

export default function Home() {
  const [type, setType] = useState<PredictionType>('Total');
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
  //       myData[0].GCEvents.successRate = res-8][0]
  //       myData[0].Events2021.successRate = res[11][0]

  //     }

  //   );
  // }, []);

  return (
    <main className="flex flex-col items-center justify-start p-4 bg-white">
      <section className="flex flex-col items-center max-w-sm md:max-w-md lg:max-w-7xl w-full font-mono text-sm lg:flex justify-center ">
        <h2 className="text-xl sm:text-3xl font-childshandwriting font-bold mb-6 sm:mb-8 underline">
          Prediction Success Rating
        </h2>
        <FilterSelector type={type} setType={setType} />
        <Bars data={jsonData} type={type} />
      </section>
    </main>
  );
}
