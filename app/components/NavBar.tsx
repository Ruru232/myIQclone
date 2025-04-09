'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="w-full bg-white/70 backdrop-blur-lg backdrop-saturate-150 border-b-1 shadow-sm fixed z-50">
      <div className="relative mx-auto max-w-7xl h-16 items-center gap-1 max-md:px-4 grid grid-cols-[1fr_auto] sm:grid-cols-2 max-[1328px]:px-6">
        <div className="w-fit">
          <Image
            src="/img/logo.svg"
            width={108}
            height={31}
            alt="myiq logo"
            priority
          />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden gap-3 lg:flex col-span-auto lg:flex-1 lg:justify-end">
          <button className="z-0 relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden px-4 min-w-20 border-2 rounded-lg bg-transparent hidden h-[42px] border-teal-700 lg:inline-flex text-teal-700 hover:text-white hover:bg-teal-700">
            Log In
          </button>
          <button className="z-0 relative items-center justify-center box-border border gap-3 px-4 min-w-20 shadow-lg shadow-default/50 bg-teal-700 text-white rounded-lg hover:opacity-80">
            Start Test
          </button>
        </div>

        {/* Burger Icon */}
        <div
          className="relative flex h-11 w-11 cursor-pointer items-center justify-end place-self-end self-center lg:hidden"
          onClick={toggleMenu}
        >
          {isMobile ? (
            // X icon (close)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Burger icon (menu)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div className="lg:hidden fixed z-[49] right-0 top-16 h-screen w-full md:w-1/2 overflow-y-auto border-l-2 bg-white px-6 pb-6">
          <div className="grid gap-2 pb-6 pt-3">
            <div className="block rounded-lg py-2 text-base leading-7 text-gray-500 hover:bg-gray-50">
              How It Works
            </div>
            <div className="block rounded-lg py-2 text-base leading-7 text-gray-500 hover:bg-gray-50">
              Growth Areas
            </div>
            <div className="block rounded-lg py-2 text-base leading-7 text-gray-500 hover:bg-gray-50">
              Interesting Facts
            </div>
            <div className="block rounded-lg py-2 text-base leading-7 text-gray-500 hover:bg-gray-50">
              Help & Support
            </div>
            <hr className="w-full h-px bg-gray-500/10 border-none" />
            <div className="mt-6 grid gap-4">
              <button className="h-[60px] w-full border-2 border-[#0D766E] text-[#0D766E] hover:bg-[#0D766E] hover:text-white rounded-sm text-lg">
                Log In
              </button>
              <button className="h-[60px] w-full border-2 bg-[#0d766e] text-white rounded-sm text-lg">
                Start Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
