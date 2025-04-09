import React from 'react';
import { ExploreData } from './_lib/data';

export default function Explore() {
  return (
    <div className="mx-auto w-full max-w-7xl pt-1 max-[1320px]:px-6 max-md:px-4">
      <div className="relative py-6 md:py-10">
        <div className="mx-auto w-full max-w-[740px]">
          <h3 className="order-4 text-center text-[28px] font-semibold text-[#2C3345] md:text-[39px]">
            Explore our plans
          </h3>
        </div>
        <p className="text-center text-base md:pt-0.5 md:text-[18px]">
          Discover our flexible offers and choose the one that best suits your
          learning and personal development journey.
        </p>
        <div className="flex items-center justify-center gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ExploreData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-md rounded-lg max-w-[362px] border border-gray-100 p-3 hover:scale-105 hover:shadow-lg"
              >
                <div className="p-3 z-10 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex flex-col items-start gap-2 pb-6">
                  <h2 className="text-xl font-medium">{data.title}</h2>
                </div>
                <hr className="w-full h-px bg-gray-500 border-none" />
                <div className='class="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased gap-8"'>
                  <p className="flex items-baseline gap-1 pt-2">
                    <span className="inline bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-foreground">
                      {data.price}
                    </span>
                    <span className="text-small font-medium text-gray-400">
                      {data.date}
                    </span>
                  </p>
                  <ul className="flex flex-col gap-2 pt-7">
                    {data.ul.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                          className="shrink-0 text-blue-600"
                          width="24"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p className="text-zinc-500">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large">
                  <button className="z-0 relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden transform-gpu outline-none px-4 min-w-20 rounded-sm shadow-lg shadow-zinc-500/50 h-[42px] w-full gap-3 bg-[#0D766E] text-white text-base">
                    Get started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-[15px] leading-5">
          *Visit our <span className="underline">pricing page</span> to find out
          more details.
        </p>
      </div>
    </div>
  );
}
