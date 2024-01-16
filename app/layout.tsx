import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import platChatLogo from '../public/images/PlatChatLogo.png';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plat Chat Prediction Rating',
  description: 'Predictions Success for Plat Chat Members',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <header className="flex items-center justify-between p-4 text-xl font-semibold bg-gray-100 border-bg border-gray-300 flex-col sm:flex-row">
          <div className="flex  justify-center  sm:justify-start w-full sm:w-auto">
            <Link href={'/'}>
              <Image
                src={platChatLogo}
                alt="PlatChat Logo"
                className="w-12 sm:w-16 md:w-24"
                width={80}
                height={80}
                priority={true}
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl text-center font-childshandwriting">
              <Link href={'/'}>The Valorant Visionaries&apos; Predictions</Link>
            </h1>
          </div>
          <div className="flex flex-row cursor-pointer items-center hover:bg-sky-00 mx-3 sm:border-r-2 relative group">
            <InformationCircleIcon className="flex w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <span className="text-sm sm:text-lg font-serif pr-3">
              <Link href={'/about'}>About</Link>
            </span>
            <span className="absolute -bottom-1 right-0 w-0 h-1 bg-blue-400 group-hover:w-full group-hover:transition-all"></span>
          </div>
        </header>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
