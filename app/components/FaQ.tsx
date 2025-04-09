'use client';
import { FaQData } from './_lib/data';
import { useState } from 'react';

export default function FaQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative z-0 py-6 md:py-4">
      <div className="mx-auto w-full max-w-7xl max-[1320px]:px-6 max-md:px-4">
        <div className="relative z-0 w-full py-6 md:py-10">
          <div className="relative mx-auto w-full gap-6 text-left lg:grid lg:grid-cols-[1fr_4fr] lg:gap-14">
            <h2 className="text-[28px] font-semibold leading-[33px] text-[#2B2D42] max-lg:text-center md:mb-8 md:text-[39px] md:leading-[49px] lg:max-w-[200px]">
              <span className="inline-block">Frequently Asked Questions</span>
            </h2>
            <div className="px-2 flex flex-col gap-2 w-full max-md:pt-4">
              {FaQData.map((data, index) => (
                <div
                  key={index}
                  className="px-4 shadow-medium rounded-medium md:px-5 !shadow-none bg-transparent border-b border-[#E5EBFA] !rounded-none text-left"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="relative flex w-full h-full gap-3 items-center outline-none transition-opacity py-[18px]"
                  >
                    <div className="flex-1 flex flex-col text-start">
                      <h2 className="text-medium font-medium text-[#2B2D42] md:text-lg">
                        {data.title}
                      </h2>
                      {openIndex === index && (
                        <div className="opacity-100 transition-all duration-300 ease-in-out">
                          <p className="mt-5 pb-[18px] text-[#444F69] max-md:text-sm">
                            {data.description}
                          </p>
                        </div>
                      )}
                    </div>
                    <span
                      aria-hidden="true"
                      className={`transition-transform text-lg text-[#2B2D42] absolute top-5 -right-7 ${
                        openIndex === index ? '-rotate-90' : 'rotate-0'
                      }`}
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        className="transform"
                      >
                        <path
                          d="M15.5 19l-7-7 7-7"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[-1] h-full w-full bg-[#F6FBFF]"></div>
    </div>
  );
}
