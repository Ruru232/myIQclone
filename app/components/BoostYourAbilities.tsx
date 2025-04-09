import React from 'react';
import { BoostYourAbilitiesData } from './_lib/data';

export default function BoostYourAbilities() {
  return (
    <div className="mx-auto w-full max-w-7xl max-[1320px]:px-6 max-md:px-4">
      <div className="py-6 md:py-10">
        <h3 className="order-4 text-center text-[28px] font-semibold text-[#2C3345] md:text-[39px]">
          Boost Your Abilities
        </h3>
        <p className="text-center text-base md:pt-0.5 md:text-[18px]">
          Unlock your potential with our comprehensive training package
        </p>
        <div className="flex gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8">
          {BoostYourAbilitiesData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-none rounded-lg w-full border-1 border-[#E2E8F0]"
            >
              <div className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto gap-3 p-4 antialiased md:py-6">
                <div className="h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]">
                    {data.id}
                  </div>
                </div>
                <p className="text-[18px] font-semibold text-[#2C3345]">
                  {data.title}
                </p>
                <ul className="flex flex-col gap-2 max-md:pt-0.5">
                  {data.ul.map((item, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                          className="h-3.5 w-4 min-w-4 text-[#007AFF]"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
