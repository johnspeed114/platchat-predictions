import Image from 'next/image';
import platChatLogo from '../public/platChatLogo.png';
import './globals.css';

export default function Home() {
  return (
    <>
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
        <div className='z-10 max-w-5xl w-full font-mono text-sm lg:flex justify-center'>
          <p className='flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            Get started by editing&nbsp;
            <code className='font-mono font-bold bg-gray-100 p-1 rounded'>
              app/page.tsx
            </code>
          </p>
        </div>
      </main>
    </>
  );
}
