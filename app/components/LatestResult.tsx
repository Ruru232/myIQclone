'use client';
import { LatestResultsData } from './_lib/data';
import { useState, useEffect } from 'react';

export default function LatestResult() {
  const [visibleResults, setVisibleResults] = useState(LatestResultsData);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setIsMobileOrTablet(isMobile);
      setVisibleResults(
        isMobile ? LatestResultsData.slice(0, 4) : LatestResultsData
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFlagImageUrl = (flagCode: string) => {
    return `https://flagpedia.net/data/flags/h80/${flagCode.toLowerCase()}.png`;
  };

  return (
    <div className="mx-auto w-full max-w-7xl pt-1 max-[1320px]:px-6 max-md:px-4">
      <div className="mx-auto items-center pt-6 max-lg:pb-6 md:pt-[42px]">
        <h3 className="text-center text-[28px] font-semibold text-[#2C3345] md:text-[39px]">
          Latest results
        </h3>
        <div className="h-fit w-full overflow-hidden rounded-xl pt-4 md:pt-6 lg:h-fit">
          <div className="flex w-full flex-wrap gap-x-6 text-left">
            {visibleResults.map((data, index) => {
              const isBgLightBlue = isMobileOrTablet
                ? index === 1 || index === 3 // 2nd and 4th cards
                : [3, 4, 7, 8].includes(data.id);

              return (
                <div
                  key={index}
                  className={`basis-full rounded-[18px] px-6 py-[23px] lg:basis-[48.5%] lg:py-[28px] ${
                    isBgLightBlue ? 'bg-[#F6FBFF]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 px-3 sm:py-0 sm:pl-3">
                    <div className="mt-0 h-5 w-[30px] overflow-hidden rounded lg:h-8 lg:w-[45px]">
                      <img
                        src={getFlagImageUrl(data.flag)}
                        alt={`${data.flag} flag`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-base font-medium md:text-lg">
                      {data.name}
                    </p>
                    <div className="ml-auto rounded-small px-2 py-1 text-center text-base font-semibold text-[#006FEE] md:text-[20px]">
                      <p>{data.iq}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
